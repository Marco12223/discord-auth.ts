import {AccessToken} from "../interfaces/user/accessToken";
import {Endpoints} from "../enums/endpoints";
import {User} from "../interfaces/user/user";
import {Permissions} from "../enums/permissions/permissions";
import {GuildData} from "./guild";

export class UserData {

    guildInstance: GuildData | undefined;
    public accessToken: AccessToken = <AccessToken>{};
    constructor(private _accessToken: AccessToken) {
        this.accessToken = _accessToken;
        this.guildInstance = new GuildData(this.accessToken);
    }

    public getAccessToken(): AccessToken {
        return this.accessToken;
    }

    private async sendRequest(endpoint: Endpoints|string, method: string): Promise<any> {

        let response = await fetch(endpoint, {
            method: method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `${this.accessToken.token_type} ${this.accessToken.access_token}`
            }
        })
        return await response.json();
    }

    public async getUser(): Promise<User> {
        return await this.sendRequest(Endpoints.USER_ENDPOINT, "GET");
    }

    public async getConnections(): Promise<any> {
        return await this.sendRequest(Endpoints.CONNECTIONS_ENDPOINT, "GET");
    }

    public hasPermission(permissions: number, permission: Permissions): boolean {
        return (permissions & permission) === permission;
    }

    public guild(): GuildData | undefined{
        return this.guildInstance;
    }

}