const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
    const response = await fetch(normalizeUrl(`${baseUrl}/${url}`))
    return response.json()
}

function normalizeUrl (url: string) {
    const protocol = url.split('://')[0]
    const host = url.split('://')[1]
    return `${protocol}://${host.replaceAll(/\/{2,}/g, "/")}`

}