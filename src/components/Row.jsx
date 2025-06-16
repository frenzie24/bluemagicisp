import React from "react";

const flexRow = `flex flex-row flex-wrap`;
/*
    returns a styled row that contains a passed content element

     
            
        </div>
*/
const Row = ({ horizontalAlign = 'justify-center', verticalAlign = 'items-center', contentHorizontalAlign = 'justify-center', contentVerticalAlign = 'items-center',
    width = 'w-full', height = 'h-full', containerPadding = 'p-0', padding = 'p-0',
    bgColor = 'bg-transparent', bgSize = 'auto', content = <></> }) => {
    return (
        <div className={`${containerPadding} w-full flex flex-row flex-wrap ${horizontalAlign} ${verticalAlign}`}>
            <div className={`${padding} ${flexRow} ${horizontalAlign} ${verticalAlign} ${width} ${height} ${bgColor} ${bgSize}`}>
                {content}
            </div>
        </div>


    );
}




export default Row;