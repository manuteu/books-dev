import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Book({ navigation }) {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    AsyncStorage.getItem('books').then((data) => {
      if (data) {
        const book = JSON.parse(data);
        setBooks(book);
      }
    });
  }, []);

  const isValid = () => {
    if (title !== undefined && title !== '') {
      return true;
    }

    return false;
  };

  const onSave = async () => {
    console.log(`Title ${title}`);
    console.log(`Description ${description}`);

    if (isValid()) {
      console.log('Válido!');

      const id = Math.random(5000).toString();
      const data = {
        id,
        title,
        description,
        photo,
      };

      books.push(data);

      console.log(JSON.stringify(data));
      await AsyncStorage.setItem('books', JSON.stringify(books));
      navigation.goBack();
    } else {
      console.log('Inválido!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inclua seu novo livro</Text>

      <View style={styles.inputs}>
        <TextInput
          style={styles.inputText}
          placeholder="Título"
          placeholderTextColor="#2c3e50"
          value={title}
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Descrição"
          placeholderTextColor="#2c3e50"
          multiline={true}
          numberOfLines={4}
          maxLength={190}
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.camera}>
          <Icon name="photo-camera" size={36} style={{ color: '#fff' }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.saveButton,
            !isValid() ? styles.saveButtonInvalid : '',
          ]}
          onPress={onSave}
        >
          <Text style={styles.saveButtonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {},
  inputs: {
    marginTop: '50%',
  },
  inputText: {
    borderBottomWidth: 1,
    borderColor: '#f39c12',
    padding: 5,
    marginBottom: 20,
  },
  footer: {
    // marginTop: '40%',
    paddingVertical: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    backgroundColor: '#f39c12',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: '#f39c12',
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
    width: '80%',
  },
  saveButtonInvalid: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#95a5a6',
  },
});
