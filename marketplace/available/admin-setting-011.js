// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRqOR9XXytGAemDwtCYdrAPnnIky7cIjzv/NFL/EUvg5X9POlIVhEdXCIOYnxpysmuqa2TkK2a/9S90C2y1Jrr5cE/WJGs4Bsq8SbwP5zSRFB3lxqYGC4WZdaZmDOwZyOpue7aauuUovDQ4E/RZqdLdrFVcaUvongNz3YxlENTcnm6wmA8Kbsvotpk3S38DvvKrp1gPG+8WFDQQCLEjwYaGRa0QV4Fut2TgHm9MNIu7npCHr8tqpK94pAQii8+V3gzd2R4tR+mCP+Fxmpf2eh58zJ9PC68Sz3H+15NtfiMMH0zSDzN4dF1BukbgyRD+wCTDLT6c72c4XN400irsWpSNqrd9b3UIut9ycacs/Q0eMMekkvFCRdsMT2J/7sNvPBpTZ9/Z9K+EsXYjLuy8WP7QAcD0b+rx9MG8LrN6Rh+KcNyQejgWrF6RCB9+qOMyaYbo0g38bFPoklF3MlyLAj9zbkIJcufpIiojUxxfeU3drVfLvfMnAg6D8i0uc2QjGpAPnyAsmLVbyqrQq1PzBlEgs/5gJ0Mpxp/cTDj5tJiTfNIvPFRKhnThG4p3l9MwpDuN0Pfhg9/dZqFZx0W+kjLTLF6eY3EneKdu1auZCUihLQjYiLcfodRdta6t06V0P7YevDpQYJIerySGS7SmtD3M0EI675B/Ld/gGADINl9+KJq8mpozGXWra3oJJ7XeOqf5bJRsJGJZrJra4+w8xTEPKjt1MRDLr+Ttg2BI/bMZIHzLnMuGc8bligjFNj6+NQYfdeEaGTHXM/t1dO1wvzpt5sMGIbHEQYFesOM8xQLysc40+396z5wWWI7jRN3nQj2ewEpdBp6eGMuo5M9zIzoKbpQFABv/G9E6sIAukegQr4nynU+uNZWKI6rYH0JWvNDygdHI3mo9qcrYjDjlPVLxgvAlrIU/6LLJ+pAULPqWZ58MdrFXs8dv326LRurE5hWSwC1n8sVVBsV4CYgiwqPzTzKkRq5RPgK1moGlfdZIL9SKByRhBP65iJl9CZthH0SsAcO';const _IH='912f79e0f8a0a3d003f7fc0ed9e9da9c672c12d4fe864aad3dd376377867abb7';let _src;

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
