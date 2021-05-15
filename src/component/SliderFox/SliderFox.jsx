import React from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './SliderFox.scss';

function SliderFox(props) {
    return (
        <div className="foxslider">
            <Slider onChange={props.setValue} value={props.value}/>
            <div className="foxslider__text"><h5>{props.min}</h5><h5>{props.max}</h5></div>
        </div>
    )
}

export default SliderFox;