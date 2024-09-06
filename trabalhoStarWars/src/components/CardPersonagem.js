import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CardPersonagem({ personagem, irAteDetalhes }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={irAteDetalhes}>
                    <Text style={styles.buttonText}>{personagem.name}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        paddingHorizontal: 20,
      },
      card: {
        margin: 15,
        padding: 5,
        backgroundColor: 'black', 
        borderRadius: 15
      },
      button: {
        borderWidth: 2,
        padding: 9,
        width: 350,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#48CFCB',
        shadowOffset: { 
          width: 4,
          height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5
      },
      buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#F5F5F5',
      }

})