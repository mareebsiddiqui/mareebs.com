import Image from "next/image";
import type { NotionBlock } from "@/lib/notion";
import type {
  RichTextItemResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

/* ── Rich Text ── */

function renderRichText(richTexts: RichTextItemResponse[]) {
  return richTexts.map((text, i) => {
    const { annotations, plain_text, href } = text;
    let node: React.ReactNode = plain_text;

    if (annotations.code)
      node = <code key={i}>{node}</code>;
    if (annotations.bold)
      node = <strong key={i}>{node}</strong>;
    if (annotations.italic)
      node = <em key={i}>{node}</em>;
    if (annotations.strikethrough)
      node = <s key={i}>{node}</s>;
    if (annotations.underline)
      node = <u key={i}>{node}</u>;
    if (href)
      node = (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">
          {node}
        </a>
      );
    if (
      annotations.color !== "default" &&
      !annotations.code &&
      !href
    ) {
      node = (
        <span key={i} className={`notion-color-${annotations.color}`}>
          {node}
        </span>
      );
    }

    // If no wrapping element was added, use a fragment with key
    if (typeof node === "string") return <span key={i}>{node}</span>;
    return node;
  });
}

/* ── Helpers ── */

type RichTextBlock = Extract<
  BlockObjectResponse,
  { type: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "quote" | "bulleted_list_item" | "numbered_list_item" | "to_do" | "callout" | "toggle" }
>;

function getRichText(block: BlockObjectResponse): RichTextItemResponse[] {
  const b = block as any;
  const data = b[b.type];
  return data?.rich_text ?? [];
}

/* ── Group consecutive list items ── */

type GroupedItem =
  | { type: "block"; block: NotionBlock }
  | { type: "bulleted_list"; items: NotionBlock[] }
  | { type: "numbered_list"; items: NotionBlock[] };

function groupBlocks(blocks: NotionBlock[]): GroupedItem[] {
  const groups: GroupedItem[] = [];

  for (const block of blocks) {
    if (block.type === "bulleted_list_item") {
      const last = groups[groups.length - 1];
      if (last?.type === "bulleted_list") {
        last.items.push(block);
      } else {
        groups.push({ type: "bulleted_list", items: [block] });
      }
    } else if (block.type === "numbered_list_item") {
      const last = groups[groups.length - 1];
      if (last?.type === "numbered_list") {
        last.items.push(block);
      } else {
        groups.push({ type: "numbered_list", items: [block] });
      }
    } else {
      groups.push({ type: "block", block });
    }
  }

  return groups;
}

/* ── Block Renderer ── */

function renderBlock(block: NotionBlock): React.ReactNode {
  const richText = getRichText(block);
  const key = block.id;

  switch (block.type) {
    case "paragraph":
      if (richText.length === 0) return <br key={key} />;
      return <p key={key}>{renderRichText(richText)}</p>;

    case "heading_1":
      return <h2 key={key}>{renderRichText(richText)}</h2>;

    case "heading_2":
      return <h3 key={key}>{renderRichText(richText)}</h3>;

    case "heading_3":
      return <h4 key={key}>{renderRichText(richText)}</h4>;

    case "quote":
      return <blockquote key={key}>{renderRichText(richText)}</blockquote>;

    case "callout": {
      const data = (block as any).callout;
      const emoji = data?.icon?.type === "emoji" ? data.icon.emoji : "";
      return (
        <aside key={key} className="callout">
          {emoji && <span className="callout__icon">{emoji}</span>}
          <div className="callout__text">{renderRichText(richText)}</div>
        </aside>
      );
    }

    case "code": {
      const data = (block as any).code;
      const lang = data?.language ?? "";
      const code = data?.rich_text
        ?.map((t: RichTextItemResponse) => t.plain_text)
        .join("") ?? "";
      return (
        <pre key={key}>
          <code className={lang ? `language-${lang}` : ""}>{code}</code>
        </pre>
      );
    }

    case "image": {
      const data = (block as any).image;
      const url =
        data?.type === "external" ? data.external?.url : data?.file?.url;
      const caption = data?.caption
        ?.map((t: RichTextItemResponse) => t.plain_text)
        .join("") ?? "";
      if (!url) return null;
      return (
        <figure key={key}>
          <Image
            src={url}
            alt={caption || "Blog image"}
            width={720}
            height={400}
            className="post__image"
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    }

    case "divider":
      return <hr key={key} />;

    case "bookmark": {
      const data = (block as any).bookmark;
      const url = data?.url ?? "";
      return (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bookmark-card"
        >
          {url}
        </a>
      );
    }

    case "toggle": {
      return (
        <details key={key}>
          <summary>{renderRichText(richText)}</summary>
          {block.children && <NotionBlockRenderer blocks={block.children} />}
        </details>
      );
    }

    case "video": {
      const data = (block as any).video;
      const url =
        data?.type === "external" ? data.external?.url : data?.file?.url;
      if (!url) return null;
      // YouTube/Vimeo embed
      const embedUrl = url
        .replace("youtube.com/watch?v=", "youtube.com/embed/")
        .replace("youtu.be/", "youtube.com/embed/")
        .replace("vimeo.com/", "player.vimeo.com/video/");
      return (
        <div key={key} className="post__video">
          <iframe
            src={embedUrl}
            allowFullScreen
            loading="lazy"
          />
        </div>
      );
    }

    case "to_do": {
      const data = (block as any).to_do;
      const checked = data?.checked ?? false;
      return (
        <li key={key} className="post__todo">
          <input type="checkbox" checked={checked} readOnly />
          {renderRichText(richText)}
        </li>
      );
    }

    default:
      return null;
  }
}

function renderListItem(block: NotionBlock): React.ReactNode {
  const richText = getRichText(block);
  return (
    <li key={block.id}>
      {renderRichText(richText)}
      {block.children && <NotionBlockRenderer blocks={block.children} />}
    </li>
  );
}

/* ── Main Component ── */

export default function NotionBlockRenderer({
  blocks,
}: {
  blocks: NotionBlock[];
}) {
  const grouped = groupBlocks(blocks);

  return (
    <>
      {grouped.map((group, i) => {
        if (group.type === "bulleted_list") {
          return (
            <ul key={`ul-${i}`}>
              {group.items.map(renderListItem)}
            </ul>
          );
        }
        if (group.type === "numbered_list") {
          return (
            <ol key={`ol-${i}`}>
              {group.items.map(renderListItem)}
            </ol>
          );
        }
        return renderBlock(group.block);
      })}
    </>
  );
}
