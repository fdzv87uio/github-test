import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet,  } from "react-native"

const Header = () => {


    return (
            <View style={styles.container}>
                <Text style={styles.header}>Github Stats</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:90,
        alignItems: 'center',
        justifyContent: 'center',
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