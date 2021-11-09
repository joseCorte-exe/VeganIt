import React from "react";
import { View, Text, TextInput } from 'react-native';

import { style } from "../styles/style";

export function Input( props:any ) {
    return (
        <TextInput 
            style={style.txtInput}
            placeholder={props.placeholder}
            />
    );
}

