import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { content } from '../DB/Db';

import { style } from '../styles/style';

export function ProductPage() {
    let title:any = [], description:any = [], price:any = [];
    const allDescription = [ title, description, price ]

    title.push(
        content.map( values => {if(values.id==1){title=<Text>{ values.title }</Text>}} )
    )

    description.push(
        content.map( values => {if(values.id==1){<Text>{ description = values.description }</Text>}})
    )

    price.push(
        content.map( values => {if(values.id==1){price=<Text>{ values.price }</Text>}})
    )

    return (
        <View>
            <Text>
                {
                    title
                }
                {
                    description
                }
                {
                    price
                }
            </Text>
        </View>
    );
}
