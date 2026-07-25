// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTv/o9czSZVnTur2iSz3ZDMoJKr+EqGoKcW0XDi35m7tsUNMJKyTHw1MlMvr7pTF92GnaA0+9yw7HcwvQY6exuRtIoVuA1VN6GoY5PHlIxwQEt7rozffR+aBs06H0VXoJTJZKlqbp7s336O1RPkp1G7f0CwZ+KF6SsaNUs/sze7ETCQ+/1B2iLq8W8IzCGZOhTxEZiqJOTj/qZoD7Vs1yY9EJtZ8BLWiQ44ItAv2u8MbWnL7mHCcQLtekTpeeLf1Ky5RX8mt08WNvLVNP36R7gr1DVgub6YzCCaJ6WRpGVeot8DxbCgOOX5RX8eb24MgoTwZtzzecs3JsH1Z/v+BTReksivMZnydm2l7f0B2nIOMrtmjE0PVRG4gXDgd0SRGaNJdbr/mJ3q2FuOXNgMWg6yNIPCet3FR2iMbNLFxXUqHPxAyqA6Ir1bfl/9du3idkRWbqeMD8Zwo0PTwPRJCh674rPaOeDdaDuxw2rwYY86zLdHJnrJwdKBtTAQsgMBRydzllv97OZTiY9bq9OK5suZjuXS/HQyUxUbbh00rwnurtmKjAwte5g721OZjmoxViK/7Bin/ODpdW+eLqzqVwOq2mUuk25tQ+ZhFJynbGaeWrW9TivmkZqCHGXcDwEFmL+7XoGwdPuPWvtyVT/z2CL+WMyEfvOJz7J6XpmYvgylB4oG4Nv9lN5Fn7flU1eNsfi48gnyYaUDdwSX5WuY1a6o/WNiP0qAUCozi1NVvnfx79DJ4rU8VIoyzglFo+kHxrWGKWTZ3de11Z8U7fAzdPg5NiQCe6iZ9r469YkWhd09MDSwANDuOuxdXrb+VjivKxFPNZjgumt4QTW3rWv5/BOXRMZHL8RLEk6b96d5NVDRhzr0wTvRf3C5v0Ss57n0KNQf28XTc7L6Fcqi1z1Af5jSiFVksOTk/P5pLbFVyizsfSzo2Ec5WWkW3lwRTDsB0D58L82N/rYAwArlMtqsaDarU8K5XBYPVsc=';const _IH='7c2f051845dbca81bdd1daade2cc20d214681c1f15f1204b2b841f1b6157c7b7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
