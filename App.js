import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
          <Image source={require('./assets/favicon.png')} style={styles.img}/>
          <Text style={styles.titulo}>Login</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.box2}>
          <TextInput style={styles.inputs} placeholder="Email"></TextInput>
          <TextInput style={styles.inputs} secureTextEntry={true} placeholder="Senha"></TextInput>
        </View>
        <View style={styles.box3}>
          <Button color="pink" title={'Acessar'}/>
          <Text>Não possui uma conta? <Text style={styles.span}>faça inscrição!</Text></Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  span:{
    color: '#B473E0',
  },
  inputs: {
    backgroundColor: 'pink',
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 16,
  },

  imageBox:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img:{
    width: 48,
    height: 48,
    marginBottom: 16,
  },
  titulo:{
    fontSize: 32,
  },
  box:{
    gap: 20,
  },
  box2:{
    gap: 16,
  },
  box3:{
    gap: 12,
  },
});