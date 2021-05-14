import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main({ navigation }) {
  const data = [
    {
      id: '1',
      title: 'Código Limpo',
      anotations: 'Livro muito bom!',
      read: false,
      photo: null,
    },
    {
      id: '2',
      title: 'C Completo e TOtal',
      anotations: 'Livro muito bom!',
      read: false,
      photo: null,
    },
    {
      id: '3',
      title: 'Biblia do PHP',
      anotations: 'Livro muito bom!',
      read: false,
      photo: null,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Leitura</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            navigation.navigate('Book');
          }}
        >
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: '20%',
    color: '#3498db',
  },
  headerButton: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
