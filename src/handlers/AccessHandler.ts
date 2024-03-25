import {DiscordAuth} from "../discordAuth";
import {Scopes} from "../enums/scopes";
import {AccessToken} from "../interfaces/user/accessToken";
import {Endpoints} from "../enums/endpoints";

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
        let response = await fetch(Endpoints.TOKEN_ENDPOINT, {
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

    public async refreshToken(refreshToken: string): Promise<AccessToken|{message: string, code: number}> {
        let response = await fetch(Endpoints.TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            })
        })
        return await response.json();
    }

}