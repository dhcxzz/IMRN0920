import React, {Component} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {Text,
    StyleSheet,
    View,
    Image,
    FlatList
    } from 'react-native'

import Data from './skillData.json'
import Skill from './skill'


export default class SkillScreen extends Component {
    
render(){
    return(
        <View style={styles.container}>
        
          
            <Image style={styles.logo}source={require('./logo.png')}/>

            
            <View style={styles.profil}>
                <FontAwesome5 name={'user-circle'}
                    size={40} solid
                    color={'#3EC6FF'}
                    style={styles.icon}
                    />
                
                <View style={styles.profilKet}>
                    <View>
                        <Text>Hai,</Text> 
                    </View>
                    <View>
                        <Text style={styles.nama}>Subagio Astaman</Text> 
                    </View>
                </View>
            </View>

           
            <Text style={styles.skill}>SKILL</Text> 
            
            <View style={styles.boxKategori}>
                <View style={styles.kategori}>
                    <Text  style={{width:117,fontWeight:'bold',color:'#003366', fontSize:13 }}>Library/Framework</Text>
                </View>
                <View style={styles.kategori}>
                    <Text style={{width:130, fontWeight:'bold',color:'#003366', fontSize:13}}>Bahasa Pemrogaman</Text>
                </View>
                <View style={styles.kategori}>
                    <Text style={{width:68, fontWeight:'bold',color:'#003366', fontSize:14}}>Teknologi</Text> 
                </View>
            </View>
            
            <View style={{height:'90%', flex:1}} >
            <FlatList 
                data={Data.items}
                renderItem={(list)=><Skill items={list.item} />}
                keyExtractor={(unik)=>unik.id.toString()}
            />
           </View>
        </View>
    )}
}

    const styles = StyleSheet.create({
        container:{
            marginHorizontal:8,
            flex:1
        },
        logo:{
            position: 'absolute',
            width: 190,
            height: 51,
            left: 180,
            top: 0
        },
        profil:{
            flexDirection:'row',
            marginTop:58,
        },
        profilKet:{
            marginHorizontal:10,
            width:300
        },
        nama:{
            color:'#003366',
            fontSize: 16,
            fontFamily: 'Roboto'
        },
        skill:{
            fontSize:36,
            fontFamily:'Roboto',
            color:'#003366',
            borderBottomColor:'#3EC6FF',
            borderBottomWidth:5,
            marginTop:18
        },
        boxKategori:{
            flexDirection:'row',
            fontSize:12,
            justifyContent:'center',
            
        },
        kategori:{
            textAlign:'center',
            justifyContent:'center',
            backgroundColor:'#B4E9FF',
            marginHorizontal:1,
            borderRadius:10,
            padding:10,
            marginVertical:15,
        },
        kotakSkill:{
            flexDirection:'row'
        }
            
    })