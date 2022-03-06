import auth from '@react-native-firebase/auth';
import { Community, User } from "./types";

export interface AppState {
    user: User;
    community: Community;
};

const getInitialAppState = (): AppState => {
    const userId = auth().currentUser?.uid;
    if (userId) {
        // TODO: BE integration, fetch user with id
        return {
            user: {
                id: userId,
                groupId: 'groupId',
                email: 'test@gmail.com',
                password: 'password',
                origin: 'Korea',
                residence: 'Canada',
            },
            community: {
                id: 'communityId',
            },
        };
    } else {
        return {
            user: {},
            community: {},
        };
    }
};

export const initialState: AppState = getInitialAppState();