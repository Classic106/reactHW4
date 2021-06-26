import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetWinner } from './winner/reducer';

const TotalParticipant = ()=>{

    const { winner, showWinner } = useSelector(store => store.winner);
    const dispatch = useDispatch();

    const HandelShow = ()=> dispatch(SetWinner());

    return(
    <div className='totalParticipant'>{
        !showWinner ? <>
            <button onClick={HandelShow}>Show winner</button>
        </> : <>{
                (winner) ? <>
                    <p>The Winner</p>
                    <div className='participant'>
                        <p>ID: {winner.id}</p>
                        <p>Name: {winner.name}</p>
                        <p>Time: {winner.time}</p>
                    </div>
                </> : <div>Winner not found</div>
            }
        </>
    }
    </div>);
}

export default TotalParticipant;