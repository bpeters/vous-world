import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppAuth } from 'expo';

// This value should contain your REVERSE_CLIENT_ID
const { URLSchemes } = AppAuth;

function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
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
});

export default App;
