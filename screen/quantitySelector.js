import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const QuantitySelector = ({
  initialValue = 1,
  onQuantityChange,
  textColor = "black",
  iconColor = "black",
}) => {
  const [quantity, setQuantity] = useState(initialValue);

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
        <Ionicons name="remove" size={24} color={iconColor} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, marginHorizontal: 10, color: textColor }}>
        {quantity}
      </Text>
      <TouchableOpacity onPress={increaseQuantity}>
        <Ionicons name="add" size={24} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
