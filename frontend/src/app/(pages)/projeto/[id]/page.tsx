import Header from "@/components/shared/header"

export default async function ProjectPage(props: {params: Promise<{id: string}>}){
    const { id } = await props.params;
    return(
        <div className="bg-black">
            <Header />
            <div>
                Projeto {id}
            </div>
        </div>
    )
}