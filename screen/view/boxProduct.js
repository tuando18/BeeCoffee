import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import React from "react";
import img2 from "../../assets/img2.jpeg";

const BoxProduct = ({ navigation }, props) => {
  const [img, setImg] = useState("");
  const handleImg = () => {
    if (img.length == 0) {
      alert("Some thing is wrong");
    } else {
      props.onImg(img);
      setImg("");
      Keyboard.dismiss;
    }
  };
  return (
    <View style={styles.boxProduct}>
      <TouchableOpacity
        onPress={() => {
          console.log("product button pressed");
          navigation.navigate("Product");
        }}
      >
        <Image style={styles.imgProduct} source={img2} />
      </TouchableOpacity>
      <View style={styles.addCart}>
        <View style={styles.productInf}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              marginStart: 12,
              fontWeight: "bold",
            }}
          >
            Cappuccino
          </Text>
          <Text style={{ fontSize: 10, marginTop: 7, marginStart: 13 }}>
            with chocolate
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              marginStart: 12,
              fontWeight: "bold",
            }}
          >
            $4,4
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.iconAdd}>
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoxProduct;

const styles = StyleSheet.create({
  productInf: {
    width: "60%",
  },
  iconAdd: {
    width: 40,
    height: 40,
    backgroundColor: "#055E38",
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginEnd: 10,
  },

  addCart: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgProduct: {
    height: 120,
    width: 120,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },

  boxProduct: {
    height: 230,
    width: 190,
    borderRadius: 10,
    backgroundColor: "#F3F3F3",
    marginRight: 20,
  },
});
