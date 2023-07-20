function TimelineClip(properties) {
    
    const width = properties.width ? Math.floor(properties.width / 4) : 8
    const imgAlt = properties.name ? properties.name + "'s Image" : null


    return (
        <div style={{width : width + "rem"}} className="h-full bg-blue-600 border border-2 border-blue-400 rounded-lg" >
            {properties.src ? <img src={properties.src} alt={imgAlt} /> : null}
            <p>{properties.name}</p>
        </div>
    );
}

export default TimelineClip;