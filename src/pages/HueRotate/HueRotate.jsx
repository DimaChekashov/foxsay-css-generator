import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './HueRotate.scss';

function HueRotate() {
    const [hueRotate, setHueRotate] = useState(180);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `hue-rotate(${hueRotate}deg)`
            }
        }
    })

    return(
        <div>
            <div className="generator hue-rotate">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Hue-Rotate (degrees)</h4>
                        <SliderFox value={hueRotate} setValue={setHueRotate} min={0} max={360} minText={0} maxText={360}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="hue-rotate__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: hue-rotate(${hueRotate}deg);`}
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

export default HueRotate;