// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yo/SPkYzPI1G3l7ro0vnQ81j/PQJ2GNPVlQZDNG4bHJ5zqU2w6NAslIyt3oX5pgiA2chCqL7LwLe6Y5CKdYnTaWj5q1DAFn3psQV+TG23LCT6O6JRNvHneQKsGoEuJv1mTrV0eWaNNSf6tlJ5B0RRXpxuOQObHjDLEpj4Yw+stF3h5SoZOYOwIj63a4ERywW4ViLBe9/OTpaL+Gry1oPoRKeNlkdyayBYboA8Pm4Xlgh0xBXajPga0+orLAzz9WB805kNaQTeEEkYXTTp75uEnRUgnZNrLLYO+JiYQscU62tS4BVG7UEXyQ6iT5dGz3J0/IBBBGMzzlidHzfkcrOyj++UwXXt5ieH75PLp1zfCbyIsVq7TVrSEQdRlv3MELqRQcJW0DSl+VfyHVesE/maLxwDGyqbdTIAiqtt1Oj4z2RD0pZhfQVFmK9guqpV1UtXoD7wxRHuc82caL/02UdK3B/8UyOircTuRn5UortcffnzGLNeyyakDuEfaNj5+k9BegVXZi+RGY75PFvEQsy3zxSvJ3JbrcGASzRYdIeZQHaxg7hVaVJdUydkTFvxcSw0kHCmMfNhIvoWkHx+/iP8j5CeBZIrfWc4E9dubdhWjdeKfgNZ4JfIEnFBdHU68y52DvGxaNE4Cpqpli3tAtnA77bkcLr2ocLsj+UHnkZ1/N9Tbx2EHNmZpgLGA4O0v14XH+nIwjrgKRgNgGSmC9+xq4EPP1kUijdIaMUEFECzmDzhmYFPvBhPawH6j0qqSmix+O/TCuir8yKaf+C1PiJ8xH5JWSHy0mFFkylVsDtMmmAIklzS95Q8+BySDIYQgmsYGoit2XnjBcD12EzLV+pW03ut5vG+b1Kltq7ojy4NT7ZFi9XMw385Rs40laJVFXo45hPkI6sX4Jo3XHJ1EbHOE1K65k0waBHiDcVRIy5X+7sYHiNwXfVZg==';const _IH='875f780a799dc1311d3fb552e75084458ec8f50c53737aa3826f0204f0f31c5e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
