// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ULH+HSqTbkqfAHh+hFSgalA/w15FIthBndKvCz0ZOkYJytSIW7SGu6QiL+49wUzRhH3zZwhE09JpSkrkOI0g9Fi35azfrUchK8HabQBfZYCzs39eGWPQyOVdtQ6d437IyQv/y6Psxyu07BA8lVM3GCC9sijaZGFYt9YBDRP3Om6XJVZA5G9dVa6eg5o/TL2VryTplTKsRyW8ROmApoIRNeCelhzAnWE4oicr+U1L74HoZA+rz84GwyBuFubtQD7/1d/dZrOaE8cHuOEm/HMs0JHR/3Kko+TVhP03EYwGfZX50b8Et/UZ2tzyZ9IY2vRwzaZhBb7U1GcP82nKhbk2L7gPgfeNNzJTVIYPjcOH10xhk96nxEK54mccDLYvC/NFnQpsFprpv9KlJT7HbhVM1lcE1ekU5/Im8fRKkUoctYoEvL25KMZ/AWonDOr6C0OIi7yUiWEPxuT2txnRqepxrDkZL83lc02PwI/OcXV7ZNLd9AoMTcVR8LrQOSxRdUIx9GvoyatNKLnOwyAATH856VQRrmQCLK18nz3HLmXijceLsesqKVhYRMAA8wAB4/TWWVqwtyYpI0UTFzDwgVq8rtIW6CKd/pvxNIXox/olf8oiELz2OSUD5BD34kI0DbOq1y25Efuk4U41SsHX1qYImQBwXv74sRnuuV0v/289WlEukGGhbcuQYaDdTxyQH2MQGHRg9mcLhttMaHywuvRl9/ZyXWNVNOgY6dBb6hc58qX7GeOqazhbh5aVQU4e8ADbcxJD9btk+ZXr7guHWkY42Nb+4QvVW9N3LhgOGF1lEtk7NGKkYBrG0dqLPzRqMtWY2wVAqkgE8KVt6lLVbjq6lXiTsjj/DRYLpGwFuhKWj8LYADoHpWKiuLDEbyARIJRW3dSDbdLKcRC3QXtOAouKxUuZiBXxbPlXW/Aqq2YXZswtrxQws2YWHQYafZUco1tZpJPwkW7rMTvaVgIX9JEvGSSc4Kxz2D2I+SlacKXElcfj26SlQr7v5O8iMFd5GBxyoSdJxFawB6h7TPdakEa8xjY';const _IH='8faf66455e2aa910544b82532c96d16e730136b4019493ab57d12463f18d098b';let _src;

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
