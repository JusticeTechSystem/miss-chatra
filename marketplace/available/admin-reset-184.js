// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lMEafLAKecK5sYcD6zu/C2wYYsFz/VTe2MkmPH/iebHd5LDokcEAAhEQYfOh6V94Oz4hauGWS24iSyciZMSCIe5fl/U4BEmCacKZrwIVz4k674JpZWA9AbhGLhVxws2tSLQ4dI+jcK0VsOmpqOx+hSk+1Feol/RLIMjD29af7/eC7dA6pvO4Smlk8W5p/ZvPQgbQKuVzcmOibIqEavYWgXxXzpN5ZfG/zm/L53aWdJ7EzKvvgestcmb1iYm69c/lrh2zPI1RNvFNOrSlTV0zitiQUL5wOuUyh6M9B3w+4LYyZE2/jC477AxtWBx2bmgccj+Hu7tlshp84Ig6L9Wab4G92BOYX/ZQ88Gv8fBYOzjNr6Lx71BkebufGp2CAait2fQ9yy0fxE3BAxdyXddXLKJmBioKVnJv5Ws0wFhm8zUtZZqrQWJQYO3Jwuk4HSt9qLbsIp3orjxLtheIs6kcvoljzC+UmsrcvkiKEB69A6mUkmjWNlirdYwm7bpB0/VJfS2BQaby6TqxHEsZLEN/BFJ5t/93m/ytwscoKpOhdD3Qhc7iUvIMRX+R5BaOUYEv20a1+GzYunFjAKjjGrJoG6pEuyvgArAUqSdqWQiyD2xR5AsVbCnG6XQGHGHExLUq1IzZynmHhA9t9IPnqGyp8L+HSTfXm3r9WS6JbtyUMmSmyZ16+dRxrny/hQQeqq4Vc0nFkKH25yz1dCbWoFwDRLK0tOl59LivJW6dfi9d2Tc2E9UPcInNTUmkT3ymYcSMY3Uiwi8oBXJwOl57EzYasGko2iP4zh4dXxtSKWTrB7t4gklxz5Y77qRZn+NIriGSSC0hmsn/Mc5SbkBjFLz5hYa/6Z32cD/AaEoV2g97lT603MMSyoqkeI0bhkFxYfgKfsdn967mtVXqaExAJmWw4VIxvlH1H8afh4LnNt22YbPGdyKwZd1bfFdUauT8GW7opZJ2lEp00lWwLYrI9xvuhq1AE8nhSDzydpDrh+/p59Kn0eapwZIzjGbx';const _IH='e2fcdccf05a66ab68ac023d546f8f06a78f4202d914f72a9c2fb5838a5d41294';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
