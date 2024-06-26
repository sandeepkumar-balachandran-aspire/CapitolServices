import { CToast, CToastBody, CToastHeader, CToaster, CButton } from '@coreui/react';
import React, { useState, useRef } from 'react';

function ToastExample() {
    const [toast, setToast] = useState(0);
    const toaster = useRef();

    const exampleToast = (
        <CToast>
            <CToastHeader closeButton>
                <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                </svg>
                <div className="fw-bold me-auto">CoreUI for React.js</div>
                <small>7 min ago</small>
            </CToastHeader>
            <CToastBody>Hello, world! This is a toast message.</CToastBody>
        </CToast>
    );

    return (
        <>
            <CButton color="primary" onClick={() => setToast(exampleToast)}>Send a toast</CButton>
            <CToaster className="p-3" placement="top-end" ref={toaster} push={toast} />
        </>
    );
}

export default ToastExample;
