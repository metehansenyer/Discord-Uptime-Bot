const { InteractionType } = require("discord.js");
const { errorLog } = require("../functions/log");

module.exports = {
  create: async function(client, interaction) {
    if (!interaction.type === InteractionType.ApplicationCommand) return;

    let command = client.slashCommands.get(interaction.commandName);

    if (command) {
      try {
        command.run(client, interaction);
      } catch (error) {
        errorLog(error);
        interaction.reply({
          content: `❌ ${interaction.user} üzgünüm bir hata meydana geldi.`,
          ephemeral: true,
        });
      }
    }
  },
}