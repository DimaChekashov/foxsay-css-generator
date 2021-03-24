import React, { Component } from "react";
import "./BoxShadow.css";

export default class BoxShadow extends Component {
    inputs = [
        {
            label: "Horizontal Length",
            name: "horizontalLength",
        },
        {
            label: "Vertical Length",
            name: "verticalLength",
        },
        {
            label: "Blur Radius",
            name: "blurRadius",
        },
        {
            label: "Spread Radius",
            name: "spreadRadius",
        },
        {
            label: "Opacity Box",
            name: "opacityBox",
        },
    ];

    constructor() {
        super();

        this.state = {
            horizontalLength: 10,
            verticalLength: 10,
            blurRadius: 10,
            spreadRadius: 10,
            opacityBox: 0.75,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleInputChange(name, val) {
        if (!Number.isInteger(+val)) return;
        this.setState({
            [name]: +val || 0,
        });
    }
    handleKeyDown(name, key) {
        if (key === "ArrowUp") {
            this.setState({
                [name]: this.state[name] + 1,
            });
        } else if (key === "ArrowDown") {
            this.setState({
                [name]: this.state[name] > 0 ? this.state[name] - 1 : 0,
            });
        }
    }

    onCopyText() {
        let r = document.createRange();
        r.selectNode(document.querySelector(".generator__output"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Текст скопирован!");
    }

    render() {
        const {
            horizontalLength,
            verticalLength,
            blurRadius,
            spreadRadius,
            opacityBox,
        } = this.state;

        return (
            <>
                <div className="generator box-shadow">
                    <div className="generator__inputs">
                        {this.inputs.map(({ label, name }) => (
                            <div className="input-group" key={name}>
                                <h4>{label}</h4>
                                <input
                                    className="input-group__input"
                                    type="text"
                                    value={this.state[name]}
                                    onChange={(e) =>
                                        this.handleInputChange(
                                            name,
                                            e.target.value
                                        )
                                    }
                                    onKeyDown={(e) =>
                                        this.handleKeyDown(name, e.key)
                                    }
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
                <button className="btn-copy" onClick={this.onCopyText}>
                    Скопировать текст
                </button>
            </>
        );
    }
}