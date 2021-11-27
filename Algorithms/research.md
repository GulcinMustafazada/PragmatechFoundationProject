## interpreter tərcümə proqramları ilə compiler tərcümə proqramları arasında fərqlər nələrdir?
Bildiyimiz kimi kompüterlər ikilik say sistemində yəni sıfırlar və birlər şəklində olan proqramları  anlayır .Buna görə də informasiyanı ikilik say siteminə çevirir. Məhz buna görə də bizə İnterpreter və Compiler tərcümə proqramları lazım olur.Bu proqramlar verilmiş əmrləri kompüterin  başa düşəcəyi bir dilə çevirirlər.Compiler və İnterpreter tərcümə proqramlarının məqsədləri ümumilikdə eyni osada onların işləmə prinsiplərində müəyyən fərqlər vardır.
* __İnterpreter tərcümə proqramı__ əmrləri ardıcıl yəni sətirbəsətir tərcümə edir və kodu təhlil edir, əgər kodda hər hansı bir xəta aşkar olunarsa digər sətrə keçmədən proses dayandırılır.Burada obyekt kodu yaradılmadığına görə yaddaşda əlavə yer tutmur və daha az zaman sərf olunur.Sətirləri ardıcıl oxuduğuna görə ümumi icra prosesi daha yavaş olur.
* __Compiler tərcümə proqramı__ isə kodu yəni proqramı bütövlüklə tərcümə edir.Yəni əvvəlcə bütün proqramı işləyir və yoxlayır sonra onu maşın koduna çevirir.Burada obyekt kodu yaradılır və məhz buna görə də daha çox yaddaş və zaman sərf olunur.Ümumilikdə isə proqramı bütövlükdə tərcümə etdiyinə görə icra prosesi daha sürətli olur.


---


## Javascript data tipləri hansılardır və niyə biz məlumatları növlərə ayırma ehtiyacı hissedirik?
Proqramlaşdırmada data tipləri vacib bir anlayışdır.Bu səbəbdən də dəyişənlər üzərində işləyə bilmək üçün data tipləri haqqında məlumat bilmək vacibdir. Dəyişənləri və dəyərləri düzgün yerdə  istifadə etmək üçün önəmlidir.Javascriptdəki dəyişən istənilən tipdə olan məlumat saxlıya bilər. Dəyişən bir yerdə yazı, fərqli yerdə isə rəqəm ola bilər.Javascriptdə 7 data tipi vardır.
* *Number(Rəqəm)*-Rəqəmlər həm rəqəm həm də kəsrlər ola bilər.Onlar üzərində müəyyən riyazi əməliyyatları aparmaq olar.
* *die()*-Bu əməliyyat xəta ilə durmur.
* *String(yazı)*-JavaScriptdəki yazılar dırnağın daxilində olmalıdır.Javascriptdə 3 növ yazılış şəkli vardır 
   *  İki dırnaq: ”Salam”
   *  Tək dırnaq: 'Salam'
   *  Köçürmələr: `Salam`

 * __Simvol tipi__ yoxdur.Bəzi dillərdə tək simvol üçün xüsusi “simvol” növü vardır. Məsələn C dilində və Javada char-dır. Javascriptdə belə tip yoxdur. Yalnız string vardır. String bir
vəya bir necə simvolda ibarət ola bilər.
 * *Boolean(Məntiqi tip)*-Boolean tipi iki dəyərə sahibdir: düzgün və yanlış. Bu tip ümumilikdə bəli/xeyr
dəyərlərini dəyərləri üçün istifadə edilir. True- düzgün, bəli   və False – xeyr,yanlış deməkdir. Boolean dəyərləri həmdə müqayisənin nəticəsi kimi ola bilər.
* *Null dəyəri*-Javascriptdə null “Mövcüd olamayan” bir şey mənasını verir. Bu sadəcə “heç bir şey”, “boş” xüsusi dəyərdir.
* *Undefined*-Bilinməyən dəyər. Eyni ilə boş göndərilmiş tip kimidir. Undefined-in mənası
“dəyəri olmayan”, “bilinməyən” dir. Bir dəyişəni göstərir. Ancaq dəyəri yoxdur.Normalda dəyişənə “boş” və ya “bilinməyən” dəyər vermək üçün null istifadə edərik və dəyişənin olub olmadığını yoxlamaq üçün undefined-dən istifadə edirik.


---
## let,var,const dəyişən təyin etmə əmrləri arasında bənzər və fərqlər nələrdir?
Var, let və ya const açar sözlərindən istifadə edib dəyişənlər yaratmaq
mümkündür.
* let – müasir açar sözdür. Chrome-da (V8) let istifadə etmək üçün “use strict” olmalıdır.Let ilə müəyyən edilmiş dəyişənlər Block Scope-a malikdir və yenidən elan edilə bilməz. 
Let ilə təyin olunan dəyişənlər istifadə etməzdən əvvəl elan edilməlidir.
* var – köhnə açar sözdür.Var açar sözü ilə elan edilən dəyişənlərin blok əhatə dairəsi OLMAZ.
{ } blokunun daxilində elan edilmiş dəyişənlərə blokdan kənardan daxil olmaq olar.
* const – let kimidir. Ancaq dəyişənin dəyəri dəyişdirilə bilməz.
Sabit bir dəyər təyin edir. Bir dəyərə daimi istinad təyin edir.
let dən fərqli olaraq boş(yəni dəyəri olmayan) bir dəyişən təyin etmək olmur.

---
## Proqramlaşdırma paradiqmaları nədir?
Proqramların yazılma qaydası, onları konsepsiyası, dizaynı və s. proqramlaşdırma paradiqmaları adlanır.
* __Prosedur Proqramlaşdırma__ -bu ən qədim paradiqmadır.Hesablama alqoritmlərin kiçik, bir-birindən asılı olmayan prosedurların köməyi ilə yaratmaq lazımdır ki, bu prosedur məntiqinə uyğun olaraq bir-birini çağırsın.
* __Funksional proqramlaşdırma__ diskret riyaziyyatın bölməsi və proqramlaşdırma paradiqmasıdır. Bu dillərdə hesablama prosesi funksiyaların qiymətlərinin riyazi mənada anlaşdığı kimi hesablanması kimi izah edilir.
* __Maşın yönlü proqramlaşdırma__ avadanlığın bütün imkanlarından istifadə etmək məqsədi ilə kompyuterin işinin təşkilinin aparat yanaşması ilə xarakterizə olunur.Avadanlığın konfiqurasiyası, yaddaşın vəziyyəti, komandalar, idarəetmənin ötürülməsi, hadisələrin, istisnaların və gözlənilməzliyin növbələşdirilməsi, qurğuların reaksiyası vaxtı və uğurla reaksiya vermesi əsas diqqət mərkəzi olur.
* __Məntiqi proqramlaşdırma__ diskret riyaziyyatın bölməsi və proqramlaşdırmanın paradiqmasıdır. Məntiqi proqramlaşdırma riyazi məntiq nəzəriyyəsinə əsaslanmışdır. 
* __Obyektyönlü proqramlaşdırma__  əsas konsepsiya obyekt və sinif anlayışları olan proqramlaşdırma paradiqmasıdır. Sinif — bu obyektlərin quruluşunu təsvir edən tipdir. “Sinif” anlayışı müəyyən davranışı və təsvir üsulunu nəzərdə tutur. Obyekt — anlayışı müəyyən davranış və təsvir üsuluna malik olan nəyisə nəzərdə tutur. Obyekt — sinfin nüsxəsidir.

---
## V8 Engine nədir? Əsas hansı vəzifələri icra edir? Javascript və V8 engine arasında əlaqə nədir?
V8 Google Chrome-u gücləndirən JavaScript mühərrikinin adıdır. V8 bizim JavaScript kodlarimizi Google Chrome-da icta edir.
V8 JavaScript-in icra olunduğu iş vaxtı mühitini təmin edir. 
Ən maraqlısı odur ki, JavaScript mühərriki yerləşdiyi brauzerdən müstəqildir.
Bu əsas xüsusiyyət Node.js-in yüksəlişini təmin etdi.
V8 2009-cu ildə Node.js-i təchiz edən mühərrik kimi seçildi və Node.js-in populyarlığı artdıqca, V8 indi JavaScript-də yazılmış inanılmaz miqdarda kodların server tərəfini gücləndirən mühərrikə çevrildi.
Digər brauzerlərin öz JavaScript mühərriki var.

 ---
 ## Javascriptdə əmr sıralaması və əmrlərin tərcümə prosesi necə olur?
 Javascriptde əmr sıralaması yəni əmrlərin düzgün oxunması yuxarıdan aşağı,və ya soldan sağa olaraq həyata keçirilir.
Bu zaman əgər hər hansı əmrin icrasında xəta yaranarsa v8 engine bunu oxuyur və brauzerde bize xəta barədə məlumat göndərilir.v8 engine xətaya qədər olan  hissədəki kodları icra edir.