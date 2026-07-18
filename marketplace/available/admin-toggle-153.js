// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOgJlh7HqPe8dde9fq7/tkZA6wWaala1H7ME8wRCkAd9vq4igtMxVVojjOVV9Kh34aM5GVUVlB3DOX4On95p7+kaQQDPJ/WK7cAGhqwlADj1VzdfimILHiDUhLwqYwxQtNRV9FN1lsX+MHNh2f9aG8qAbCTdQl4X2ziZQ7Noms6/lDswmGhyuqWSTnAK8xNMsR1YJbIfWtI+0GMiUkD0Jg771mFhCbbb6saCSzuSbktZ9fdmucYF2DVlyJ0CtXWk5mRf6K6uXgXUL50puYGjChy6eQKj5kSxpKlgWSGNa7mltgtkmuFmLzlPPfXXnU8RpgeQZwkm1DkSVVgotMjVjPp1dt5C/KFmfSRa7Gw0WQcBKcum88PQmtFQV/GorVEbzO3632CmEjsm5Dy3f1wpmSBktjdeXT4dtzH6YaGg9ahaKMduMYUrCwAruRp4/O6i/+v+a4/7vwYsHjJtijDZOO0bLnmjznKy6A/jCuo6jxaXsYfnD/H8v0TUCKOeJpMxsjo/Eiwq9a46Y79O6NInXAGIp995efRYpvJECqaFuOSWaOgADZ/FJkbQl0f2i/OfXrjK0bDjlmQE8+3FYV5qGyYxcN8Ijq6PwA8rXRj3eqh/0zabHsqSTkV6X0LxhMlFYrd6hkY4zkC1pbKlMeabuG0hCVQ+8ZbZr6D9Ckw3UkacYe4lpVB7K57a+x8ja2j8E6Ve5l9rI6IGMtTaXOSrdyV/YTne4QHCq8oSc6mYVE+4IxP0Y8CEtXZGw8bTEBtjM9cWsIFNy9opHNYdsL3BxI2ChLaOJaW12a2xbmypd8xXuGHVJgehkq6sf8Q0PcjpB5331HJMfBDfsa5rjasJYzWHsl5/InSd4//3QcE9h4L6wvASXDZMBcgjWZDXNMSnGpo3tRv667WHRs6+oUMwY/y/lMo7kFUDwVzOW2Mvbmodj++8C9mwfhk5WYj2OfQfuZaHb0gnUIiXPST330ljGRBvOVFy2TJDLVlspe4ndLesaKIa+4ell36rIvmesho6ee';const _IH='26664cff46ab875d35808156b5a5088ae08a11771b15e01b430e1ef2033ba299';let _src;

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
