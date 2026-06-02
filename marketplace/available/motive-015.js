// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E3Mh8SqkkF0fq/UbkXpknG0HKW0jVuml+p+sgJvOaRGqvtgQZhtimJcXZ8pRXvUxOmZ0B94gAI+itpz6619nkO/BQ0MgF9qYcQ7+aTM+Faiba6stmy7ZuC7l56uBDGr8x6xpYDpJJDyOWmUGPyDBo9/z4v7GOc481HtS8Z5PZwkCiMeJUsk5Dx197p7iO5kA7buq6waNutwJk3G2dF5e4BAiqndqxaKFTpXLi8/rYnFn2fnZprTiue+n2Fq4ozXpWLHbxfVgHlzH7ekqu0S392xN0QLWXdxJ1rhEi9o/V6P+pM0a2g4DalbLqRl3PGumQSmNCSG6jnTX10B5IESONwTBzDavQt0nbaigeHQlvoq/kFnqgjOMdNwmCU8yBSuXSLBHaPU+LFZlSxskxTPTP6aC3auBJDVRB7P8eLP6jb5cTGNI6p+IMwMKG3LoxZfYLDqdoOEHvxgQu4xK3O+HTuUmNr/cqI8ATHAm8+5EG208KqUWnyrGbEnQfpVkfYIMSEMY3Y8ixQfbfob0Tbkb1BXFyS6pcn9doUSqStnr5DKKMYegzRNASk1HoLcUmtCrUHXzJfsMsQynoQ9SSW1t2nlUEmZkF899RPg9KZkYWOuBhgsxqjV1JwI+KPOIkMR4HN4UCsel76nsHTsscWUZmU1xBU6GN5F098QajzozrVO5HN0Bta5FU+6vK0H29/njNrTlr+ykSEh08bRivLNCZCpHobM9kux8ZsfXerIiY88BC5M8b8RhqvR/RWrBYzlqRTCiArvLZ7Z9h/neB66gI4VvPFAnGw0/eNYCr7VLPvhoWgMw39eRt0xBEbLpy828H89T1fmwQfMGp4bdDDU6x2Z1va3w9AynLjLPFuJ7r/mIPHhUsXzID2PiENgALgtUmpoRp7ZDTM9fqOIxcU9+DkDICUsi+GcLiPEjWL22MtMr6vn3m2NqyFnj6Q/S6Cpw3mYyvQe4BYLI/QNaPaB0xxs5CROk2exN/iZx/r05m9/lSV+/zDnBRwJ43WxSjgaCz0NAVOdeVuGgcyuWenCefwub';const _IH='0e9f3f4c80941cb3e6906e47dbb917ba65c1999b3a246c0e5d96dba8ead9c483';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
