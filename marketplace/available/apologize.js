// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wArAhGIQ0Mu9WBlNA6vUSGb8/K0yfLmn+OZccAO5TJ+GIid5240oIZkRyfrITWSVzYBjm3qFMaaEzf5ylnj/mKcHa0KQsTlH1dEgFfTPYJpwSGAW/17EvfQeuo9CFd68kMVDrvN+od+LluivWYsZZ1MKObCKnaN7jHv/dEr8qB/a0LLnKZiCYva1rc4JHqOlOj5mo7jsDfTNIPZywCuKRGmc5UEby+FMcJVXidStPsicuIzTyCI7V5UkyP1QEoL0KXuKrA+cnqaMaZp239RPnOk3Qt1BUzRbo8hWEzdLLTsn+kjiUhxGVcU8NkDDHkg8qmSqW8CkY9zxlFRqZQY6qO45LX2NSaUVCNNQEB+Hi7Uzd9/SR85NjItIToTxZVg0DyH++dk3YkEW1GZLo8XhoCeUryLjHQbcAmt8kUw8/OcyXqxZZW+0ajmOULa7nNYzDx9h9X91PeNhdVXvZGPiUIqDNxLLivMQl69g1NiFEm7y21cGa+yd580YmdEwqgE1BYsU5fvovs4cdkubQe4xGhb76WhWtaVQNTcYU/BF7dlHrsHJAX5aYfR6MXMpeaFKU1UvYbzWm7ZjFl8ynviAwNWkahAbXO8aCF+9yk44/f5Tu0DJScJTs1/A/weZVx3wQmlmoGAbGgWUZqyigVSebpw3g0ip3oO+s/sSkBmLNxGe66wPOHSEPqkqGQsDGPO/FFgCVKWeKwMJSU5sgFEEoNy6LyIaKhabaoT7jy/sKYQgj2ytlrgAIXR++TyKmgfMO7Wq47XWBL1P5QEU1oYRwVOsffeyZ9poL7/hrWuXRQtn9j7FQl1UaQQpJSvwz/bVhx/9z40I1viP4kMsIcSucNeSnqJRXgZsv7kDFK2Ht1MrJVRtY89LdjUhqR009SDRBK2hxOpxbMVRtgwfiLxgTg2TZCSA7kaVUHbKtuaZdbq3R7JLQzsLVoqg++EzkJMywcvMrdC5bfYPxtk5fEm2R9/YA2lftsWAofiweXGCYCn8S1zA85gM584yA9+SneGZRAdH0UuKP2n6pYSb1vAqBgn0wqUDHN6n5/IJEl+6hsqz1eHhdrG7xibY7PaCgR5xXsSH1Ew8hkF9ayM4LF/SsniA32yrM2l4Bt9/h0o4WvYCoA4RXaWTDgditUq7WGTsSnmYT7yWSe/ObP6pAxk7tf5tam+HqedCekILRoBdQLzPwGs1vwMXe4TelDPlGiV4avVVeA==';const _IH='f1d6a108ebb179ae59b3ae5207c2ea3295a200348cf38d6cf71759a271990b6a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
