// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sgIwXnDxccs/1sUj4rIQ1NByi05FeS7zrThVsOykOjNuN5ao5qV2NcHBjvLSfnlXX52DxM1robdcjilzUqIQVHwNwzf6Hex8eqxSuKYW3uQmuxoDLXiQq+Wpxa8FHih2wFJFQ2zenqobdawgmiG1DOGXkqssyRo4pX1OGLxl0FV92n+0aRbBil13yJPiOsL/TgCCgE6KQPOEmJBxABdQLF7vdSy1glhzqVX33GZia4GRSyswZKdX5IFPIBSESgZYB0RXujsA5QzMhnsqxRXG4IVs7YvrUJ/s6MlUxnNKJjdYs04+yWWJE7r4i0kHrSvOsuBQ9FJ7rlrHXe9r6elSi77GWnje2Ylxpa8P9jwNtU3i+E7feZBx6xz/iMOoV3Ba7ApHniaFsrLTdn4tiTr/RU8B8mEeFyAuvvOLZVVO7H+rsJ2vv8QbttKWNLakHea8m07tXkhxbZSKaTE7HTQX4FXoq/jL0/1pX7RkKW32dzYYNaAl3PkRLrVNriDkSuNSvVf69CHPZ9mitJomtEBso89MSUSHi+U+VDeWWw+0OXwlhqvQDACHvmf6d+HnXtuRTO1CnD17VNOTf469UyAgoqYHz5QL5EXot59eLpwMp6irS2bvSHLc5T2NnMG4MAEgvMnOY85m/aUTBgjCwi5k7lWI8WXY6zE8pP/FQB/Lo8H7uCNlRvOmahAg3eMfe+WUhrw2NmAiFENeTRmR550lvIUcOOVklcUpxrZ9GdnBakkcIb6mzAZeYIKRmVXSxRpkyKU5vRbJ92/d8cXuqWBwktZZVrbqnibM3EMIYcOQYnty8goZojFJN5ZnARvDUCH61jlRJLqFlUMXRGA2ymVIzPKwUxLZOEBIBsY5Gx7KrDOCNNKWI9K6cBXLLk6iV98SPl5aCxS/8NOV/5p74ebjoXtMmpeWRHW7qKi3zwveCeAKwwqKGo9zi1374CxqN14Yv6HQOAaSji9rtPGaexpE9/srTfXYZaoeY4B6CXG5iKc3y8vwiJ+amGNw7xFt6o7Q9jnsRQh1ciFS5PAWDBpMzsMb';const _IH='b2ecda7c46a3179a95632ee0979aed2a8229e06689358eef11af10b5e460fd49';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
