# Discord UptimeBot @Replit

Veritabanına kaydedilen URL'leri uyanık tutan bir Discord Bot Altyapısı.

# İçerikler

- [Yükleme](./#yükleme)
  - [Discord](./#discord)
  - [MongoDB](./#mongodb)
  - [Replit](./#replit-veya-eski-adıyla-replit)
- [Çalıştırma](./#çalıştırma)
  - [Run](./#alaaddinin-sihirli-lambası)
  - [Uyanık Tutma](./#botu-uyanık-tutma)
- [Kullanım](./#kullanım)

## Yükleme

Öncelikle bazı temel şeylere ihtiyacımız var.

```JS
  const { APPLICATION_ID, TOKEN } = require("Discord");
  const { MONGODB_TOKEN } = require("MongoDB");
  require("Replit")
```

### Discord

- Öncelikle [Discord Developer Portal](https://discord.com/developers/applications) üzerinden bir uygulama oluşturmamız gerekiyor.  

  ![Aşama 1](https://media.discordapp.net/attachments/851228914848366602/1156758069678706798/discord_1.png?ex=65162267&is=6514d0e7&hm=fb7128d1b6bc94ba0b35946aebbd95ee54e15017189b1de43aec9f9017c782a7&=&width=1292&height=671)![Aşama 2](https://media.discordapp.net/attachments/851228914848366602/1156758070005870614/discord_2.png?ex=65162267&is=6514d0e7&hm=fa3204d32c5c5fa3885329111eb5c1b2c1374cc663cc1f7369ac669eba62fc5e&=&width=1292&height=671)
- Uygulamamız oluştu. Şimdi açılan sayfada birkaç şeyi tamamlamamız lazım.

  ![Aşama 3](https://media.discordapp.net/attachments/851228914848366602/1156766945736130623/discord_3.png?ex=65162aab&is=6514d92b&hm=2275e8565527bddef05ab30d1642c3ab0d6ca069561c2f65788e65f990a5e760&=&width=1295&height=671)![Aşama 4](https://media.discordapp.net/attachments/851228914848366602/1156766946163961926/discord_4.png?ex=65162aab&is=6514d92b&hm=6f9e7c8d8cd8de54cce3e8ca1304b25c83b4744df13e19bd3906e2552f7df2aa&=&width=1292&height=671)
- Öncelikle üstteki ilk görseldeki **APP ICON** kısmından botunuzun profil fotoğrafını belirleyin. Sonrasında **APPLICATION ID**yi not edin, daha sonra ikinci görseldeki token kısmından **RESET TOKEN** tuşuna basıp bot için anahtarınızı alın ve onu da not edin. Son olarak ikinci görselde sağ alttaki üç butonu açık hale getirip ayarları kaydetiğinizde bu sitedeki işiniz bitecek. **Botun profil fotoğrafını ayarlamayı unutmayın!**
- Şimdi sırada botumuzu sunucumuza eklemek var. [Bu linke](https://discord.com/oauth2/authorize?client_id=BURAYA_APPLICATION_ID_GELECEK&scope=bot&permissions=8) sağ tık yapıp kopyalayın. Daha sonra tarayıcınıza yapıştırıp **BURAYA_APPLICATION_ID_GELECEK** yazan kısmı anlaşıldığı üzere botunuzdan aldığınız numara ile değiştirin ve siteye girin. Açılan pencereden botu eklemek istediğiniz sunucuyu seçerek işlemi tamamlayın. İşte bu kadar.

### MongoDB

- İlk işimiz bir [MongoDB](https://account.mongodb.com/account/register) hesabı oluşturmak. Google veya GitHub ile kolayca giriş yapabilirsiniz. Daha sonra açılan sayfada aşağıdaki adımları izleyin. 

  ![Aşama 1](https://media.discordapp.net/attachments/851228914848366602/1156926480102735943/mongo_1.png?ex=6516bf3f&is=65156dbf&hm=326d0387d4ffdc08f2e4bc7ba79df6bd12b13a898866d19b7b21ca77ba52536e&=&width=1292&height=671)![Aşama 2](https://media.discordapp.net/attachments/851228914848366602/1156926480413102080/mongo_2.png?ex=6516bf3f&is=65156dbf&hm=c541673edb8ad8ca5d3b35c403f2c92fad41c973528329ef7857106fdbb48d67&=&width=1292&height=671)
- İlk görseldeki **Create** tuşuna basıp ikinci görsele geçiyoruz. Açılan sayfadan **M0 FREE** olanı seçip alt taraftan servis sağlayıcımızı ve sunucu konumunu belirliyoruz. Replit sunucu konumum Kuzey Amerika olduğu için **AWS us-east-1** olanı seçtim. *Replit sunucu konumunuzu öğrenmek veya değiştirmek için [şu başlığa](https://ask.replit.com/t/how-can-i-switch-the-location-of-my-replit-server/18645) göz atabilirsiniz, daha sonra lazım olacaktır.* Son olarak diziniz için bir isim ayarlayabilirsiniz. Artık sıradaki aşama için **Create** tuşuna basmaya hazırsınız.
  
  ![Aşama 3](https://media.discordapp.net/attachments/851228914848366602/1156936658625765438/mongo_3.png?ex=6516c8ba&is=6515773a&hm=06eb2c187bf2bb59ed3337441d0f5cead01c8e92550c0163465d95a8b6704489&=&width=1292&height=671)
- Servisi kullanabilmemiz için bir kullanıcıya ihtiyacımız var. Kullanıcı adımızı ve şifremizi belirleyelim. Ben şifreyi otomatik oluşlturmayı tercih ediyorum, siz isterseniz kendiniz de belirleyebilirsiniz. Şifrenizi not ettikten sonra **Create User** butonuna basıp sayfayı aşağıya kaydırıyoruz.

  ![Aşama 4](https://media.discordapp.net/attachments/851228914848366602/1156936658915184670/mongo_4.png?ex=6516c8ba&is=6515773a&hm=df12a5f1de957ba94f747de14ae48da097a3b29cb23d76bbec8d8c5006ae476d&=&width=1292&height=671)
- Erişim sağlamak için bir **IP erişim listesi** oluşturmalıyız. *Kişisel kullanım için kendi IPlerinizi girebilirisiniz* **ama** biz şu an Replit üzerinden bağlanacağız o nedenle herhangi bir IP'den erişilebilir yapmak için **"0.0.0.0/0"** olarak belirleyeceğiz. 1 nolu okun gösterdiği kutucuğu doldurduktan sonra **Add Entry** butonuna basıp aktif hale gelen **Finish and Close** butonuna basıyoruz. Önümüze gelen kutucuktaki **Go to Overview** butonuna basıp sıradaki aşamaya geçiyoruz.
 
  ![Aşama 5](https://media.discordapp.net/attachments/851228914848366602/1156946262097133650/mongo_5.png?ex=6516d1ab&is=6515802b&hm=a527730207360342efb3beea3e59b60f1a401585dee0f7e50521e60410966132&=&width=1292&height=671)![Aşama 6](https://media.discordapp.net/attachments/851228914848366602/1156946262344601620/mongo_6.png?ex=6516d1ab&is=6515802b&hm=fb14a7b4971766e95368d0ba87f808674be78ce8e6222217c292de30c320b292&=&width=1292&height=671)![Aşama 7](https://media.discordapp.net/attachments/851228914848366602/1156947802576916510/mongo_7.png?ex=6516d31b&is=6515819b&hm=8925c90a0c0a86cba3eb1a6910eae274edd02924449d3d1511251eb1bbfddfa8&=&width=1292&height=671)
- İlk görseldeki **CONNECT** butonuna basıyoruz. Daha sonra açılan pencereden **Drivers** seçeneğini seçiyoruz. 3. görselde gözüktüğü gibi ilk kısmı olduğu gibi bırakıyoruz. İkinci kısımdaki anahtarı kopyalıyoruz.
  ```
  mongodb+srv://Mete:<password>@cluster0.afcp5ld.mongodb.net/?retryWrites=true&w=majority
  ```
  artık elimizde böyle bir anahtar var ancak bu haliyle kullanıma hazır değil. Anahtarda görmüş olduğunuz **\<password\>** kısmını, kullanıcı belirleme kısmında belirlediğimiz şifreyle ve son kısmı ise **"uptimeDatabase?retryWrites=true&w=majority"** ile değiştiriyoruz. Son haliyle elinizde şuna benzer bir şey olmalı:
  ```
  mongodb+srv://Mete:123456@cluster0.afcp5ld.mongodb.net/uptimeDatabase?retryWrites=true&w=majority
  ```
  Anahtarınızı not edin, lazım olacak.

### Replit veya eski adıyla Repl.it

- Tekrar aynı başlangıcı yapacağız. Botu çalıştırmak için bir [Replit](https://replit.com/signup) hesabına ihtiyacınız var. Hesabı açarken karşınıza bir takım sorular çıkacaktır, onları kendinize uygun şekilde doldurunuz. Daha sonra aşağıdaki adımları izleyiniz.

  ![Aşama 1](https://media.discordapp.net/attachments/851228914848366602/1157084001119510640/replit_1.png?ex=651751f3&is=65160073&hm=eec3fe449ee728c891a90dd7cc03433717f025763b010e4a203d99cb5aaffa1b&=&width=945&height=468)![Aşama 2](https://media.discordapp.net/attachments/851228914848366602/1157084001987739679/replit_2.png?ex=651751f3&is=65160073&hm=9ec4d344bb705e27ca5fdc0aa1c852c39c1204ddf8f124f51891b10dd5c6dcd7&=&width=945&height=468)![Aşama 3](https://media.discordapp.net/attachments/851228914848366602/1157084001400537159/replit_3.png?ex=651751f3&is=65160073&hm=c8d427083255a52923c6143d14dabb4774ba4943ecdded4a961ae62f288ab2de&=&width=945&height=468)
- İlk 2 görseldeki aşamaları takip ettiğinizde son görsele ulaşacaksınız. Son görseldeki GitHub URL kısmını doldurmalıyız. [Bu URL](https://github.com/metehansenyer/Discord-Uptime-Bot.git)'ye sağ tık yapıp kopyalın ve ilgili kısma yapıştırın. Daha sonra **Import from GitHub** butonuna basıp devam edin.
  
  ![Aşama 4](https://media.discordapp.net/attachments/851228914848366602/1157084002260373504/replit_4.png?ex=651751f3&is=65160073&hm=9c5633125d92b43241d2c9ed364f5fe4f7444965d8fa4c8deabb404e6112ad1a&=&width=945&height=468)![Aşama 5](https://media.discordapp.net/attachments/851228914848366602/1157084001685741608/replit_5.png?ex=651751f3&is=65160073&hm=500b10baedcf69a533ebe976e419e19ba1bba55286306cead33495349e6b159c&=&width=945&height=468)
- *npm run start* olan kutucuğun içini silip yerine **"node index.js"** yazın ve **Done** butonuna basın.

  ![Aşama 6](https://media.discordapp.net/attachments/851228914848366602/1157084002629468210/replit_6.png?ex=651751f3&is=65160073&hm=2538aad32f8ac9b5938b3f6dd2058455d2fb2f5597ecb31ab237e78eefc4fa00&=&width=945&height=468)
- Bu noktada direkt **Run** butonuna basarsanız sağ altta göreceğiniz hatayla karşılaşacaksınız. Hataya göz atıp bir şeylerin eksik olduğunu anlayabilirsiniz, hadi bu sorunu çözelim.

  ![Aşama 7](https://media.discordapp.net/attachments/851228914848366602/1157094787019718778/replit_7.png?ex=65175bff&is=65160a7f&hm=774f964285b4b165fbdbb3cee179de6dc802ab7645b9a145178a220c0dab41dd&=&width=945&height=468)![Aşama 8](https://media.discordapp.net/attachments/851228914848366602/1157094787330101290/replit_8.png?ex=65175bff&is=65160a7f&hm=9a507f47581ff46e854b71299386e709c4567f238fd829ae9494907d21ab08bd&=&width=945&height=468)![Aşama 9](https://media.discordapp.net/attachments/851228914848366602/1157096279294361621/replit_9.png?ex=65175d62&is=65160be2&hm=5a2df6dfec7a703a6bef9ae70040948651ee96eb54ff1760674e4f45b5550984&=&width=945&height=468)
- Son fotoğrafta okla gösterilen yeri, aşağıda verdiğim JSON kodundaki ilgili yerleri önceki aşamalarda not ettiğiniz verilerle değiştirip doldurunuz.
  ```JSON
  {
   "PROJECT_NAME": "REPLIT_PROJE_İSMİNİZ",
  
   "APP_ID": "DİSCORD_BOT_APPLICATION_ID",
   "TOKEN": "DİSCORD_BOT_ANAHTARI",
   "MONGODB_TOKEN": "MONG0DB_ANAHTARI",

   "OWNER": "YOUR_DISCORD_ID",
   "SUPPORT_SERVER": "DISCORD_SERVER_ID",
   "SUPPORT_INVITE": "DISCORD_SERVER_DAVETİ",
   "UPTİME_CHANNEL": "DISCORD_SERVER_CHANNEL_ID",

   "DEVELOPMENT": "true",
   "THEME_COLOR": "4ca74c"
  }
  ```
  Örnek:
  ```JSON
  {
   "PROJECT_NAME": "Discord-Uptime-Bot",
  
   "APP_ID": "01234567890",
   "TOKEN": "ABCDEFGHIJKLMNOPRSTUVYZWX",
   "MONGODB_TOKEN": "ABCDEFGHIJKLMNOPRSTUVYZWX",

   "OWNER": "0123456789",
   "SUPPORT_SERVER": "01234567890",
   "SUPPORT_INVITE": "https://discord.gg/abcde",
   "UPTİME_CHANNEL": "01234567890",

   "DEVELOPMENT": "true",
   "THEME_COLOR": "4ca74c"
  }
  ```
-  Son olarak **Save** butonuna basıp bu işlemi bitirin. Artık kodumuz kullanıma hazır.

## Çalıştırma

### Alaaddin'in Sihirli Lambası

- Üç dilek hakkınızdan birini feda etmelisiniz.

### Ya da Direkt Run :D

  ![Aşama 10](https://media.discordapp.net/attachments/851228914848366602/1157108070720225281/replit_10.png?ex=6517685e&is=651616de&hm=b00d9bda5b869997a94797ea9aea394b23c5c9c83ed6fceeaf0b70767258c673&=&width=1353&height=671)![Aşama 11](https://media.discordapp.net/attachments/851228914848366602/1157108071219335188/replit_11.png?ex=6517685e&is=651616de&hm=7e6457f3a62e21d0eadc31cd57614f6b179ad10fc9c32106f602745423009f9d&=&width=1355&height=671)

### Botu Uyanık Tutma

Anlayacağınız üzere bu bot diğer botları ayakta tutuyor. Peki bunu kim tutacak? İnternette birçok uptime sitesi bulabilirsiniz lakin çoğu artık Glitch, Replit vb. yerlerde işlevsiz durumda. Şu anlık [Better Stack](https://betterstack.com/) platformunu değerlendiriyorum. Diğer alternatiflere göz atabilirsiniz.

## Kullanım

| Komut | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `/uptime listele` | `Yan Çizgi Komutu` | Veritabanına eklediğiniz tüm "URL"leri listeler. |
| `/uptime ekle` | `Yan Çizgi Komutu` | Uyanık tutmak için bir URL eklemenizi sağlar. |
| `/uptime kaldır` | `Yan Çizgi Komutu` | Veritabanından bir URL silmenizi sağlar. |
| `/uptime temizle` | `Yan Çizgi Komutu` | Veritabanına eklediğiniz tüm "URL"leri silmenizi sağlar. |
