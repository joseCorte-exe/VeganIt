import React from 'react';
import { View, Text } from 'react-native';
import { ButtonMy } from '../components/ButtonMy';

import { Input } from "../components/Input";

import { style } from '../styles/style';

export function LoginPage() {
    return (
        <View style={style.containerLogin}>
            <Text style={style.title} >VeganIt</Text>
            <Input placeholder={"Email"}></Input>
            <Input placeholder={"Senha"}></Input>
            <ButtonMy title={'Entrar'}/>
            <Text>ou crie sua conta</Text>
        </View>
    );
}
