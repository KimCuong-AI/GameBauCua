import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {
    const dispatch=useDispatch();
    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac);

    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}>
                <div className='row'>
                    <div className='col-12 text-center' style={{ marginLeft: '75px' }}>
                        <XucXac xucXacItem={mangXucXac[0]} />
                    </div>
                </div>
                <div className='row' style={{ marginTop: -20 }}>
                    <div className='col-4 text-right' >
                        <XucXac xucXacItem={mangXucXac[1]} />
                    </div>
                    <div className='col-4 text-right'>
                        <XucXac xucXacItem={mangXucXac[2]} />
                    </div>
                </div>


            </div>
            <div style={{ marginLeft: '30%', marginTop: 10 }}>
                <button onClick={()=>{
                    dispatch({
                        type:'PLAY_GAME_BAU_CUA',
                    })
                }} className='btn btn-success display-4'>Xốc</button>
            </div>
        </div>
    )
}