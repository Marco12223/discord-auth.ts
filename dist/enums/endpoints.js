"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoints = void 0;
var Endpoints;
(function (Endpoints) {
    Endpoints["API_ENDPOINT"] = "https://discord.com/api/v10";
    Endpoints["AUTHORIZE_ENDPOINT"] = "https://discord.com/api/oauth2/authorize";
    Endpoints["TOKEN_ENDPOINT"] = "https://discord.com/api/oauth2/token";
    Endpoints["REVOKE_ENDPOINT"] = "https://discord.com/api/oauth2/token/revoke";
    Endpoints["USER_ENDPOINT"] = "https://discord.com/api/v10/users/@me";
    Endpoints["GUILD_ENDPOINT"] = "https://discord.com/api/v10/users/@me/guilds";
    Endpoints["CONNECTIONS_ENDPOINT"] = "https://discord.com/api/v10/users/@me/connections";
})(Endpoints || (exports.Endpoints = Endpoints = {}));
