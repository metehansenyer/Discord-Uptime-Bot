const requestHandler = (handler) => require(`../handler/${handler}`);

module.exports = (client, Collection) => {

  client.on("ready", async () => requestHandler("ready").ready(client));
  client.on("ready", async () => requestHandler("command").ready(client, Collection));
  client.on("interactionCreate", async (interaction) => requestHandler("interaction").create(client, interaction));

}