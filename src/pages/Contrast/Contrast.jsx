import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Contrast.scss';

function Contrast() {
    const [contrast, setContrast] = useState(125);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `contrast(${contrast}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator contrast">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Contrast (percent)</h4>
                        <SliderFox value={contrast} setValue={setContrast} min={0} max={300} minText={0} maxText={300}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="contrast__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: contrast(${contrast}%);`}
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

export default Contrast;