import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import avatar1 from "../../assets/avt.jpeg";
import { useRoute } from "@react-navigation/native";
import apiUrl from "../../apiUrl";

const Home = ({ navigation }) => {
  const url_Category = "http://" + apiUrl.tu + ":3000/category";
  const url_Product = "http://" + apiUrl.tu + ":3000/products";

  const route = useRoute();
  const nameUserSend = route.params?.nameUserSend || "";

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [flatListKey, setFlatListKey] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFlatListKey((prevKey) => prevKey + 1);
    getDataProductfromAPI(category);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerLeft: () => null,
    });
  }, [navigation]);

  useEffect(() => {
    setFlatListKey((prevKey) => prevKey + 1);
    getDataProductfromAPI(category);
    getDataCategoryfromAPI();
    getDataProductfromAPI(selectedCategory);
  }, []);

  const getDataCategoryfromAPI = () => {
    fetch(url_Category)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const getDataProductfromAPI = (category) => {
    fetch(url_Product + "?category=" + category)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCategorySelect(item.id)}>
      <View
        style={[
          styles.boxCategory,
          selectedCategory == item.id && styles.selectedCategory,
        ]}
      >
        <Text>{item.nameCategory}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => (
    <View style={styles.boxProduct}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Product", {
            data: item.image,
            namePro: item.nameProduct,
            withwhere: item.description,
            money: item.price,
            favorite: item.isFavorite,
            id: item.id,
            category: item.category,
          });
          console.log("chuyuyền vào pro :", item.isFavorite);
        }}
      >
        <Image style={styles.imgProduct} source={{ uri: item.image }} />
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
            {item.nameProduct}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 7, marginStart: 13 }}>
            {item.description}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              marginStart: 12,
              fontWeight: "bold",
            }}
          >
            ${item.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            alert("add cart complete", "Notification");
          }}
        >
          <View style={styles.iconAdd}>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                alignSelf: "center",
                marginBottom: 3,
                marginLeft: 2,
              }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSpecialItem = ({ item }) => (
    <TouchableOpacity
      style={styles.boxOffer}
      onPress={() => {
        navigation.navigate("Product", {
          data: item.image,
          namePro: item.nameProduct,
          withwhere: item.description,
          money: item.price,
          favorite: item.isFavorite,
          id: item.id,
          category: item.category,
        });
        console.log("chuyuyền vào pro :", item.isFavorite);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.imgOffer} />
      <Text style={{ alignSelf: "center", fontSize: 19, width: "50%" }}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.flexRow}>
          <View style={styles.item1}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image style={styles.avt} source={avatar1} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
              {" "}
              Hello {nameUserSend}{" "}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.touchableOpacity}
          >
            <Ionicons
              name="cart"
              size={30}
              color="#055E38"
              style={styles.cartIcons}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TextInput
            placeholder="Search coffee"
            style={styles.input}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Category</Text>
        <FlatList
          horizontal
          data={category}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <FlatList
          key={flatListKey}
          horizontal
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.content}>Special offer</Text>
        <FlatList
          data={products}
          renderItem={renderSpecialItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
