import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';


const GoalImput = props =>{
    const [valorEntrada, setvalorEntrada] = useState('');
    const handlerInput = (texto) =>{
        setvalorEntrada(texto);
      }; 

      const addGoalHandler = ()=>{
        props.onAdditem(valorEntrada);
        setvalorEntrada('');
      }


    return(
      <Modal visible = {props.visible} animationType ='slide'>
        <View style={styles.input_1}>
        <TextInput 
        placeholder="input de teste"
         style={styles.texto} 
        onChangeText={handlerInput}
        value={valorEntrada}/>
        <View style={styles.ButtonPositioning}>

        <View style={styles.button}>
        <Button title="Add" onPress={addGoalHandler}/>
        </View>

        <View style={styles.button}>
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        </View>
        
        </View>
        </View>
      </Modal>
        );
}


const styles = StyleSheet.create({

    input_1:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
      },
      texto:{
        width:'80%', 
        borderColor:'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom:15
      },
      ButtonPositioning:{
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-between',
      },
      button:{
        width:'40%'
      }
})
export default GoalImput;

