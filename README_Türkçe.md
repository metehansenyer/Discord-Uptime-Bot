# Discord UptimeBot @Replit

Veritabanına kaydedilen URL'leri uyanık tutan bir Discord Bot Altyapısı.

## Yükleme

Öncelikle bazı temel şeylere ihtiyacımız var.

```Text
  Discord
  Replit
  MongoDB
```

### Discord
- Öncelikle [Discord Developer Portal](https://discord.com/developers/applications) üzerinden bir uygulama oluşturmamız gerekiyor.  

  ![Aşama 1](https://media.discordapp.net/attachments/851228914848366602/1156758069678706798/discord_1.png?ex=65162267&is=6514d0e7&hm=fb7128d1b6bc94ba0b35946aebbd95ee54e15017189b1de43aec9f9017c782a7&=&width=1292&height=671)![Aşama 2](https://media.discordapp.net/attachments/851228914848366602/1156758070005870614/discord_2.png?ex=65162267&is=6514d0e7&hm=fa3204d32c5c5fa3885329111eb5c1b2c1374cc663cc1f7369ac669eba62fc5e&=&width=1292&height=671)
- Uygulamamız oluştu. Şimdi açılan sayfada birkaç şeyi tamamlamamız lazım.

  ![Aşama 3](https://media.discordapp.net/attachments/851228914848366602/1156766945736130623/discord_3.png?ex=65162aab&is=6514d92b&hm=2275e8565527bddef05ab30d1642c3ab0d6ca069561c2f65788e65f990a5e760&=&width=1295&height=671)![Aşama 4](https://media.discordapp.net/attachments/851228914848366602/1156766946163961926/discord_4.png?ex=65162aab&is=6514d92b&hm=6f9e7c8d8cd8de54cce3e8ca1304b25c83b4744df13e19bd3906e2552f7df2aa&=&width=1292&height=671)
- Öncelikle üstteki ilk fotoda **APPLICATION ID**yi not edin, daha sonra ikinci fotodaki token kısmından **RESET TOKEN** tuşuna basıp bot için anahtarınızı alın ve onu da not edin. Son olarak ikinci fotoda sağ alttaki üç butonu açık hale getirip ayarları kaydettiğinizde bu sitedeki işiniz bitecek. *Dilerseniz botun profil fotoğrafını ve ismini tekrar bu sayfadan düzenleyebilirsiniz.*
- Şimdi sırada botumuzu sunucumuza eklemek var. [Bu linke](https://discord.com/oauth2/authorize?client_id=BURAYA_APPLICATION_ID_GELECEK&scope=bot&permissions=8) sağ tık yapıp kopyalayın. Daha sonra tarayıcınıza yapıştırıp **BURAYA_APPLICATION_ID_GELECEK** yazan kısmı anlaşıldığı üzere botunuzdan aldığınız numara ile değiştirin ve siteye girin. Açılan pencereden botu eklemek istediğiniz sunucuyu seçerek işlemi tamamlayın. İşte bu kadar.
## Kullanım

| Komut | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `/uptime listele` | `Yan Çizgi Komutu` | Veritabanına eklediğiniz tüm "URL"leri listeler. |
| `/uptime ekle` | `Yan Çizgi Komutu` | Uyanık tutmak için bir URL eklemenizi sağlar. |
| `/uptime kaldır` | `Yan Çizgi Komutu` | Veritabanından bir URL silmenizi sağlar. |
| `/uptime temizle` | `Yan Çizgi Komutu` | Veritabanına eklediğiniz tüm "URL"leri silmenizi sağlar. |
