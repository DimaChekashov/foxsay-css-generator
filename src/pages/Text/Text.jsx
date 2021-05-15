import React, { useState } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Text.scss';

function Text() {
    const [value, setValue] = useState(0);
    return (
        <>
            <h1>Text</h1>
            <Slider onChange={setValue} value={value}/>
            <div>{value}</div>
        </>
    );
}

export default Text;