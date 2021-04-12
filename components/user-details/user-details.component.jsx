import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


const UserDetails = ({ setCurrentUser, currentUser , setCurrentUserList }) => {

    const [username, setUsername] = useState()
    const [name, setName] = useState()
    const [followers, setFollowers] = useState()
    const [gists, setGists] = useState()
    const [repos, setRepos] = useState()


    useEffect(() => {
        setUsername(currentUser.login)
        setName(currentUser.name)
        setFollowers(currentUser.followers)
        setGists(currentUser.public_gists)
        setRepos(currentUser.public_repos)

    }, [])


    if (username){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="user" size={25} />
                </TouchableOpacity>
                <Text style={styles.text}>
                    username: {username} {"\n"}
                    name: {name} {"\n"}
                    followers: {followers} -
                    gists: {gists} -
                    repos: {repos}
                </Text>
                <TouchableOpacity
    
                    style={styles.button}
                    onPress={() => {
                        setCurrentUser([])
                        setUsername()
                        setName()
                        setFollowers()
                        setGists()
                        setRepos()
                        setCurrentUserList([])

                    }}
                >
                    <Icon name="trash" size={24} color="#ffffff" />
                </TouchableOpacity>
                
            </View>
        )
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        flexDirection: "row",
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: "#111111",

    },
    input: {
        height: 60,
        width: 300,
        borderWidth: 1,
        borderColor: "#999999",
        borderRadius: 300 / 2,
        alignItems: "center",
        justifyContent: "center",
        color: "#999999",
        textAlign: "center",

    },
    text: {
        color: "#999999",
        textAlign: "justify",
        fontSize: 10
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        fontSize: 25,
        color: "#999999",
        backgroundColor: "#333333",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,

    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    }
})

export default UserDetails;