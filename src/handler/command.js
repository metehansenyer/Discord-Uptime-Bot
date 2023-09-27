const { errorLog } = require("../functions/log");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const { readdirSync } = require("fs");
const slashCommands = [];

module.exports = {
  ready: async function(client, Collection) {

    client.slashCommands = new Collection();

    try {
      for (let category of readdirSync(`/home/runner/${process.env['PROJECT_NAME']}/src/commands/`)) {
        let commands = readdirSync(`/home/runner/${process.env['PROJECT_NAME']}/src/commands/${category}`)
        for (let command of commands) {
          if (command.endsWith(".js")) {
            let prop = require(`/home/runner/${process.env['PROJECT_NAME']}/src/commands/${category}/${command}`);

            if (prop.config.data) {
              client.slashCommands.set(prop.config.data.name, prop);
              slashCommands.push(prop.config.data.toJSON());
            }
          }
        }
      }
    } catch (error) {
      errorLog(error);
    }

    const rest = new REST({ version: "10" }).setToken(process.env['TOKEN']);

    (async () => {
      try {
        if (process.env['DEVELOPMENT']
          === "true") {
          await rest.put(Routes.applicationGuildCommands(process.env['APP_ID'], process.env['SUPPORT_SERVER']), { body: slashCommands });
        } else {
          await rest.put(Routes.applicationCommands(process.env['APP_ID']), { body: slashCommands });
        }
      } catch (error) {
        errorLog(error);
      }
    })();

  }
}