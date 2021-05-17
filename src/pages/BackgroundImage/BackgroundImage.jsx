import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import PickColor from '../../component/PickColor/PickColor';
import Select from 'react-select'

import './BackgroundImage.scss';

function BackgroundImage() {
    const [imgUrl, setImgUrl] = useState('http://www.personal.psu.edu/kbl5192/jpg.jpg');
    const [color, setColor] = useState({
        hex: '#666666'
    });
    const [backgroundPosition, setBackgroundPosition] = useState('center');
    const [backgroundSize, setBackgroundSize] = useState('cover');
    const [backgroundRepeat, setBackgroundRepeat] = useState('no-repeat');

    const backgroundPositionOptions = [
        { value: 'left top', label: 'Left Top' },
        { value: 'left center', label: 'Left Center' },
        { value: 'left bottom', label: 'Left Bottom' },
        { value: 'center top', label: 'Center Top' },
        { value: 'center', label: 'Center' },
        { value: 'center bottom', label: 'Center Bottom' },
        { value: 'right top', label: 'Right Top' },
        { value: 'right center', label: 'Right Center' },
        { value: 'right bottom', label: 'Right Bottom' },
    ];

    const backgroundSizeOptions = [
        { value: 'auto', label: 'Auto' },
        { value: 'cover', label: 'Cover' },
        { value: 'contain', label: 'Contain' },
    ];

    const backgroundRepeatOptions = [
        { value: 'no-repeat', label: 'No Repeat' },
        { value: 'repeat-x', label: 'Repeat X' },
        { value: 'repeat-y', label: 'Repeat Y' },
        { value: 'repeat', label: 'Repeat' },
        { value: 'space', label: 'Space' },
        { value: 'round', label: 'Round' },
    ];

    const styles = reactCSS({
        'default': {
            result: {
                backgroundColor: color.hex,
                backgroundImage: `url(${imgUrl})`,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundRepeat: backgroundRepeat
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

    return(
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Image URL</h4>
                        <input
                                className="input-group__input"
                                type="text"
                                value={imgUrl}
                                onChange={(e) =>
                                    setImgUrl(e.target.value)
                                }
                            />
                    </div>
                    <div className="input-group">
                        <h4>Position</h4>
                        <Select defaultValue={{ value: 'center', label: "Center" }} options={backgroundPositionOptions} styles={selectStyles} onChange={(selectedOption) => setBackgroundPosition(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Size</h4>
                        <Select defaultValue={{ value: 'cover', label: "Cover" }} options={backgroundSizeOptions} styles={selectStyles} onChange={(selectedOption) => setBackgroundSize(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Repeat</h4>
                        <Select defaultValue={{ value: 'no-repeat', label: "No Repeat" }} options={backgroundRepeatOptions} styles={selectStyles} onChange={(selectedOption) => setBackgroundRepeat(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Background Color</h4>
                        <PickColor color={color} setColor={setColor}/>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="background-image__result" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`background-color: ${color.hex};`}
                <br/>
                {`background-image: url('${imgUrl}');`}
                <br/>
                {`background-position: ${backgroundPosition};`}
                <br/>
                {`background-size: ${backgroundSize};`}
                <br/>
                {`background-repeat: ${backgroundRepeat};`}
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

export default BackgroundImage;