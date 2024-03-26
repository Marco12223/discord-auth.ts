import {AccessToken} from "./interfaces/user/accessToken";
import {Endpoints} from "./enums/endpoints";
import {User} from "./interfaces/user/user";

export class UserData {

    public accessToken: AccessToken = <AccessToken>{};
    constructor(private _accessToken: AccessToken) {
        this.accessToken = _accessToken;
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

    public async getGuilds(): Promise<any> {
        return await this.sendRequest(Endpoints.GUILD_ENDPOINT, "GET");
    }

    public async getConnections(): Promise<any> {
        return await this.sendRequest(Endpoints.CONNECTIONS_ENDPOINT, "GET");
    }

}