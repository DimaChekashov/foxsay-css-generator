import React, { useState } from "react";
import "./BorderRadius.css";
import { onCopyText } from "../../utils/utils";

function BorderRadius(props) {
    const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(10);
    const [borderTopRightRadius, setBorderTopRightRadius] = useState(10);
    const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(10);
    const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(10);
    const [borderWidth, setBorderWidth] = useState(5);

    const inputs = [
        {
            label: "top-left",
            value: borderTopLeftRadius,
            name: setBorderTopLeftRadius,
        },
        {
            label: "top-right",
            value: borderTopRightRadius,
            name: setBorderTopRightRadius,
        },
        {
            label: "bottom-left",
            value: borderBottomLeftRadius,
            name: setBorderBottomLeftRadius,
        },
        {
            label: "bottom-right",
            value: borderBottomRightRadius,
            name: setBorderBottomRightRadius,
        },
        {
            label: "width",
            value: borderWidth,
            name: setBorderWidth,
        },
    ];

    function handleInputChange(name, val) {
        if (!Number.isInteger(+val)) return;
        name(+val || 0);
    }

    function handleKeyDown(name, key) {
        if (key === "ArrowUp") {
            name((prevCount) => prevCount + 1);
        } else if (key === "ArrowDown") {
            name((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
        }
    }
    return (
        <>
            <div className="generator border-radius">
                <div className="generator__inputs">
                    {inputs.map(({ label, name, value }) => (
                        <div className="input-group" key={label}>
                            <h4>{label}</h4>
                            <input
                                className="input-group__input"
                                type="text"
                                value={value}
                                onChange={(e) =>
                                    handleInputChange(name, e.target.value)
                                }
                                onKeyDown={(e) => handleKeyDown(name, e.key)}
                            />
                        </div>
                    ))}
                </div>
                <div className="generator__result-wrapper">
                    <div
                        className="border-radius__result"
                        style={{
                            borderTopLeftRadius: borderTopLeftRadius + "px",
                            borderTopRightRadius: borderTopRightRadius + "px",
                            borderBottomLeftRadius:
                                borderBottomLeftRadius + "px",
                            borderBottomRightRadius:
                                borderBottomRightRadius + "px",
                            border: borderWidth + "px solid #000000",
                        }}
                    ></div>
                </div>
            </div>
            <div className="generator__output">
                {`border: ${borderWidth}px solid #000000;`}
                <br />
                {`border-top-left-radius: ${borderTopLeftRadius}px;`}
                <br />
                {`border-top-right-radius: ${borderTopRightRadius}px;`}
                <br />
                {`border-bottom-left-radius: ${borderBottomLeftRadius}px;`}
                <br />
                {`border-bottom-right-radius: ${borderBottomRightRadius}px;`}
                <br />
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

export default BorderRadius;
