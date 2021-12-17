import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = {
    orange: "#FFC700",
    darkGray: "#525252",
    gray: "#6C6C6C",
    lightGray: "#9E9E9E",
    while: "#E1E1E1",
    black: "#000000",

}

const theme = StyleSheet.create({
    container: {
        height: 404,
        flex: 1,
        justifyContent: "flex-start",
        paddingVertical:20,
        padding: 5,
        backgroundColor: colors.darkGray
    },

    scrollContainer: {
        padding: 10,
    },

    // Movie Card

    movieCard: {
        width: "100%",
        backgroundColor: colors.gray,
        borderRadius: 5,
        shadowColor: colors.black,
        elevation: 5,
        marginVertical: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-around"
    },

    movieContainer: {
        flex:1,
        backgroundColor: colors.darkGray
    },

    movieImg:{
        width:"100%",
        height: 230,
        marginTop: 26,
    },

    movieLoading:{
        marginTop: "50%"
    },

    //Modal
    modalItem:{
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 8, 
        marginVertical: 5, 
        borderRadius: 5,
    },

    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000088",
        alignItems: "center",
        justifyContent: "center"

    },

    modalContent:{
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
        backgroundColor: colors.while,
        borderRadius: 10,
        padding: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    // Login card 
    loginCard: {
        width: "100%",
        height: "98%",
        padding: 20,
        backgroundColor: colors.gray,
        borderRadius: 5,
        shadowColor: colors.black,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    form: {
        marginVertical: 10,
    }, 

    primaryButton: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },

    textInput: {
        width: "100%",
        height: 50,
        backgroundColor: colors.while,
        borderRadius: 4,

        paddingLeft: 15,
        fontSize: 18,
    },

    textInputPassword: {
        width: "100%",
        height: 50,
        backgroundColor: colors.while,
        borderRadius: 4,
        paddingLeft: 15,
        fontSize: 18,
        marginBottom: 90,
        marginTop: 20,
    },

    //Search input
    searchCard: {
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 7,
        backgroundColor: colors.gray,
        borderRadius: 5,
        shadowColor: colors.black,
        elevation: 5,
        marginVertical: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "center",
    },

    searchInput: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.while,
        borderRadius: 4,
        padding: 12,
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    // Movie details

    detailsContainer: {
        padding: 10,
        paddingBottom:20,
        flex: 1,
        backgroundColor: colors.darkGray,
    },

    detailCard: {
        width: "100%",
        backgroundColor: colors.gray,
        borderRadius: 5,
        shadowColor: colors.black,
        elevation: 5,
        padding: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20,
    },

    movieImageContainer:{
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
    },

    movieImage: {
        width: 350,
        height: 200,
    },

    movieContainerSynopsis:{
        borderWidth: 1,
        borderRadius:10,
        borderColor:colors.while,
        padding: 10,
    }

});

const admin = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.darkGray
    },

    addButton:{
        width: "100%",
        height: 50,
        backgroundColor: colors.gray,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",        
    },
    
})


const nav = StyleSheet.create({

    leftText: {
        color: colors.black,
        fontWeight: 'bold',
        marginLeft: 18,
        fontSize: 24
    },

    drawer: {
        width: 100,
        height: 30,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

});

const text = StyleSheet.create({

    movieTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginHorizontal: 20,
        marginTop: 10,
        color: "#ffffff"
    },

    movieYear: {
        fontWeight: "bold",
        marginHorizontal: 18,
        fontSize: 16,
        color: colors.orange,
    },

    movieSubTitle: {
        fontWeight: "normal",
        fontSize: 14,
        marginHorizontal: 18,
        color: "#ffffff",
        marginBottom: 30,
    },

    movieDetailTitle: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 10,
        color: "#ffffff"
    },

    movieDetailYear: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.orange,
    },

    movieDetailSubTitle: {
        fontWeight: "normal",
        fontSize: 14,
        color: "#ffffff",
        marginBottom: 20,
    },

    movieDetailSynopsis:{
        color: colors.lightGray,
        lineHeight: 20,
        fontSize: 16,
        textAlign:"justify",
    },

    loginTitle: {
        marginLeft:'31%',
        fontSize: 42,
        fontWeight: 'normal',
        color: colors.while,
        marginBottom: 20,
        marginTop: 60,
    },

    textButtonLogin: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
    },

    buttonLogoutText: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },

    //Modal

    modalText: {
        fontSize: 15,
        fontWeight: "bold"
    }

});

export { colors, theme, nav, text, admin }