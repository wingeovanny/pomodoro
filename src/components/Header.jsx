import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const options = ["Pomodoro", "Short Break", "Long Break"]
export default function Header({currenTime, setCurrentTime, setTime}){

    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime( newTime * 60);
    }


    return ( <View style={{flexDirection: "row"}}>
        {options.map((item, index)=>(
            <TouchableOpacity 
                key={index} 
                onPress={()=>handlePress(index)}
                style={[
                        styles.itemStyle, currenTime != index && {borderColor:"transparent"}
                      ]}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        ))}
     
    </View>)


}

const styles= StyleSheet.create({
    itemStyle: {
        width: "33%",
        alignItems: "center",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 10,
        padding: 5,
        marginTop: 20,
        marginVertical: 10
    }
});