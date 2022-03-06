export interface UserState {
    id?: string;
    groupId?: string;
    name?: string;
    email?: string;
    password?: string;
    origin?: string;
    residence?: string;
};

export interface Comment {
    id: string;
    userId: string;
    postId: string;
    content: string;
    timestamp: Date;
};

export interface Post {
    id: string;
    userId: string;
    content: string;
    timestamp: Date;
    comments?: Array<Comment>;
};

export interface CommunityState {
    id?: string;
    posts?: Array<Post>;
};