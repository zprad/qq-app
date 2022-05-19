import React, { useState } from 'react';
import queryQQ from './fetch'
import { isValid } from './utils'
import Status from './status'

function Input() {
    const [id, setId] = useState('')
    const [status, setStatus] = useState('idle')
    const [userInfo, setUserInfo] = useState({
        name: '',
        qlogo: '',
        qq: '',
    })
    const handleQuery = () => {
        if (status === 'loading') {
            return 
        }
        // 检验qq号
        if (!isValid(id)) {
            return
        }
        setUserInfo({
            name: '',
            qlogo: '',
            qq: '',
        })
        setStatus('loading')
        queryQQ(id, (data: any) => {
            if (data) {
                setStatus('idle')
                setUserInfo(data)
            } else {
                setStatus('error')
            }
            
        })
    }
    let userPart = (
        <div className='info-wrapper'>
            <img src={userInfo.qlogo} alt="avatar" />
            <div>{ userInfo.name }</div>
            <div>{ userInfo.qq }</div>
        </div>
    )
    let loading = <Status value={status} />
    return (
        <header className="App-header">
            <input value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleQuery}>查询</button>
            <div className='content-box'>
                {
                    userInfo.name && status === 'idle' ? userPart : loading
                }
            </div>
        </header>
    )
}

export default Input