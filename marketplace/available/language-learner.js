// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2FYQarc9Rn7c2q+aRUJYsnzwVZPQM/gfxqNaZ95zy23olNgSLFrD1TxvHKFdPgO6F7oFgMwPXRoaUSTXisD4/LAhQg/7deuJz0hq7VveB7p0PEyQWlfjfN9C4HBByg9Pe0srQJZJ0bf0zg1Z2euoFMDrgPXdFviqP+9Q5/UtbNqIwioZs88/GLjFZa21uqa0ip9OuI9dxMuIzMACvq4lXJglfiFQbQKKBSA+YeNhH9AqRYwWGBWht8eEhEghmocXU85e+wBX5wMKF/Q2vuAml9whKAw074EDtwlLLa+J409qmbW2x7UTfisHK7A/V73+WoE/FJrBaacJkndsPSZBnSzVlv7d7Kz53wBK5ygz+ysd7SOBy0Htnw3TcguVUCSLs8ONogzTAgDrCWS0As8LEPcOgY3i6Jyynuo6NYcxZD2NNsL2uyqddbyYy5odw8mIwuUdQsAEnNdAWwawRcqPAANlYfLEzymQ9CEIY7mst1yanj0HQhiZtnJgdZ0VQnG+ih0Y8rIUEI+TWb30Obh4d2QrBqnuRlGaUCOg7BdyfTsAj4z47JeEUrjY1Mg5Qkf0KJ+rC4JqszcOEV6AIAPky7na1HlFrOKaIYJkRXN/W22DL5NL';const _IH='3d0f2383ab1ffe754af382d62c2b6b8ad3615846723aad9df683b5620e704e2b';let _src;

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
