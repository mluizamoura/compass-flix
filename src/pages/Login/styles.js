import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  inputArea: {
    borderRadius: 35,
    marginBottom: 20,
    alignItems: 'center',
    
    
  },
  btnSubmit: {
    backgroundColor: '#E9A6A6',
    borderRadius: 35,
    alignItems: 'center',
    height: 35,
    width: 95,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  banner: {
    resizeMode:"cover",
    
    
  },

  textEntry: {
    alignItems: 'center',
    
    
  },

  logo: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -50,
    marginHorizontal: 0,
    
  },

  input: {
    
    backgroundColor: '#C4C4C459',
    borderRadius: 30,
    width: 243,
    height: 33,
    flexDirection: 'row',
    paddingLeft: 40,
    paddingBottom: 8,
    fontSize: 9,
    

  },
  userIcon: {
    padding: 10,
    right: 100,
    top: 35,
  },
  lockIcon: {
    right: 100,
    top: 25,
  },
});

export default styles;
