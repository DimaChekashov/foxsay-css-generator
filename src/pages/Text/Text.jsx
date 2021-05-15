import React, { useState } from 'react';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Text.scss';

function Text() {
    const [value, setValue] = useState(0);
    return (
        <>
            <h1>Text</h1>
            <SliderFox value={value} setValue={setValue} min={0} max={100}/>
        </>
    );
}

export default Text;