import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as yup from 'yup';

const passwordSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(4, 'should be grater than 4')
    .max(16, 'shoudl be lesser than 16 char'),
});

//
export default function In() {
  const [password, setPassword] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [numbers, setNum] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charList = '';

    const upperCaseChars = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcedfghijklmnopqrstuwsxyz';
    const digitalChars = '0987654321';
    const specailChar = '!@#$%^&*()_+';

    if (upperCase) {
      charList += upperCaseChars;
    }
    if (lowerCase) {
      charList += lowerCaseChars;
    }
    if (numbers) {
      charList += digitalChars;
    }
    if (symbol) {
      charList += specailChar;
    }

    const passwordResult = createpassword(charList, passwordLength);

    setPassword(passwordResult);
    setIsGenerated(true);
  };
  const createpassword = (char: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * char.length);
      result += char.charAt(charIndex);
    }
    return result;
  };

  const reset = () => {
    setIsGenerated(false);
    setSymbol(false);
    setPassword('');
    setLowerCase(false);
    setUpperCase(false);
    setNum(false);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordSchema}
        onSubmit={values => {
          generatePasswordString(+values.passwordLength);
        }}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleReset,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <View>
            <View style={styles.took}>
              <Text style={styles.text}>Enter the password length</Text>
              {touched && errors.passwordLength && (
                <Text style={styles.errorText}>{errors.passwordLength}</Text>
              )}
              <TextInput
                keyboardType="numeric"
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                placeholder="Len"
                style={[styles.inputCol ,{fontSize:19 }]}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={{fontSize:24}} >Include numbers ?</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={numbers}
                onPress={() => setNum(!numbers)}
                fillColor="green"
                unfillColor='green'
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={{fontSize:24}}>Include symbol ?</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={symbol}
                onPress={() => setSymbol(!symbol)}
                fillColor="green"
                unfillColor='green'
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={{fontSize:24}}>Include upperCase ?</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
                fillColor="green"
                unfillColor='green'
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={{fontSize:24}}>Include lowerCase ?</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
                fillColor="green"
                unfillColor='green'
              />
            </View>

            <View style={styles.btnFrame}>
              <TouchableOpacity style={styles.btnF}>
                <Button title="submit" onPress={()=> handleReset()}></Button>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnF} disabled={!isValid}>
                <Button title='reset' onPress={()=> handleSubmit()}></Button>
                {/* <Text>Generate</Text> */}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.passwordFrame}>
        {isGenerated ? <Text style={styles.password}>{password}</Text> : null}
      </View>
    </View>
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    marginTop: 50,
    // marginLeft: 30,
    paddingLeft: 30,
    elevation: 9,
    justifyContent: 'space-evenly',
    backgroundColor: '#CAD5E2',
  },
  inputWrapper: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:40,
    marginVertical:20,

  },
  inputCol: {
     width:100,
     marginHorizontal:8,
      height:100,
  },
  errorText: {
    color:"red",
    fontSize:20,
    fontWeight:"bold",
  },
  btnFrame: {
      marginVertical:40,
      flex:1,

      flexDirection:"row",
      justifyContent:"space-between",

    },
  text: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  btnF:{
    marginVertical:4,
    marginHorizontal:4,
    width:170,
    height:100,
  },
  input: {
    width: 100,
    marginHorizontal: 5,
    fontSize: 17,
    height: 40,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 3,
    marginRight: 38,
    marginVertical: 29,
  },
  took: {
    flex: 1,
    marginTop:29,
  },
  output: {
    borderWidth: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginVertical: 90,
    height: 200,
  },
  password: {
    fontSize: 39,
    padding: 8,
    margin: 9,
    color: 'white',
  },
  passwordFrame: {},
});
