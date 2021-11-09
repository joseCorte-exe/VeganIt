import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import { style } from "../styles/style";

export function PlateView( prop:any ) {
    let content = {
        title: 'hamburge',
    }
    return (
        <TouchableOpacity style={ style.containerLogin }>
            <Text>{prop.title}</Text>
            <View style={ style.plateView }/>
        </TouchableOpacity>
    );
}
