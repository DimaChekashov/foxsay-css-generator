import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Translate.scss';

function Translate() {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    const styles = reactCSS({
        'default': {
            result: {
                transform: `translate(${translateX}px, ${translateY}px)`
            }
        }
    })

    return(
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Translate X(pixels)</h4>
                        <SliderFox value={translateX} setValue={setTranslateX} min={-100} max={100} minText={-100} maxText={100}/>
                    </div>
                    <div className="input-group">
                        <h4>Translate Y(pixels)</h4>
                        <SliderFox value={translateY} setValue={setTranslateY} min={-100} max={100} minText={-100} maxText={100}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="translate__result transform-box" style={styles.result}>Translate</div>
                </div>
            </div>
            <div className="generator__output">
                {`transform: translate(${translateX}px, ${translateY}px);`}
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

export default Translate;