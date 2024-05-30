import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  Button,
} from "react-native";
import apiUrl from "../../apiUrl";

const url_orders = "http://" + apiUrl.tuan + ":3000/orders";

const History = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getOrdersFromAPI();
  }, []);

  const getOrdersFromAPI = () => {
    fetch(url_orders)
      .then((res) => res.json())
      .then((data) => {
        setOrdersData(data);
        setRefreshing(false);
      })
      .catch((ex) => {
        console.log(ex);
        setRefreshing(false);
      });
  };

  const sortedOrdersData = useMemo(() => {
    return ordersData.slice().sort((a, b) => a[0].id - b[0].id);
  }, [ordersData]);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <View>
        <Text style={{ color: "red" }}>ID bill: {item[0].id}</Text>
      </View>
    </View>
  );

  const handleRefresh = () => {
    setRefreshing(true);
    getOrdersFromAPI();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 60 }}>
        List of history order
      </Text>

      <FlatList
        data={sortedOrdersData}
        renderItem={renderItem}
        keyExtractor={(item) => item[0].id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default History;
