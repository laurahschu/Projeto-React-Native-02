import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetalhesPersonagem({ route, navigation }) {
    const { character } = route.params;

    const renderInfo = (label, value) => (
        <Text style={styles.text}>
            <Text style={styles.label}>{label}:</Text> {value}
        </Text>
    );

    const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

    const alturaFormatada = `${character.height} cm`;
    const pesoFormatado = `${character.mass} kg`;
    const cabeloFormatado = capitalize(character.hair_color);
    const peleFormatada = capitalize(character.skin_color);
    const olhosFormatados = capitalize(character.eye_color);
    const generoFormatado = capitalize(character.gender);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{character.name}</Text>
                <View style={styles.infos}>
                    {renderInfo('Altura', alturaFormatada)}
                    {renderInfo('Peso', pesoFormatado)}
                    {renderInfo('Cor do Cabelo', cabeloFormatado)}
                    {renderInfo('Cor da Pele', peleFormatada)}
                    {renderInfo('Cor dos Olhos', olhosFormatados)}
                    {renderInfo('Gênero', generoFormatado)}
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Naves', { character })}>
                        <Text style={styles.buttonText}>Ver Naves</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filmes', { character })}>
                        <Text style={styles.buttonText}>Ver Filmes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F5F5', 
        justifyContent: 'center',
    },
    box: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF', 
        borderWidth: 1,
        borderColor: '#DDDDDD', 
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#333333',
        marginTop: 100
    },
    infos: {
        marginVertical: 20,
    },
    text: {
        fontSize: 20,
        marginVertical: 10, 
        color: '#333333', 
    },
    label: {
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#97def7', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000', 
        textAlign: 'center',
    },
});
