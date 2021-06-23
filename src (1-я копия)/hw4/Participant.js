import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Participant = (props)=>{
    const { participant, DeletePatricipant, Winner } = props;
    
    return(
    <div className='participant'>
        <p>ID: {participant.id}</p>
        <p>Name: {participant.name}</p>
        <p>Time: {participant.time}</p>
        <button onClick={()=>{
            DeletePatricipant(participant.id);
            Winner();
        }}>Delete</button>
    </div>);
}

const DeletePatricipant = (id)=>{
    return {
        type: "REMOVE_PARTICIPANT",
        payload: id,
    }
}

const Winner = () =>{
    return {
        type: 'WINNER',
    }
}

const StateToProps = state => state;

const DispathToProps = (dispatch)=>{
    return{
        DeletePatricipant: bindActionCreators(DeletePatricipant, dispatch),
        Winner: bindActionCreators(Winner, dispatch),
    }
};
  
const WrapParticipant = connect(StateToProps, DispathToProps)(Participant);
  
export default WrapParticipant;
