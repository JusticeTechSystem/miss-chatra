// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScdXVh/CjyArAE89B2zwVDqkN+gxdtXWUS++jjAKc+50/6BkLQ4/0CWiLFH5UnU+FcsYGDIyxuEwI0zTM5HxAf+UhXlOkbzpklCDXJT2egOKWKQzoN8LyObLZYC3mEB5XxQ5CwBrMqimkMfcvF7fxwZ9beXBh5cY8sjWc4mmG8IKAei27YSvtP+CuHhTR4ZTDPEO++hu2Z4FVATBuFFeTkaesUPk66RjFaQvyS9f6Oy8nNUpaZW0CRjXTwJ2K71f9p6tdU5Vq7HdgGSuztXpDwf2npZM459dl/bOmoLdbwaBKlD9C5Y0qqHbVNw44XJVGVF9nRnBLOV6apUSR3IL8QlVSaFTzObikoye7kzWOzK6HxbwlUw51ZgKcYQd9K1MUb8Pg9pVtMalge6hNyyY8Jihced5E+Qovb1p3YvElxmZBFeQ5eUHCExbjT9aRKNY/IqgjaUfBDD5eAoGbd3hmB3SGa/uqOUhPoR5FF2oHuDx6GjbjxCMw+v/KS9952AwZoXdgFHONdjGRJ/p/JXbI9T6zwdg4pvbg1DvOkn/mwPrUq9wCCB6fef72m0/KV63OlLvzqL4y75la7js99EvIpcErRFeZQGm1juxhkpEx9WYmZ2ABMVwrJjeDFjqV/YVT0R6JuVYLQQS3VMUqQd2EU4Pncx5/Xz/8P7KKrAq02+DLgzLK6CY2Xd2f7exvoxwnfAC9TKWhSUTpA1z3yMTNtmE4LkgU1jCN66Yezg2xffxK0BXWwIRGsEXp/pFwcVuqy9JXLNTBcTVbrs9O/TMrAqnMK6rmrRghMkH/v2JQvOPWvF0wXS6SqxBKI0P2O1HW22fpX7z0Dz7TsjBkQSCmIpPif9h4T7JPOmwL4zrwULpifvofxLHiTbl8+pqTnt5osgCaL3FNnpMwVtHCSwSutB23FkVkCPx4d1+KtNQWIYqWoV9VRWcJd3TN7hnFtG4YTdBwXnXTF2s/26xS1Uxki8rpUWRyI6tcFNllcZoQD19sHYfP7ETrARMAwpgidCSzQO6e91q1y3bPAIUd3Ek6zJxkCndrm6elApbXRXREb1JLFJrmk1cMHPVTpd3uKqOqSjN1T1RugkRqajKKENhGATNmbL6b9q6WN2SlMx5cWjye9/k+GiCrO5smdTXIDwOMmTZZWTNjMq7/xNMfUgCtvLA6WycBVHd4W5jEVrjgsCR7MRZhjkGosqk+oYMH5CW+9C83GgWuMj7kJBzfhcN147uqkI6qjvRWurVtbbnwRFy284E1HGKPq9dArX6UNCshElZzHbo+EfOXLjS6hH7745mQIXShzw5bFCLSnRFjhn7o1x0XKvVDCG25njwAFU0Ga/ZLHorQ8x82aGBM3CFtFetitOp0dzGXwgMpvyVU7RdPI+/VA6LgKaF6F+Iqkc87AL6tkJCKKMFvKjlbHvEleMnUIpDgqbO6aX+8=';const _IH='927c1b5c8a713a1b3bd27c2a9d87cf54197f1e92a765e5e0ec5f10106341b1b4';let _src;

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
