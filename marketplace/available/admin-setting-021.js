// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxgy0Iypea95KinMTTev6zPczyObATfHptYkqQLNNhlCZNVkKaI5/Nw8S5xwfYJMjWA2QqRVfH4YqC5f2epF2mWOAe2Uonbfuh2L/eNFv6Fsr9ZtZp9k3sxEKg/zkzox19suLCbKsw/JFX+rCbvH3WDTVwcnDEpq7HkmBeDxmK0jBdxuWTyh6jzkH4/98gbKw1zScD5znDF7hYzuOncYt8oL0j/6yN5zdYB02OGGsTLQbu2PEd68kjX8OgEo+bKWdoZ59wiAc1Kqed2SiQ6a9QVHqgtjH4BXobhiqz4EIyYQVE8NiE9h6bzqtP0mqC56ifNjTUOP4PjZnKunt101Ll09pTmUn+tzV1vm01nApTSzuZsO0Un1tCL8D+9IXaKTPkYcRTJseoBGIWxXgjIiHSXT2Eg9UxYj9q29qkoCrNWG2b5akEzynEX1tuwgpsJQxY7qVW1E+SNkBu1eHDgenisNIJlzcHpKPaD1Zmny+Zoee2093KNMm/JWvk0bevdimXp85KfuTKDSUEPI+UZVytkfXJkM5F+vO6OOZFEGn4eSICA1tPgKNLCZ+z+imatD14f1jXEJnRfIuu/ebdHiNSPRHyP/7y4Z8xFXSxZ/U1qGUYJi+YCjPW8A4DoXI0A8AQp4VY+ovAyV2g6INIlmWDhm5PiTiEri1Aq3XOWeQqv+9wkid2NHKD8FsV06s69O3qFceYvPZiqNlPr9uSgFXlbkJ+OWlYBXnAcs8X4FPFd8KNKHZ3SoGLicjM+MJul6mHsUmIEG0KI/DNK+TDtvD2nHkZp9+qzeO/bgnk6iadXvA9b7h9hYgpf2TBbe58c9vGp+K+vnAZfLr2Sq7gPtAzjpP6YzXDHsgd864haTOpUbAvkbD+CCepo8G1ApErp41Zo1jyx6CqWMd4+9ZnZl1spnceG5rphogK+myiGeuvLbj6zbAPBJwqtv9NB0sSVOIKeK6Pjs54k5/LUpa5r7So504B1kZs2LghxsCZnq+GZNXr1dq7+JVJeS6yy/9nztVdvdQD';const _IH='a5bac34cc1f653a55d56e0f4f374ee394d854c51f500d7ec45577ff3e0b68074';let _src;

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
