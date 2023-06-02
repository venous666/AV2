import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
       <Image style={styles.img} source={require('../assets/hellokitty.png')}></Image>
        <Text style={styles.titulo}>Hello kitty coffee</Text>
        <Text style={styles.text}> a ideia surgiu de uma Coffee to go que seja esteticamente fofa, possa agradar nossos clientes
        e juntar o melhor do mundo do café e da hello kitty! 
        abrace a idea, 
        de um presente a alguem especial.
        </Text>
    
      <Link href="/cadastro">ir para tela cadastro</Link>
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
    color:'#EDB8CB'
  },
  img:{
    justifyContent: 'center',
  },
  text:{
    fontSize:16,
    textAlign: 'center',
  }
});
