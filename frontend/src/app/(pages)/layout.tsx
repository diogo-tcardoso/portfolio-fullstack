import ChatButton from "@/components/chat/chat-button"

export default function Layout (props: {children: React.ReactNode}) {
    return (
        <div>
            {props.children}
            <ChatButton />
        </div>
    )
}