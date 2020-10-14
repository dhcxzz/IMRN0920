import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    TextInput,
    Button} from 'react-native'

const AboutScreen = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.judul}>Tentang Saya</Text>
                <FontAwesome5 name={'user-circle'}
                size={200} solid
                color={'#EFEFEF'}
                style={styles.icon}
                />
                <Text style={styles.nama}>Subagio Astaman</Text>
                <Text style={styles.kerjaan}>Tukang Ketik Malam</Text>
                <View style={styles.kotak}>
                    <Text style={styles.juduldalam}>Portofolio</Text>
                    <View style={styles.kotakdalam}>
                        <View>
                            <FontAwesome5 name={'gitlab'} color={'#3EC6EF'} size={40} style={styles.icon}/>
                            <Text style={styles.textdalam}>@subagio</Text>
                        </View>
                        <View>
                            <FontAwesome5 name={'github'} color={'#3EC6EF'} size={40} style={styles.icon}/>
                            <Text style={styles.textdalam}>@subagio</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.kotak}>
                    <Text style={styles.juduldalam}>Hubungi Saya</Text>
                    <View style={styles.kotakdalamver}>
                        
                        <View style={styles.kotakdalamverhub}>
                            <View>
                                <FontAwesome5 name={'facebook'} color={'#3EC6EF'} size={40} style={styles.icon}/>
                            </View>
                            <View style={styles.textName}>
                                <Text style={styles.textdalam}>@subagio</Text>
                            </View>
                        </View>

                        <View style={styles.kotakdalamverhub}>
                            <View>
                                <FontAwesome5 name={'instagram'} color={'#3EC6EF'} size={40} style={styles.icon}/>
                            </View>
                            <View style={styles.textName}>
                                <Text style={styles.textdalam}>@subagio</Text>
                            </View>
                        </View>

                        <View style={styles.kotakdalamverhub}>
                            <View>
                                <FontAwesome5 name={'twitter'} color={'#3EC6EF'} size={40} style={styles.icon}/>
                            </View>
                            <View style={styles.textName}>
                                <Text style={styles.textdalam}>@subagio</Text>
                            </View>
                        </View>
                        
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        marginTop:64,
    },
    judul:{
        fontSize:36,
        fontWeight:'bold',
        color:'#003366',
        textAlign:'center'
    },
    icon:{
        textAlign:'center'
    },
    nama:{
        fontSize:24,
        fontWeight:'bold',
        color:'#003366',
        textAlign:'center'
    },
    kerjaan:{
        fontWeight:'bold',
        fontSize:16,
        color:'#3EC6CF',
        textAlign:'center',
        marginBottom: 7
    },
    kotak:{
        borderColor:'blue',
        borderRadius:10,
        borderBottomColor:'#000',
        padding: 5,
        backgroundColor:'#EFEFEF',
        marginBottom:9
    },
    kotakdalam:{
        borderTopWidth:2,
        borderTopColor:'#003636',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    kotakdalamver:{
        borderTopWidth:2,
        borderTopColor:'#003636',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    kotakdalamverhub:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom: 2
    },
    juduldalam:{
        fontSize:18,
        color:'#003366'
    },
    textdalam:{
        fontSize:16,
        fontWeight:'bold',
        color:'#003366',
        textAlign:'center'
    },
    input:{
        height:40,
        borderColor:'grey',
        borderWidth:1
    },
    textName:{
        justifyContent:'center',
        marginLeft:10
    }
})