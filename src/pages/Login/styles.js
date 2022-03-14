import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  inputArea: {
    borderRadius: 35,
    marginBottom: 45,
    alignItems: 'center',
  },
  btnSubmit: {
    backgroundColor: '#E9A6A6',
    borderRadius: 35,
    alignItems: 'center',
    height: 35,
    width: 95,
    justifyContent:'center',
    color:'#1F1D36',
    alignSelf: 'center',
    
  },
  banner: {
    width: '100%',
  },

  textEntry: {
    marginTop: 30,
    alignItems: 'center',
    fontSize: 25,
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -50,
    marginHorizontal: 0,
  },

  input: {
    color: '#fff',
    backgroundColor: '#C4C4C459',
    marginBottom: 14,
    borderRadius:30,
    width: 243,
    height: 33,
    
  },
});

export default styles;
