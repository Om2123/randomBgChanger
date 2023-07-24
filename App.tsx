import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
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
  const backColor = '#000000';

  const generateRandomColor = () => {
    // Generate three random numbers between 0 and 255.
    const random = Math.random();
  const r = Math.floor(random * 255);
  const g = Math.floor(random * 255);
  const b = 200;

  // Convert the numbers to hexadecimal format.
  const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return hex;
  };

  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(generateRandomColor());
  };

  return (
    <SafeAreaView style={[styles.container,{backgroundColor:color}]}>
      <StatusBar hidden={false} backgroundColor={color} />
      <View style={[styles.btnBack, {backgroundColor: color}]}>
        <TouchableOpacity onPress={handleClick} style={styles.btnBack}>
          <Text style={styles.buttonTxt}>Press me !!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    padding: 30,

    color: 'white',
  },
  buttonTxt: {
    color: 'black',
    backgroundColor: 'white',
    padding: 23,
    borderRadius: 17,
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
