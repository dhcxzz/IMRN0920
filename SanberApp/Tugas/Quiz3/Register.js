import React from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
} from 'react-native';

const Register = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            marginLeft: 23,
            marginTop: 20,
            fontFamily: 'Montserrat',
          }}>
          Welcome
        </Text>
        <Text style={{marginLeft: 23}}>Sign up to continue</Text>

        <View style={styles.kotakInput}>
          <View style={{margin: 20}}>
            <Text style={styles.namaInput}>Name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.namaInput}>Email</Text>
            <TextInput style={styles.input} />
            <Text style={styles.namaInput}>Phone Number</Text>
            <TextInput style={styles.input} />
            <Text style={styles.namaInput}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.btreg}>
                <Text style={styles.textbt}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  width: 165,
                  fontFamily: 'Montserrat',
                }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    textAlign: 'center',
                    width: 50,
                    color: '#F77866',
                    fontFamily: 'Montserrat',
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kotakInput: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    elevation: 10,
  },
  input: {
    borderBottomColor: '#E6EAEE',
    borderBottomWidth: 2,
  },
  namaInput: {
    paddingTop: 20,
    fontFamily: 'Montserrat',
  },
  btreg: {
    alignItems: 'center',
    backgroundColor: '#F77866',
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    width: 260,
  },
  textbt: {
    color: '#FFFFFF',
    padding: 3,
    width: 55,
  },
});
