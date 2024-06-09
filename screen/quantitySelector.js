import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "./theme/ThemeContext"; // Import ThemeContext

const QuantitySelector = ({
  initialValue = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const { theme } = useContext(ThemeContext); // Use theme from ThemeContext

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
      <TouchableOpacity onPress={decreaseQuantity}>
        <Ionicons name="remove" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, marginHorizontal: 10, color: theme.colors.text }}>
        {quantity}
      </Text>
      <TouchableOpacity onPress={increaseQuantity}>
        <Ionicons name="add" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
