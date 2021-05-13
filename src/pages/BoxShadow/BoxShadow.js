import React, { useState } from "react";
import "./BoxShadow.css";
import { onCopyText } from "../../utils/utils";

function BoxShadow(props) {
    const [horizontalLength, setHorizontalLength] = useState(10);
    const [verticalLength, setVerticalLength] = useState(10);
    const [blurRadius, setBlurRadius] = useState(10);
    const [spreadRadius, setSpreadRadius] = useState(10);
    const [opacityBox, setOpacityBox] = useState(0.75);

    const inputs = [
        {
            label: "Horizontal Length",
            name: horizontalLength,
            setValue: setHorizontalLength,
            eventKeyName: (setValue, key) => {
                handleKeyDown(setValue, key);
            },
        },
        {
            label: "Vertical Length",
            name: verticalLength,
            setValue: setVerticalLength,
            eventKeyName: (setValue, key) => {
                handleKeyDown(setValue, key);
            },
        },
        {
            label: "Blur Radius",
            name: blurRadius,
            setValue: setBlurRadius,
            eventKeyName: (setValue, key) => {
                handleKeyDown(setValue, key);
            },
        },
        {
            label: "Spread Radius",
            name: spreadRadius,
            setValue: setSpreadRadius,
            eventKeyName: (setValue, key) => {
                handleKeyDown(setValue, key);
            },
        },
        {
            label: "Opacity Box",
            name: opacityBox,
            setValue: setOpacityBox,
            eventKeyName: (setValue, key) => {
                handleKeyDownOpacity(setValue, key);
            },
        },
    ];

    function handleInputChange(setValue, val) {
        if (!Number.isInteger(+val)) return;
        setValue(+val || 0);
    }
    function handleKeyDown(setValue, key) {
        if (key === "ArrowUp") {
            setValue((prevCount) => (prevCount >= 100 ? 100 : prevCount + 1));
        } else if (key === "ArrowDown") {
            setValue((prevCount) => (prevCount > -100 ? prevCount - 1 : -100));
        }
    }
    function handleKeyDownOpacity(setValue, key) {
        if (key === "ArrowUp") {
            setValue((prevCount) =>
                prevCount >= 1 ? 1 : +(prevCount + 0.01).toFixed(2)
            );
        } else if (key === "ArrowDown") {
            setValue((prevCount) =>
                prevCount > 0 ? (prevCount - 0.01).toFixed(2) : 0
            );
        }
    }

    return (
        <>
            <div className="generator box-shadow">
                <div className="generator__inputs">
                    {inputs.map(({ label, name, setValue, eventKeyName }) => (
                        <div className="input-group" key={label}>
                            <h4>{label}</h4>
                            <input
                                className="input-group__input"
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    handleInputChange(setValue, e.target.value)
                                }
                                onKeyDown={(e) => eventKeyName(setValue, e.key)}
                            />
                        </div>
                    ))}
                </div>
                <div className="generator__result-wrapper">
                    <div
                        className="box-shadow__result"
                        style={{
                            boxShadow: `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, ${opacityBox})`,
                        }}
                    ></div>
                </div>
            </div>
            <div className="generator__output">
                {`box-shadow: ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, ${opacityBox})`}
            </div>
            <button
                className="btn-copy"
                onClick={() => onCopyText(".generator__output")}
            >
                Скопировать текст
            </button>
        </>
    );
}

export default BoxShadow;
