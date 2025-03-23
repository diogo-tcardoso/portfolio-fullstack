import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export interface MdContentProps {
    markdown: string;
}

export default function MdContent(props: MdContentProps) {
    return (
        <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} skipHtml={false}>
            {props.markdown}
        </Markdown>
    );
}