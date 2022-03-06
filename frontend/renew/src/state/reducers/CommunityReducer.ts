import auth from '@react-native-firebase/auth';
import { CommunityAction } from '../actions/CommunityActions';
import { Comment, CommunityState, Post } from "../types";

const getInitialCommunityState = (): CommunityState => {
    const userId = auth().currentUser?.uid;
    return userId ? {
        id: userId,
        posts: [], // need to fetch from backend
    } : {};
};

export const initialState: CommunityState = getInitialCommunityState();

export const communityReducer = (state: CommunityState = initialState, action: CommunityAction): CommunityState => {
    switch(action.type) {
        case 'AddPost':
            return {
                ...state,
                posts: [...state.posts ?? [], action.post],
            };
        case 'AddComment':
            return {
                ...state,
                posts: updatePostWithComment(action.comment, state.posts),
            };
        default:
            return {...state};
    }
};

const updatePostWithComment = (comment: Comment, posts?: Array<Post>): Array<Post> | undefined => {
    if (!posts || posts.length == 0) {
        return [];
    }

    const postToUpdateIndex = posts.findIndex(post => post.id == comment.postId);
    if (postToUpdateIndex < 0) {
        return posts;
    }

    const postToUpdate = posts[postToUpdateIndex];
    if (!postToUpdate.comments) {
        postToUpdate.comments = [comment];
    } else {
        postToUpdate.comments.push(comment);
    }

    return [...posts.slice(0, postToUpdateIndex), postToUpdate, ...posts.slice(postToUpdateIndex + 1)]
};