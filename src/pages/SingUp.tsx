import React from 'react';
import { Text, View } from 'react-native';
import { ButtonMy } from '../components/ButtonMy';
import { Input } from '../components/Input';

import { style } from '../styles/style'; 

export function SingUp() {
    return(
        <View style={style.containerLogin}>
            <Text style={style.title} >VeganIt</Text>
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <ButtonMy title="Proximo" />
        </View>
    );
}
