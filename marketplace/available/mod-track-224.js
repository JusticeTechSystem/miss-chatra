// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VE7tfhN07WNd0ZInyb67zh2RdOSw89TZy6l5lbctlfnxEDWZ1mk/ggIjkNxYPNRDrZmeQsDVqciVKtWkTW82M02GTD2vP+iy8iouJSbBLiHxOjT3aX2WOhmywN2CCi0EaXvXGV1IWLXS5Qw9sJGs8p5dMKjeB1PwiJaFLSXDdM4mFU60gdYga5rsGTVPCKXr32b8EGOtaF5USiB4ISLZs82rV3z1e+YH1nBBMIMG0l/AdR0dYkLvdi/5qLsxtyntA8nswJErJxJCH9JnXya1+me7FfFGylyycy43od76nfQ8215LsO4o322EJPqOQNUoYG7PqryHuidhaNE+zvDaAAWB8kEUVXWdH1V0KA2/q6UXYz4i0MgLYSzAtFrouCATsdRuozu61eTXKxzO5QqaU6wCDs8tpxEsPM7z1Oases1gnT/8yK45h3v1XQ10obEUd7jr49mSPLtYude90pN+f7A9JxMSW6kQmeMy2q5/zkx4unc42rBx+n4oC2OO6WAUDebAPQSUpWNjivTILjyHjSLMN+sDtr+y10p76Rq0uC19KC7OMK6WBpbM1o5gj/2NKC7o+gfsr4XboCVBJJW66Xk1pmBGualoDhajMVmxftysquRLqIC9BaK7EVRzpJCdHWn/OOQqnCRqpyijZaeaDSALQ95SPa8KOdZ9xigUPE65AGLPGZhHk40l1KcHfQeBDRvPApq+f87DrcibGC/C1UUDirUF7hdUkTq2JvLmB7FRyqF4xWrvHTOMi7NM7qxF9klYUmXUE+bKlwJyzXLTOZZFuWEa3h9ZW3e16TfaofHlggTH4yac6J5PXUxg1aF8Nwp8n07ZlViAxq14b02EMGUmoCa0tMO5144Qo1yGS9jmBaXhVJtOAQDSA/i0qleiG70+GgzK1AS0ALz/5ePuDtG0n9+wL81oPCNVN1J/+1kN8jAmGpzKcTDqZtf6frsyDcioDY1A59uJReIHu5NAdm4rTEQdyY7wPG5sIybYLV17YX5VdGV8Y5PHyqmAYW8xEYeF8fJe2gOQp5XMcw+ibJFOgr6FIN5sGonhEK6ZDN9cmN2GphTKZZDzmjI7GP+iePJzHXMd1pHXxGcjZf9nf/tKVr78ZyiVC9pISMsEyj0lMe9bG58iH6A2Jm39sTD1pZXYv/gaHmBx+sE/mluth21VAouFP6BXyaimW8K4jYqT4lKRzK3S8EujNj7hznhSWbmizf/JNi5S3vaxOgwJp7Xd6KVXReg0nAiV6JBBx20UjAnB3FrwBa0kcY1hq7UpbWZJrgFe/9gqNaSCw5gNW9ZlxsYhm2vL5TfBBWqD93umr7Zd3e2wDHgg+A6ZJXY/udfyhxeC5GLQCNIvvJeWggRRZliXXn9c9pi4UXoq';const _IH='03923e4eebc29a1bb9917d52f5405ba345452cba00c5e1e86ab1a5d0d252d705';let _src;

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
