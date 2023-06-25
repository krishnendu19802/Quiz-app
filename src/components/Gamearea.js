import React, { useEffect, useState } from 'react'
import Optionbutton from './Optionbutton'


export default function Gamearea(props) {

    let [queslist, updqueslist] = useState()
    let res

    const apiuse = async () => {
        if (queslist === undefined) {
            let url = 'https://opentdb.com/api.php?amount=10&type=multiple';
            let data = await fetch(url);
            let parsed = await data.json();
            updqueslist(parsed.results)
        }


    }
    let i
    const [quesno, updno] = useState(0)
    const [curques, nextques] = useState({ question: false })
    const [gameend, setgameend] = useState()
    const [ans, setans] = useState('')
    useEffect(() => { apiuse() }, [gameend])
    useEffect(() => {
        let options;
        if (queslist !== undefined) {
            let obj = queslist[quesno]
            let arr = obj.incorrect_answers
            obj.options = arr.splice((Math.floor(Math.random() * 4)), 0, obj.correct_answer)
            obj.options = obj.incorrect_answers;
            // delete obj.incorrect_answers
            console.log(obj)
            nextques(obj)
        }
    }, [queslist])

    const check = (val) => {
        setans(curques.correct_answer)
        // props.updtimer(0)
        // props.settimer([0,true]) 
        console.log(ans)
        if (val === curques.correct_answer)
           {
               props.updatescore(false)
               
           }
        setTimeout(() => {
            i = quesno + 1
            updno(i)
            if (i < queslist.length) {
                let obj = queslist[i]
                let arr = obj.incorrect_answers
                obj.options = arr.splice((Math.floor(Math.random() * 4)), 0, obj.correct_answer)
                obj.options = obj.incorrect_answers;
                delete obj.incorrect_answers
                console.log(obj)
                nextques(obj)
            }
            // queslist.length
            else {
                updno(0)
                setgameend(true)
                // apiuse()
            }
            setans('')
        }, 500);
    }
    const newgame = () => {
        // console.log('new game')
        setans('')
        // nextques(quesans[0])
        setgameend(false)
        props.updatescore(true)

    }

    return (
        <>
            {/* <React.StrictMode> */}
            {!gameend && curques.question && <div className='my-2 bg-dark text-light text-center' style={{ height: '300px', width: '50%' }}>
                {curques.question.split("&").join(" & ")}
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
                                <path fillRrule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                        </button>
                    </div>
                </div>
            }
            {/* </React.StrictMode> */}
        </>
    )
}
