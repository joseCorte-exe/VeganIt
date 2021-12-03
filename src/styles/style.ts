import { ScrollView, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    txtInput: {
      width: 210,
      height: 40,
      paddingLeft: 8,

      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: '#CFCFCF',
    },

    title: {
      marginBottom: 58,

      fontSize: 48,
      color: "#32B768",
      fontWeight: "bold",
    },

    containerLogin: {
      display: "flex",
      alignItems: "center",
      width: '100%',
      height: '100%',
      marginTop: 150,
    },

    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: 210,
      height: 40,
      marginTop: 108,
      marginBottom: 6,

      fontFamily: "Jost",

      borderRadius: 10,
      backgroundColor: "#32B768",
    },

    imgInput: {
      display: "flex",
      alignItems: "center",
      justifyContent: 'center',
      
      height: 210,
      
      borderRadius: 10,
      backgroundColor: "#CFCFCF"
    },
    imgInputIcon: {
      height: 87,
      width: 87,

      borderWidth: 1,
      borderRadius: 10,
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
      alignItems: "center",
      justifyContent: 'center',
      width: 100,
      height: 40,
      marginRight: 10,

      textAlign: 'center',
      textAlignVertical: 'center',

      borderRadius: 8,
      backgroundColor: '#CFCFCF',
    },
    categotyTitle: {
      alignSelf: 'center',
      textAlign: 'center'
    },

    menuContainer: {
      marginTop: 25,
    },

    addContainer: {
      display: 'flex',
      flexDirection: 'row',

      alignItems: "center",
      justifyContent: 'space-between',
      
      width: 320,
      height: 80,
      marginVertical: 10,
      paddingHorizontal: 18,

      borderRadius: 8,
      backgroundColor: '#C4C4C4',
    },
    toggle: {
      height: 35,
      width: 35,

      borderRadius: 6,
    },
    amount: {
      width: 40,
      height: 35,

      justifyContent: 'center',
      alignItems: "center",

      color: '#121414',
      fontWeight: 'bold',

      borderRadius: 6,
      backgroundColor: '#C4C4C4',
    },
    buyButtton: {
      height: 35,
      minWidth: 150,
      
      alignItems: 'center',
      justifyContent: 'center',
      
      paddingHorizontal: 20,

      borderRadius: 6,
      backgroundColor: '#32B768',
    },

    productDescription: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center',
      
      backgroundColor: '#CFCFCF',
      width: 390,
      height: 450,

      padding: 54,
    },   
    textDescription: {
      color: '#738078',
      fontWeight: '700'
      // fontFamily: "Jost",
    },
    titleDescription: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 19,

      marginTop: 34,
    },
    descriptionPrice: {
      color: '#2B7A4B',
      fontSize: 14,
      fontWeight: '700',

      marginTop: 16,
    },
    adicionaisText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    productContent: {
      paddingHorizontal: 30,
      paddingVertical: 18,
    },
    imgDescription: {
      width: 170,
      height: 120,
      marginTop: 80,
    },

    interactionFooter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      paddingHorizontal: 30,

      backgroundColor: '#F0F0F0',

      position: 'absolute',

      bottom: 0,
      height: 92,
    },

    buttonGroup: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',

      bottom: 0,
      
      height: 90,
      width: 390,
      marginRight: 15,

      backgroundColor: '#CFCFCF'
    },
    infoGroup: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 142,
      marginTop: 18,
    }
})

// new css for future purpose

export const colors = StyleSheet.create({

  primaryBg: {
    backgroundColor: '#32B768'
  },

  secondary: {
    backgroundColor: '#2B7A4B'
  },

  gray: {
    backgroundColor: '#C4C4C4'
  },

  box: {
    backgroundColor: '#52665A'
  },

  glassmorphism: {
    backgroundColor: '#738078'
  },

  background: {
    backgroundColor: '#F8F8FF'
  }

})


export const fonts = StyleSheet.create({

  logo: {
    color: '#32B768',
    fontSize: 48,
    fontWeight: 'bold'
  },
  
  userName: {
    color: '#738078',
    fontSize: 48,
    fontWeight: '500'
  },

  inputText: {
    color: '#000000', // opacity: 50%
    fontSize: 14,
    fontWeight: '400'
  },

  normal: {
    color: '#000000', // opacity: 100%
    fontSize: 14,
    fontWeight: '400'
  },

  description: {
    color: '#738078',
    fontSize: 14,
    fontWeight: '500'
  },

  title: {
    color: '#738078',
    fontSize: 18,
    fontWeight: '500'
  },

  price: {
    color: '#2B7A4B',
    fontSize: 14,
    fontWeight: '400'
  },

  amount: {
    color: '#2B7A4B',
    fontSize: 14,
    fontWeight: '500'
  },

})

export const buttons = StyleSheet.create({
  primary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#32B768',
    color: '#F8F8FF',

    fontWeight: 'bold',
    fontSize: 14,
    
    width: 210,
    height: 40
  },

  secondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#32B768',
    color: '#F8F8FF',

    fontWeight: 'bold',
    fontSize: 14,

    width: 170,
    height: 32,

    minPaddingVertical: 19
  },

  actionButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#32B768',
    color: '#000000',

    width: 38,
    height: 38
  },

  amountButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#C4C4C4',
    color: '#000000',

    width: 38,
    height: 38
  }
})
