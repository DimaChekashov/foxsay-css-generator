import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Skew.scss';

function Skew() {
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);

    const styles = reactCSS({
        'default': {
            result: {
                transform: `skew(${skewX}deg, ${skewY}deg)`
            }
        }
    })

    return(
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Skew X (degrees)</h4>
                        <SliderFox value={skewX} setValue={setSkewX} min={-45} max={45} minText={-45} maxText={45}/>
                    </div>
                    <div className="input-group">
                        <h4>Skew Y (degrees)</h4>
                        <SliderFox value={skewY} setValue={setSkewY} min={-45} max={45} minText={-45} maxText={45}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="scale__result transform-box" style={styles.result}>Skew</div>
                </div>
            </div>
            <div className="generator__output">
                {`transform: skew(${skewX}deg, ${skewY}deg);`}
            </div>
            <button
                className="btn-copy"
                onClick={() => onCopyText(".generator__output")}
            >
                Скопировать текст
            </button>
        </div>
    )
}

export default Skew;