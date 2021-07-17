import React from 'react'


const Cards = ( { dataList, index } ) => {
    return (
        dataList.map(
            dataItems => (
                <div className="card" key={dataItems.toString()} >
                    <span className="number">
                        {dataItems.number}
                    </span>
                    <span className="icon iconify" data-icon="ant-design:info-circle-outlined" data-inline="false"></span>
                    <span className="description" >{dataItems.desc}</span>
                </div>
            )
        )
    )
}

export default Cards