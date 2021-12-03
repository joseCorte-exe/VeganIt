import React from "react";
import { View, Text, TextInput } from 'react-native';

// import { style } from "../styles/style";

export function LineInput( props:any ) {
    return (
        <TextInput 
            style={{borderColor:'black', borderBottomWidth: 1, marginTop: 29.5, width: 240}}
            placeholder={props.placeholder}
            />
    );
}

export function LineInputLittle( props:any ) {
    return (
        <TextInput 
            style={{borderColor:'black', borderBottomWidth: 1, width: 90, marginTop: 29.5}}
            placeholder={props.placeholder}
            />
    );
}

