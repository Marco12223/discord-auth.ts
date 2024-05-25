import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("Ban")
  .setDescription("Ban a User");

export async function execute(interaction: CommandInteraction) {
  message.guild.member(ID).ban()
}

//TODO: Implement Command Arguments(ID), Implement Prefix(such like !c or c!), Get embed Response, Check for Bugs, Beta Testting 
