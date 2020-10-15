import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Panah from 'react-native-vector-icons/MaterialIcons'



export default class VideoItem extends Component {
    render() {
        let items = this.props.items;
        return (
            <View style={styles.list}>
                        <View style={styles.kotakSkill}>
                    
                            <Icons name={items.iconName} color={'#003366'} size={120}  style={styles.icon}/>
                    
                            <View style={styles.isi}>
                                <Text style={{color:'#003366', fontWeight:'bold', fontSize:24}}>{items.skillName}</Text>
                                <Text style={{color:'#3EC6FF', fontWeight:'bold'}}>{items.categoryName}</Text>
                                <Text style={{color:'#FFFFFF', fontWeight:'bold', fontSize:48, textAlign:'right'}}>{items.percentageProgress}</Text>
                            </View>
                            <View style={styles.panah}>
                            <Panah name={'keyboard-arrow-right'} color={'#003366'} size={100} solid />
                            </View>
                        </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
kotakSkill:{
    flexDirection:'row',
    backgroundColor:'#B4E9FF',
    marginVertical:5,
    borderRadius:10,
},
list:{
    flex:1,
},
panah:{
    marginVertical:20
},
isi:{
    width:145
},
icon:{
    marginHorizontal:10,
    marginVertical: 5
}
})

