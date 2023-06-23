import React from 'react'

function Spin() {
    return (
        <div className=' container mx-auto text-center' style={{ marginTop : '15rem'}}>
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spin
