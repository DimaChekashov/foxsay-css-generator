import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Saturate.scss';

function Saturate() {
    const [saturate, setSaturate] = useState(150);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `saturate(${saturate}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator saturate">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Saturate (percent)</h4>
                        <SliderFox value={saturate} setValue={setSaturate} min={0} max={300} minText={0} maxText={300}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="saturate__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: saturate(${saturate}%);`}
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

export default Saturate;