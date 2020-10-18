import React from 'react';
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
import Material from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
const Home = () => {
  return (
    <ScrollView style={{marginHorizontal: 15}}>
      <View style={{flex: 2, flexDirection: 'row', marginTop: 20}}>
        <View style={styles.search}>
          <Material name="search" size={20} color="#727C8E" />
          <View
            style={{
              borderEndWidth: 1,
              marginRight: 10,
              borderEndColor: '#848991',
            }}>
            <Text
              style={{
                width: 270,
                paddingTop: 3,
                paddingLeft: 15,
                color: '#848991',
                paddingBottom: 5,
              }}>
              Search Product
            </Text>
          </View>
          <Ion name="camera-outline" size={20} color="#727C8E" />
        </View>
        <FontAwesome
          name="bell-o"
          size={20}
          color="#727C8E"
          style={{marginLeft: 10, marginTop: 5}}
        />
      </View>
      <Image
        source={require('./Slider.png')}
        style={{
          height: 190,
          width: 382,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <View style={{flex: 5, flexDirection: 'row'}}>
        <View>
          <Image source={require('./man.png')} style={styles.icon} />
          <Text style={styles.iconNama}>Man</Text>
        </View>
        <View>
          <Image source={require('./woman.png')} style={styles.icon} />
          <Text style={styles.iconNama}>Woman</Text>
        </View>
        <View>
          <Image source={require('./kids.png')} style={styles.icon} />
          <Text style={styles.iconNama}>Kids</Text>
        </View>
        <View>
          <Image
            source={require('./home.png')}
            style={{
              height: 65,
              width: 65,
            }}
          />
          <Text
            style={{
              paddingHorizontal: 10,
              textAlign: 'center',
              paddingTop: 5,
              color: '#616D80',
              fontFamily: 'Montserrat',
              fontSize: 18,
            }}>
            Home
          </Text>
        </View>
        <View>
          <Image source={require('./more.png')} style={styles.icon} />
          <Text style={styles.iconNama}>More</Text>
        </View>
      </View>
      <View style={{flex: 3, flexDirection: 'row', marginBottom: 10}}>
        <Text style={{fontSize: 24, width: 110}}>Flash Sell</Text>
        <Text
          style={{paddingTop: 8, color: '#F89C52', fontSize: 12, width: 220}}>
          03.30.30
        </Text>
        <Text style={{width: 20, paddingTop: 8}}>All</Text>
        <Material
          name="keyboard-arrow-right"
          size={20}
          style={{paddingTop: 8, color: '#F89C52'}}
        />
      </View>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View
          style={{borderRadius: 5, backgroundColor: '#FFFFFF', elevation: 5}}>
          <Image
            source={require('./flash1.png')}
            style={{height: 100, width: 110}}
          />
          <Text>Tiare Handwash</Text>
          <Text>$12.22</Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: '#FFFFFF',
            elevation: 5,
            marginLeft: 15,
          }}>
          <Image
            source={require('./flash2.png')}
            style={{height: 100, width: 110}}
          />
          <Text>JBL Speaker</Text>
          <Text>$12.22</Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: '#FFFFFF',
            elevation: 5,
            marginLeft: 15,
          }}>
          <Image
            source={require('./flash3.png')}
            style={{height: 100, width: 110}}
          />
          <Text>Google Home</Text>
          <Text>$80.30</Text>
        </View>
      </View>
      <View style={{flex: 2, flexDirection: 'row', marginTop: 20}}>
        <Text style={{fontSize: 24, width: 330}}>New Product</Text>
        <Text style={{width: 20, paddingTop: 8}}>All</Text>
        <Material
          name="keyboard-arrow-right"
          size={20}
          style={{paddingTop: 8, color: '#F89C52'}}
        />
      </View>
      <View style={{paddingTop: 10, flex: 2, flexDirection: 'row'}}>
        <View>
          <Image
            source={require('./new1.png')}
            style={{width: 173, height: 150}}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Image
            source={require('./new2.png')}
            style={{width: 173, height: 150}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  search: {
    flex: 3,
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#848991',
  },
  icon: {
    height: 70,
    width: 70,
  },
  iconNama: {
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#616D80',
    fontFamily: 'Montserrat',
    fontSize: 18,
  },
});
