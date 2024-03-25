export interface Connection {
    id: string;
    name: string;
    type: string;
    revoked?: boolean;
    integrations?: string[];
    verified: boolean;
    friend_sync: boolean;
    show_activity: boolean;
    two_way_link: boolean;
    visibility: number;
}