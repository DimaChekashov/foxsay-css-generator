import React, { useState } from 'react';
    
import reactCSS from 'reactcss';
import PickColorRGB from '../../component/PickColor/PickColorRGB';
import SliderFox from '../../component/SliderFox/SliderFox';
import { onCopyText } from "../../utils/utils";

import './TextShadow.scss';

function TextShadow() {
    const [color, setColor] = useState({
        r: '255',
        g: '0',
        b: '0',
        a: '1',
    });
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [blur, setBlur] = useState(8);
    const [opacity, setOpacity] = useState(80);

    const styles = reactCSS({
        'default': {
            result: {
                textShadow: `${positionX}px ${positionY}px ${blur}px rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ (opacity * 0.01).toFixed(2) })`
            }
        }
    })

    return (
        <div>
            <div className="generator text-shadow">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>X (pixels)</h4>
                        <SliderFox value={positionX} setValue={setPositionX} min={-10} max={10} minText={-10} maxText={10}/>
                    </div>
                    <div className="input-group">
                        <h4>Y (pixels)</h4>
                        <SliderFox value={positionY} setValue={setPositionY} min={-10} max={10} minText={-10} maxText={10}/>
                    </div>
                    <div className="input-group">
                        <h4>Blur (pixels)</h4>
                        <SliderFox value={blur} setValue={setBlur} min={0} max={20} minText={0} maxText={20}/>
                    </div>
                    <div className="input-group">
                        <h4>Color</h4>
                        <PickColorRGB color={color} setColor={setColor}/>
                    </div>
                    <div className="input-group">
                        <h4>Color opacity</h4>
                        <SliderFox value={opacity} setValue={setOpacity} min={0} max={100} minText={0} maxText={1}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="text__result" style={styles.result}>Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом новая модель организационной деятельности способствует подготовки и реализации форм развития.</div>
                </div>
            </div>
            <div className="generator__output">
                {`text-shadow: ${positionX}px ${positionY}px ${blur}px rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ (opacity * 0.01).toFixed(2) });`}
            </div>
            <button
                className="btn-copy"
                onClick={() => onCopyText(".generator__output")}
            >
                Скопировать текст
            </button>
        </div>
    );
}

export default TextShadow;