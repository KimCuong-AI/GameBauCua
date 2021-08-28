import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { animated } from 'react-spring';


export default function QuanCuoc(props) {
    const dispatch=useDispatch();
    const { quanCuoc } = props;
    return (
        <div className='mt-3 '>

            <img src={quanCuoc.hinhAnh} style={{ width: 250 }} />
            <div className='bg-success text-center mt-2 pb-2' style={{ borderRadius: '10px', width: 250 }}>
                <animated.button onClick={()=>{
                    dispatch({
                        type:'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam:true,
                    })
                }} className="btn btn-danger mr-3"><i className='fa fa-plus'></i></animated.button>
                <span style={{ color: 'yellow', fontSize: 25 }} > {quanCuoc.diemCuoc}</span>
                <button onClick={()=>{
                    dispatch({
                        type:'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam:false,
                    })
                }} className="btn btn-danger ml-3"><i className='fas fa-minus'></i></button>
            </div>

        </div>
    )
}


