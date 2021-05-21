import React, { useState } from 'react';
import reactCSS from 'reactcss';
import PickColor from '../../component/PickColor/PickColor';
import Select from 'react-select'

import SliderFox from '../../component/SliderFox/SliderFox';
import { onCopyText } from "../../utils/utils";

import './Transition.scss';

function Transition() {
    const [onResultHover, setOnResultHover] = useState(false);
    
    const [type, setType] = useState('background-color');

    const [timing, setTiming] = useState('ease');
    
    const [duration, setDuration] = useState(1);
    const [delay, setDelay] = useState(0);

    // Background-color
    const [startBackgroundColor, setStartBackgroundColor] = useState({
        hex: '#ff0000'
    });
    const [endBackgroundColor, setEndBackgroundColor] = useState({
        hex: '#00ff00'
    });

    // Height
    const [startHeight, setStartHeight] = useState(60);
    const [endHeight, setEndHeight] = useState(150);

    // Opacity
    const [startOpacity, setStartOpacity] = useState(100);
    const [endOpacity, setEndOpacity] = useState(60);
    
    // Outline
    const [startOutlineColor, setStartOutlineColor] = useState({
        hex: '#ff0000'
    });
    const [endOutlineColor, setEndOutlineColor] = useState({
        hex: '#00ff00'
    });
    const [startOutline, setStartOutline] = useState(1);
    const [endOutline, setEndOutline] = useState(20);
    
    // Wight
    const [startWidth, setStartWidth] = useState(100);
    const [endWidth, setEndWidth] = useState(200);


    const typeOptions = [
        { value: 'background-color', label: 'background-color' },
        { value: 'height', label: 'height' },
        { value: 'opacity', label: 'opacity' },
        { value: 'outline', label: 'outline' },
        { value: 'width', label: 'width' }
    ];

    
    const timingOptions = [
        { value: 'ease', label: 'ease' },
        { value: 'linear', label: 'linear' },
        { value: 'ease-in', label: 'easeIn' },
        { value: 'ease-out', label: 'easeOut' },
        { value: 'ease-in-out', label: 'easeInOut' }
    ];
    
    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#3abb67;' : 'white'
        }),
        control: (provided) => ({
            ...provided,
        })
    }

    function handleInputChange(name, val) {
        if (!Number.isInteger(+val)) return;
        if (+val < 50) {
            console.log(val);
            name(+val || 0);
        } else {
            name(50);
        }
    }

    function handleKeyDown(name, key) {
        if (key === "ArrowUp") {
            name((prevCount) => (prevCount > 49 ? 50 : prevCount + 1));
        } else if (key === "ArrowDown") {
            name((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
        }
    }
    let styles = '';
    let typeContent = '';
    let startStyle = '';
    let endStyle = '';

    switch(type) {
        case 'background-color':
            styles = reactCSS({
                'default': {
                    result: {
                        backgroundColor: onResultHover ? endBackgroundColor.hex : startBackgroundColor.hex,
                        transition: `${type} ${duration}s ${timing} ${delay}s`
                    }
                }
            });
            startStyle = `background-color: ${startBackgroundColor.hex};`;
            endStyle = `background-color: ${endBackgroundColor.hex};`;
            typeContent = (
                <>
                    <div className="input-group">
                        <h4>Start Color</h4>
                        <PickColor color={startBackgroundColor} setColor={setStartBackgroundColor}/>
                    </div>
                    <div className="input-group">
                        <h4>End Color</h4>
                        <PickColor color={endBackgroundColor} setColor={setEndBackgroundColor}/>
                    </div>
                </>
            );
            break;
        case 'height':
            styles = reactCSS({
                'default': {
                    result: {
                        height: onResultHover ? endHeight + 'px' : startHeight + 'px',
                        transition: `${type} ${duration}s ${timing} ${delay}s`
                    }
                }
            });
            startStyle = `height: ${startHeight}px;`;
            endStyle = `height: ${endHeight}px;`;
            typeContent = (
                <>
                    <div className="input-group">
                        <h4>Start Height</h4>
                        <SliderFox
                            value={startHeight}
                            setValue={setStartHeight}
                            min={0}
                            max={300}
                            minText={0}
                            maxText={300}
                        />
                    </div>
                    <div className="input-group">
                        <h4>End Height</h4>
                        <SliderFox
                            value={endHeight}
                            setValue={setEndHeight}
                            min={0}
                            max={300}
                            minText={0}
                            maxText={300}
                        />
                    </div>
                </>
            );
            break;
        case 'opacity':
            styles = reactCSS({
                'default': {
                    result: {
                        opacity: onResultHover ? (endOpacity * 0.01).toFixed(2) : (startOpacity * 0.01).toFixed(2),
                        transition: `${type} ${duration}s ${timing} ${delay}s`
                    }
                }
            });
            startStyle = `opacity: ${(startOpacity * 0.01).toFixed(2)};`;
            endStyle = `opacity: ${(endOpacity * 0.01).toFixed(2)};`;
            typeContent = (
                <>
                    <div className="input-group">
                        <h4>Start Opacity</h4>
                        <SliderFox
                            value={startOpacity}
                            setValue={setStartOpacity}
                            min={0}
                            max={100}
                            minText={0}
                            maxText={1}
                        />
                    </div>
                    <div className="input-group">
                        <h4>End Opacity</h4>
                        <SliderFox
                            value={endOpacity}
                            setValue={setEndOpacity}
                            min={0}
                            max={100}
                            minText={0}
                            maxText={1}
                        />
                    </div>
                </>
            );
            break;
        case 'outline':
            styles = reactCSS({
                'default': {
                    result: {
                        outline: onResultHover ? `${endOutline}px solid ${endOutlineColor.hex}` : `${startOutline}px solid ${startOutlineColor.hex}`,
                        transition: `${type} ${duration}s ${timing} ${delay}s`
                    }
                }
            });
            startStyle = `outline: ${startOutline}px solid ${startOutlineColor.hex};`;
            endStyle = `outline: ${endOutline}px solid ${endOutlineColor.hex};`;
            typeContent = (
                <>
                    <div className="input-group">
                        <h4>Start Color</h4>
                        <PickColor color={startOutlineColor} setColor={setStartOutlineColor}/>
                    </div>
                    <div className="input-group">
                        <h4>Start Width</h4>
                        <SliderFox
                            value={startOutline}
                            setValue={setStartOutline}
                            min={0}
                            max={20}
                            minText={0}
                            maxText={20}
                        />
                    </div>
                    <div className="input-group">
                        <h4>End Color</h4>
                        <PickColor color={endOutlineColor} setColor={setEndOutlineColor}/>
                    </div>
                    <div className="input-group">
                        <h4>End Width</h4>
                        <SliderFox
                            value={endOutline}
                            setValue={setEndOutline}
                            min={0}
                            max={20}
                            minText={0}
                            maxText={20}
                        />
                    </div>
                </>
            );
            break;
        case 'width':
            styles = reactCSS({
                'default': {
                    result: {
                        width: onResultHover ? endWidth + 'px' : startWidth + 'px',
                        transition: `${type} ${duration}s ${timing} ${delay}s`
                    }
                }
            });
            startStyle = `width: ${startWidth}px;`;
            endStyle = `width: ${endWidth}px;`;
            typeContent = (
                <>
                    <div className="input-group">
                        <h4>Start Width</h4>
                        <SliderFox
                            value={startWidth}
                            setValue={setStartWidth}
                            min={0}
                            max={300}
                            minText={0}
                            maxText={300}
                        />
                    </div>
                    <div className="input-group">
                        <h4>End Width</h4>
                        <SliderFox
                            value={endWidth}
                            setValue={setEndWidth}
                            min={0}
                            max={300}
                            minText={0}
                            maxText={300}
                        />
                    </div>
                </>
            );
            break;
        default:
            styles = reactCSS({
                'default': {
                    result: {
                        backgroundColor: '#ffffff'
                    }
                }
            })
            break;
    }

    return (
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Type</h4>
                        <Select defaultValue={{ label: "background-color", value: 'background-color' }} options={typeOptions} styles={selectStyles} onChange={(selectedOption) => setType(selectedOption.value)}/>
                    </div>
                    {typeContent}
                    <div className="input-group">
                        <h4>Duration</h4>
                        <input
                            className="input-group__input"
                            type="text"
                            value={duration}
                            onChange={(e) =>
                                handleInputChange(setDuration, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(setDuration, e.key)}
                        />
                    </div>
                    <div className="input-group">
                        <h4>Timing function</h4>
                        <Select defaultValue={{ label: "ease", value: 'ease' }} options={timingOptions} styles={selectStyles} onChange={(selectedOption) => setTiming(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Delay</h4>
                        <input
                            className="input-group__input"
                            type="text"
                            value={delay}
                            onChange={(e) =>
                                handleInputChange(setDelay, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(setDelay, e.key)}
                        />
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="transition__result" onMouseEnter={() => setOnResultHover(true)} onMouseLeave={() => setOnResultHover(false)} style={styles.result}>Hover here</div>
                </div>
            </div>
            <div className="generator__output">
                {`.element {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{startStyle}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`transition: ${type} ${duration}s ${timing} ${delay}s;`}
                <br/>
                {`}`}
                <br/>
                <br/>
                {`.element:hover {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{endStyle}
                <br/>
                {`}`}
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

export default Transition;