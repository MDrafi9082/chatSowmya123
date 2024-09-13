import './AddNewPeople.css';
import { useState } from 'react';

function AddNewPeople({addedName, addedList}){
    const [name, setName] = useState(['sowmya','rafi','pavan','namitha','vasu','shreyas'])
    // let name = ['sowmya','rafi','pavan','namitha','vasu','shreyas'];

    function handleRemoveFromAdd(index){
        setName(prevName => prevName.filter((_,i) => i !== index));
        addedList(prevList => [...prevList ,name[index]]);
        // name = name.filter((_,i) => i !== index);
    }

    return (<>
            <div className='addBox'>
                {name.map((value,index) =>
                    <p onClick={() => handleRemoveFromAdd(index)} className="people" key={index}>{value}</p>)}    
            </div>
            {name.length === 0 && <><p className='empty'>yooo why do u want to chat with everyone😒 srsly?? </p></>}

        </>
    );
}
export default AddNewPeople;