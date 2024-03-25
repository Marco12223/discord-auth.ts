import {RoleFlags} from "../../enums/permissions/roleFlags";
import {RoleTags} from "./roleTags";

export interface Role {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string;
    unicode_emoji?: string;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTags;
    flags?: RoleFlags;
}