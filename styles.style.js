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
    }
});

export default styles;