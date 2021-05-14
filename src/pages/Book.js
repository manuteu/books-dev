import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Book({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inclua seu novo livro</Text>

      <View style={styles.inputs}>
        <TextInput
          style={styles.inputText}
          placeholder="Título"
          placeholderTextColor="#2c3e50"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Descrição"
          placeholderTextColor="#2c3e50"
          multiline={true}
          numberOfLines={4}
          maxLength={190}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.camera}>
          <Icon name="photo-camera" size={36} style={{ color: '#fff' }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.saveButtonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
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
