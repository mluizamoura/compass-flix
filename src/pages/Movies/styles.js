import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },



    backGroundMovie: {
        width: 420,
        height: 170.42,

        justifyContent: 'center',
        alignItems: 'center',
    },

    containerButtonBack: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 19,
        left: 20,
        backgroundColor: 'white',
        borderRadius: 40,
        width: 30,
        height: 30,
    },

    buttonBack: {
        color: 'black',
    },

    containerButtonStar: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 19,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 40,
        width: 30,
        height: 30,
    },
    buttonStar: {
        color: 'black',
    },

    detailsMovies: {
        flexDirection: 'row',
    },

    detaisMoviesTitle: {
        marginLeft: 10,
        width: 260,
        height: 120,
        alignItems: 'flex-start'

    },
    capaMovie: {
        position: 'relative',
        top: -35,
        marginLeft: 20,
        width: 116,
        height: 182,
        borderRadius: 8,
    },

    titleMovie: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        marginLeft: 16,
        marginTop: 15,


    },

    yearMovie: {
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        color: '#FFFFFF',
    },

    timeMovie: {
        fontSize: 7,
        color: 'white',
        fontFamily: 'Open Sans',

    },
    textAutor: {
        marginLeft: 16,
        color: 'white',
        fontSize: 8,
        fontFamily: 'Open Sans',
    },

    autorMovie: {
        fontFamily: 'Open Sans',
        fontSize: 8,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    datailRatedLiked: {
        marginTop: -90,
        marginLeft: 145,
        width: 260,
        height: 40,
        flexDirection: 'row',

    },

    ratedMovie: {
        marginLeft: 10,
        color: '#E9A6A6',
        fontSize: 30,

    },

    detailsRated: {

        width: 100,
        height: 50,
    },

    datailsLiked: {

        marginLeft: 31,
        width: 50,
        height: 50,
    },

    heartIcon: {
        color: 'red',
        alignSelf: 'center',
    },

    liked: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontSize: 10,
    },

    detailsDescription: {


        width: 380,
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 25,
    },


    descriptionMovie: {
        textAlign: 'justify',
        color: '#FFFFFF',
        fontSize: 12,
        width: 380,
        fontFamily: 'Open Sans'
    },

    elenco: {
        marginTop: 10,
        marginLeft: 20,
        paddingVertical: 3,
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        alignSelf: 'flex-start',
        width: 40,
        backgroundColor: '#9C4A8B',
        fontSize: 10,
        marginBottom: 5,
    },

    viewFLatList: {
        backgroundColor: 'black',
        width: 400,

    },

    imageFlatList: {
        marginLeft: 20,
        marginTop: 10,
        width: 35,
        height: 35,
        borderRadius: 50,
    },

    name: {
        color: 'white',
        fontSize: 15,
        marginLeft: 70,
        marginTop: -40,
    },

    character: {
        color: 'white',
        fontSize: 11,
        marginLeft: 70,
    },
});

export default styles 