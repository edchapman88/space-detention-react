
const CoverImage = props => {
    const containerStyle = {

    }

    const imgStyle = {
        width : '100%'
    }

    const headerStyle = {
        color: 'white',
        fontSize: '3vw',
    }

    const textContainerStyle = {
        position:'absolute',
        backgroundColor: 'transparent',
        width: '55%',
        top: '10%',
        left: '5%',
    }

    return(
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                { props.text && props.text.map( line => {
                return <h1 key={line} style={headerStyle}>{line}</h1>
            })}
            </div>
            
            <img style={imgStyle} src={props.imgUrl}/>
        </div>
    )
}

export default CoverImage