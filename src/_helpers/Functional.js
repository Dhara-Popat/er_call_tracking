import React from "react";
import Toastify from "toastify-js";

export const handleToaster = (message = '', type = 'default') => {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        gravity: 'bottom',
        position: 'center',
        stopOnFocus: true,
        style: {
            background: type === 'danger' ? "linear-gradient(to right, #f85032, #e73827)" : "",
            marginBottom: "20px"
        }
    }).showToast();
}