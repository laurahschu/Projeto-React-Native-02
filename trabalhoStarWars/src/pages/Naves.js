// src/pages/Naves.js
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Naves({ route }) {
    const { character } = route.params;
    const [naves, setNaves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNaves() {
            try {
                if (character.starships.length === 0) {
                    setLoading(false);
                    return;
                }

                const navesPromises = character.starships.map(uri => axios.get(uri));
                const responses = await Promise.all(navesPromises);
                setNaves(responses.map(response => response.data));
            } catch (error) {
                console.error("Erro ao buscar naves:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchNaves();
    }, [character]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#48CFCB" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Naves do Personagem</Text>
            <FlatList
                style={styles.list}
                data={naves}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.message}>Este personagem não possui naves registradas.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40, 
        backgroundColor: '#F5F5F5', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333333',
    },
    list: {
        width: '100%',
    },
    card: {
        backgroundColor: '#48CFCB',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
        shadowOffset: { width: 3, height: 3 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 3, 
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#F5F5F5',
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
        textAlign: 'center',
        marginTop: 40, 
        padding: 20,
    },
});
