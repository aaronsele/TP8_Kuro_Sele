import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: '#e0f7fa' }]}> 
      <Text style={styles.title}>Ingresá tus datos</Text>
      <TextInput placeholder="Nombre" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Teléfono" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Button title="Enviar" onPress={() => navigation.navigate('Detalle', { name, phone })} />
    </View>
  );
}

function DetailsScreen({ route }) {
  const { name, phone } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: '#e0f7fa' }]}> 
      <Text style={styles.title}>Datos Recibidos:</Text>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Teléfono: {phone}</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Detalle" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


function PerfilScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#fce4ec' }]}> 
      <Text style={styles.title}>Perfil</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <Button title="Actualizar" onPress={() => {}} />
    </View>
  );
}

function FotoPerfilScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#fce4ec' }]}> 
      <Text style={styles.title}>Tu Foto</Text>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: 150, height: 150 }} />
    </View>
  );
}

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Foto" component={FotoPerfilScreen} />
    </Stack.Navigator>
  );
}


function NoticiasScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#fff3e0' }]}> 
      <Text style={styles.title}>Noticias</Text>
    </View>
  );
}

function DetalleNoticiaScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#fff3e0' }]}> 
      <Text style={styles.title}>Detalle de Noticia</Text>
    </View>
  );
}

function NoticiasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Noticias" component={NoticiasScreen} />
      <Stack.Screen name="Detalle Noticia" component={DetalleNoticiaScreen} />
    </Stack.Navigator>
  );
}


function AjustesScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#ede7f6' }]}> 
      <Text style={styles.title}>Ajustes</Text>
      <Button title="Guardar" onPress={() => {}} />
    </View>
  );
}

function MasOpcionesScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#ede7f6' }]}> 
      <Text style={styles.title}>Más Opciones</Text>
    </View>
  );
}

function AjustesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ajustes" component={AjustesScreen} />
      <Stack.Screen name="Opciones" component={MasOpcionesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Inicio':
                iconName = 'home';
                break;
              case 'Perfil':
                iconName = 'person';
                break;
              case 'Noticias':
                iconName = 'newspaper';
                break;
              case 'Ajustes':
                iconName = 'settings';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Perfil" component={PerfilStack} />
        <Tab.Screen name="Noticias" component={NoticiasStack} />
        <Tab.Screen name="Ajustes" component={AjustesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    width: '100%',
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    marginVertical: 6,
  },
});
