// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/UTNQg4Dg3+rAKvO3PwPFASmwqd1aRy1J5g2MVgMvmQ1RnupijvbTWm2CbMWd0RK3I0yFivvu5H+0GUTL1okhDINJ4e1UheIe9QvyYBY608tLsqZLCrPurlS52UPHulVlmM5TPEQ/JZa3Z5It+5N6nCKc+DmxLd8/Bx8l+rNlwZXCgszCg499xGvlEdKOpp1XIvV1YyvVSZm1/51tylcyCQ2YgnnRawZbZ134bwgWBuncDE0SN0/dGchsRtUSduvZmQXe4xzcexEVEMEqiwH+WiMidJJExmIw7GOijoaTa3nyAu1JFoXALCBAvMx0Cyqu9HU8PkG94tNbOCwVKftWyBUDYLo+PIqXRh1CwIFRC6rtsddjVlLcSM29axwkDIIxO6rsGwMFqx2HZBnwBnAR6zRISp4Sc2phKxwZ85bP0rZxKyd+vY6E+5dVab6beaCVIaEEKlWVSUGdSFiHBDOHUrgSGT+DsBPJ80HM8TWtfDGrZ+hzbYsHljGeuCr6uvaE8psWkSSe132WRCnM/JH53fvMh2kZ1ORsegm0lA39KLhmoLVV16BzvxLwtTFEUDy8IL1I2Wm68fjDBf9Xoxe5cGpgaIU6WKll+xxnbRj9xnfGtVLyC2jHvKdd3BRswdV77BEAdqmLhbH69gmdzyoxcWuLkJ5atb8cRbZHlZsXM3cHcrVkK/8ajG+ZaR2PpV3HFd6RfnANh8l56Trvdb+VvK0muhdHNNGe49006tfVRPuYJ+P+51S2dj7AmX0tH+BaojFyLZUCsfi/yYUo8UsvMqVMEHFqDsxwJwvxleHuqSDtMWn7d5Gl/Azmx8GbH+CnuI5rjUdh+L84tcQWvBHUKuv5D5IzVWAafKfSUAvcoSr/JRRGjpEOZrsMr2q7I+toCXCcUlSjt2zK8RqX5ILVZzm9Kwl9EbDK760zW9Ifo6b07hhrVkn5QODnk=';const _IH='32572ef4fbe7011aeea4d74f703b54f1be2af0be5c4e2fd62ecab1f27ca6a9c6';let _src;

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
