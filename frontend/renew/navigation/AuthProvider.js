import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { useDispatch } from 'react-redux';
/**
 * This provider is created
 * to access user in whole app
 * inspired by: https://github.com/amandeepmittal/react-native-examples/tree/master/reactnav5-stack-navigator
 */

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {dispatch} = useDispatch();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            const id = auth().currentUser.uid;
            fetch(`http://localhost:3001/${id}`, {
              method: 'GET',
            })
            .then((response) => response.json())
            .then((response) => {
              const user = {
                id,
                groupId: response['group'],
                name: response['name'],
                email: response['email'],
                password: response['password'],
                origin: response['country of origin'],
                residence: response['country of residence'],
              };
              
              const community = {
                id: response['group'],
                posts: response['group posts']
              };

              dispatch({
                  type: 'UpdateUser',
                  ...user,
              });
            });
          } catch (e) {
            console.log(e);
            console.log('Sign in Failed');
          }
        },
        register: async (name, email, password, origin, dest) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('successfully created user');
                console.log('name: ' + name);
                console.log('origin: ' + origin);
                console.log('current country: ' + dest);
                fetch('http://localhost:3001/user', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    authID: user.user.uid,
                    email,
                    name,
                    password,
                    origin,
                    residence: dest,
                  }),
                })
            });
          } catch (e) {
            console.log(e);
            if (e.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (e.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
            console.log('Sign out Failed');
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};