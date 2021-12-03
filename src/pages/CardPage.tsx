import React from 'react';
import { View, Text, Image } from 'react-native';

import { BuyButton } from '../components/InteractinFooter';
import { LineInput, LineInputLittle } from '../components/LineInput';

import { style } from '../styles/style';

export function CardPage() {
    return (
        <View style={style.containerLogin}>
            <Text style={style.title}>VeganIt</Text>
            <Text style={[style.adicionaisText, {marginBottom: 29}]}>Cadastrar cartão</Text>
            <Image source={require('../assets/png/Card.png')} style={{height: 129, width: 230, marginBottom: 40}}/>
            <></>
            <LineInput placeholder="Nome" />
            <LineInput placeholder="Numero do cartão" />
            <View style={{display: 'flex', flexDirection: 'row', width: 295, justifyContent: 'space-around', marginBottom: 90,}}>
                <LineInputLittle placeholder="CVV" style={{width:80}} />
                <LineInputLittle placeholder="Validade" />
            </View>
            <BuyButton title="Cadastrar e adicionar"/>
        </View>
    )
}
