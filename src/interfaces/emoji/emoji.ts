import {Role} from "../permissions/role";
import {User} from "../user/user";

export interface Emoji {
    id: string;
    name?: string;
    roles?: Role[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}