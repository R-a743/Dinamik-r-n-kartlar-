let urunlerim = [];
const urunler = [
  { ad: "Soyut Sanat Tablosu", fiyat: 16680, resim: "tablo-soyut.jpg" },
  { ad: "Manzara Tablosu", fiyat: 3620, resim: "tablo-manzara.jpg" },
  { ad: "Deniz Temalı Tablo", fiyat: 12432, resim: "tablo-deniz.jpg" },
  { ad: "Şehir Silüeti Tablosu", fiyat: 2499, resim: "tablo-sehir.jpg" },
  { ad: "Çiçek Desenli Tablo", fiyat: 1549, resim: "tablo-cicek.jpg" },
  { ad: "Geometrik Desen Tablosu", fiyat: 1729, resim: "tablo-geometrik.jpg" },
  { ad: "Doğa Manzarası Tablosu", fiyat: 999, resim: "tablo-doga.jpg" },
  { ad: "Minimalist Tablo", fiyat: 21252, resim: "tablo-minimalist.jpg" },
  { ad: "figuratif Tablo", fiyat: 16252, resim: "tablo-figuratif.jpg" },
  { ad: "vintage Tablo", fiyat: 21252, resim: "tablo-vintage.jpg" },
  
];



function ara() {
  let urunlerDiv = document.getElementById("kartAlani");
  let aramaMetni = document.getElementById("arama").value.toLowerCase();
  urunlerDiv.innerHTML = "";

  let filtreliUrunler = urunler.filter((urun) =>
    urun.ad.toLowerCase().includes(aramaMetni)
  );

  for (let i = 0; i < filtreliUrunler.length; i++) {
    let urun = filtreliUrunler[i];

    if (urun.fiyat > 10000) {
      urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    } else {
      urunlerDiv.innerHTML += `
      <div class="kart">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    }
  }
}
function sirala() {
  let urunlerDiv = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  urunlerDiv.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }

  let siraliUrunler = [...urunler].sort((a, b) => a.fiyat - b.fiyat);

  for (let i = 0; i < adet; i++) {
    let urun = siraliUrunler[i];

    if (urun.fiyat > 10000) {
      urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    } else {
      urunlerDiv.innerHTML += `
      <div class="kart">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    }
  }
}
function pahali() {
  let urunlerDiv = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  urunlerDiv.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }
  for (let i = 0; i < adet; i++) {
    urunlerim = urunler[i];

    if (urunlerim.fiyat > 10000) {
      urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    }
  }
}
function olustur() {
  let gosteri = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  gosteri.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }
  for (let i = 0; i < adet; i++) {
    urunlerim = urunler[i];

    if (urunlerim.fiyat > 10000) {
      gosteri.innerHTML += `
      <div class="kart pahali">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    } else {
      gosteri.innerHTML += `
      <div class="kart">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    }
  }
}
