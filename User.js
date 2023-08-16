import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyBooks = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.username} adjustsFontSizeToFit numberOfLines={1}>
          @username
        </Text>
        <Text style={styles.subtitle}>{}0 books borrowed</Text>
        <View style = {styles.horizontalLine}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
  },

  username: {
    fontSize: 35,
    textAlign: 'left',
    margin: 10,

  },
  subtitle: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
  },

  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },

});


export default MyBooks;
