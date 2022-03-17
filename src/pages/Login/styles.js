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
  banner: {
    resizeMode: 'contain',
    width: '100%',
  },
  textEntry: {
    alignItems: 'center',
    login: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#fff',
    },
    description: {
      fontSize: 13,
      color: '#fff',
    },
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
  btnSubmit: {
    backgroundColor: '#E9A6A6',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    text: {
      paddingVertical: 8,
      paddingHorizontal: 24,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#1F1D36',
    },
  },
});

export default styles;
