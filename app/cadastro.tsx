import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity} from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
       <Image style={styles.img} source={require('../assets/hellokitty.png')}></Image>
      <Text style={styles.titulo}>Voltar para tela de home!</Text>
      <TextInput style={styles.input}placeholder="Nome"></TextInput>
      <TextInput style={styles.input}placeholder="E-mail"></TextInput>
      <TextInput style={styles.input}placeholder="data de nascimento"></TextInput>
      <TextInput style={styles.input}placeholder="Cpf"></TextInput>
      <TouchableOpacity style = {styles.button} >salvar</TouchableOpacity>
      <TouchableOpacity style = {styles.button} >voltar</TouchableOpacity>
      <Link href="/home">Home</Link>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
  },
  input:{
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    
  },
  link:{
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f49ac1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#f49ac1',
  },
  img:{
    justifyContent: 'center',
  },
 button:{
  backgroundColor: 'transparent',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#f49ac1',
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginTop: 10,
  shadowColor: '#f49ac1',
 }
});
