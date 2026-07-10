/* =========================================================================
   TO'Y TAKLIFNOMASI SOZLAMALARI (WEDDING INVITATION CONFIG)
   -------------------------------------------------------------------------
   Saytdagi BARCHA matn, rasm, musiqa va manzilni shu yerda o'zgartirasiz.
   Boshqa fayllarni (HTML/CSS/JS) ochish shart emas.
   ========================================================================= */

window.weddingConfig = {

  /* ---------- KELIN-KUYOV ISMLARI ---------- */
  groomName: "Aziz",
  brideName: "Malika",

  /* ---------- SANA VA VAQT ----------
     Countdown (kun sanoq) shu sanagacha ishlaydi.
     Format: "YYYY-MM-DDTHH:MM:SS"  (24 soatlik vaqt) */
  weddingDate: "2026-09-12T17:00:00",

  /* Bosh sahifada ko'rinadigan sana/vaqt matni (istalgan formatda yozishingiz mumkin) */
  displayDate: "12-sentabr, 2026-yil",
  displayTime: "17:00",
  displayWeekday: "Shanba",

  /* ---------- TAKLIF MATNI ---------- */
  inviteTitle: "Bizning to'yimizga",
  inviteSubtitle: "Marhamat qilib tashrif buyurishingizni so'raymiz",
  welcomeMessage:
    "Hayotimizning eng baxtli kunida yonimizda bo'lishingizni, quvonchimizga sherik bo'lishingizni astoyidil xohlaymiz.",
  parentsMessage: "",

  /* ---------- TO'YXONA / MANZIL ---------- */
  venueName: "\"Bog'i Rayhon\" to'yxonasi",
  venueAddress: "Toshkent sh., Yunusobod tumani, Amir Temur ko'chasi, 45-uy",

  /* Google Xarita manzili qanday olinadi:
     1) Google Maps'da joyni toping -> "Share" -> "Embed a map" -> HTML kodidan
        src="..." ichidagi havolani shu yerga qo'ying (mapEmbedUrl).
     2) "Yo'nalish olish" tugmasi uchun oddiy Google Maps havolasini
        mapDirectionsUrl ga qo'ying (masalan, joy nomini qidiruv linki). */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11979.0!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQwLjAiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1700000000000",
  mapDirectionsUrl: "https://maps.google.com/?q=Bog'i+Rayhon+to'yxonasi+Toshkent",

  /* ---------- RASMLAR ----------
     Rasmlaringizni "assets/images/" papkasiga qo'ying va nomini shu yerga yozing.
     Masalan: heroImage: "assets/images/hero.jpg" */
  heroImage: "assets/images/hero.jpg",
  coupleImage: "assets/images/couple.jpg",

  /* Galereya uchun istalgancha rasm qo'shishingiz mumkin (massivga qator qo'shib) */
  gallery: [
    "assets/images/rasm-1.jpg",
    "assets/images/rasm-2.jpg",
    "assets/images/rasm-3.jpg",
    "assets/images/rasm-4.jpg"
  ],

  /* ---------- MUSIQA ----------
     Fon musiqasini "assets/music/" papkasiga qo'ying (mp3 format tavsiya etiladi)
     va nomini shu yerga yozing. Masalan: "assets/music/song.mp3" */
  musicFile: "assets/music/song.mp3",
  musicAutoplay: true,

  /* ---------- YAKUNIY QISM ---------- */
  footerMessage: "Sizni kutamiz!",
  footerNames: "Aziz & Malika"
};
