"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordAuth = void 0;
const endpoints_1 = require("./enums/endpoints");
const user_1 = require("./instances/user");
const AccessHandler_1 = require("./handlers/AccessHandler");
class DiscordAuth {
    constructor(_clientId, _clientSecret, _redirectUri, _scopes, _properties) {
        this._clientId = _clientId;
        this._clientSecret = _clientSecret;
        this._redirectUri = _redirectUri;
        this._scopes = _scopes;
        this._properties = _properties;
        this.clientId = "";
        this.clientSecret = "";
        this.redirectUri = "";
        this.scopes = [];
        this.properties = {
            API_ENDPOINT: endpoints_1.Endpoints.API_ENDPOINT
        };
        this.clientId = _clientId;
        this.clientSecret = _clientSecret;
        this.redirectUri = _redirectUri;
        this.scopes = _scopes;
        if (_properties) {
            this.properties = _properties;
        }
    }
    getAuthUrl() {
        return `${endpoints_1.Endpoints.AUTHORIZE_ENDPOINT}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=${this.scopes.join("+")}`;
    }
    user(accessToken) {
        return new user_1.UserData(accessToken);
    }
    accessHandler() {
        return new AccessHandler_1.AccessHandler(this);
    }
}
exports.DiscordAuth = DiscordAuth;
