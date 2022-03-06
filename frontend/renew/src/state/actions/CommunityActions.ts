import { Comment, Post } from "../types";

export type CommunityAction = AddPostAction | AddCommentAction;

export interface AddPostAction {
    type: 'AddPost',
    id: string,
    post: Post,
};

export interface AddCommentAction {
    type: 'AddComment',
    id: string,
    postId: string,
    comment: Comment,
};