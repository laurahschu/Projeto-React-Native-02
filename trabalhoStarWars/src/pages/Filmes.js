// src/pages/Filmes.js
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Filmes({ route }) {
    const { character } = route.params;
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                setError(null);
                const filmesPromises = character.films.map(uri => axios.get(uri));
                const responses = await Promise.all(filmesPromises);
                setFilmes(responses.map(response => response.data));
            } catch (err) {
                console.error("Erro ao buscar filmes:", err);
                setError("Erro ao carregar filmes. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        };

        if (character.films.length > 0) {
            fetchFilmes();
        } else {
            setLoading(false);
        }
    }, [character]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#48CFCB" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorMessage}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filmes do Personagem</Text>
            <FlatList
                style={styles.list}
                data={filmes}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={styles.message}>O personagem não possui filmes registrados.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30, 
        backgroundColor: '#F5F5F5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333333',
    },
    list: {
        width: '100%',
    },
    card: {
        backgroundColor: '#48CFCB',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#000000',
        height: 50, // Diminuído para um botão menor
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginHorizontal: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 3,
        padding: 5, // Diminuído para um botão menor
    },
    cardTitle: {
        fontSize: 16, // Ajustado para corresponder ao tamanho menor do botão
        fontWeight: '500',
        color: '#F5F5F5',
    },
    message: {
        fontSize: 18,
        fontWeight: '400',
        color: '#666',
        textAlign: 'center',
        marginTop: 40,
        padding: 20,
    },
    errorMessage: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    }
});
