import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, ActivityIndicator, RefreshControl } from 'react-native';
import apiUrl from "../../apiUrl";
const url_orders = "http://" + apiUrl.tuan + ":3000/orders/";

const OrderDetail = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getOrdersfromAPI();
    }, []);

    useEffect(() => {
        filterOrders(searchQuery);
    }, [searchQuery, ordersData]);

    const getOrdersfromAPI = async () => {
        try {
            setLoading(true); // Set loading to true before fetching data
            const response = await fetch(url_orders);
            const data = await response.json();
            setOrdersData(data);
            setFilteredData(data); // Initialize filteredData with full data
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error(error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    const filterOrders = (query) => {
        if (query) {
            const filtered = ordersData.reduce((acc, order) => {
                const products = Object.values(order).filter(product => typeof product === 'object' && product.nameProduct.toLowerCase().includes(query.toLowerCase()));
                return acc.concat(products);
            }, []);
            setFilteredData(filtered);
        } else {
            const allProducts = ordersData.reduce((acc, order) => {
                const products = Object.values(order).filter(product => typeof product === 'object');
                return acc.concat(products);
            }, []);
            setFilteredData(allProducts);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true); // Start the refreshing indicator
        await getOrdersfromAPI();
        setRefreshing(false); // Stop the refreshing indicator
    };

    const renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.productDetails}>
                <Text style={styles.text}>ID product: {item.id}</Text>
                <Text style={styles.text}>Name: {item.nameProduct}</Text>
                <Text style={styles.text}>Price: ${item.price}</Text>
                <Text style={styles.text}>Quantity: {item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Order Detail</Text>
            <View style={styles.search}>
                <TextInput
                    placeholder="Search by product name"
                    style={styles.input}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 60,
    },
    input: {
        width: "100%",
        height: 44,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
    },
    search: {
        flexDirection: "row",
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productDetails: {
        marginLeft: 10,
    },
    text: {
        marginBottom: 5,
    },
});

export default OrderDetail;
