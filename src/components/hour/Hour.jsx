import React from 'react';

const Hour = ({ dataId, showForm }) => {
    return (
        <div className="item-time" dataId={dataId} onClick={showForm}></div>
    )
}
export default Hour