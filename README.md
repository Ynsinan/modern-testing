# 💉 1. Test Nedir? Neden Test Yazmalıyız?

> Genel olarak bu yazı [Mehmet Pekcanın ](https://www.linkedin.com/in/mehmetpekcann/)videosunu dökümante etmek üzerine olacak ve kendisinin [YouTube üzerinde paylaştığı videoyu](https://www.youtube.com/watch?v=cLH\_m11oEms\&list=PLf3cxVeAm43\_2CINQqyUVQCJ94ycC07uz) izlerken kendi yorumlarımı da katmaya çalışacağım bir yazı olacak. Şimdiden Mehmet Pekcana bu güzel seri için teşekkür ederim. Keyifli okumalar umarım faydası dokunur.

### Test Nedir ?&#x20;

Test, bir sistemi manuel veya otomatik yollarla deneyerek veya değerlendirerek, belirlenmiş gereksinimleri karşıladığının doğrulanması veya beklenen ile gözlenen sonuçlar arasındaki farkların belirlenmesi sürecidir. Yazılım testi ise bir yazılımın sonsuz sayıdaki çalışma alanından, sınırlı sayıda ve uygun şekilde seçilmiş testler ile beklenen davranışlarını karşılamaya yönelik, dinamik olarak yapılan doğrulama faaliyetlerini kapsamaktadır.

Her hangi bir geliştirme sonucu yazdığımız app doğru çalışacak mı ? Her hangi bir yeri bozacak mı ? Şüphelerini yazdığımız testler sonucu öngörerek geliştirme esnasında o bugı kullanıcıya götürmeden tespit edip çözüyoruz. Haliyle yazdığımız kod en stabil ve minimum bug haliyle ortaya çıkıyor.



### Neden Teste İhtiyaç Duyarız ?

* İnsan hatasını minimuma indirmek
* Yazdığım kod çalışıyor mu ?&#x20;
* Yeni eklediğim kod başka bir yeri bozuyor mu ?
* App'im çok mu yavaş ?&#x20;
* Kullanıcılar App'imi istediğim gibi kullanabiliyor mu ?&#x20;
* App'im her browser'da sorunsuz görünüyor mu ?

### Test Çeşitleri

* <mark style="background-color:green;">**Unit Tests**</mark> <mark style="background-color:green;"></mark><mark style="background-color:green;">:</mark> Dinamik test sürecinin ilk aşaması olmakla beraber, hataların erken bulunup düzeltilebilmesi açısından da bu sürecin en önemli aşamasını oluşturur. Mikro ölçekte yapılan bu testte, özel fonksiyonlar veya kod modülleri (fonksiyonlar, veri yapıları, nesneler vb.) test edilir. Bu test, test uzmanlarınca değil programcılar tarafından yapılır ve program kodunun ayrıntıları ile içsel tasarım biçiminin bilinmesi gerekir. Uygulama kodu çok iyi tasarlanmış bir mimaride değilse oldukça zor bir testtir.
* <mark style="background-color:green;">**Integration Tests :**</mark> Bir uygulamanın farklı bileşenlerinin beraberce uyum içinde çalışıp çalışmadığını sınamak için yapılan bir testtir. Bileşenler, modüller, bağımsız uygulamalar,istemci/sunucu uygulamaları biçiminde olabilirler. Bu tür testlere, özellikle istemci/sunucu uygulamaları ve dağıtık sistemlerin testinde başvurulmaktadır. Bunun yanısıra uygulamaya yeni işlevsel elemanlar ya da program modülleri eklendikçe sürekli test edilmesi işlemine de “Artımsal Tümleyim Testi” adı verilir. Test uzmanları ve/veya programcılar tarafından gerçekleştirilen testlerdir.
*   <mark style="background-color:green;">**End to End Tests :**</mark> Uçtan uca test, yazılım geliştirme sürecinde bir uygulamanın ürün olarak kullanıldığında işlev ve performans düzeylerini test etmek için kullanılır.

    Uçtan uca testin (veya E2E) amacı, bir ürünün canlı bir ortamda kullanıldığında nasıl performans göstereceği hakkında daha iyi bir fikir edinmektir.

    Bu test şekli, kullanıcının kodla etkileşiminin başlangıcından sonuna kadar kodu incelemeye odaklanır, dolayısıyla “uçtan uca” terimi kullanılır.

    Yazılımı incelemenin ve çalışmalarınızda sorunların nerede ve neden ortaya çıkabileceğini keşfetmenin çok kapsamlı bir yoludur.



## Eğitim İçeriği&#x20;

Genel olarak 3 başlıkta ilerleyeceğiz;&#x20;

* Unit Tests
* Integration Test
* React

Detaylandırmak gerekirse

* Jest ve React Testing Library
* Testin Temelleri
* UI Component Testi
* Kullanıcı Etkileşimli Component Testi
* Mocking
* Dependency Injection
* Tesing ile Statik Analizler
