const { ActivityType } = require("discord.js");
const { setupLog } = require("../functions/log");

const wait = require("util").promisify(setTimeout);

module.exports = {
  ready: async function(client) {
    setupLog(client);
    await wait(1000);

    let uptimeInfos = require(client.models.uptimeInfos);
    let links = await uptimeInfos.find({});
    let urls = links.map(c => c.url)

    var status = [
      "Uptime Benim İşim",
      `${urls.length} Tane Siteyi Uptime Ediyorum`
    ];

    setInterval(function() {
      var random = Math.floor(Math.random() * (status.length));
      client.user.setPresence({ activities: [{ name: status[random], type: ActivityType.Watching, url: "https://youtu.be/xvFZjo5PgG0" }], status: "online" });
    }, 1000 * 5);
  },
}