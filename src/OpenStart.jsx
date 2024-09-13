import './OpenStart.css';
import { useState } from 'react';
import OpenChat from './OpenChat.jsx';
import AddNewPeople from './AddNewPeople.jsx';

function OpenStart ({back, setBack}) {
    const [contacts, setContacts] = useState(['sowmya','rafi','pavan','namitha','vasu','shreyas']);

    const [contactName, setContactName] = useState();

    function handleBack(){
        setBack(false);
    }

    const [chat, setChat] = useState(false);
    function handleParticularChat(value){
        setChat(true);
        setContactName(value);    
    }

    const [newPeople, setNewPeople] = useState(false);
    function handleAddButton(){
        setNewPeople(true);
        setChat(false);
    }
    
    return (
        <>
            <div className="contactBox">
                <div className="header">
                    <div onClick={handleBack} className='backButton'>&lt;</div>
                    <div className='name'>Mochaluuu</div>
                    <div onClick={handleAddButton} className='add'>+</div>
                </div>
                
                <div  className="contacts">
                    {contacts.map((value, index) =>
                            <div onClick={() => handleParticularChat(value)} className='contactName' key={index}>{value}</div>
                    )}
                </div>
            </div>
            
            { chat && <OpenChat nameOfContact = {contactName} open={chat} setOpen={setChat}/>}
            { newPeople && <AddNewPeople addedName={contacts} addedList = {setContacts}/>}

        </>
    );
}
export default OpenStart ;