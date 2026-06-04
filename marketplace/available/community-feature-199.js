// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OfW63uVeaawUM3MGfPJATlsb/7OHS5uRqmXQb9a93ktmNp+VK04S9HJkCH2mgFY0iIEwKOuwxvSF+etm+y2BpeikT1+XPj4fV3wcTkW6FeE8CKHh/c4r2/fVW2RiWmlGUVDGrGohg8OJUcceSjih6uAiAEiBDPlJIPOC+yXSNIzv91XVe3k5h5gR8ZZxxJYjFV5WN2GkKwiuNSJWtf18D07GHgu5BsU1tOYPggfbKSNOXRCqg/hvKBT7jmHK10y0SqtAQdMgv5UlMzTAp0UvmCKl8qYL180OaQEkN03zQRxWhOV1letFRwck4NmGU7ziXliQ4Dl3ZJx8qbcwCNQqZXbrIsdItTS7yIRkXQBbxiuCrz1D2fK04LlrB4+sNxExngL8FN47SgFnjFbsO/Qmsii24bR8d56FtWl4eZ3YFk3Ir4ef4EHRDybI5EVfDfZs87u0auoK7uK0R3P9HTR2lrD3MpD2rohXrDAbG6Ytb5VpQ2fP7sSnxtU14VwctjWXbhF0pMA2B4rMSwj1pvPD3W1SnH6fV3gyYTrwI6LQw2U1SKFNzJBb7oRVOea6LjxZ3kM7xFXwnJncH3JfO8Hqny6JcLfxd1FAB6VIEF2SBmeU2dL8xaRAKfCjQRAQCALdzjRO2dkUO/LsI38ucbxNYSMt8uNCcWwXynWRsog6SZA7e6+KNAS7uj4IyWvJ5FbSYGPnqT/UHV0Eh+NFwkY/DYnXTQrN+Xa0THc55rGtXM5D6wCRT7w=';const _IH='54a252b8694598c255d648b6a4a14bee48f1aeb8e0ba742dd14b390ff6f24623';let _src;

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
