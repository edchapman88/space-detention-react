
export const getImgsByPage = (pageTitle, linksDirectory) => {
    if (linksDirectory.has(pageTitle)) {
        return linksDirectory.get(pageTitle)
    } else {
        return []
    }
}

export const getImgByPageAndInclude = (pageTitle,include,linksDirectory) => {
    let chosenImg;
    getImgsByPage(pageTitle,linksDirectory).every( fileName => {
        if (fileName.includes(include)) {
            chosenImg = `${process.env.REACT_APP_S3_URL}/${pageTitle}/${fileName}`
            return false //break loop
        }
        return true
    })
    return chosenImg
}