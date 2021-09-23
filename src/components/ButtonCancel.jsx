import React from 'react'


const ButtonCancel = ({ value, type, myStyle }) => {

    const className = `button btn-${myStyle}`

    return (
        <button type={type} className={className} data-bs-toggle="modal" data-bs-dismiss="modal">
            {value}
        </button>
    )
}

export default ButtonCancel