import React from 'react'

const Geeti = ({ top, left}) => {
    


    console.log("left: " ,left,"and top", top)
   
    
    return <div className="geeti red" style={{"z-index":"2", "position": "absolute",  "top": `${ top }%`,color:'#fff176' ,textAlign:"center","left":`${left}px`}} ><h1 >$$</h1></div>

            

    
};

export default Geeti
