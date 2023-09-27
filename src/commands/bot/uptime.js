const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { databaseErrorLog } = require("../../functions/log");
const URL = require("url").URL

const stringIsAValidUrl = (s) => {
  try {
    new URL(s);
    return true;
  } catch (err) {
    return false;
  }
};

exports.run = async (client, interaction) => {

  if (interaction.user.id != process.env['OWNER']) { return interaction.reply(`❌ ${interaction.user} üzgünüm bu komut sana göre değil.`); }
  
  let uptimeInfos = require(client.models.uptimeInfos);
  let command = interaction.options.getSubcommand();
  let url = interaction.options.getString("url");
  
  switch (command) {
    case "ekle":
      
      try {
        if(stringIsAValidUrl(url)) {
          let check = await uptimeInfos.findOne({ url: url });
          
          if(check != null) {
            return interaction.reply(`❌ ${interaction.user} üzgünüm girdiğin URL zaten sistemde bulunuyor. Başka bir URL girebilirsin.`)
          } else {
            await new uptimeInfos({ owner: interaction.user.id , url: url }).save()
            return interaction.reply(`✅ ${interaction.user}, ${url} başarılı ile uptime ediliyor.`)
          }
        } else {
          return interaction.reply(`❌ ${interaction.user} üzgünüm girdiğin URL geçersiz. Lütfen geçerli bir URL gir.`)
        }
      } catch (error) {
        databaseErrorLog(error)
      }
    
    case "kaldır":
      
      try {
        if(stringIsAValidUrl(url)) {
          let check = await uptimeInfos.findOne({ owner: interaction.user.id, url: url });
          
          if(check === null) {
            return interaction.reply(`❌ ${interaction.user} üzgünüm girdiğin URL'yi bulamadım. Sisteme eklemeyi deneyebilirsin.`)
          } else {
            await uptimeInfos.deleteOne({ owner: interaction.user.id, url: url })
            return interaction.reply(`✅ ${interaction.user}, ${url} başarılı bir şekilde sistemden kaldırıldı.`)
          }
        } else {
          return interaction.reply(`❌ ${interaction.user} üzgünüm girdiğin URL geçersiz. Lütfen geçerli bir URL gir.`)
        }
      } catch (error) {
        databaseErrorLog(error)
      }
      
    case "temizle":
      var list = await uptimeInfos.find({ owner: interaction.user.id });

      list.forEach(async (result) => {
        await uptimeInfos.deleteOne({ owner: interaction.user.id})
      })
      
      return interaction.reply(`✅ ${interaction.user}, tüm URL'leriniz başarılı bir şekilde kaldırıldı.`);
      
    case "listele":
      var list = await uptimeInfos.find({ owner: interaction.user.id });

      let result = list.map(x => `➖**${x.url}**\n`).join("");

      let embed = new EmbedBuilder()
        .setColor(`#${process.env.THEME_COLOR}`)
        .setAuthor({ name: `URLler`, iconURL: `${client.user.avatarURL()}`, url: `${process.env.SUPPORT_INVITE}` })
        .setDescription(result || "Kayıtlı URL bulunamadı.")
      
      return interaction.reply({ embeds: [embed] });
      
  }
  
}

module.exports.config = {
  data: new SlashCommandBuilder()
   .setName("uptime")
   .setDescription("Siteleri uptime etmenizi sağlar.")
   .setDMPermission(false)
   .setDefaultMemberPermissions(PermissionFlagsBits.ADMINISTRATOR)
   .addSubcommand(subcommand => subcommand
                  .setName('ekle')
                  .setDescription('Uptime etmek için URL ekler.')
                  .addStringOption(option => option
                    .setName('url')
                    .setDescription(`Uptime edilecek URL'yi giriniz.`)
                    .setRequired(true)))
   .addSubcommand(subcommand => subcommand
                  .setName('kaldır')
                  .setDescription("Uptime listesinden URL kaldırır.")
                  .addStringOption(option => option
                    .setName('url')
                    .setDescription(`Uptime listesinden kaldırılacak URL'yi giriniz. Hatırlamıyorsanız: /uptime lisete`)
                    .setRequired(true)))
  .addSubcommand(subcommand => subcommand
                  .setName('temizle')
                  .setDescription(`Uptime listesine eklediğiniz tüm URLleri siler.`))
  .addSubcommand(subcommand => subcommand
                  .setName('listele')
                  .setDescription('Uptime listesine eklediğiniz tüm URLleri listeler.'))
}