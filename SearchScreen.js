import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

//need to 'npm install @expo/vector-icons' 
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to FRCS Library!</Text>
      <Text style={styles.subTitle}>Search for a book here</Text>
      <View style={styles.inputContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          onChangeText={handleSearchTextChange}
          value={searchText}
          style={styles.inputBox}
          placeholder="Enter Book Title"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 3,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputBox: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 10,
    color: 'black',
  },
  heading: {
    fontSize: 27,
    color: '#10148F',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    color: '#10148F',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
});

export default SearchScreen;




/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';



const SearchScreen = () => {
  const [searchText, setSearchText] = useState(''); 

  const handleSearchTextChange = (text) => {
    setSearchText(text); 
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.titleText}>Welcome to FRCS Library!</Text>
      <Text style = {styles.subTitleText}>Search for a book here</Text>
      <TextInput
        onChangeText={handleSearchTextChange}
        value={searchText}
        style={styles.inputBox}
        placeholder='Enter Book Title'
        placeholderTextColor='gray'
        backgroundColor='white'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    padding: 7,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginRight: 0,
    marginTop: 0,
    borderRadius: 5,
    color: 'black',
  },
  titleText: {
    fontSize: 27,
    color: '#10148F',
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 15,
    color: '#10148F',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
    backgroundColor: 'white',
  }
});

export default SearchScreen;*/