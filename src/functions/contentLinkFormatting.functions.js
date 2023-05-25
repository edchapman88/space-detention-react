
export const linksFormatter = (linksArray) => {

    let folders = new Map()
    linksArray.forEach(link => {
        let parts = link.split('/');
        if (folders.has(parts[0])) {
            folders.get(parts[0]).push(parts[1])
        } else {
            folders.set(parts[0],[parts[1]])
        }
    })

    return folders
}
