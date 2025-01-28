import { StatusBar } from "expo-status-bar";
import {View, Text, StyleSheet} from 'react-native';

export default function App(){
    return(
        <View style={styles.container}>
            <Text>Hello there</Text>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    }
})