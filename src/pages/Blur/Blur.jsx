import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Blur.scss';

function Blur() {
    const [blur, setBlur] = useState(4);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `blur(${blur}px)`
            }
        }
    })

    return(
        <div>
            <div className="generator blur">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Blur (pixels)</h4>
                        <SliderFox value={blur} setValue={setBlur} min={0} max={50} minText={0} maxText={50}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="blur__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: blur(${blur}px);`}
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

export default Blur;