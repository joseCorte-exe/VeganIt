import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { ButtonMy } from '../components/ButtonMy';

import { style } from '../styles/style';

export function PhotoInputPage() {
    return (
        <View style={style.containerLogin} >
            <Text style={style.title} >VeganIt</Text>
            {
                PhotoInput() 
            }
            <ButtonMy title='Proximo' />
        </View>
        
    );
}

export function PhotoInput() {
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
      }
      
    return (
        <View>
            <Text>Selecionar Imagem (Opcional):</Text>
            <TouchableOpacity onPress={openImagePickerAsync} style={style.imgInput}>
                <View style={style.imgInputIcon} />
            </TouchableOpacity>
        </View>
    );
}
