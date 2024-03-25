import {Role} from "../permissions/role";

export interface Guild {
    id: string;
    name: string;
    icon?: string;
    icon_hash?: string;
    splash?: string;
    discovery_splash?: string;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region?: string;
    afk_channel_id?: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: Role[];
}