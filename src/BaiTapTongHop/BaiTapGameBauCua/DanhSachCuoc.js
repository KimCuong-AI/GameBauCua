import React, { useState } from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux'


export default function DanhSachCuoc(props) {
    const danhSachCuoc = useSelector(state => state.BaiTapGameBauCuaReducer.danhSachCuoc);
    console.log(danhSachCuoc)
    const renderDanhSachCuoc = () => {
        return <div className='row'>
            {danhSachCuoc.map((item, index) => {
                return <div className='col-6 col-sm-4' key={index}>
                    <QuanCuoc quanCuoc={item} />
                </div>
            })}
        </div>

    }
    return (
        <div className='row mt-5'>
            {/* {renderDanhSachCuoc()} */}
            {
               danhSachCuoc.map((item,index)=>{
                return <div className='col-4' key={index}>
                    <QuanCuoc quanCuoc={item}/>
                </div>
            })
           }
        </div>
    )
}
