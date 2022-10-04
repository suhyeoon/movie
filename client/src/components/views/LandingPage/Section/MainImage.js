import React from 'react';
import './MainImage.css';

function MainImage(props) {
    return (
        <div style={ 
            {background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%), url('$ { props.image } '), #1c1c1c`}}
            className='visual_img'>
            <div>
                <div className='visual'></div>
                <h2 className='visual_title'>title</h2>
                <p className='visual_desc'>description</p>
            </div>
        </div>
        )
}

export default MainImage