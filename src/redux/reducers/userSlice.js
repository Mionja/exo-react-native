import { createSlice } from '@reduxjs/toolkit';

// Initial state with an empty users array and an initialId
const initialState = {
  users: [
    {
      id: 1,
      firstname: "Dev",
      lastname: "Dev",
      username: "dev",
      age: 23,
    },
    {
      id: 2,
      firstname: "John",
      lastname: "D",
      username: "john",
      age: 34,
    },
    {
      id: 3,
      firstname: "D",
      lastname: "Ra",
      username: "D",
      age: 24,
    },
  ],
  nextId: 4, // Start IDs at 4
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { ...action.payload, id: state.nextId };
      state.users.push(newUser);
      state.nextId += 1; // Increment the nextId
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
