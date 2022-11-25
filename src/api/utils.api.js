
// callback to be passed to fetch.then()
export async function responseHandler(res,requestUrl) {
    if (res && res.status !== 200){
        console.warn( await res.json() )
        throw new Error(`[${res.status}] ${requestUrl}`)
    }
    return res
}