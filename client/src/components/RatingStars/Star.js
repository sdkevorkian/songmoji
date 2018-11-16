import React from 'react';


const Star = (props) => {
    function click (){
        props.onClick(props.rank);
    }
    var active = props.isActive ? "active" : "";
    return (
        <span className={`fa fa-star ${active}`}
            onClick={click}></span>
    )
}

export default Star;