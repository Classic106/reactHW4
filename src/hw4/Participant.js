import { useDispatch } from "react-redux";

const Participant = ({ participant })=>{
    
    const dispatch = useDispatch();
    
    const DeletePatricipant = (id)=>{
        return {
            type: "REMOVE_PARTICIPANT",
            payload: id,
        }
    }

    return(
    <div className='participant'>
        <p>ID: {participant.id}</p>
        <p>Name: {participant.name}</p>
        <p>Time: {participant.time}</p>
        <button onClick={()=>{
            dispatch(DeletePatricipant(participant.id));
        }}>Delete</button>
    </div>);
}

export default Participant;

