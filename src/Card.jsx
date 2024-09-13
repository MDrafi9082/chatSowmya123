import profileImg from './travis.jpg';
import './Card.css';


function card(){
    return(
        <>
            <div className='card'>
                <img src={profileImg} className='image'/>
                <h1 className='name'>TRAVIS SCOTT</h1>
                <p className='desc'>One who can make us LEVITATE through his music</p>
            </div>
        </>
    );
}
export default card