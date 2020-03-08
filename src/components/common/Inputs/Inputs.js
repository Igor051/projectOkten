import React from "react";
import style from './Inputs.module.css'

function FormControl({input, meta, child, ...props}) {
    const hasError = meta.error && meta.touched;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export function Textarea(props) {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export function Input(props) {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}