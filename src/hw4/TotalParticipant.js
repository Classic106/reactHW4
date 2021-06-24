import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TotalParticipant = ()=>{

    const participants = useSelector(store => store.participants.participants);
    const winner = useSelector(store => store.participants.winner);
    const showWinner = useSelector(store => store.showWinner.showWinner);
    const dispatch = useDispatch();

    const HandelShow = ()=>{
        dispatch(Winner());
        dispatch(ShowWinner(true));
    }

    const Winner = () =>{
        return {
            type: 'WINNER',
        }
    }
    
    const ShowWinner = () =>{
        return {
            type: 'SHOW_WINNER',
            payload: true,
        }
    }
    
    return(
    <div className='totalParticipant'>{
        !showWinner ? <>
            <p>Total Participant: {participants.length}</p>
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