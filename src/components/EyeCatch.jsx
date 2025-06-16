import React from "react";

const EyeCatch = ({ background, border, containerStyle=`w-1/2 min-w-64 mx-auto text-white p-8 rounded-lg shadow-xl`, textBoxStyle, title, titleStyle, titleAnimation, subtitle, subtitleStyle, subtitleAnimation, content, contentAnimation, contentStyle, buttonText, buttonAnimation, buttonStyle }) => {
  return (
    <div className={`flex flex-row flex-wrap ${containerStyle} ${background} ${border} justify-center `}>
      <div className={textBoxStyle}>
        {title ? <h2 className={`${titleStyle ? titleStyle : 'font-bold text-2xl mb-2'} ${titleAnimation}`}>{title}</h2> : ''}
        {subtitle ? <h3 className={`${subtitleStyle ? subtitleStyle : 'font-medium text-xl mb-2'} ${subtitleAnimation}`}>{subtitle}</h3> : ''}
        {content ? <div className={`${contentStyle ? contentStyle : "text-md "} ${contentAnimation}`}>
          {Array.isArray(content) ? content.map((entry)=> {
           return (<p className='pb-4' key={`${title}${Math.random()}`}>{entry}</p>)
          }) : content}
          </div> : ''}
      </div>
      {buttonText ?
        <button className={`${buttonStyle ? buttonStyle : `mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-blue-200 transition-all`} ${buttonAnimation}`}>
          {buttonText}
        </button>
        : ''}
    </div>
  );
};

export default EyeCatch;
