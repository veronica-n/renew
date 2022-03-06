import auth from '@react-native-firebase/auth';
import { UserAction } from "../actions/UserActions";
import { UserState } from "../types";

const getInitialUserState = (): UserState => {
    const userId = auth().currentUser?.uid;
    return userId ? {
        id: userId,
        groupId: 'groupId',
        name: 'tester',
        email: 'test@gmail.com',
        password: 'password',
        origin: 'Korea',
        residence: 'Canada',
    } : {};
};

export const initialState: UserState = getInitialUserState();

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case 'UpdateUser':
            return {
                ...state,
                id: action.id,
                groupId: action.groupId,
                name: action.name,
                email: action.email,
                password: action.password,
                origin: action.origin,
                residence: action.residence,
            };
        default:
            return {...state};
    }
};