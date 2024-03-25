import {User} from "../user/user";

export interface Sticker {
    id: string;
    pack_id?: string;
    name: string;
    description?: string;
    tags: string;
    asset?: string;
    type: number;
    format_type: number;
    available?: boolean;
    guild_id?: string;
    user?: User;
    sort_value?: number;
}