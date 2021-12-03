import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { style } from '../styles/style';

export function AddToggle( props:any ) {
    return (
        <View style={ style.addContainer }>
            <View>
                <Text style={[ style.adicionaisText, {color: '#2B7A4B'}]}>{ props.title }</Text>
                <Text style={{color: '#738078', fontWeight: 'bold'}}>{ props.price }</Text>
            </View>
            <TouchableOpacity style={[style.toggle, {backgroundColor: '#32B768'}]}></TouchableOpacity>
        </View>
    )
}
