// src/pages/ListaPersonagens.js
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPersonagem from '../components/CardPersonagem';

export default function ListaPersonagens({ navigation }) {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await obterPersonagens();
        };
        fetchData();
    }, []);

    const obterPersonagens = async () => {
        try {
            setLoading(true);
            setError(null); 
            const personagensIds = [2, 6, 20, 35, 40];
            const requests = personagensIds.map(id => axios.get(`https://swapi.dev/api/people/${id}/`));
            const responses = await Promise.all(requests);
            setPersonagens(responses.map(response => response.data));
        } catch (error) {
            console.error('Erro ao obter personagens: ', error);
            setError('Erro ao carregar personagens. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={"large"} />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text> 
          ) : (
            <FlatList
              style={styles.list}
              data={personagens}
              keyExtractor={(item) => item.url}
              renderItem={({ item }) => (
                <CardPersonagem
                  personagem={item}
                  irAteDetalhes={() =>
                    navigation.navigate("DetalhesPersonagem", {
                      character: item,
                    })
                  }
                />
              )}
            />
          )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5'
    },
    list: {
        width: "100%",
        marginTop: 30,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});
