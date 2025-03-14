import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
import RenderizarDados from './renderizar';


export default function Formulario() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [acrescimo, setAcrescimo] = useState('');
  const[resultado,setResultado]= useState(null);
  const [mostrarDados, setMostrarDados] = useState(false);

  const handleCalculate = () => {
    const valorOriginal = parseFloat(valor);
    const aumento = parseFloat(acrescimo);
    const valorComAcrescimo = valorOriginal + (valorOriginal * aumento / 100);

    
    setResultado({
      nome,
      valor: valorOriginal.toFixed(2),
      acrescimo: aumento.toFixed(2),
      valorComAcrescimo: valorComAcrescimo.toFixed(2),
    });

    setMostrarDados(true); 
  };

  return (
    <View style={styles.container}>
      <Image
         style={styles.imagem}
         source={require('./assets/calculadora.png')}
       />
      <Text  style={styles.titulo}>Formulario</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='words'
      maxLength={30}
      value={nome}
      onChangeText={setNome}
      placeholder='digite o nome do produto'
      />
      <TextInput
       style={styles.input}
      placeholder='digite o valor original do produto'
      keyboardType="numeric"
      value={valor}
      onChangeText={setValor}
      />
       <TextInput
        style={styles.input}
      placeholder='digite o valor do acrescimo'
      keyboardType="numeric"
      value={acrescimo}
      onChangeText={setAcrescimo}
      />
   <Button
         title='Clique aqui para calcular'
         color={'#000'}
         onPress={handleCalculate}
        // onPress={()=>setMostrarDados(true)
        // }
       />
       
       {mostrarDados && resultado && (
        <RenderizarDados 
          nomep={resultado.nome} 
          valorp={resultado.valor} 
          acrescimop={resultado.acrescimo} 
          resultadop={resultado.valorComAcrescimo} 
        />
      )}
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2214ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    resizeMode: 'contain',
    width: 150, 
    height: 150, 
    marginRight: 20, 
    
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 20
  },
  titulo: {
    margin:10,
    fontSize:18,
    color: 'white'
  }
  
});
