const moment = require("moment");

module.exports = {
  databaseLog: async function() {
    return console.log(`[${moment().format("HH:mm:ss")}] BAĞLANILDI: MongoDB bağlantısı başarıyla sağlandı!`);
  },
  databaseErrorLog: async function(error) {
    if (error) {
      return console.log(`[${moment().format("HH:mm:ss")}] DATABASE HATASI: ${error}`);
    } return;
  },
  errorLog: async function(error) {
    if (error) {
      return console.log(`[${moment().format("HH:mm:ss")}] HATA: ${error}`);
    } return;
  },
  setupLog: async function(client) {
    if (client) {
      return console.log(`[${moment().format("HH:mm:ss")}] ${client.user.username}: Şu an ${client.channels.cache.size} adet kanala, ${client.guilds.cache.size} adet sunucuya ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet veriliyor!`);
    } return;
  },
}