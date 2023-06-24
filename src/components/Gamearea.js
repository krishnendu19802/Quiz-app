import React, { useState } from 'react'
import Optionbutton from './Optionbutton'


export default function Gamearea(props) {
    let quesans = [
        {
            ques: 'What is the capital of India?',
            options: ['Kolkata', 'New Delhi', 'Mumbai', 'Chennai'],
            rightopt: 'New Delhi',
            ind: 0
        },
        {
            ques: 'What is the national animal of India?',
            options: ['Tiger', 'Cow', 'Deer', 'Cat'],
            rightopt: 'Tiger',
            ind: 1
        }
    ]
    let i = 0
    const [ans, setans] = useState('')
    const [curques, nextques] = useState(quesans[0])
    const [gameend, setgameend] = useState(false)

    const check = (val) => {
        setans(curques.rightopt)
        if (val === curques.rightopt)
            props.updatescore(false)
        setTimeout(() => {
            i = curques.ind + 1
            if (i < quesans.length)
                nextques(quesans[i])
            else
                setgameend(true)
            setans('')
        }, 2000);
    }
    const newgame=()=>{
        console.log('new game')
        setans('')
        nextques(quesans[0])
        setgameend(false)
        props.updatescore(true)

    }

    return (
        <>
            {!gameend && <div className='my-2 bg-dark text-light text-center' style={{ height: '300px', width: '50%' }}>
                {curques.ques}
                <div className="answers row d-flex align-items-end" style={{ height: '50%' }}>
                    {curques.options.map((option) => (
                        <Optionbutton value={option} key={option} check={check} ans={ans} />

                    ))}
                    {/* <Optionbutton value={curques.options[1]}/>
        <Optionbutton value={curques.options[1]}/> */}

                </div>
            </div>}
            {
                gameend &&
                <div className='my-2 bg-dark text-light text-center py-5 fs-2' style={{ height: '300px', width: '50%' }}>
                    Game ended <br />
                    Your score : {" " + props.score}
                   <div>
                    <button className="btn bg-success my-5 text-light btn-lg fw-bold" onClick={newgame}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                    </button>
                    </div>
                </div>
            }

        </>
    )
}
