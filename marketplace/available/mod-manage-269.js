// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4pE4ehHIxStX0BKWSwpv9D/HCv72ucaOXpEUV6yGh0DcDdpBghwbEX6Z15fcq5h358JXV96FEBT3tEmZQp0LuajasBKEfaxxduqwIAJz8UXFhWk/bBLmfwfdrNP88xP5HGViOXj3ZT6PPFVn5abYjOo+ycuOUOOyfaiETc5F/oZGNiZnptisKdmJybgWOWMX9X9iIniIZQXKQaq2U8zYp922E4StpczK+5kqbbwqpPRXl2ckeMGRSQVaURLaRMyN4/ar8erczaFOj6xEGnJIkzUgE7FIdW82CGqKdqTw8/QSlLhwqbUcA3jd7rumCBZBMXt6uFToUvKwoOw9mJTZoIfV7gQ7KM8wJRaDywdXVGBcwTPjaj5d7joUm83nN9xFYCvNv49ZcqR7HnCsxvAlq9RHb98+4MTQzrgWCz16qTXp0iWoZqGWNwgcorGDYRPzZDoSRl1DziRJQTZCQHczieaKgNvJCf0l5WtJtrqYkSVUr7Kzsee62RHif8eALOoLK5mqc+a1NRPy16vHQ70G0NmN3WtNGXPregFqr30Z4XPi0oVQhUpJ5DrwC0+NOGvwHmW3DpA/LF4ZBW/isKI/gb/X3FxEMgGGnUGMQH/J+KUYI2qLYsBiv4/rtr9egnPYHt5WGPDMJsheu1lse9MrCxn+/HNWq/Af8g7eKLtXii10KL7R/c0byq/tgknCnnjg4r4D19whoCQ7t2cgEHwI466Ti9Y3vYDvWc6WXe+rKomBjWGQI/25lfssT2lcxzhd6Lkp1flDFCIvzx42E1QATBPZiO8MzvyO1UE9ivxsZe9zMHKutCemlS7h3kfBJ/qNARGCXdEXGu08MsvjYy8jkI52he/KRFnMp/QGyYEBvc4gOjUeSe6+sB6oWbKFWxsTCejp8uW0pO2Sncjsp06TQxSEVP4ISHOv7cDDC5ry0ZK9zAxECTqT/bCkhHhI4qFLzHlJ/F0AxhyTMH0XXDKIoBNw6xP75yFHt5p1kC80cfJ9MIo9qkrMnZa01EDtLHuOSBmoxDsyanIffoGPOaNbioy/FN2S62LZpd6qKpcK4lVG899L3nkggwtGjwxP7L9nPnqyRQGNilNsSRd7xWXU4KZWYPgX89iALdrPH2GqvHA3EFKXacUE3seegRwku0vlMjgcugJbdsVYTZYosOZY1qBr/Zy2Q+UWn+1hRlV9+DBtqmTDXgk3Y/0VZHwg8fLanATT8AIm2+xkPOoInhez6W7G3zZTiPGUgUWV1qBBk4T4tuNCHf0OI5p2xQHwVwCPX8W38nQJ3UCtYY/8NTPFAslTGlH1ei5gHkVzlS3vwCU5RxMP1hAEsKWy8OwseXWIc0jxjYZ/ERCjCAY4r1N+FJZIZAaFOUq+kl2EGaeFsawtmigJw/XSeA==';const _IH='163f24e04ed9d04338a30d951e0fb3ee1c259f4abba6f2af4d56cfa0cd3a91ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
