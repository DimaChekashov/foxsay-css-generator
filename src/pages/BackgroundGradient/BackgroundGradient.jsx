import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import SliderFox from '../../component/SliderFox/SliderFox';
import PickColorRGB from '../../component/PickColor/PickColorRGB';

import './BackgroundGradient.scss';

function BackgroundGradient() {
    const [leftColor, setLeftColor] = useState({
        r: '0',
        g: '0',
        b: '255',
        a: '1',
    });
    const [rightColor, setRightColor] = useState({
        r: '0',
        g: '255',
        b: '0',
        a: '1',
    });
    const [leftOpacity, setLeftOpacity] = useState(80);
    const [rightOpacity, setRightOpacity] = useState(80);
    const [leftColorSize, setLeftColorSize] = useState(0);
    const [rightColorSize, setRightColorSize] = useState(100);
    const [linearStyle, setLinearStyle] = useState(90);

    const styles = reactCSS({
        'default': {
            result: {
                backgroundImage: `linear-gradient(${linearStyle}deg, rgba(${leftColor.r}, ${leftColor.g}, ${leftColor.b}, ${(leftOpacity * 0.01).toFixed(2)}) ${leftColorSize}%, rgba(${rightColor.r}, ${rightColor.g}, ${rightColor.b}, ${(rightOpacity * 0.01).toFixed(2)}) ${rightColorSize}%)`
            }
        }
    })

    return(
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Linear Style (degrees)</h4>
                        <SliderFox value={linearStyle} setValue={setLinearStyle} min={0} max={360} minText={0} maxText={360}/>
                    </div>
                    <div className="input-group">
                        <h4>Left Color</h4>
                        <PickColorRGB color={leftColor} setColor={setLeftColor}/>
                    </div>
                    <div className="input-group">
                        <h4>Left color size</h4>
                        <SliderFox value={leftColorSize} setValue={setLeftColorSize} min={0} max={100} minText={0} maxText={100}/>
                    </div>
                    <div className="input-group">
                        <h4>Left color opacity</h4>
                        <SliderFox value={leftOpacity} setValue={setLeftOpacity} min={0} max={100} minText={0} maxText={1}/>
                    </div>
                    <div className="input-group">
                        <h4>Right Color</h4>
                        <PickColorRGB color={rightColor} setColor={setRightColor}/>
                    </div>
                    <div className="input-group">
                        <h4>Right color size</h4>
                        <SliderFox value={rightColorSize} setValue={setRightColorSize} min={0} max={100} minText={0} maxText={100}/>
                    </div>
                    <div className="input-group">
                        <h4>Right color opacity</h4>
                        <SliderFox value={rightOpacity} setValue={setRightOpacity} min={0} max={100} minText={0} maxText={1}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="background-gradient__result" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`background-image: linear-gradient(${linearStyle}deg, rgba(${leftColor.r}, ${leftColor.g}, ${leftColor.b}, ${(leftOpacity * 0.01).toFixed(2)}) ${leftColorSize}%, rgba(${rightColor.r}, ${rightColor.g}, ${rightColor.b}, ${(rightOpacity * 0.01).toFixed(2)}) ${rightColorSize}%);`}
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

export default BackgroundGradient;