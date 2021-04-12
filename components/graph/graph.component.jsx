import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"

import {
    StackedBarChart
} from "react-native-chart-kit";

const chartConfig = {
    backgroundColor: "#555555",
    backgroundGradientFrom: "#555555",
    backgroundGradientTo: "#555555",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}

const Graph = ({ currentUserList }) => {

    const [followers, setFollowers] = useState()
    const [gists, setGists] = useState()
    const [repos, setRepos] = useState()

    const [datum, setDatum] = useState({
        labels: ["Followers", "Gists", "Repos"],
        legend: [],
        data: [],
        barColors: ["#111111", "#333333", "#555555"]
    })

    const updateData = () => {
        if (currentUserList) {
            console.log(currentUserList)

            currentUserList.map((item) => {
                setFollowers(item.followers)
                setGists(item.public_gists)
                setRepos(item.public_repos)
                setDatum({
                    ...datum,
                    legend: [...datum.legend, item.login],
                    data: [...datum.data,
                    [item.followers],
                    [item.public_gists],
                    [item.public_repos]
                    ],
                })
            })
        }
    }

    useEffect(() => {
        updateData();
        

    }, [])

    return (
        <View style={styles.container}>
            <Text>&nbsp;</Text>
            <Text>&nbsp;</Text>
            <Text style={styles.text}>Sample Set Rankings</Text>
            <Text>&nbsp;</Text>
            <View style={styles.wrapper}>
                <StackedBarChart
                    style={styles.graph}
                    data={datum}
                    width={260}
                    height={260}
                    chartConfig={chartConfig}
                />
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        flexDirection: "column",
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 160,
        backgroundColor: "#111111",

    },
    graph: {
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        height: 300,
        width: 300,
        borderWidth: 1,
        borderColor: "#999999",
        borderRadius: 30,
        position: "relative",
        top: 10,
        alignItems: "center",
        color: "#999999",
        textAlign: "center",

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
        fontSize: 20
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


export default Graph;