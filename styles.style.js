import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "./constants";

const styles = StyleSheet.create({
  wlcTxt:{
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    btnContainerHead: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
      },
    btnContainer: {
        width: 200,
        height: 100,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
      },
    btn2: {
        width: 200,
        height: 50,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.small / 2,
        justifyContent: "center",
        alignItems: "center",
      },
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
      }),
    mapContainer:{
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightWhite,
        height: 500
    },
    map: {
        flex:0,
        width: 350,
        height: 500,
      },
    SignInText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    inputContainer:{
      backgroundColor: COLORS.lightWhite,
      width: "100%",
      height: 50,

      borderColor: "#e8e8e8",
      borderWidth: 1,
      borderRadius: 10,

      paddingHorizontal: 10,
      marginVertical: 5,
    },
    input:{
      fontSize:20,
      justifyContent: "center",
      alignItems: "center",
    },
    SignInRoot:{
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    },
    profileContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    profilePic:{
        width: 100,
        height: 100,
        borderRadius: 50,
        

    },
    emailText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.secondary,
        margin:10
    },
    myWalksContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    myWalksTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    Logout:{
      width: "100%"
    }
});

export default styles;