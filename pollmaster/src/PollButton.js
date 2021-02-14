import React from 'react';

const PollButton = (props) => {
    const buttonStyles = {
        backgroundColor: props.color,
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px'
    }
    return (
        <button style = {buttonStyles} onClick={props.func}>{props.name}</button>
    )
}



export default PollButton;