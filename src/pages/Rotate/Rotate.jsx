import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Rotate.scss';

function Rotate() {
    const [rotate, setRotate] = useState(0);

    const styles = reactCSS({
        'default': {
            result: {
                transform: `rotate(${rotate}deg)`
            }
        }
    })

    return(
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Rotate (degrees)</h4>
                        <SliderFox value={rotate} setValue={setRotate} min={0} max={360} minText={0} maxText={360}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="rotate__result transform-box" style={styles.result}>Rotate</div>
                </div>
            </div>
            <div className="generator__output">
                {`transform: rotate(${rotate}deg);`}
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

export default Rotate;