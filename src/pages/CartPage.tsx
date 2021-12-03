import React from 'react';
import { View, Text, Image } from 'react-native';
import { AddToggle } from '../components/addToggle';

import { content, users, category } from '../DB/Db';
import { BuyButton } from '../components/InteractinFooter';
import { LineInput, LineInputLittle } from '../components/LineInput';

import { style } from '../styles/style';
import { Profile } from '../components/Profile';

export function CartPage() {
    return (
        <View style={style.containerLogin}>
            <Profile style={{alignSelf: 'flex-end', marginRight: 40}} />
            <Text style={{fontSize: 18, fontFamily: ''}}>Carrinho</Text>
            <View style={{display: 'flex', flexDirection: 'column', alignSelf: 'flex-start', marginLeft: 49, marginVertical: 21}}>
                <Text style={ style.welcomeText } >Olá,</Text>
                <Text style={[ style.welcomeText, style.welcomeName ]} >José</Text>
            </View>
            <View>
                <Text style={{width: 266, textAlign: 'center'}}>Este é o seu carrinho,</Text>
                
                <Text style={{width: 280}}>aqui ficam guardados todos os seus pedidos</Text>
            </View>
            <View style={[style.productContent, {alignSelf: 'center'}]}>
                <AddToggle title='carne vegana' price='+ R$ 5,00'/>
            </View>
            <View style={style.infoGroup}>
                <Text style={{marginRight: 75}} >itens: {'3'}</Text>
                <Text>total: R${'99,99'}</Text>
            </View>
            <View style={style.buttonGroup} >
                <BuyButton title="pedir para viagem" />
                <BuyButton title="Consumir no local" />
            </View>
        </View>
    )
}
