import {StatusBar, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  principalSContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    backgroundColor: '#CCE0EA',
  },
  titleText: {
    color: '#276583',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  genericTouchable: {
    width: 250, // Establece el ancho fijo que desees
    padding: 30,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  importListTouchable: {
    backgroundColor: '#74B681',
  },
  newListTouchable: {
    backgroundColor: '#74A3B6',
  },
  genericTouchableText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },

  //Home
  containerHeader: {
    width: 250, // Establece el ancho fijo que desees,
    height: 160,
    marginBottom: 10,
    backgroundColor: '#5491C4',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  titleHome: {
    fontWeight: 'bold',
    color: '#E2E7EA',
    fontSize: 20,
    textTransform: 'uppercase',
  },

  touchableAccion: {
    borderRadius: 10,
    width: 200,
    height: 40,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchableText: {
    color: '#D3D9DF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
  },

  containerItem: {
    width: 250, // Establece el ancho fijo que desees,
    height: 160,
    marginBottom: 10,
    backgroundColor: '#5491C4',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },

  item: {
    width: 250, // Establece el ancho fijo que desees,
    height: 160,
    marginBottom: 10,
    backgroundColor: '#BD7EC3',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  itemButton: {
    width: 100, // Establece el ancho fijo que desees,
    height: 30,

    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  itemButtonText: {
    color: '#F2E6F3',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  itemLabel: {
    color: '#EDE5EE',
    fontWeight: 'bold',
    fontSize: 11,
    textTransform: 'uppercase',
  },

  //Form
  inputStyles:{
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingBottom: -1,
  borderColor: "#838DA8"
  },
  itemButtonForm:{
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
   
  }

});
