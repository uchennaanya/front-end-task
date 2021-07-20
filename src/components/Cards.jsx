import React from 'react'


const Cards = ( { dataList } ) => {
    return (
        dataList.map(
            dataItems => (
                <div className="card col-md-2" key={dataItems.toString()} >
                    <span className="number">
                        {dataItems.number}
                        <span className="icon iconify" data-icon="ant-design:info-circle-outlined" data-inline="false"></span>
                    </span>
                    <span className="description" >{dataItems.desc}</span>
                </div>
            )
        )
    )
}

export default Cards