import React, { Component } from "react";
import "./BorderRadius.css";

export default class BorderRadius extends Component {
    inputs = [
        {
            label: "top-left",
            name: "borderTopLeftRadius",
        },
        {
            label: "top-right",
            name: "borderTopRightRadius",
        },
        {
            label: "bottom-left",
            name: "borderBottomLeftRadius",
        },
        {
            label: "bottom-right",
            name: "borderBottomRightRadius",
        },
        {
            label: "width",
            name: "borderWidth",
        },
    ];

    constructor() {
        super();

        this.state = {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderWidth: 5,
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
        r.selectNode(document.querySelector(".border-radius-output"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }
    
    render() {
        const {
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
            borderWidth,
        } = this.state;

        return (
            <>
                <div className="border-radius">
                    <div className="border-radius__inputs">
                        {this.inputs.map(({ label, name }) => (
                            <div className="input-group" key={name}>
                                <h4>{label}</h4>
                                <input
                                    className="border-radius__input"
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
                    <div className="border-radius__output">
                        <div
                            className="border-radius-result"
                            style={{
                                borderTopLeftRadius: borderTopLeftRadius + "px",
                                borderTopRightRadius:
                                    borderTopRightRadius + "px",
                                borderBottomLeftRadius:
                                    borderBottomLeftRadius + "px",
                                borderBottomRightRadius:
                                    borderBottomRightRadius + "px",
                                border: borderWidth + "px solid #000000",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="border-radius-output">
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
                <button className="btn-copy-border" onClick={this.onCopyText}>
                    Скопировать текст
                </button>
            </>
        );
    }
}
