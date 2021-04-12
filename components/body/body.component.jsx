import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet,  } from "react-native"

const Header = () => {



    useEffect(() => {



    }, [])

    return (
            <View style={styles.container}>
                <Text style={styles.header}>Github Stats</Text>
                {/* <Image style={styles.img} source={{uri:'http://randomuser.me/api/portraits/men/1.jpg'}} /> */}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        backgroundColor: "#111111",
       
    },
    header: {
        margin: 25,
        fontSize: 25,
        color: "#999999",

    },
    img :{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    }
})

export default Header;

{/* <SB.BodyWrapper>
                <Header />
                <View><Text>&nbsp;</Text></View>
                <SB.Instructions>
                    <Text>Instructions: 
                    Insert a username in the form, then press the 'search'
                    button to get the user's profile data from github API. Once the data is displayed,
                    you can 'save' the user's information in the sample set. Finally, You can either generate a graph,
                     or delete the user from the sample set by clicking the controls. </Text>
                </SB.Instructions>
                <View><Text>&nbsp;</Text></View>
                <SearchBar setCurrentUser={setCurrentUser} setCurrentUserList={setCurrentUserList} setMessage={setMessage}/>
                <View><Text>&nbsp;</Text></View>
                { message == "Error: User Not Found!" ? <NoResults /> : null}
                { message == "OK" ? <UserDetails  currentUser={currentUser} currentUserList={currentUserList} setCurrentUserList={setCurrentUserList} /> : null}
                <View><Text>&nbsp;</Text></View>
                { currentUserList.length > 0 ? <UserList  currentUserList={currentUserList} setCurrentUserList={setCurrentUserList} /> : null }
                <View><Text>&nbsp;</Text></View>
                 { currentUserList.length > 0 ? <Graph currentUserList={currentUserList} /> : null}
                <View><Text>&nbsp;</Text></View>
                <View><Text>&nbsp;</Text></View>
                <SB.Tail><Text>&nbsp;</Text></SB.Tail>
            </SB.BodyWrapper> */}