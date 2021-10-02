import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux'
export default function DanhSachCuoc(props) {
    const danhSachCuoc = useSelector(state => state.BaiTapGameBauCuaReducer.danhSachCuoc);
    console.log(danhSachCuoc)
    return (
        <div className='row mt-5'>
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
 