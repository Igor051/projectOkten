import React from "react";
import style from './Inputs.module.css'
import {Field} from "redux-form";

function FormControl({input, meta, children}) {
    const hasError = meta.error && meta.touched;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export function Textarea(props) {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export function Input(props) {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, component, validate, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>
        <span>{text}</span>
    </div>
);