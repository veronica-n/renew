export interface User {
    id?: string;
    groupId?: string;
    email?: string;
    password?: string;
    origin?: string;
    residence?: string;
};

export interface Comment {
    id: string;
    userId: string;
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

export interface Community {
    id?: string;
    posts?: Array<Post>;
};