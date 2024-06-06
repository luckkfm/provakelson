import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StudyCardsProvider } from './src/contexts/StudyCardsContext';
import TelaEditCard from './src/screens/TelaEditCard';
import TelaTarefasVencimento from './src/screens/TelaTarefasVencimento';
import TelaListaCard from './src/screens/TelaListaCard';

const Stack = createStackNavigator();

const App = () => {
    return (
        <StudyCardsProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="CardList">
                    <Stack.Screen name="TelaListaCard" component={TelaListaCard} options={{ title: 'Study Cards' }} />
                    <Stack.Screen name="TelaEditCard" component={TelaEditCard} options={{ title: 'Editar Card' }} />
                    <Stack.Screen name="TelaTarefasVencimento" component={TelaTarefasVencimento} options={{title: 'Tarefa a Vencer'}} />
                </Stack.Navigator>
            </NavigationContainer>
        </StudyCardsProvider>
    );
};

export default App;
