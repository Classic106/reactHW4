import { useDispatch } from "react-redux";

const Participant = ({ participant })=>{
    
    const dispatch = useDispatch();
    
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

    return(
    <div className='participant'>
        <p>ID: {participant.id}</p>
        <p>Name: {participant.name}</p>
        <p>Time: {participant.time}</p>
        <button onClick={()=>{
            dispatch(DeletePatricipant(participant.id));
            dispatch(Winner());
        }}>Delete</button>
    </div>);
}

export default Participant;

