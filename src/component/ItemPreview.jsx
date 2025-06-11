import React, { useState } from 'react'

function ItemPreview(Img) {

    const [img, setImg] = useState(Img);

    return (
        <div className="w-full h-full">
            <image src={img} ></image>
        </div>
    )
}

export default ItemPreview;