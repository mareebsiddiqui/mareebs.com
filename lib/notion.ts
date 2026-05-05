import { cache } from "react";
import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  BlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

export type PostMeta = {
  id: string;
  title: string;
  slug: string;
  date: string;
  type: string;
  tags: string[];
  excerpt: string;
  coverUrl: string | null;
};

export type NotionBlock = BlockObjectResponse & {
  children?: NotionBlock[];
};

function extractPlainText(richText: RichTextItemResponse[]): string {
  return richText.map((t) => t.plain_text).join("");
}

function pageToPostMeta(page: PageObjectResponse): PostMeta {
  const props = page.properties;

  const title =
    props.Title?.type === "title"
      ? extractPlainText(props.Title.title)
      : "";

  const slug =
    props.Slug?.type === "rich_text"
      ? extractPlainText(props.Slug.rich_text)
      : "";

  const date =
    props.Date?.type === "date" ? (props.Date.date?.start ?? "") : "";

  const type =
    props.Type?.type === "select" ? (props.Type.select?.name ?? "") : "";

  const tags =
    props.Tags?.type === "multi_select"
      ? props.Tags.multi_select.map((t) => t.name)
      : [];

  const excerpt =
    props.Excerpt?.type === "rich_text"
      ? extractPlainText(props.Excerpt.rich_text)
      : "";

  const coverUrl =
    props.Cover?.type === "url" ? props.Cover.url : null;

  return { id: page.id, title, slug, date, type, tags, excerpt, coverUrl };
}

export async function getPosts(): Promise<PostMeta[]> {
  try {
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        property: "Status",
        select: { equals: "Published" },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    return response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map(pageToPostMeta);
  } catch (err) {
    console.error("Failed to fetch posts from Notion:", err);
    return [];
  }
}

export const getPostBySlug = cache(async (slug: string): Promise<PostMeta | null> => {
  const response = await notion.dataSources.query({
    data_source_id: databaseId,
    filter: {
      and: [
        { property: "Status", select: { equals: "Published" } },
        { property: "Slug", rich_text: { equals: slug } },
      ],
    },
    page_size: 1,
  });

  const page = response.results[0];
  if (!page || !("properties" in page)) return null;
  return pageToPostMeta(page as PageObjectResponse);
});

export async function getBlocks(blockId: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    const pageBlocks: NotionBlock[] = [];
    for (const block of response.results) {
      if (!("type" in block)) continue;
      pageBlocks.push(block as NotionBlock);
    }

    await Promise.all(
      pageBlocks.map(async (b) => {
        if (b.has_children) {
          b.children = await getBlocks(b.id);
        }
      })
    );

    blocks.push(...pageBlocks);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return blocks;
}
