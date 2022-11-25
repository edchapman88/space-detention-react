
export const getImgsByPage = (pageTitle, linksDirectory) => {
    for (let [key,value] of Object.entries(linksDirectory)) {
        if (value.title == pageTitle) {
            return value.images
        }
    }
    return []
}

export const getImgByPageAndInclude = (pageTitle,include,linksDirectory) => {
    let chosenImg;
    // console.log(getImgsByPage(pageTitle,linksDirectory))
    getImgsByPage(pageTitle,linksDirectory).every( img => {
        if (img.title.includes(include)) {
            chosenImg = img
            return false //break loop
        }
        return true
    })
    return chosenImg
}