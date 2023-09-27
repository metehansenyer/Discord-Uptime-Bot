require('./keep_alive.js');

const { Client, Partials, Collection, GatewayIntentBits } = require("discord.js");

const { errorLog, loadLog } = require("./src/functions/log");
const moment = require('moment');
const fetch = require("@replit/node-fetch");
require('dotenv').config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.DirectMessageReactions,
  ],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.Message,
    Partials.Reaction,
    Partials.GuildMember,
    Partials.ThreadMember,
    Partials.GuildScheduledEvent
  ]
});

require("./database/mongo")();

let yol = `/home/runner/${process.env['PROJECT_NAME']}/database/models`

client.models = {
  "uptimeInfos": `${yol}/uptimeInfos`
}

require("./src/util/handlerLoader")(client, Collection);

client.setMaxListeners(0);

let uptimeInfos = require(client.models.uptimeInfos);

setInterval(async () => {
  let links = await uptimeInfos.find({});

  if (links) {
    let urls = links.map(c => c.url)
    let siteSayısı = urls.length

    urls.forEach(link => {
      try {
        fetch(link)
        console.log(`[${moment().format('HH:mm:ss')}] BOT: İstekler başarıyla iletildi!`)
      } catch (error) {
        console.error(error);
      }
    })
  }
}, 60000)

setInterval(async () => {
  let uptimeInfos = require(client.models.uptimeInfos);
  let links = await uptimeInfos.find({});
  let urls = links.map(c => c.url)

  return client.channels.cache.get(process.env['UPTİME_CHANNEL']).send(`✅ **${urls.length}** tane siteyi uptime ediyorum.`);

}, 300000)

client.login(process.env['TOKEN']).catch(error => { return errorLog(error) });