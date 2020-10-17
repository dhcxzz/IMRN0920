import React from "react"
import { Platform, 
    TouchableOpacity, 
    ScrollView,
    StyleSheet, 
    Image, 
    Text, 
    TextInput, 
    Button,
    KeyboardAvoidingView,
    View } from 'react-native'

const LoginScreen = ({navigation}) => {
    return(
        <KeyboardAvoidingView
        behavior = {Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <ScrollView>
                <View style={styles.containerView}>
                    <Image source={require('./logo.png')}/>
                    <Text style={styles.logintext}>Login</Text>
                    <View style={styles.forminput}>
                        <Text style={styles.formtext}>Username</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.forminput}>
                        <Text style={styles.formtext}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry={true}/>
                    </View>
                    <View style={styles.kotaklogin}>
                        <TouchableOpacity style={styles.btlogin}>
                            <Text style={styles.textbt}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.kotaklogin}>
                    <Text style={styles.autotext}>Atau</Text>
                    </View>
                    <View style={styles.kotaklogin}>
                        <TouchableOpacity style={styles.btreg}>
                            <Text style={styles.textbt}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                        <Button onPress={()=>navigation.navigate('MyDrawwer')}  title="Drawer"/>                
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                        <Button onPress={()=>navigation.navigate('TabBawah')}  title="BottomTab"/>                
                    </View>
                    

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }, logintext:{
        fontSize:24,
        marginTop:63,
        textAlign:'center',
        color:'#003366',
        marginVertical:20
    },
    formtext:{
        color:'#003366',
    }, autotext:{
        fontSize:20,
        color:'#3EC6FF'
    },
    forminput:{
        marginHorizontal:30,
        marginVertical:5,
        alignContent:'center',
        width:330
    },
    input:{
        height:40,
        borderColor:'#003366',
        padding:10,
        borderWidth:1
    },
    btlogin:{
        alignItems:'center',
        backgroundColor:'#3EC6FF',
        padding:10,
        borderRadius:16,
        marginHorizontal:30,
        marginTop:20,
        marginBottom:10,
        width:140
    }, btreg:{
        alignItems:'center',
        backgroundColor:'#000080',
        padding:10,
        borderRadius:16,
        marginHorizontal:30,
        marginTop:20,
        marginBottom:10,
        width:140
    }, textbt:{
        color:'#FFFFFF'
    }, kotaklogin:{
        alignItems:'center'
    }
})