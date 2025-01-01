# Discord UptimeBot @Replit

Veritabanına kaydedilen URL'leri uyanık tutan bir Discord Bot Altyapısı.

# İçerikler

- [Yükleme](https://github.com/metehansenyer/Discord-Uptime-Bot#yükleme)
  - [Discord](https://github.com/metehansenyer/Discord-Uptime-Bot#discord)
  - [MongoDB](https://github.com/metehansenyer/Discord-Uptime-Bot#mongodb)
  - [Replit](https://github.com/metehansenyer/Discord-Uptime-Bot#replit-veya-eski-adıyla-replit)
- [Çalıştırma](https://github.com/metehansenyer/Discord-Uptime-Bot#çalıştırma)
  - [Run](https://github.com/metehansenyer/Discord-Uptime-Bot#alaaddinin-sihirli-lambası)
  - [Uyanık Tutma](https://github.com/metehansenyer/Discord-Uptime-Bot#botu-uyanık-tutma)
- [Kullanım](https://github.com/metehansenyer/Discord-Uptime-Bot#kullanım)

## Yükleme

Öncelikle bazı temel şeylere ihtiyacımız var.

```JS
  const { APPLICATION_ID, TOKEN } = require("Discord");
  const { MONGODB_TOKEN } = require("MongoDB");
  require("Replit")
```

### Discord

- Öncelikle [Discord Developer Portal](https://discord.com/developers/applications) üzerinden bir uygulama oluşturmamız gerekiyor.  

  ![Aşama 1](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/discord_1.png)![Aşama 2](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/discord_2.png)
- Uygulamamız oluştu. Şimdi açılan sayfada birkaç şeyi tamamlamamız lazım.

  ![Aşama 3](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/discord_3.png)![Aşama 4](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/discord_4.png)
- Öncelikle üstteki ilk görseldeki **APP ICON** kısmından botunuzun profil fotoğrafını belirleyin. Sonrasında **APPLICATION ID**yi not edin, daha sonra ikinci görseldeki token kısmından **RESET TOKEN** tuşuna basıp bot için anahtarınızı alın ve onu da not edin. Son olarak ikinci görselde sağ alttaki üç butonu açık hale getirip ayarları kaydetiğinizde bu sitedeki işiniz bitecek. **Botun profil fotoğrafını ayarlamayı unutmayın!**
- Şimdi sırada botumuzu sunucumuza eklemek var. [Bu linke](https://discord.com/oauth2/authorize?client_id=BURAYA_APPLICATION_ID_GELECEK&scope=bot&permissions=8) sağ tık yapıp kopyalayın. Daha sonra tarayıcınıza yapıştırıp **BURAYA_APPLICATION_ID_GELECEK** yazan kısmı anlaşıldığı üzere botunuzdan aldığınız numara ile değiştirin ve siteye girin. Açılan pencereden botu eklemek istediğiniz sunucuyu seçerek işlemi tamamlayın. İşte bu kadar.

### MongoDB

- İlk işimiz bir [MongoDB](https://account.mongodb.com/account/register) hesabı oluşturmak. Google veya GitHub ile kolayca giriş yapabilirsiniz. Daha sonra açılan sayfada aşağıdaki adımları izleyin. 

  ![Aşama 1](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_1.png)![Aşama 2](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_2.png)
- İlk görseldeki **Create** tuşuna basıp ikinci görsele geçiyoruz. Açılan sayfadan **M0 FREE** olanı seçip alt taraftan servis sağlayıcımızı ve sunucu konumunu belirliyoruz. Replit sunucu konumum Kuzey Amerika olduğu için **AWS us-east-1** olanı seçtim. *Replit sunucu konumunuzu öğrenmek veya değiştirmek için [şu başlığa](https://ask.replit.com/t/how-can-i-switch-the-location-of-my-replit-server/18645) göz atabilirsiniz, daha sonra lazım olacaktır.* Son olarak diziniz için bir isim ayarlayabilirsiniz. Artık sıradaki aşama için **Create** tuşuna basmaya hazırsınız.
  
  ![Aşama 3](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_3.png)
- Servisi kullanabilmemiz için bir kullanıcıya ihtiyacımız var. Kullanıcı adımızı ve şifremizi belirleyelim. Ben şifreyi otomatik oluşlturmayı tercih ediyorum, siz isterseniz kendiniz de belirleyebilirsiniz. Şifrenizi not ettikten sonra **Create User** butonuna basıp sayfayı aşağıya kaydırıyoruz.

  ![Aşama 4](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_4.png)
- Erişim sağlamak için bir **IP erişim listesi** oluşturmalıyız. *Kişisel kullanım için kendi IPlerinizi girebilirisiniz* **ama** biz şu an Replit üzerinden bağlanacağız o nedenle herhangi bir IP'den erişilebilir yapmak için **"0.0.0.0/0"** olarak belirleyeceğiz. 1 nolu okun gösterdiği kutucuğu doldurduktan sonra **Add Entry** butonuna basıp aktif hale gelen **Finish and Close** butonuna basıyoruz. Önümüze gelen kutucuktaki **Go to Overview** butonuna basıp sıradaki aşamaya geçiyoruz.
 
  ![Aşama 5](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_5.png)![Aşama 6](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_6.png)![Aşama 7](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/mongo_7.png)
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

  ![Aşama 1](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_1.png)![Aşama 2](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_2.png)![Aşama 3](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_3.png)
- İlk 2 görseldeki aşamaları takip ettiğinizde son görsele ulaşacaksınız. Son görseldeki GitHub URL kısmını doldurmalıyız. [Bu URL](https://github.com/metehansenyer/Discord-Uptime-Bot.git)'ye sağ tık yapıp kopyalın ve ilgili kısma yapıştırın. Daha sonra **Import from GitHub** butonuna basıp devam edin.
  
  ![Aşama 4](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_4.png)![Aşama 5](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_5.png)
- *npm run start* olan kutucuğun içini silip yerine **"node index.js"** yazın ve **Done** butonuna basın.

  ![Aşama 6](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_6.png)
- Bu noktada direkt **Run** butonuna basarsanız sağ altta göreceğiniz hatayla karşılaşacaksınız. Hataya göz atıp bir şeylerin eksik olduğunu anlayabilirsiniz, hadi bu sorunu çözelim.

  ![Aşama 7](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_7.png)![Aşama 8](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_8.png)![Aşama 9](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_9.png)
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

  ![Aşama 10](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_10.png)![Aşama 11](https://github.com/metehansenyer/Discord-Uptime-Bot/blob/main/img/replit_11.png)

### Botu Uyanık Tutma

Anlayacağınız üzere bu bot diğer botları ayakta tutuyor. Peki bunu kim tutacak? İnternette birçok uptime sitesi bulabilirsiniz lakin çoğu artık Glitch, Replit vb. yerlerde işlevsiz durumda. Şu anlık [Better Stack](https://betterstack.com/) platformunu değerlendiriyorum. Diğer alternatiflere göz atabilirsiniz.

## Kullanım

| Komut | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `/uptime listele` | `Yan Çizgi Komutu` | Veritabanına eklediğiniz tüm "URL"leri listeler. |
| `/uptime ekle` | `Yan Çizgi Komutu` | Uyanık tutmak için bir URL eklemenizi sağlar. |
| `/uptime kaldır` | `Yan Çizgi Komutu` | Veritabanından bir URL silmenizi sağlar. |
| `/uptime temizle` | `Yan Çizgi Komutu` | Veritabanına eklediğiniz tüm "URL"leri silmenizi sağlar. |

https://github.com/metehansenyer/Discord-Uptime-Bot/assets/60943907/0758a846-930b-4823-b134-c8f97f337bdc
