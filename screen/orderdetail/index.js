import React, { useEffect, useState } from 'react';
import {
    View, Text, FlatList, StyleSheet, Image, TextInput,
    ActivityIndicator, RefreshControl, TouchableOpacity
} from 'react-native';
import apiUrl from "../../apiUrl";

const url_orders = `http://${apiUrl.tuan}:3000/orders/`;
const url_categories = `http://${apiUrl.tuan}:3000/category/`;

const OrderDetail = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [flatListKey, setFlatListKey] = useState(0);

    useEffect(() => {
        getOrdersfromAPI();
        getCategoriesFromAPI();
    }, []);

    useEffect(() => {
        filterOrders(searchQuery);
    }, [searchQuery, ordersData, selectedCategory]);

    const getOrdersfromAPI = async () => {
        try {
            setLoading(true);
            const response = await fetch(url_orders);
            const data = await response.json();
            const products = data.flatMap(order => Object.values(order).filter(item => typeof item === 'object'));
            console.log('Fetched Products:', products);
            setOrdersData(products);
            setFilteredData(products);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const getCategoriesFromAPI = async () => {
        try {
            const response = await fetch(url_categories);
            const data = await response.json();
            console.log('Fetched Categories:', data);
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    };

    const filterOrders = (query) => {
        console.log('Filtering with query:', query);
        console.log('Selected Category:', selectedCategory);

        let filtered = ordersData.filter(
            product => product.nameProduct && product.nameProduct.toLowerCase().includes(query.toLowerCase())
        );

        if (selectedCategory !== null) {
            filtered = filtered.filter(product => {
                console.log(`Product ${product.id} Category: ${product.category}, Matches: ${String(product.category) === String(selectedCategory)}`);
                return String(product.category) === String(selectedCategory);
            });
        }

        console.log('Filtered Products:', filtered);
        setFilteredData(filtered);
    };

    const handleCategorySelect = (category) => {
        console.log('Category Selected:', category);
        setSelectedCategory(category);
        setFlatListKey(prevKey => prevKey + 1);
        filterOrders(searchQuery); // Reapply filters with the new category
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await getOrdersfromAPI();
        setRefreshing(false);
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

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCategorySelect(item.id)}>
            <View
                style={[
                    styles.categoryButton,
                    selectedCategory === item.id && styles.selectedCategoryButton,
                ]}
            >
                <Text style={selectedCategory === item.id ? styles.selectedCategoryText : styles.categoryText}>{item.nameCategory}</Text>
            </View>
        </TouchableOpacity>
    );

    const CategoryFilter = () => (
        <View style={styles.categoryContainer}>
            <TouchableOpacity
                style={[
                    styles.categoryButton,
                    selectedCategory === null && styles.selectedCategoryButton,
                ]}
                onPress={() => handleCategorySelect(null)}
            >
                <Text style={selectedCategory === null ? styles.selectedCategoryText : styles.categoryText}>All</Text>
            </TouchableOpacity>
            <FlatList
                horizontal
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
            />
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
            <CategoryFilter />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    key={flatListKey}
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
        marginTop: 30,
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
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    categoryButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginRight: 10,
    },
    selectedCategoryButton: {
        backgroundColor: '#000',
    },
    categoryText: {
        color: '#000',
    },
    selectedCategoryText: {
        color: '#fff',
    },
});

export default OrderDetail;
