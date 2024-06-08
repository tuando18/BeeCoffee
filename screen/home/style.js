import { StyleSheet } from "react-native";

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background, // Thêm backgroundColor
    },
    innerContainer: {
      marginTop: 60,
      marginHorizontal: 20,
    },
    avt: {
      width: 50,
      height: 50,
      borderRadius: 30,
      marginStart: 10,
    },
    input: {
      width: "100%",
      height: 44,
      backgroundColor: theme.colors.card,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      marginVertical: 20,
      color: theme.colors.text, // Set text color
    },
    search: {
      flexDirection: "row",
    },
    imgProduct: {
      height: 120,
      width: 120,
      borderRadius: 10,
      alignSelf: "center",
      marginTop: 10,
    },
    boxProduct: {
      height: 270,
      width: 190,
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      marginRight: 20,
    },
    boxCategoryChoose: {
      width: 110,
      height: 30,
      marginVertical: 15,
      backgroundColor: theme.colors.primary,
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "center",
      marginRight: 15,
    },
    boxCategory: {
      width: 110,
      height: 30,
      marginVertical: 15,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "center",
      marginRight: 15,
    },
    selectedCategory: {
      backgroundColor: theme.colors.selectedCategory, // Màu sắc khi được chọn
    },
    productInf: {
      width: "60%",
    },
    iconAdd: {
      width: 40,
      height: 40,
      backgroundColor: theme.colors.iconAdd,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 60,
      marginEnd: 20,
    },
    addCart: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    content: {
      fontSize: 25,
      fontWeight: "bold",
      marginVertical: 20,
      color: theme.colors.text,
    },
    boxOffer: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      height: 200,
      backgroundColor: theme.colors.background,
      marginBottom: 20,
    },
    imgOffer: {
      height: 150,
      width: 150,
      borderRadius: 10,
      margin: 20,
    },
    item1: {
      width: "60%",
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

export default getStyles;
