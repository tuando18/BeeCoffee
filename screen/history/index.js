import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import apiUrl from "../../apiUrl";

const url_orders = "http://" + apiUrl.tuan + ":3000/orders";

const History = () => {
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    getOdersfromAPI();
  }, []);
  const getOdersfromAPI = () => {
    fetch(url_orders)
      .then((res) => res.json())
      .then((data) => setOrdersData(data))
      .catch((ex) => console.log(ex));
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      {/* {Object.values(item).map((product, index) => ( */}
      <View>
        <Text style={{ color: "red" }}>ID bill: {item[`0`][`id`]}</Text>
        {/* <Text>{product.nameProduct}  Quantity: {item[`quantity`]}</Text>
                    <Text>Price: ${product.price}</Text> */}
      </View>
      {/* ))} */}
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 60 }}>
        List of history order
      </Text>
      <FlatList
        data={ordersData}
        renderItem={renderItem}
        keyExtractor={(item) => {
          item.id.toString();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default History;
