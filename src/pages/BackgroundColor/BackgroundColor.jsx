import React, { useState } from 'react';

import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

import { onCopyText } from "../../utils/utils";

import './BackgroundColor.scss';

function BackgroundColor() {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    });

    function handleClick() {
      setDisplayColorPicker(!displayColorPicker)
    };
    
    function handleClose() {
      setDisplayColorPicker(false)
    };

    function handleChange(color) {
      setColor(color.rgb);
    };
    const styles = reactCSS({
        'default': {
          color: {
            width: '100px',
            height: '45px',
            borderRadius: '2px',
            background: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
          result: {
            width: '100%',
            height: '100%',
            background: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
          }
        },
      });

    return (
        <div>
            <div className="generator background-color">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Выбор цвета</h4>
                        <div style={ styles.swatch } onClick={handleClick}>
                        <div style={ styles.color } />
                        </div>
                        { displayColorPicker ? <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={handleClose}/>
                        <SketchPicker color={color} onChange={(color) => handleChange(color)} />
                        </div> : null }
                    </div>
                </div>
                <div className="generator__result-wrapper">
                    <div className="background-color__result" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`background-color: rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`}
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

export default BackgroundColor;