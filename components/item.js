import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
    const GoalItem = props =>{
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listadeitens}>
             <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
        );
 };

 const styles = StyleSheet.create({
    listadeitens:{
        padding: 10,
        marginVertical: 3,
        color: 'black',
        backgroundColor: '#ccc',
        borderColor:'black',
        borderWidth:1
      }
 });

 export default GoalItem;