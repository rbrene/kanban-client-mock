import React, { useRef } from 'react';
import { ModalWrapper } from '../../styled/index';
import { createPortal } from 'react-dom';


const rootPortal = document.getElementById('portal');


const Modal = (props) => {
    const ref = useRef(null);
    const status = props.status;
    const children = props.children;

    if (status === true) {
        return createPortal(<ModalWrapper ref={ref} children={children}/>, rootPortal);
    }
    else {
        return null;
    }
}

export default Modal;