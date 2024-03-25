import {Scopes} from "./enums/scopes";

class DiscordAuth {
    public clientId: string = "";
    public clientSecret: string = "";
    public redirectUri: string = "";
    public scopes: Scopes[] = [];

    constructor(private _clientId: string, private _clientSecret: string, private _redirectUri: string, private _scopes: Scopes[]) {

        this.clientId = _clientId;
        this.clientSecret = _clientSecret;
        this.redirectUri = _redirectUri;
        this.scopes = _scopes;

    }

    public getAuthUrl(): string {
        return `https://discord.com/api/oauth2/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=${this.scopes.join(" ")}`;
    }

}