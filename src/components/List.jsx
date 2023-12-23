export default function List({contentArr,deleteClicked}){
    return(
        <div className="list-container">
            <ul>
                {contentArr.map((obj,index)=>(
                    <li key={index}>
                        <span>{obj.name}</span> <span>{obj.quantity} kg</span> 
                        <button className="delete-btn" onClick={()=>deleteClicked(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}