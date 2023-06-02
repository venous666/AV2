import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/hellokitty.png')}></Image>
        <Text style={styles.titulo}>Hello kitty coffee</Text>
      <Text style={styles.text}> aqui fazendo seu cadastro é possível
       encomendar cafés da nossa loja de maneira agil e prática, cabe
      no bolso e na rotina.</Text>
      <Link href="/sobre">ir para a tela sobre!</Link>
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
    fontSize:20,
    color:'#EDB8CB',
    textAlign:'center'
    
  },
  img:{
    justifyContent: 'center',
  },
  text:{
    fontSize:16,
    justifyContent: 'center',
  }
});
