import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { style } from '../styles/style';

export function AddButton() {
    return (
        <TouchableOpacity style={[style.toggle, {backgroundColor: '#32B768', marginLeft: 5}]}>
        </TouchableOpacity>
    );
}

export function LessButton() {
    return (
        <TouchableOpacity style={[style.toggle, {backgroundColor: '#C4C4C4', marginRight: 5}]}>
        </TouchableOpacity>
    );
}

export function Amount( props:any ) {
    return (
        <View style={style.amount} >
            <Text>{ props.amount }</Text>
        </View>
    )
}

export function BuyButton(props:any) {
    return (
        <TouchableOpacity style={[ style.buyButtton, {marginLeft: 15} ]}>
            <Text style={{color: '#F8F8FF', fontWeight: 'bold'}}>{props.title}</Text>
        </TouchableOpacity>
    )
}
