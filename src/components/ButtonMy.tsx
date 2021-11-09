import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'

import { style } from '../styles/style';

export function ButtonMy( props:any ) {
    return (
        <TouchableOpacity 
            style={style.button}
        >
            <Text style={{color:"#FFF", fontWeight: 'bold',}} >Entrar</Text>
        </TouchableOpacity>
    );
}
