import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/reducers/userSlice";
import { DataTable } from "react-native-paper";

const UserApplication = () => {
  const [showUser, setShowUser] = useState(false);
  const handleShowAddUser = () => {
    setShowUser(!showUser);
  };
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    age: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (editingId) {
      dispatch(updateUser({ ...userForm, id: editingId }));
    } else {
      if (!userForm.firstname && !userForm.firstname && !userForm.username) {
        alert("Veillez ermplir tous les champs");
      } else {
        dispatch(addUser(userForm));
      }
    }
    setUserForm({ firstname: "", lastname: "", username: "", age: "" }); // Reset form
    setEditingId(null); // Reset editing state
    setShowUser(!showUser);
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setUserForm({
      firstname: userToEdit.firstname,
      lastname: userToEdit.lastname,
      username: userToEdit.username,
      age: userToEdit.age.toString(),
    });
    setEditingId(id);
    setShowUser(true);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users Application</Text>
      <View style={{ width: 100 }}>
        {!showUser && (
          <TouchableOpacity onPress={handleShowAddUser} style={styles.addButton}>
            <Text style={styles.buttonText}>Add User</Text>
          </TouchableOpacity>
        )}
      </View>
      {showUser && (
        <View>
          <Text style={styles.header}>
            {editingId ? "Edit User" : "Add User"}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setUserForm({ ...userForm, firstname: text })
            }
            value={userForm.firstname}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setUserForm({ ...userForm, lastname: text })
            }
            value={userForm.lastname}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setUserForm({ ...userForm, username: text })
            }
            value={userForm.username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserForm({ ...userForm, age: text })}
            value={String(userForm.age)}
            placeholder="Age"
            keyboardType="numeric"
          />
          <Button
            title={editingId ? "Update User" : "Add User"}
            onPress={handleSubmit}
          />
        </View>
      )}
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Nom</DataTable.Title>
          <DataTable.Title>Prenom</DataTable.Title>
          <DataTable.Title>Pseudo</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title></DataTable.Title>
        </DataTable.Header>
        {users.map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.firstname}</DataTable.Cell>
            <DataTable.Cell>{item.lastname}</DataTable.Cell>
            <DataTable.Cell>{item.username}</DataTable.Cell>
            <DataTable.Cell>{item.age}</DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity onPress={() => handleDeleteUser(item.id)} style={styles.actionButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity onPress={() => handleEditUser(item.id)} style={styles.actionButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    color: 'white',
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  actionButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    color: 'white',
    paddingHorizontal: 16,
    borderRadius: 4,
    // alignSelf: 'center',
    // margin: 'auto',
    marginBottom: 10,
    marginHorizontal: 1,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "red",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  table: {
    width: "100%",
  },
  userItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default UserApplication;
