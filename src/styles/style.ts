import { ScrollView, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    txtInput: {
      width: 210,
      height: 40,
      borderRadius: 10,
      paddingLeft: 8,
      marginBottom: 10,
      backgroundColor: '#CFCFCF',
    },

    title: {
      fontSize: 48,
      fontWeight: "bold",
      color: "#32B768",
      marginBottom: 58,
    },

    containerLogin: {
      display: "flex",
      alignItems: "center",
    },

    button: {
      fontFamily: "Jost",
      display: "flex",
      width: 210,
      height: 40,
      marginTop: 108,
      marginBottom: 6,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#32B768"
    },

    imgInput: {
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 10,
      height: 210,
      backgroundColor: "#CFCFCF"
    },
    imgInputIcon: {
      height: 87,
      width: 87,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000000',
    },

    plateView: {
      width: 140,
      height: 140,
      borderRadius: 10,
      backgroundColor: '#CFCFCF',
    },

    welcome: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 53,
    },
    welcomeText: {
      fontSize: 48,
    },
    welcomeName: {
      color: '#52665A',
    },

    img: {
      height: 53,
      width: 53,
      borderRadius: 30,
      backgroundColor: '#C4C4C4'
    },

    cardapio: {
      marginTop: 38,
      marginBottom: 52,
      alignSelf: 'center',
      fontSize: 18,
    },

    categoty: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: "center",
      width: 100,
      height: 40,
      marginRight: 10,
      borderRadius: 8,
      backgroundColor: '#CFCFCF',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    categotyTitle: {
      alignSelf: 'center',
      textAlign: 'center'
    },

    menuContainer: {
      marginTop: 25,
    }
})