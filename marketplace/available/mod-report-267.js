// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yz64PMDqyhNzHGXf7R7jWURN/aD5xGblOgrkXwHSzSEAVKilwgK1/8Zb1zGndwrbJME8wMz4MOabHXjUcbtV+pVh8rEfvF7DCh6v4vHanaoXswt6zy4It2dCLyyDI2L96FNbjAvHC3mR7JwumjH8X2RWq13nn6ed9jAfwyUnUH3XmpD6AxjtfMw5ujCj3V0PkJk9qhyV/lfNUFSqeY880NS2C30zCSmrO2/qIlPsdGh4OeoCEW0yRVaPuucjkGmGqqvhLDxg0qvFzhxRDTNKQvV1VtAL1ir6a6lfnXpbQUcBXWd48PTEgr/Tudy2hI0vus5DkjX0Jgcfj/L/MgACBxvlMQwusDgbaVow8X2g1vjdX1seRhiJ0LKZvfB4orH4BvSyRQN4yiLaTvsA8OHZou+kRKcHxN2hwPA1TwS2SW0kM3RHgQwaIdkl/eYEfzjDRGtsiUch8Qs518lIHiJVNl0e9Qzr0JSt3vehrkQYXwW/CN00ni0wDLgXfIXz7Mb52pbLjffkbPKpQjgi7xKBUTCxVdmQX0MNzV1VwmfSGXSlbLRVE2kBKXpNPGHFBjIMhAZGdFo3QsHjBM9Kq/b5NnIlOqoyEwuCy/2ydxZUeT8TTUU+/P4XH1bBIKxOJusDtSGjZe8cQ1vXu64Xi/KF45rHItA6G9mHwdZy6w3eHQKcRe4ux9qdF7/anxrO8IjjNTPOkqvgFLIYIVchkijgzvdr90GYqOqF17EF3h4fdxHZmYUfF1qA8RkJJ0GUBmqhcyRtEMZozcE3AhitzAUO1Lm7IshyL07WTz1N7P1PjhXyJjCUUJELnugygDt+GvbocWjxt3KIamHQ38ZV4D+vvtxO/FCTwfc36wIjI92E+UG1fqC80xYxMM4ZsGYYWayme/HsdVSRGOwLMLZIPZwSurLlcr2/Uo2rsTEyYc235xSESsHnL/6YAPt1IUSbn6w2JVKqnDC022F8Enbx79HGDicQQOWgVoxM0GVvDqxVQSNL1X5mX0W9yxgBWqQCVvzWKT/lGnKr4+rNlRclDpz/TsolVqDAXW/zYH6dIUIbyNdvu/ODLCOa1yc1H9EUpeB0jPqC3oqds7plyc4QlCi7gk8H3klqbIy6eZgOdh66SY4eorEP9WS2F9tUVC06jPCsxXBn9wNxZ+6hCDoFF5mnPXXE3Wey3OdMZNryYyt5J0x21Bvnz8jkmGEvY06adT0bFwPRxcZpZ6BoS6YqVMYSA4TcUgKvfT022wWZKlkJnm2fjKmYQ2eE0KFWsDNlXuJHsVF+BpMPV/WKEBYj2gjKnDjktO2R6LenDGTS5qudLbLVnJ+YBIm7wdeOsRN4OJtiCdrwpgk2xF4/8fwNX10EYU/ayISXIECSX0tBMoC1eVniXEgdPsTFag==';const _IH='c821ca581a7024aafa9f7dd43617ce691752be73e8055f554925642bb19d4326';let _src;

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
