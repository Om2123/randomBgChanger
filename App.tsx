import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  
 
  return (
    <ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 50,
    elevation: 9,

    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 100,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    width: 100,
    height: 40,
  },
});

export default App;
