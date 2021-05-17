import React, { useState } from "react";
import "./BoxShadow.css";

import { onCopyText } from "../../utils/utils";
import reactCSS from "reactcss";
import PickColor from "../../component/PickColor/PickColor";
import PickColorRGB from "../../component/PickColor/PickColorRGB";
import SliderFox from "../../component/SliderFox/SliderFox";

function BoxShadow(props) {
    const [color, setColor] = useState({
        r: "0",
        g: "0",
        b: "0",
        a: "1",
    });
    const [backgroundColor, setBackgroundColor] = useState({
        hex: "#ff0000",
    });
    const [horizontalLength, setHorizontalLength] = useState(10);
    const [verticalLength, setVerticalLength] = useState(10);
    const [blurRadius, setBlurRadius] = useState(10);
    const [spreadRadius, setSpreadRadius] = useState(10);
    const [opacityBox, setOpacityBox] = useState(75);

    const styles = reactCSS({
        default: {
            result: {
                backgroundColor: backgroundColor.hex,
                boxShadow: `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${
                    color.r
                }, ${color.g}, ${color.b}, ${+(opacityBox * 0.01).toFixed(2)})`,
            },
        },
    });

    return (
        <>
            <div className="generator box-shadow">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>X (pixels)</h4>
                        <SliderFox
                            value={horizontalLength}
                            setValue={setHorizontalLength}
                            min={-50}
                            max={50}
                            minText={-50}
                            maxText={50}
                        />
                    </div>
                    <div className="input-group">
                        <h4>Y (pixels)</h4>
                        <SliderFox
                            value={verticalLength}
                            setValue={setVerticalLength}
                            min={-50}
                            max={50}
                            minText={-50}
                            maxText={50}
                        />
                    </div>
                    <div className="input-group">
                        <h4>Blur (pixels)</h4>
                        <SliderFox
                            value={blurRadius}
                            setValue={setBlurRadius}
                            min={0}
                            max={50}
                            minText={0}
                            maxText={50}
                        />
                    </div>
                    <div className="input-group">
                        <h4>Spread (pixels)</h4>
                        <SliderFox
                            value={spreadRadius}
                            setValue={setSpreadRadius}
                            min={0}
                            max={50}
                            minText={0}
                            maxText={50}
                        />
                    </div>
                    <div className="input-group">
                        <h4>Color opacity</h4>
                        <SliderFox
                            value={opacityBox}
                            setValue={setOpacityBox}
                            min={0}
                            max={100}
                            minText={0}
                            maxText={1}
                        />
                    </div>
                    <div className="input-group">
                        <h4>Color</h4>
                        <PickColorRGB color={color} setColor={setColor} />
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
                        className="box-shadow__result"
                        style={styles.result}
                    ></div>
                </div>
            </div>
            <div className="generator__output">
                {`box-shadow: ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${
                    color.r
                }, ${color.g}, ${color.b}, ${
                    +(opacityBox * 0.01).toFixed(2) === 1.0
                        ? 1
                        : (opacityBox * 0.01).toFixed(2)
                })`}
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
