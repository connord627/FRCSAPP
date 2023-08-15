import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native';



export default function Home() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the FRCS library!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Button Pressed')}>
        <Text style={styles.buttonText}>Search Books</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Button Pressed')}>
        <Text style={styles.buttonText}>My Books</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3c329c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
