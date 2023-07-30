import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

export default function Chat() {
    const [data, setData] = useState([]);

    const [textInput, setTextInput] = useState("");

    const handleSubmit = async () => {
        const prompt = textInput;
        const options = {
            method: 'GET',
            url: 'https://chatgpt-api9.p.rapidapi.com/ask',
            params: {
                question: prompt,
            },
            headers: {
                'X-RapidAPI-Key': "RAPID_API_KEY",
                'X-RapidAPI-Host': 'chatgpt-api9.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData([...data, { type: "user", 'text': textInput }, { type: "bot", 'text': response.data.answer },]);
            setTextInput("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat AI</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles.body}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={{ fontWeight: "bold", color: item.type === 'user' ? 'green' : 'red' }}>{item.type === "user" ? "You: " : "Bot: "}</Text>
                        <Text style={styles.bot}>{item.text}</Text>
                    </View>
                )}
            />
            <TextInput
                style={styles.input}
                value={textInput}
                onChangeText={text => setTextInput(text)}
                placeholder="Ask me anything"
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#fffcc9",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
    },
    body: {
        backgroundColor: "#fffcc9",
        width: "100%",
        margin: 10,
        paddingRight: 10,
    },
    item: {
        flexDirection: "row",
        padding: 10
    },
    bot: {
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: "#ffc857",
        padding: 10,
        marginRight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: "90%",
        height: 60,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#ffc857",
        width: '90%',
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
    },
})