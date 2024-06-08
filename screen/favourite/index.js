import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from '../theme/ThemeContext'; // Import ThemeContext
import apiUrl from "../../apiUrl";
import { useTranslation } from 'react-i18next';

const Favorite = () => {
  const [favoriteItems, setFavoriteItem] = useState([]);
  const [productUpdate, setProductUpdate] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const { theme } = useContext(ThemeContext); // Use theme from ThemeContext
  const { t } = useTranslation('favourite');

  const navigation = useNavigation();

  const url_api = `http://${apiUrl.tuan}:3000/products?isFavorite=1`;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.log("Bắt đầu load lại dữ liệu");

    setTimeout(() => {
      getFavoritesfromAPI();
      setRefreshing(false);
      console.log("Đã load xong");
    }, 1000);
  }, []);

  let url_Update;

  const getFavoritesfromAPI = async () => {
    try {
      let res = await fetch(url_api);
      let data = await res.json();
      setFavoriteItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoritesfromAPI();
  }, []);

  const handleRemoveFavorite = (id) => {
    url_Update = `http://${apiUrl.tuan}:3000/products/${id}`;
    console.log(url_Update);
    getOne(id);
  };

  const getOne = (id) => {
    fetch(`http://${apiUrl.tuan}:3000/products?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductUpdate(data);
        const updatedProduct = { ...data[0], isFavorite: false };

        console.log(updatedProduct);
        removeFavorite(updatedProduct);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const removeFavorite = (productFavorite) => {
    fetch(url_Update, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productFavorite),
    })
      .then((res) => {
        if (res.status === 200) {
          Alert.alert(t('favourite.notification'), t('favourite.deleteSuccess'));
          getFavoritesfromAPI();
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  const handleFavoriteItemPress = (item) => {
    navigation.navigate("aaa", {
      data: item.image,
      namePro: item.nameProduct,
      withwhere: item.description,
      money: item.price,
      favorite: item.isFavorite,
      id: item.id,
      category: item.category,
    });
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>{t('favourite.title')}</Text>

      {favoriteItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.favoriteItem}
          onPress={() => handleFavoriteItemPress(item)}
        >
          <Image
            style={styles.favoriteItemImage}
            source={{ uri: item.image }}
          />
          <View style={styles.favoriteItemInfo}>
            <Text style={[styles.favoriteItemName, { color: theme.colors.text }]}>{item.nameProduct}</Text>
            <Text style={[styles.favoriteItemDescription, { color: theme.colors.text }]}>
              {item.description}
            </Text>
            <Text style={styles.favoriteItemPrice}>$ {item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.favoriteItemRemoveButton}
            onPress={() => handleRemoveFavorite(item.id)}
          >
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
  favoriteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  favoriteItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  favoriteItemInfo: {
    flex: 1,
    marginHorizontal: 15,
  },
  favoriteItemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  favoriteItemDescription: {
    fontSize: 14,
    color: "#555",
  },
  favoriteItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: "#055E38"
  },
  favoriteItemRemoveButton: {
    padding: 10,
    borderRadius: 5,
  },
});

export default Favorite;
