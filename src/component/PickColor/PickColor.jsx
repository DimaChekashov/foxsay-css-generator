import React, { useState } from 'react';

import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

function PickColor(props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  
  function handleClick() {
    setDisplayColorPicker(!displayColorPicker)
  };
  
  function handleClose() {
    setDisplayColorPicker(false)
  };

  function handleChange(color) {
    props.setColor({hex: color.hex});
  };

    const styles = reactCSS({
        'default': {
          color: {
            width: '100px',
            height: '45px',
            borderRadius: '2px',
            background: props.color.hex,
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
            background: props.color.hex,
          }
        },
      });

    return(
        <div className="pick-color">
            <div style={ styles.swatch } onClick={handleClick}>
            <div style={ styles.color } />
            </div>
            { displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={handleClose}/>
            <SketchPicker color={props.color} onChange={(color) => handleChange(color)} />
            </div> : null }
        </div>
    )
}

export default PickColor;