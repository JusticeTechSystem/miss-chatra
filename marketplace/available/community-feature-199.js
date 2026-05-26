// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QuK3d2ps3yVQTENsqUwA+NfkX602CaF531kkaIn5RfE2ZArjhFVDfljhPTaHrV0XnPGHDQC0bRnKRRtvRG4A78pby7VIwHhJMQFWSbs2D8rpNClPWwB9BUTJv2osHXowQPDbyinZB0IITe+cdFi7pFt8Sp2hUvsrn9+n3zNOMYQm/dFgX+9OtHXtZuPOlMFkc2qhWiCxL/8HcZTPTdZSB0ehjxXXSj09xT2UseYeRKkVSTTrk10pal94nnHAMbiJSIIUzp6mjo8L1+rO299HkR9xEAiGxqHGhgjbMxBnCijE8hLbkDFJPJK6+F2iZXicDLD2/L1KghVv8f090eBTuddjWz9FNR92LZw5Gv6DoR3uyTBNULtujp/Rwj9IZEagg105ddx8AhJQmawRE7n5U25YUmbvqPT7ssNAyxGu21AurJ08dLDP/FbdVI5sL3jxbyM3V/FhjJGFZzSM4tuMVQ5qZFwCnV4WdUB2Yb1F07FnrnB2WXx7OneFx7MXnQdxo42pvabJtRZujT0kCQE/UTiXGePGQAhtwshtQMqM7Wfi52S7hE91u95S3hJAc4wY6PIDxG2xP9sOetXctMU8O3uY7VPwwxI4H5wSu2m7BwrTCmK8f1LrEKc1eImTFbnKrXOjIG6vXBmMoLyzeDRFpFa3sMtdDNIJWLw9641GxMETcvFPm+/M5jjr4VkuZzKlQdDfrUIr08Z1vDXpBHys4fPG8tsySLbviXVtulhGENF3Drgv7zA=';const _IH='6d00e036ef37f67a0fa177a5cd1bd3c52db97a1d730ea8c10cefa6699a36a531';let _src;

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
