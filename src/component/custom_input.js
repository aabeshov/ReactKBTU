import React from "react";

export default function CustomInput({type,name,value,onChange,placeholder,onFocus}){
    return(
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={onFocus}
        />
    )
}