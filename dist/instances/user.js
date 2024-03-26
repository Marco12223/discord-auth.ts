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
exports.UserData = void 0;
const endpoints_1 = require("../enums/endpoints");
const guild_1 = require("./guild");
class UserData {
    constructor(_accessToken) {
        this._accessToken = _accessToken;
        this.accessToken = {};
        this.accessToken = _accessToken;
        this.guildInstance = new guild_1.GuildData(this.accessToken);
    }
    getAccessToken() {
        return this.accessToken;
    }
    sendRequest(endpoint, method) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(endpoint, {
                method: method,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `${this.accessToken.token_type} ${this.accessToken.access_token}`
                }
            });
            return yield response.json();
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendRequest(endpoints_1.Endpoints.USER_ENDPOINT, "GET");
        });
    }
    getConnections() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendRequest(endpoints_1.Endpoints.CONNECTIONS_ENDPOINT, "GET");
        });
    }
    hasPermission(permissions, permission) {
        return (permissions & permission) === permission;
    }
    guild() {
        return this.guildInstance;
    }
}
exports.UserData = UserData;
