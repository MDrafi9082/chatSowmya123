import './Find.css'
import { useState } from 'react'
import Chat from './chat'

function Find(){
    const friends = ['sowmya','rafi','pavan','vasu','shreyas','namitha','sowmya','rafi','pavan','vasu','shreyas','namitha','sowmya','rafi','pavan','vasu','shreyas','namitha'];

    const [chat, setChat] = useState(false);
    

    return(
        <>
            <div className="list">
                    {friends.map((value, index) => <p className='name' key={index}>{value.toUpperCase()}</p>)}
            </div>
        </>
        
    );
}

export default Find ;