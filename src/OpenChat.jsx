import './OpenChat.css';

function OpenChat({nameOfContact, open, setOpen}){

    function handleBackToList(){
        setOpen(false)
    }

    return (
        <div className="chatBox">
            <div className="header">
                <div onClick={handleBackToList} className='back'>&lt;-</div>
                <div className='contactName'>{nameOfContact.toUpperCase()}</div>
            </div>
            <div className="chatSection">
                
            </div>
            <div className="typeSection">
                <input className='type' placeholder='Type a message'/>
                <button className='sendButton'>SEND</button>
            </div>
        </div>
    );
}
export default OpenChat;