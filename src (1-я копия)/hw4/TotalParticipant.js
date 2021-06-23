import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TotalParticipant = (props)=>{
    
    const { participants, winner, showWinner, Winner, ShowWinner } = props;

    const Show = ()=>{
        Winner();
        ShowWinner(true);
    }

    return(
    <div className='totalParticipant'>{
        !showWinner ? <>
            <p>Total Participant: {participants.length}</p>
            <button onClick={Show}>Show winner</button>
        </> : <>{
                (winner) ? <>
                <p>The Winner</p>
                <div className='participant'>
                    <p>ID: {winner.id}</p>
                    <p>Name: {winner.name}</p>
                    <p>Time: {winner.time}</p>
                </div>
                </> : <p>The Winner not found</p>
            }
        </>
    }
    </div>);
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

const StateToProps = state => state;

const DispatchToProps = dispatch =>{
    return{
        Winner: bindActionCreators(Winner, dispatch),
        ShowWinner: bindActionCreators(ShowWinner, dispatch),
    }
};

const WrapTotalParticipant = connect(StateToProps, DispatchToProps)(TotalParticipant);

export default WrapTotalParticipant;