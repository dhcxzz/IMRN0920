import React, {Component} from 'react';
import {
  Platform,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
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
            marginTop: 50,
            fontFamily: 'Montserrat',
          }}>
          Welcome
        </Text>
        <Text style={{marginLeft: 23}}>Sign in to continue</Text>

        <View style={styles.kotakInput}>
          <View style={{margin: 20}}>
            <Text style={styles.namaInput}>Email</Text>
            <TextInput style={styles.input} />

            <Text style={styles.namaInput}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />

            <Text style={{textAlign: 'right', paddingTop: 10}}>
              Forgot Password?
            </Text>

            <View style={{marginTop: 20, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.btreg}>
                <Text style={styles.textbt}>Sign In</Text>
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
                  width: 50,
                  fontFamily: 'Montserrat',
                  fontSize: 15,
                }}>
                -OR-
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <View style={styles.kotakLink}>
                <FontAwesome
                  name={'facebook-official'}
                  color={'#3B5998'}
                  size={30}
                />
                <Text style={styles.textLink}>Facebook</Text>
              </View>
              <View style={styles.kotakLink}>
                <Image
                  source={require('./google.png')}
                  style={{height: 25, width: 25}}
                />
                <Text style={styles.textLink}>Google</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;

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
  kotakLink: {
    borderWidth: 1,
    borderColor: '#E6EAEE',
    borderRadius: 6,
    width: 140,
    marginLeft: 5,
    padding: 10,
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  textLink: {
    marginHorizontal: 20,
  },
});
