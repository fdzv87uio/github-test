import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity , StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ setCurrentUser, setMessage, setCurrentUserList }) => {

    const [input, setInput] = useState()

    const getUser = () => {

        fetch(`https://api.github.com/users/${input}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json()

            })
            .then(function (myJson) {
                var res = myJson.message
                if (res === "Not Found") {
                    setMessage("Error: User Not Found!")
                    return;
                } else {
                    setCurrentUser(myJson)
                    setCurrentUserList([myJson])
                    setMessage("OK")
                    return;
                }

            }).catch((error) => {
                setMessage(`Error:${error}`)
                return;


            })
    }

    return (
        <>
        <View><Text style={styles.instructions}>Instructions: 
                    Insert a username in the form, then press the 'search'
                    button to get the user's profile data from github API. Once the data is displayed,
                    you can either generate a 2D bar graph, or delete the user from the sample set.
                 </Text></View>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    setMessage()
                    setCurrentUserList([])
                    setInput(text)
                }}
                value={input}
                placeholder="insert username here..."
                keyboardType="default"
            />
            
                <TouchableOpacity
                    style={styles.button}
                    title=""
                    onPress={() => { getUser() }}
                >
                    <Icon name="search" size={25} color="#ffffff" />
                </TouchableOpacity>
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height:90,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: "#111111",
       
    },
    input: {
        height:60,
        width:300,
        borderWidth: 1,
        borderColor: "#999999",
        borderRadius: 300/2,
        alignItems: "center",
        justifyContent: "center",
        color: "#999999",
        textAlign: "center",

    },
    instructions: {
        width:300,
        color: "#999999",
        textAlign: "justify"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        margin: 25,
        fontSize: 25,
        color: "#999999",
        backgroundColor: "#333333",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,

    },
    img :{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    }
})


export default SearchBar;