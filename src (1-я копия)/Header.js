export default function Header(props){

    return (
        <div className="header">
            <form onSubmit={e => e.preventDefault()}>
                <span>Search by name: </span>
                <input type='text' placeholder='Enter name...' value={props.data[0]} onChange={e=>{
                            props.data[0] = e.target.value;
                            props.updateData([...props.data]);
                        }
                }/>
                <span>Sort by age: </span>
                <select value={props.data[1]} onChange={e=>{
                    props.data[1] = e.target.value;
                    props.updateData([...props.data]);
                }}>
                    <option value='0'>default</option>
                    <option value='asc'>ascent</option>
                    <option value='desc'>descent</option>
                </select>
                <button onClick={()=>{
                    props.updateData(['', '0']);
                }}>Reset All</button>
            </form>
        </div>
    )
}