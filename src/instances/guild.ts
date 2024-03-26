import {AccessToken} from "../interfaces/user/accessToken";
import {UserData} from "./user";
import {User} from "../interfaces/user/user";
import {Endpoints} from "../enums/endpoints";
import {Guild} from "../interfaces/guild/guild";

export class GuildData {

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

    private async getUserData(): Promise<User> {
        let userData = new UserData(this.accessToken);
        return await userData.getUser();
    }

    public async getGuilds(): Promise<Guild[]> {
        return await this.sendRequest(Endpoints.GUILD_ENDPOINT, "GET");
    }

    public async getGuild(guildId: string, guildObject?: Guild[]): Promise<Guild|undefined> {

        if(guildObject) {
            return guildObject.find(guild => guild.id === guildId);
        } else {
            const guilds = await this.getGuilds();
            return guilds.find(guild => guild.id === guildId);
        }

    }

}