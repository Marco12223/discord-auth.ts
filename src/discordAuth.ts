import {Scopes} from "./enums/scopes";
import {Properties} from "./interfaces/properties";
import {Endpoints} from "./enums/endpoints";
import {UserData} from "./instances/user";
import {AccessToken} from "./interfaces/user/accessToken";
import {AccessHandler} from "./handlers/AccessHandler";

export class DiscordAuth {
    public clientId: string = "";
    public clientSecret: string = "";
    public redirectUri: string = "";
    public scopes: Scopes[] = [];
    public properties: Properties = {
        API_ENDPOINT: Endpoints.API_ENDPOINT
    };

    constructor(private _clientId: string, private _clientSecret: string, private _redirectUri: string, private _scopes: Scopes[], private _properties?: Properties) {

        this.clientId = _clientId;
        this.clientSecret = _clientSecret;
        this.redirectUri = _redirectUri;
        this.scopes = _scopes;
        if (_properties) {
            this.properties = _properties;
        }

    }

    public getAuthUrl(): string {
        return `${Endpoints.AUTHORIZE_ENDPOINT}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=${this.scopes.join("+")}`;
    }

    public user(accessToken: AccessToken): UserData {
        return new UserData(accessToken);
    }

    public accessHandler(): AccessHandler {
        return new AccessHandler(this);
    }

}
export Scopes;
