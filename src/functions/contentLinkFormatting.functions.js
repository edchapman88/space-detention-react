
export const linksFormatter = (linksArray) => {
  
    let rootId;
    // search for rootId (exit search once found)
    linksArray.every(link => {  //itr continues whilst truthy val returned
        if (link.title == 'spaceDetentionImgs') {
            rootId = link.id
            return false
        }
        return true
    })

    // separate images and folders
    let images = []
    let foldersArray = linksArray.filter((link) => {
        if (link.id == rootId) { return false }
        if (link.mimeType == "application/vnd.google-apps.folder") {
            return true
        } else {
            images.push(link)
        }
    })

    // create folders object with folder IDs as keys
    let folders = {}
    foldersArray.forEach((folder) => {
        const { id, ...folderRest} = folder
        folders[id] = {
            ...folderRest,
            images : []
        }
    })

    images.forEach( image => {
        folders[image.parents[0].id].images.push({
            link: urlFormatter(image.webContentLink),
            id: image.id,
            title: image.title
        })
    })

    return folders
}

export const urlFormatter = (url) => {
    if (url.includes('&export=download')) {
        url = url.split('&export=download').join('')
    }
    return url
}