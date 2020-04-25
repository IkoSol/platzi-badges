import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal(props){
    if(!props.isOpen){
        return null
    }

    return(
        ReactDOM.createPortal(                         //Esto sirve para renderizar fuera de App (un nodo diferente que usa ReactDOM.render)
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button">X</button>
                    {props.children}
                </div>
            </div>,          //parecido a ReactDOM, está createPortal
            document.getElementById('modal')            //
        )
    )
}

export default Modal