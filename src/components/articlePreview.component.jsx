import '../styles/articlePreview.style.css'

const ArticlePreview = props => {

    return (
        <div className="articlePreview">
            <img src={props.imageLink}/>
            <div className="articlePreviewCaption">
                <p className="bold">{props.date} - {props.title}</p>
                <p>{props.blurb}</p>
            </div>
        </div>
    )
}

export default ArticlePreview