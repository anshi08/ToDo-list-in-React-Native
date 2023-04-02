import { useState  } from "react";
import { StyleSheet ,View , TextInput , Button, Modal, Image} from "react-native";

function GoalInput(props) {  
    const[enteredgoalText,setenteredgoalText] = useState('');

    function goalInputHandler(enteredtext){       // fetching the data wht user is typing
        //console.log(enteredtext);
        setenteredgoalText(enteredtext);
    }; 

    function addGoalHandler() {
        props.onAddGoal(enteredgoalText);
        setenteredgoalText('');
    }
       return ( 
        <Modal visible={props.visible} animationType="slide">
    <View style = {styles.inputDirection}>
        <Image style={styles.Images} source={require ('../assets/images/target.png')}  />  
    <TextInput 
     style ={styles.textInput} placeholder='Your course goal !' 
     onChangeText={goalInputHandler}
     value={enteredgoalText}
     ></TextInput>
     <View style ={styles.Buttoncontainer}>
        <View style={styles.Button}>
    <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
    </View>
    <View style = {styles.Button}>
    
    <Button title='Add goal' onPress={addGoalHandler} color="#5e0acc"/>
    </View>
    </View>
  </View> 
  </Modal>
  )
};


export default GoalInput

const styles = StyleSheet.create({
    inputDirection: {
        flex: 1,
        flexDirection: "column", 
        justifyContent: "center",
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#311b6b',
      },
      textInput: {       //---------> style for giving border layout!!
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#120438",
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding:8
      },
      Buttoncontainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      Button: {
        width: '35%',
        marginHorizontal: 5
      },
      Images: {
         width: 100,
         height: 100,
         margin: 20 
      }
});