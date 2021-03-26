import React, { Component } from "react";
import "./BoxShadow.css";
import { onCopyText } from "../../utils/utils";

export default class BoxShadow extends Component {
    inputs = [
        {
            label: "Horizontal Length",
            name: "horizontalLength",
            eventKeyName: (name, key) => {
                this.handleKeyDown(name, key);
            },
        },
        {
            label: "Vertical Length",
            name: "verticalLength",
            eventKeyName: (name, key) => {
                this.handleKeyDown(name, key);
            },
        },
        {
            label: "Blur Radius",
            name: "blurRadius",
            eventKeyName: (name, key) => {
                this.handleKeyDown(name, key);
            },
        },
        {
            label: "Spread Radius",
            name: "spreadRadius",
            eventKeyName: (name, key) => {
                this.handleKeyDown(name, key);
            },
        },
        {
            label: "Opacity Box",
            name: "opacityBox",
            eventKeyName: (name, key) => {
                this.handleKeyDownOpacity(name, key);
            },
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
        this.handleKeyDownOpacity = this.handleKeyDownOpacity.bind(this);
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
                [name]: this.state[name] >= 100 ? 100 : this.state[name] + 1,
            });
        } else if (key === "ArrowDown") {
            this.setState({
                [name]: this.state[name] > -100 ? this.state[name] - 1 : -100,
            });
        }
    }
    handleKeyDownOpacity(name, key) {
        if (key === "ArrowUp") {
            this.setState({
                [name]:
                    this.state[name] >= 1
                        ? 1
                        : +(this.state[name] + 0.01).toFixed(2),
            });
        } else if (key === "ArrowDown") {
            this.setState({
                [name]:
                    this.state[name] > 0
                        ? (this.state[name] - 0.01).toFixed(2)
                        : 0,
            });
        }
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
                        {this.inputs.map(({ label, name, eventKeyName }) => (
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
                                    onKeyDown={(e) => eventKeyName(name, e.key)}
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
}
