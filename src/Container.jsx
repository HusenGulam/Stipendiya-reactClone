import React from 'react'


function Container(props){
    return(
        <div style={{width:'1400px',margin:'auto'}}>
       {props.children}
        </div>
    )
}

export default Container;