import React from 'react'
import {useDispatch, useSelector} from 'react-redux'


export default function DiemCuoc() {
    const tongDiem=useSelector(state=>state.BaiTapGameBauCuaReducer.tongDiem);
    const dispatch=useDispatch()
    return (
        <div >
            <h3 className='text-center display-4 pt-4' style={{color:'green'}}>GAME BẦU CUA TÔM CÁ</h3>
            <div className="text-center mt-5">
                <span style={{fontSize:'20px',borderRadius:"5%"}} className="p-3 text-white bg-danger">tiền thưởng: <span className="text-warning">{tongDiem.toLocaleString()}</span></span>
            </div>
            <div className="text-center mt-5">
                <button onClick={()=>{
                    dispatch({type:'CHOI_LAI'})
                }} style={{fontSize:'15px',borderRadius:"5%",border:'none'}} className="p-2 text-white bg-success">chơi lại</button>

            </div>
        </div>
    )
}
