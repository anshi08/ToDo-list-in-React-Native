
import { useState } from 'react';
import { 
  Button, StyleSheet, Text, TextInput, View , ScrollView , FlatList, Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[ModalVisible , setModalVisible] = useState(false);
  const[Coursegoals,setCoursegoals]=useState([]);  
  
  function Modal () {
     setModalVisible(true);

  };

  function endgoalhandler() {
    setModalVisible(false);

  };

  function addGoalHandler(enteredgoalText){  
    if (enteredgoalText.trim() ==0)
    {
      console.log("fill");
    }
    // console.log(enteredgoalText);
    else{
    setCoursegoals((currentcoursegoal) => [
       ...currentcoursegoal,
       { text :enteredgoalText, id: Math.random().toString()} , //list of objects!!  1st -> key name pass here
      ]);
    }    
        // 2nd -> keyExtractor || pass id here...
        setModalVisible(false); 
    };  
  
  function deleteGoalHandler(id) {   //id uniquely identify kregi!!
    //console.log("DELETE");
    setCoursegoals((currentcoursegoal) => {
      return currentcoursegoal.filter((goal => goal.id !== id));
    });
  }
  return (
    <View style={styles.container}>
      <Button title='Add New Goal!' color="#5e0acc" onPress={Modal}/>
      <GoalInput visible={ModalVisible} onAddGoal = {addGoalHandler} onCancel={endgoalhandler} />  
      <View style={styles.goalscontainer} >
        <FlatList 
        data = {Coursegoals}
        renderItem = {(itemData) => {      //  internally object of coursegoal array
          return < GoalItem 
          text={itemData.item.text}
          id={itemData.item.id}
          onDeleteItem = {deleteGoalHandler}
          />
        }}  // and KE here !
        keyExtractor ={(item , index) => {
          return
            item.id;
        }
        }
        />    
      </View>  
   </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding : 50,
    paddingHorizontal: 16,
  },
  goalscontainer:{
    flex:5,
  },
})
