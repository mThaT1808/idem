import './InstaBlock.css';
import MyButton from '../UI/MyButton/MyButton';
import { useState } from 'react';
import GetInitInsta from '../../init_data/initInsta';
import InstCard from '../UI/inst_card/InstCard';

function InstaBlock() {
    const [instBlocks, setInstaBlock] = useState(GetInitInsta);
    const addBlockHandleer = (newBlock) => {
        setInstaBlock(prevBlock => {
            return [newBlock, ...prevBlock]
        })
    }
    const [maxPhoto, setMaxPhoto] = useState(5)
    function showMore() {
        setMaxPhoto(13)

    }

    return(
        <div className='instaBlock'>
            <div className='instHead'>мы в инстаграме</div>
            <div className='instPhotoBlock'>
            {instBlocks.map((index) =>
                (index.key <= maxPhoto-1
                    ?                       
                    <InstCard 
                    id={index.key}
                    key={Math.random()}
                    content={index.content}/>
                    : <div key={Math.random()}/>
                
            ))}
            </div>
            <MyButton onClick={showMore} className='showMore'>
                показать ещё
            </MyButton>
        </div>
    )
}
export default InstaBlock;