import React,{useState} from 'react'
import {StyleSheet,  TextInput,Button, View} from 'react-native';
const AppToDo = ({submitHandler}) => {

    const [text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }

    return ( 
        <View>
            <TextInput style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button color='coral' onPress={() => {submitHandler(text); setText('');}} title='add todo' />
        </View>
     );
}
 
export default AppToDo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
  })