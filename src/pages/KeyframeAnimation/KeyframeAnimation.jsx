import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import {Animated} from "react-animated-css";
import Select from 'react-select'

import './KeyframeAnimation.scss';

function KeyframeAnimation() {
    const [name, setName] = useState('myAnim');
    const [duration, setDuration] = useState(2);
    const [delay, setDelay] = useState(1);
    const [animationName, setAnimationName] = useState('bounce');

    const animationNameOptions = [
        { value: 'bounce', label: 'Bounce' },
        { value: 'left center', label: 'Left Center' },
        { value: 'left bottom', label: 'Left Bottom' },
        { value: 'center top', label: 'Center Top' },
        { value: 'center', label: 'Center' },
        { value: 'center bottom', label: 'Center Bottom' },
        { value: 'right top', label: 'Right Top' },
        { value: 'right center', label: 'Right Center' },
        { value: 'right bottom', label: 'Right Bottom' },
    ];

    const styles = reactCSS({
        'default': {
            result: {
                transform: `scale`
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
            <div className="generator keyframe-animation">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Name</h4>
                        <input
                            className="input-group__input"
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />
                    </div>
                    <div className="input-group">
                        <h4>Duration</h4>
                        <input
                            className="input-group__input"
                            type="number"
                            value={duration}
                            onChange={(e) =>
                                setDuration(e.target.value)
                            }
                        />
                    </div>
                    <div className="input-group">
                        <h4>Delay</h4>
                        <input
                            className="input-group__input"
                            type="number"
                            value={delay}
                            onChange={(e) =>
                                setDelay(e.target.value)
                            }
                        />
                    </div>
                    <div className="input-group">
                        <h4>Animation Name</h4>
                        <Select defaultValue={{ value: 'bounce', label: "Bounce" }} options={animationNameOptions} styles={selectStyles} onChange={(selectedOption) => setAnimationName(selectedOption.value)}/>
                    </div>
                    <div className="input-group">
                        <div class="pretty p-icon p-round p-smooth">
                            <input type="checkbox" onChange={(e) => {
                                console.log(e);
                            }}/>
                            <div class="state p-success">
                                <i class="icon mdi mdi-check"></i>
                                <label>Repeat</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={duration * 1000} isVisible={true}>
                        <div className="keyframe-animation__result" style={styles.result}></div>
                    </Animated>
                </div>
            </div>
            <div className="generator__output">
            {`.element {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`animation: ${name} ${duration}s ease ${delay}s;`}
                <br/>
                {`}`}
                <br/>
                <br/>
                {`@keyframes ${name}{`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`0% {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`opacity: 0;`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`100% {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`opacity: 1;`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
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
    )
}

export default KeyframeAnimation;