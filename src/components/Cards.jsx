import React from 'react'

const Cards = ({number, description, icon}) => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <span className="number">{number}</span> <i className="icon fa fa-info">i</i>
                <span className="description">{description}</span>
            </div>
        </div>
    )
}

export default Cards