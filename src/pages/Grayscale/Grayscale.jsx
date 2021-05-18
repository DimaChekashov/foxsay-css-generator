import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Grayscale.scss';

function Grayscale() {
    const [grayscale, setGrayscale] = useState(100);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `grayscale(${grayscale}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator grayscale">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Grayscale (percent)</h4>
                        <SliderFox value={grayscale} setValue={setGrayscale} min={0} max={100} minText={0} maxText={100}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="grayscale__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: grayscale(${grayscale}%);`}
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

export default Grayscale;