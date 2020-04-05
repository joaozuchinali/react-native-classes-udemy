import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

import GoalItem from './components/item';
import GoalImput from './components/imput';

export default function App() {
  
  const [listValores, setlistValores] = useState([]);
  const [EstadoModal, setEstadoModal] = useState(false);
  

  const addListaEntadas = itemexterno => {
    if(itemexterno.length === 0 ){
      return;
    }
    setlistValores(listValores =>[...listValores, 
      {id: Math.random().toString(), value: itemexterno}]);

      setEstadoModal(false);
  };
  const removeGoal = itemId => {
    setlistValores(listValores => {
      return listValores.filter((itematual) => itematual.id !== itemId)
    });
  };
  const cancelGoalHandler = () =>{
    setEstadoModal(false);
  };
  return (
    <View style={styles.tela}>
      <Button title="Adicionar novo elemento" onPress = {() => setEstadoModal(true)}></Button>
      <GoalImput visible={EstadoModal} onCancel = {cancelGoalHandler} onAdditem = {addListaEntadas}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={listValores} 
      renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoal} title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    padding: 50,
  },
  
  areadelistas:{
    marginTop:2
  }
});
