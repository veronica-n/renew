export type UserAction = UpdateUserAction;

export interface UpdateUserAction {
    type: 'UpdateUser',
    id: string,
    name: string,
    groupId: string,
    email: string,
    password: string,
    origin: string,
    residence: string,
}