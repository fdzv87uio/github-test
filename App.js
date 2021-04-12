
import React, { useState } from 'react';
import Header from "./components/header/header.component"
import SearchBar from "./components/search-bar/search-bar.component"
import UserDetails from "./components/user-details/user-details.component"
import Graph from "./components/graph/graph.component"
import { View, Text, StyleSheet } from "react-native"


export default function App() {

  const [currentUser, setCurrentUser] = useState()
  const [currentUserList, setCurrentUserList] = useState([])
  const [message, setMessage] = useState()
  const [showGraph, setShowGraph] = useState(false)


  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setCurrentUser={setCurrentUser} setMessage={setMessage} currentUserList={currentUserList} setCurrentUserList={setCurrentUserList} />
      <View><Text>&nbsp;</Text></View>
      {/* { message == "Error: User Not Found!" ? <NoResults /> : null} */}
      { message == "OK" ? <UserDetails setShowGraph={setShowGraph} setCurrentUser={setCurrentUser} setCurrentUserList={setCurrentUserList} currentUser={currentUser} /> : null}
      <View><Text>&nbsp;</Text></View>
      { currentUserList.length > 0 ? <Graph currentUserList={currentUserList} /> :null}     

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: 1500,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: "#111111",

  },

})

