import React from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './SliderFox.scss';

function SliderFox(props) {
    return (
        <div className="foxslider">
            <Slider onChange={props.setValue} value={props.value} min={props.min} max={props.max}/>
            <div className="foxslider__text"><h5>{props.minText}</h5><h5>{props.maxText}</h5></div>
        </div>
    )
}

export default SliderFox;