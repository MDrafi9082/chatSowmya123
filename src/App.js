import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Find from './Find';
import { useState } from 'react';
import OpenStart from './OpenStart.jsx';
import chad from './chad.png';
import iceCream from './iceCream.png';
import excited from './excited.jpg';
import aaaaa from './EAT.jpg';
import shy from './shy.png';

function App (){
    const [start, setStart] = useState(false);
    function handleClickHere(){
        setStart(true);
    }

    //sowmya
    const [wtever, setWtever] = useState(false);
    function handleWhatever(){
        setWtever(!wtever);
    } 

    const [click, setClick] = useState(false);
    function handleClick(){
        document.querySelector('.clickMe').innerHTML = 'ouch!!😢';
        setClick(true);
    }

    const [sorry, setSorry] = useState(false);
    function handleSorry(){
        document.querySelector('.sorry').innerHTML = "just kidding bangarthali💕😊👍";
        document.querySelector('.dialogue').innerHTML = '';
        setSorry(true);
    }   

    const [entry, setEntry] = useState(false);
    function handleIce(){
        setEntry(true);
    }
    
    const[eat, setEat] = useState(false);
    function handleEat(){
        setEat(true);
    }

    const [yes, setYes] = useState(false);
    function handleYes(){
        setYes(true);
    }

    function handleNo(){
        document.querySelector('.no').innerHTML = 'Its YES "no" was never a option😶';
        setYes(false);
        setYes(true);
    }

    return(
        <>
            {
                start ? <OpenStart back={start} setBack={setStart}/> : 
                    <>
                        <h1>I THINK I GOT A GRASP OF IT</h1>
                        <p >Im sure abt it lets chect it out together u ready ??</p>
                        <a className='click' onClick={handleClickHere}href='#'>click here</a>

                        <div onClick={handleWhatever} className='whatEver'></div>
                        
                        { wtever ? <button onClick={handleClick} className='clickMe'>click me😊</button> : <></> }
                        
                        {click && <>
                            <div className='form'>
                                <p className='dialogue'>now ask sorry-&gt; u clicked him hard hes sad now😢</p>
                                <button onClick={handleSorry} className='sorry'>sorry, my fault</button>
                            </div>
                        </>}

                        {sorry && <>
                            <div className='chadIce'> 
                                <img className='chad' src={chad}/>
                                <p className='desc'>THANK YOU MOCHALUU for teaching me REACT💀 in less than a week for sure wouldn't be possible without you take this ice cream its for you enjoyyyyyy click to claim it</p>
                                <img onClick={handleIce} className='ice' src={iceCream}/>
                            </div>
                            
                        </>}

                        { entry && <>
                            <div className='excit'>
                                <img className='excited' src={excited}/>
                                <p className='enjoy'>oh i see u r excited to eat it all by urself is it looking tasty ?? its all yours click n say  ahhhh</p>
                            </div>
                            <button className='ah' onClick={handleEat}>ahhhhhh</button>
                        </>}

                        { eat && <>
                            <img className='eat' src={aaaaa}/>
                            <div className='final'> 
                                <p>happy??</p>
                                <button onClick={handleYes}>YES</button>
                                <button onClick={handleNo} className='no'>NO</button>
                            </div>
                        </>}

                        { yes && <>
                            <div className='shyBox'>
                                <p className='bye'>haaa OK then go gudha fellow</p> 
                                <img className='shy' src={shy}/>                            
                            </div>
                        </>}
                    </>
            }

        </>
    );
    // const [press, setPress] = useState(false);
    // const search = () => {
    //     setPress(!press);        
    // }
    // const buttonStyle = {
    //     borderRadius: '3px',
    //     border:'1px solid gray',
    //     backgroundColor:'white',
    //     marginTop:'6px',
    //     marginLeft:'111px',
    //     fontWeight:'bold',
    //     fontSize:'15px',
    //     padding:'3px',
    //     fontFamily:'roboto',
    // }

    // return (
    //     <>
    //         <button style={buttonStyle} onClick={search}>SEARCH FOR FRIENDS</button>
    //         { press && <Find />}
    //         {/* <Card /> */}
    //     </>
    // );
}
export default App;
