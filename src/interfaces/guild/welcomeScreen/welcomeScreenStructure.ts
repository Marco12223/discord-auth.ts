import {WelcomeScreenChannelStructure} from "./welcomeScreenChannelStructure";

export interface WelcomeScreenStructure {
    description: string;
    welcome_channels: WelcomeScreenChannelStructure[];
}