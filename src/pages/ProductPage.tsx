import React from 'react';

import { LessButton, Amount, AddButton, BuyButton } from '../components/InteractinFooter';
import { View, Text, ScrollView, Image } from 'react-native';
import { AddToggle } from '../components/addToggle';

import { content } from '../DB/Db';

import { style } from '../styles/style';

export function ProductPage() {
    let title:any = [], description:any = [], price:any = [];
    const allDescription = [ title, description, price ]

    title.push(
        content.map( values => {if(values.id==1){title=<Text style={[ style.textDescription, style.titleDescription ]}>{ values.title }</Text>}} )
    )

    description.push(
        content.map( values => {if(values.id==1){ description = <Text style={ style.textDescription }>{ values.description }</Text>}})
    )

    price.push(
        content.map( values => {if(values.id==1){price=<Text style={[ style.textDescription, style.descriptionPrice ]}>{ values.price }</Text>}})
    )

    return (
        <View style={{height: '100%'}}>
            <View style={ style.productDescription } >
                <Image style={ style.imgDescription } source={require('../assets/svg/HamburgeDeMato.png')} />
                <Text style={style.titleDescription} >
                    {
                        title
                    }
                </Text>
                <Text>
                    {
                        description
                    }
                </Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 22, alignSelf: 'flex-start'}}>
                    <Image style={{height: 12, width:12, marginRight: 5}} source={{uri: 'https://www.pngrepo.com/png/70679/180/male-user-shadow.png'}} />
                    <Text>Serve 1 pessoa</Text>
                </View>
                <Text style={[ style.descriptionPrice, {alignSelf: 'flex-start'} ]} >
                    {
                        price
                    }
                </Text>
            </View>
            <View style={[style.productContent, {alignSelf: 'center'}]}>
                <Text style={[style.adicionaisText, {marginBottom: 5}]} >Deseja adicionais?</Text>
                <Text style={style.textDescription} >Veja as opções abaixo</Text>
                <AddToggle title='carne vegana' price='+ R$ 5,00'/>
            </View>
            <View style={[style.interactionFooter]} >
                <Text style={[ style.adicionaisText, {color: '#2B7A4B', marginLeft: 20, marginBottom: 4}]} >Quantidade</Text>
                <View style={[{display: 'flex', flexDirection: 'row'}]}>
                    <LessButton/>
                    <Amount amount='1' />
                    <AddButton />
                    <BuyButton titlte='comprar' />
                </View>
            </View>
        </View>
    );
}
