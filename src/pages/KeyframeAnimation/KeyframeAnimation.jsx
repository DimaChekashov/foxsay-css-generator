import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './KeyframeAnimation.scss';

function KeyframeAnimation() {
    const [name, setName] = useState('myAnim');
    const [duration, setDuration] = useState(2);
    const [delay, setDelay] = useState(0);

    const styles = reactCSS({
        'default': {
            result: {
                transform: `scale(${(scaleWidth * 0.1).toFixed(1)}, ${(scaleHeight * 0.1).toFixed(1)})`
            }
        }
    })

    return(
        <div>
            <div className="generator keyframe-animation">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Scale width (factor)</h4>
                        <SliderFox value={scaleWidth} setValue={setScaleWidth} min={0} max={25} minText={0} maxText={2.5}/>
                    </div>
                    <div className="input-group">
                        <h4>Scale height (factor)</h4>
                        <SliderFox value={scaleHeight} setValue={setScaleHeight} min={0} max={25} minText={0} maxText={2.5}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="keyframe-animation__result" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`transform: scale(${(scaleWidth * 0.1).toFixed(1)}, ${(scaleHeight * 0.1).toFixed(1)});`}
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

export default KeyframeAnimation;