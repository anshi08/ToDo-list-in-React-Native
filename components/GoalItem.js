import { StyleSheet } from "react-native";
import { View,Text , Pressable} from "react-native"; // pressable == touchable

function GoalItem(props) {
     return(   
        <View style={styles.goalItem}>
        < Pressable 
        android_ripple={{color : '#dddddd'}} 
        onPress={()=>props.onDeleteItem(props.id)}
        >
        <Text style={styles.goalItem}>{props.text}</Text>
        </Pressable> 
        </View>   
      );
};

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 3 ,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color:'white'
     }
    });     