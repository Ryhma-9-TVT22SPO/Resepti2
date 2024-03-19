import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';
import { EDAMAM_APP_ID, EDAMAM_APP_KEY } from '@env';





const Search = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    
    

const fetchRecipes = async () => {
  try {
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`;
    console.log('URL:', url); // Log the constructed URL
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

const renderItem = ({ item }) => (
    <View style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
      <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
      <Text style={styles.recipeIngredients}>Ingredients:</Text>
      <FlatList
        data={item.recipe.ingredients}
        renderItem={({ item }) => <Text style={styles.ingredient}>{item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe Search</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Search for recipes..."
      />
      <Button title="Search" onPress={fetchRecipes} />
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
  

}


export default Search;

const styles = StyleSheet.create({


});