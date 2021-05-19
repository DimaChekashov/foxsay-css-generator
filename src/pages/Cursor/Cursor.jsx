import React, { useState } from 'react';
import { onCopyText } from "../../utils/utils";

import reactCSS from 'reactcss';
import Select from 'react-select'

import './Cursor.scss';

function Cursor() {
    const [cursor, setCursor] = useState('move');

    const cursorOptions = [
        { value: 'alias', label: 'alias' },
        { value: 'all-scroll', label: 'all-scroll' },
        { value: 'cell', label: 'cell' },
        { value: 'context-menu', label: 'context-menu' },
        { value: 'col-resize', label: 'col-resize' },
        { value: 'copy', label: 'copy' },
        { value: 'crosshair', label: 'crosshair' },
        { value: 'e-resize', label: 'e-resize' },
        { value: 'ew-resize', label: 'ew-resize' },
        { value: 'grab', label: 'grab' },
        { value: 'grabbing', label: 'grabbing' },
        { value: 'help', label: 'help' },
        { value: 'move', label: 'move' },
        { value: 'n-resize', label: 'n-resize' },
        { value: 'ne-resize', label: 'ne-resize' },
        { value: 'mesw-resize', label: 'mesw-resize' },
        { value: 'ns-resize', label: 'ns-resize' },
        { value: 'nw-resize', label: 'nw-resize' },
        { value: 'nwse-resize', label: 'nwse-resize' },
        { value: 'no-drop', label: 'no-drop' },
        { value: 'none', label: 'none' },
        { value: 'not-allowed', label: 'not-allowed' },
        { value: 'pointer', label: 'pointer' },
        { value: 'progress', label: 'progress' },
        { value: 'row-resize', label: 'row-resize' },
        { value: 's-resize', label: 's-resize' },
        { value: 'se-resize', label: 'se-resize' },
        { value: 'sw-resize', label: 'sw-resize' },
        { value: 'text', label: 'text' },
        { value: 'vertical-text', label: 'vertical-text' },
        { value: 'w-resize', label: 'w-resize' },
        { value: 'wait', label: 'wait' },
        { value: 'zoom-in', label: 'zoom-in' },
        { value: 'zoom-out', label: 'zoom-out' },
    ];

    const styles = reactCSS({
        'default': {
            result: {
                cursor: cursor,
            }
        }
    })
    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#3abb67;' : 'white'
        }),
        control: (provided) => ({
            ...provided,
        })
    }

    return(
        <div>
            <div className="generator text">
                <div className="generator__inputs">
                    <div className="input-group">
                        <h4>Value</h4>
                        <Select defaultValue={{ value: 'move', label: "move" }} options={cursorOptions} styles={selectStyles} onChange={(selectedOption) => setCursor(selectedOption.value)}/>
                    </div>

                </div>
                <div className="generator__result-wrapper">
                    <div className="cursor__result" style={styles.result}></div>
                </div>
            </div>
            <div className="generator__output">
                {`cursor: ${cursor};`}
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

export default Cursor;