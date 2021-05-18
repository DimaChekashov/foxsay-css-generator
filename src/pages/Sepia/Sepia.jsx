import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';

import './Sepia.scss';

function Sepia() {
    const [sepia, setSepia] = useState(100);

    const styles = reactCSS({
        'default': {
            result: {
                filter: `sepia(${sepia}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator sepia">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Sepia (percent)</h4>
                        <SliderFox value={sepia} setValue={setSepia} min={0} max={100} minText={0} maxText={100}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="sepia__result filter-box" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`filter: sepia(${sepia}%);`}
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

export default Sepia;