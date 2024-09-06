// src/pages/Sobre.js
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Desenvolvedoras:</Text>

            <TouchableOpacity style={styles.card}>
                <View style={styles.alunoBox}>
                    <Text style={styles.infoTitle}>Laura Schu</Text>
                    <Text style={styles.info}>RA: 1134656</Text>
                    <Text style={styles.info}>E-mail: 1134656@atitus.edu.br</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.alunoBox}>
                    <Text style={styles.infoTitle}>Iasmin Souto</Text>
                    <Text style={styles.info}>RA: 1135075</Text>
                    <Text style={styles.info}>E-mail: 1135075@atitus.edu.br</Text>
                </View>
            </TouchableOpacity>
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
    info: {
        fontSize: 20,
        marginBottom: 10,
        color: '#333333', 
    },
    infoTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
    },
    card: {
        marginBottom: 20,
        width: '100%',
        padding: 2,
        backgroundColor: '#000000', 
        borderRadius: 15,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 5,
    },
    alunoBox: {
        backgroundColor: '#48CFCB', 
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000000', 
        marginBottom: 10
    },
});
