import React, { Component } from "react";
import "./BorderRadius.css";

export default class BorderRadius extends Component {
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
    }

    handleInputChange(name, val) {
        if (!Number.isInteger(+val)) return;
        this.setState({
            [name]: val || 0,
        });
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
                        <h4>top-left</h4>
                        <input
                            className="border-radius__input"
                            type="text"
                            value={borderTopLeftRadius}
                            onChange={(e) =>
                                this.handleInputChange(
                                    "borderTopLeftRadius",
                                    e.target.value
                                )
                            }
                        />
                        <h4>top-right</h4>
                        <input
                            className="border-radius__input"
                            type="text"
                            value={borderTopRightRadius}
                            onChange={(e) =>
                                this.handleInputChange(
                                    "borderTopRightRadius",
                                    e.target.value
                                )
                            }
                        />
                        <h4>bottom-left</h4>
                        <input
                            className="border-radius__input"
                            type="text"
                            value={borderBottomLeftRadius}
                            onChange={(e) =>
                                this.handleInputChange(
                                    "borderBottomLeftRadius",
                                    e.target.value
                                )
                            }
                        />
                        <h4>bottom-right</h4>
                        <input
                            className="border-radius__input"
                            type="text"
                            value={borderBottomRightRadius}
                            onChange={(e) =>
                                this.handleInputChange(
                                    "borderBottomRightRadius",
                                    e.target.value
                                )
                            }
                        />
                        <h4>width</h4>
                        <input
                            className="border-radius__input"
                            type="text"
                            value={borderWidth}
                            onChange={(e) =>
                                this.handleInputChange(
                                    "borderWidth",
                                    e.target.value
                                )
                            }
                        />
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
            </>
        );
    }
}
