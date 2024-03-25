import {DiscordAuth} from "../discordAuth";
import {Scopes} from "../enums/scopes";
import {AccessToken} from "../interfaces/user/accessToken";

export class AccessHandler {

    public clientId: string = "";
    public clientSecret: string = "";
    public redirectUri: string = "";
    public scopes: Scopes[] = [];

    constructor(private _discordAuthData: DiscordAuth) {
        this.clientId = _discordAuthData.clientId;
        this.clientSecret = _discordAuthData.clientSecret;
        this.redirectUri = _discordAuthData.redirectUri;
        this.scopes = _discordAuthData.scopes;
    }

    public async tokenExchange(code: string): Promise<AccessToken|{message: string, code: number}> {
        let authorization =  Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64");

        let response = await fetch("https://discord.com/api/v10/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "authorization_code",
                code: code,
                redirect_uri: this.redirectUri,
                scope: this.scopes.join(" ")
            })

        })

        return await response.json();

    }

}