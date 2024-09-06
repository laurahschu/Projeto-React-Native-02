// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaPersonagens from './src/pages/ListaPersonagens';
import DetalhesPersonagem from './src/pages/DetalhesPersonagem'; 
import Naves from './src/pages/Naves'; 
import Filmes from './src/pages/Filmes'; 
import Sobre from './src/pages/Sobre';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pacote de ícones

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // telas
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1C1C1C',
            shadowOpacity: 0.8, 
            shadowRadius: 4,
            elevation: 8, 
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#97def7', 
            fontSize: 22,
          },
          headerTintColor: '#FFD700', 
          headerBackTitleVisible: false, 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#97def7" style={{ marginLeft: 20 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
              <Text style={{ marginRight: 20, fontWeight: 'bold', color: '#97def7' }}>Sobre</Text>
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen 
          component={ListaPersonagens}
          name="ListaPersonagens"
          options={{
            title: 'Lista de Personagens',
            headerLeft: null, 
          }}
        />
        <Stack.Screen 
          component={DetalhesPersonagem}
          name="DetalhesPersonagem"
          options={{
            title: 'Detalhes do Personagem',
          }}
        />
        <Stack.Screen 
          component={Naves}
          name="Naves"
          options={{
            title: 'Naves',
          }}
        />
        <Stack.Screen 
          component={Filmes}
          name="Filmes"
          options={{
            title: 'Filmes',
          }}
        />
        <Stack.Screen 
          component={Sobre}
          name="Sobre"
          options={{
            title: 'Sobre',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
