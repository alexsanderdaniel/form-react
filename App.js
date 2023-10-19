import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from 'Form';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário da Empresa</Text>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
