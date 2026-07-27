// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVLiWdQgeWsgCAvSPeoVI7olNYFET6dHY540TzJZR7kTIY+sqW9JbOtm8oUN7bRnaF8FKWSOFjjk/5eFH+mAS1WQyp0Tg1fukdIXhl1rbmaFB4r1lPJqymNLlkcxkFgVdbakdukkz85p0CEZW1synSuFvW+qVBVmrzRUPtKfSwZZlgsSKA7U1cf0C21LuBKuj3tBZgN4PxseLLh2PDBJpRo78QIQaJgX72r1c8rDxNZiKFgiSegU/CMb8Ts6aOH5yT0ns6H8oUlWuehBPdNGleLkAyWgngvQjcT03pHz6MEaKm92+iJI+DkCnBYpz7YBJIMDn5Tv1BnaZylJ9LESb4U4eJ75AqejGL8hlybN4EljrNVDrWhsL/x1LXhD0xVq3xXfFgmhy0HQaLeBXQ5NTVxtHot+XeBUVtr0pTvcbsTnWgODo5VwpU2f+DpAEEHfpGVb7q5BSKNjNg5nJBweYZnGLHkdbJ5RXm882cU5kHqecfStkGfdKNBho4Qi8p6s+uYTEsQPwoqsif8c4skSxqnVWJM5zHVWzObNhWUww8aIl1xYykYfdTmQYAX2uqwF4kr2GDhqpBCZeVJzcyUgeyp5tPptz2kEzPOmG2IAU8qFWef/Dr48ys70oIT7sfc78HdEZR7ngeR+BEP/luzRScNVd3NaXxIsnydokYYzVbizPXpWoSLVZX0E6Jxcwk332NPq8U0f25nwJeUYRz4rsoG10AWsakKW8j42tv3g1+4bvJv4FYykhXoyyYucOWJchM1s2pK+4j7lcIZ4pOkYh77IS3YsQTbmVCorKNy2dhA9IrbkoquoEFwtUNJVyLnHR+O5HNsEyUzXI7UyKM+a6FXOuCUtkd9EgMhhzAQtjPvFr8zJ2PxG4NGxVaF64FYcnXHk2w3kkGM4EN/e63ffkz5sRnZJ4npTVNLhu2OQK0YdpOiZLUbpog7iJ5Xluj0VuKOyxMshifN9d12oqg18ec96WBxNL8CQw/xqW2subFv75/KufZpVXr8lPji5ySGc6gvxt+2IQ8RRF7R2ZJTDxkr3PV72bhl9kPPl4ZBRLPgg2LD69w0UBYt1g2Q5Q7Evzlw/vBDB0gdgbu6itvXJ9yvAkoeHVtXm1Fo9QN0FnkSow5fW1kKqPXKjkiW/bPVBt/jyEL31cbmLI6X8x1YAjZTgug6cOkcypIkpu6tL9mLfXd+fISgx+MTa0eP1pEqIYiNzP5yBXEQI+lHdcOgeRtweN9+nNO29OnB65Cc81ChU5BDE7/+FVJrMo5wi2ENtKDEGB0rUbJo60VYjBN395p/TZI/MEg7b3UUG5AgN1xnTAW4ZSk5JC4IzRUBJJNoyZjceSS2EKMTK3hwLdTDCc+a6hetMqN878Xc/Qn2us=';const _IH='bbc2041c906303d7835486f6a1185a228b60bb833f1793436ab3c5be554a063c';let _src;

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
