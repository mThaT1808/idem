import './InstaBlock.css';
import MyButton from './UI/MyButton';
import { useState } from 'react';

function InstaBlock() {
    const [instBlocks, setInstaBlock] = useState([
        <div key={0} className={"instBlock " + `item${0}`}></div>,
        <div key={1} className={"instBlock " + `item${1}`}></div>,
        <div key={2} className={"instBlock " + `item${2}`}></div>,
        <div key={3} className={"instBlock " + `item${3}`}></div>,
        <div key={4} className={"instBlock " + `item${4}`}></div> ,
        <div key={5} className={"instBlock " + `item${5}`} style={{display: 'none'}}></div>,
        <div key={6} className={"instBlock " + `item${6}`} style={{display: 'none'}}></div>,
        <div key={7} className={"instBlock " + `item${7}`} style={{display: 'none'}}></div>,
        <div key={8} className={"instBlock " + `item${8}`} style={{display: 'none'}}></div>,
        <div key={9} className={"instBlock " + `item${9}`} style={{display: 'none'}}></div>,
        <div key={10} className={"instBlock " + `item${10}`} style={{display: 'none'}}></div>,
        <div key={11} className={"instBlock " + `item${11}`} style={{display: 'none'}}></div>,
        <div key={12} className={"instBlock " + `item${12}`} style={{display: 'none'}}></div>,       
    ]);
    const addBlockHandleer = (newBlock) => {
        setInstaBlock(prevBlock => {
            return [newBlock, ...prevBlock]
        })
    }

    function showMore() {
        console.log(instBlocks[5].props)

    }



    return(
        <div className='instaBlock'>
            <div className='instHead'>мы в инстаграме</div>
            <div className='instPhotoBlock'>
                {instBlocks}
            </div>
            <MyButton onClick={showMore} className='showMore'>
                показать ещё
            </MyButton>
        </div>
    )
}
export default InstaBlock;