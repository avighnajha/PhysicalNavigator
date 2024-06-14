import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "./constants";

const styles = StyleSheet.create({
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
});

export default styles;