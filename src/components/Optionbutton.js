import React from 'react'

export default function Optionbutton(props) {
    const chckcol=()=>{
        if(props.ans.length===0)
        return 'primary'
        else
        {
            if(props.ans===props.value)
            return 'success'
            else
            return 'danger'
        }
    }
  return (
    <div className='col-6 d-flex justify-content-center align-items-center my-2' >
      <button className={`btn btn-${chckcol()} `} style={{width:'50%'}} onClick={()=>{props.check(props.value)}}>{props.value}</button>
    </div>
  )
}
