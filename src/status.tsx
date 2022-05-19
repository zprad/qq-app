import React from 'react';

import './status.css'

interface StatusProps {
    value: string
}

function statusComp(props: StatusProps) {
    let child = null
    if (props.value === 'loading') {
        child = (
            <svg viewBox="25 25 50 50" className="circular">
                <circle cx="50" cy="50" r="20" fill="none" className="path"></circle>
            </svg>
        )
    } else if (props.value === 'error') {
        child = <span>查无此qq</span>
    }
    return (
        <div className="el-loading-mask">
            <div className="el-loading-spinner">
                {
                    child 
                }
            </div>
        </div>
    )
}

export default statusComp

