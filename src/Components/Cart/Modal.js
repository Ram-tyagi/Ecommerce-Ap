import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';



const ModalOverlays = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
       <Fragment>
           {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
       </Fragment>
    );
}

export default Modal;