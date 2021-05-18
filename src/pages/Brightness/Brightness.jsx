import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Brightness.scss';

function Brightness() {
    const [brightness, setBrightness] = useState(125);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `brightness(${brightness}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator brightness">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Brightness (percent)</h4>
                        <SliderFox value={brightness} setValue={setBrightness} min={0} max={300} minText={0} maxText={300}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="brightness__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: brightness(${brightness}%);`}
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

export default Brightness;