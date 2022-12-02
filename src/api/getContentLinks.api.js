import { responseHandler } from "./utils.api"

async function getContentLinks(pageToken) {

    //pass filtering params in query string
    let url = process.env.REACT_APP_BACKEND_URL + '/getContentLinks?'
    url += 'fields=nextPageToken,items(title, webContentLink, parents(id), id, mimeType)'

    if (pageToken) {
        url += `&pageToken=${pageToken}`
    }

    return await fetch(url,{
        method: 'GET'
    }).then( (res)=>responseHandler(res) )
    .then((data) => data.json())

}

export default async function getAllContentLinks(pageToken) {
    let data = await getContentLinks(pageToken)

    let items = data.items
    if (data.nextPageToken) {
        items.push( ...await getAllContentLinks(data.nextPageToken))
    }
    return items
}

