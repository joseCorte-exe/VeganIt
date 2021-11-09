import React from 'react';
import { View, Text, Image } from 'react-native';

import { style } from '../styles/style';

export function Profile() {
    return (
        <View style={ style.img } >
            <Image style={ style.img } source={{uri: 'https://media-exp1.licdn.com/dms/image/D4D35AQEXHrDSScRc6g/profile-framedphoto-shrink_200_200/0/1635006601924?e=1635908400&v=beta&t=ikGGhd2UZ64MbJIvO_NtjCHGwkykep2hVJOOLjUCcBE'}} />
        </View>
    );
}
