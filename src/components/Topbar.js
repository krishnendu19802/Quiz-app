import React from 'react'

export default function Topbar(props) {
  return (
    <div className='bg-dark text-light d-flex justify-content-center align-items-center fs-3' style={{width:'100%',height:'50px'}}>
      score
      <input type="text" className='mx-3 my-2' value={props.score} style={{pointer:'none',height:'30px'}} readOnly/>
    </div>
  )
}

