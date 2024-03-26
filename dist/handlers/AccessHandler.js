"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessHandler = void 0;
const endpoints_1 = require("../enums/endpoints");
class AccessHandler {
    constructor(_discordAuthData) {
        this._discordAuthData = _discordAuthData;
        this.clientId = "";
        this.clientSecret = "";
        this.redirectUri = "";
        this.scopes = [];
        this.clientId = _discordAuthData.clientId;
        this.clientSecret = _discordAuthData.clientSecret;
        this.redirectUri = _discordAuthData.redirectUri;
        this.scopes = _discordAuthData.scopes;
    }
    tokenExchange(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(endpoints_1.Endpoints.TOKEN_ENDPOINT, {
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
            });
            return yield response.json();
        });
    }
    refreshToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(endpoints_1.Endpoints.TOKEN_ENDPOINT, {
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
            });
            return yield response.json();
        });
    }
    revokeToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(endpoints_1.Endpoints.REVOKE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                    token_type_hint: "access_token",
                    token: token,
                })
            });
            return yield response.json();
        });
    }
}
exports.AccessHandler = AccessHandler;
