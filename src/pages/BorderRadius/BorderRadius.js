import React, { useState } from "react";
import "./BorderRadius.css";

import reactCSS from "reactcss";
import SliderFox from "../../component/SliderFox/SliderFox";
import { onCopyText } from "../../utils/utils";
import PickColor from "../../component/PickColor/PickColor";

function BorderRadius(props) {
    const [color, setColor] = useState({
        hex: "#000000",
    });
    const [backgroundColor, setBackgroundColor] = useState({
        hex: "#ff0000",
    });
    const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(10);
    const [borderTopRightRadius, setBorderTopRightRadius] = useState(10);
    const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(10);
    const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(10);
    const [borderWidth, setBorderWidth] = useState(5);

    const inputs = [
        {
            label: "Radius top-left (pixels)",
            value: borderTopLeftRadius,
            name: setBorderTopLeftRadius,
        },
        {
            label: "Radius top-right (pixels)",
            value: borderTopRightRadius,
            name: setBorderTopRightRadius,
        },
        {
            label: "Radius bottom-left (pixels)",
            value: borderBottomLeftRadius,
            name: setBorderBottomLeftRadius,
        },
        {
            label: "Radius bottom-right (pixels)",
            value: borderBottomRightRadius,
            name: setBorderBottomRightRadius,
        },
        {
            label: "Width (pixels)",
            value: borderWidth,
            name: setBorderWidth,
        },
    ];

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

    const styles = reactCSS({
        default: {
            result: {
                border: `${borderWidth}px solid ${color.hex}`,
                borderTopLeftRadius: `${borderTopLeftRadius}px`,
                borderTopRightRadius: `${borderTopRightRadius}px`,
                borderBottomLeftRadius: `${borderBottomLeftRadius}px`,
                borderBottomRightRadius: `${borderBottomRightRadius}px`,
                backgroundColor: backgroundColor.hex,
            },
        },
    });
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
                            <SliderFox
                                value={value}
                                setValue={name}
                                min={0}
                                max={50}
                                minText={0}
                                maxText={50}
                            />
                        </div>
                    ))}
                    <div className="input-group">
                        <h4>Border Color</h4>
                        <PickColor color={color} setColor={setColor} />
                    </div>
                    <div className="input-group">
                        <h4>Background Color</h4>
                        <PickColor
                            color={backgroundColor}
                            setColor={setBackgroundColor}
                        />
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div
                        className="border-radius__result"
                        style={styles.result}
                    ></div>
                </div>
            </div>
            <div className="generator__output">
                {`border: ${borderWidth}px solid ${color.hex};`}
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
