import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { PlateView } from '../components/PlateView';
import { Profile } from '../components/Profile';

import { content, users, category } from '../DB/Db';

import { style } from '../styles/style';

export function HomePage() {
    let PlateViewVar = [], user:any = [], categoryView = [];

    categoryView.push() + categoryView.push(
        category.map( values => <Text style={ style.categoty } >{ values.title }</Text> )
    )

    PlateViewVar.push() + PlateViewVar.push(
        content.map( values => <PlateView title={ values.title } />)
    )

    users.map( value => {if( value.id == 1 ){user.push(<Text style={[ style.welcomeText, style.welcomeName ]} >{ value.name }</Text>)}} )

    return (
        <ScrollView style={ style.menuContainer } showsVerticalScrollIndicator={ false } >
            <View style={ style.welcome } >
                <View>
                    <Text style={ style.welcomeText } >Olá,</Text>
                    {
                        user
                    }
                </View>
                <Profile style={{}}/>
            </View>
            <Text style={ style.cardapio } >Cardapio</Text>
            <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } >
                {
                    categoryView
                }
            </ScrollView>
            <ScrollView horizontal={ false }  >
                <View>
                    {
                        PlateViewVar
                    }
                </View>
            </ScrollView>
        </ScrollView>
    );
}
