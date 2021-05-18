import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Invert.scss';

function Invert() {
    const [invert, setInvert] = useState(100);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `invert(${invert}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator invert">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Invert (percent)</h4>
                        <SliderFox value={invert} setValue={setInvert} min={0} max={100} minText={0} maxText={100}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="invert__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: invert(${invert}%);`}
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

export default Invert;