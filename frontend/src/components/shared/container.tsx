export interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export default function Container(props: ContainerProps) {
    return (
        <div className={`max-w-7x1 mx-auto px-20 ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}