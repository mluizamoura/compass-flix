import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#000000',
  },
  greetingText: {
    color: '#FFFFFF',
    marginTop: '15%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'open sans',
  },
  userImage:{
    width: 40,
    height:40,
    borderRadius:20,
    bottom: 130,
    left: 290
  },
  greetingText__username: {
    color: '#E9A6A6',
  },
  textPopularMovies: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: '6%',
    marginBottom: '7%',
    fontFamily: 'open sans',
  },
  textDescription: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'open sans',
    fontWeight: '600',
  },
  containerFlatList: {
    backgroundColor: '#000000',
  },
  containerMovie: {
    height: '100%',
    width: 76,
    flexGrow: 1,
    marginBottom: 28,
    alignItems: 'center',
  },
  styleApiMovie: {
    width: 76,
    height: 90,
    borderRadius: 10,
    marginTop: '10%',
  },
  imgstyle: {
    width: '100%',
    height: 95,
    borderRadius: 10,
  },
  containerAvaluation: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  avaluationstyle: {
    flexDirection: 'row',
    fontSize: 9,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
    fontFamily: 'open sans',
  },
  icon: {
    color: '#EC2626',
    fontSize: 12,
  },
});

export default style;
