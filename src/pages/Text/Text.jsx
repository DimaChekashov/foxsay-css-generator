import React, { useState } from 'react';
import reactCSS from 'reactcss';
import PickColor from '../../component/PickColor/PickColor';
import Select from 'react-select'

import SliderFox from '../../component/SliderFox/SliderFox';
import { onCopyText } from "../../utils/utils";

import './Text.scss';

function Text() {
    const [color, setColor] = useState({
        hex: '#000000'
    });
    const [lineHeight, setLineHeight] = useState(0);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [wordSpacing, setWordSpacing] = useState(0);
    const [textAlign, setTextAlign] = useState('left');
    const [textDecoration, setTextDecoration] = useState('none');
    const [textTransform, setTextTransform] = useState('none');

    const textAlignOptions = [
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' }
    ];

    const textDecorationOptions = [
        { value: 'none', label: 'None' },
        { value: 'underline', label: 'Underline' },
        { value: 'overline', label: 'Overline' },
        { value: 'line-through', label: 'Line-through' }
    ];

    const textTransformOptions = [
        { value: 'none', label: 'None' },
        { value: 'capitalize', label: 'Capitalize' },
        { value: 'uppercase', label: 'Uppercase' },
        { value: 'lowercase', label: 'Lowercase' }
    ];

    const styles = reactCSS({
        'default': {
            result: {
                color: color.hex,
                lineHeight: 1 + +(lineHeight * 0.05).toFixed(2),
                letterSpacing: letterSpacing + 'px',
                wordSpacing: wordSpacing + 'px',
                textAlign: textAlign,
                textDecoration: textDecoration,
                textTransform: textTransform
            }
        }
    })
    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#3abb67;' : 'white'
        }),
        control: (provided) => ({
            ...provided,
        })
    }

    return (
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Color</h4>
                        <PickColor color={color} setColor={setColor}/>
                    </div>
                    <div className="input-group">
                        <h4>Line height</h4>
                        <SliderFox value={lineHeight} setValue={setLineHeight} min={0} max={40} minText={1} maxText={3}/>
                    </div>
                    <div className="input-group">
                        <h4>Letter spacing (pixels)</h4>
                        <SliderFox value={letterSpacing} setValue={setLetterSpacing} min={0} max={10} minText={0} maxText={10}/>
                    </div>
                    <div className="input-group">
                        <h4>Word spacing (pixels)</h4>
                        <SliderFox value={wordSpacing} setValue={setWordSpacing} min={0} max={10} minText={0} maxText={10}/>
                    </div>
                    <div className="input-group">
                        <h4>Text align</h4>
                        <Select defaultValue={{ label: "left", value: 'Left' }} options={textAlignOptions} styles={selectStyles} onChange={(selectedOption) => setTextAlign(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Text decoration</h4>
                        <Select defaultValue={{ label: "none", value: 'None' }} options={textDecorationOptions} styles={selectStyles} onChange={(selectedOption) => setTextDecoration(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Text transform</h4>
                        <Select defaultValue={{ label: "none", value: 'None' }} options={textTransformOptions} styles={selectStyles} onChange={(selectedOption) => setTextTransform(selectedOption.value)}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="text__result" style={styles.result}>Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом новая модель организационной деятельности способствует подготовки и реализации форм развития.</div>
                </div>
            </div>
            <div className="generator__output">
                {`color: ${color.hex};`}
                <br/>
                {`line-height: ${1 + +(lineHeight * 0.05).toFixed(2)};`}
                <br/>
                {`letter-spacing: ${letterSpacing}px;`}
                <br/>
                {`word-spacing: ${wordSpacing}px;`}
                <br/>
                {`text-align: ${textAlign};`}
                <br/>
                {`text-decoration: ${textDecoration};`}
                <br/>
                {`text-transform: ${textTransform};`}
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

export default Text;