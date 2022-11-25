import { responseHandler } from "./utils.api"

export default async function getContentLinks() {

    //pass filtering params in query string
    let url = process.env.REACT_APP_BACKEND_URL + '/getContentLinks?'
    url += 'fields=items(title, webContentLink, parents(id), id, mimeType)'

    return await fetch(url,{
        method: 'GET'
    }).then( (res)=>responseHandler(res) )
    .then((data) => data.json())

}