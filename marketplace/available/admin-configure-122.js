// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBu6TYnHNHkhaY0P4sx6Qip1bTmHAluh28URpp/mtALvlxwWBh7XGy8WQNpNti6Q0aIHGb+NlUaUJ8FptJUmxwowiQsLllBnBqTd5g0NdoSdQiJlEk1NfIhj9Z4TyqWPKwDaUL79UM+pSu3P/RH8TAfCojrfURewRcJW9V8tXwYoKrMPq+TC64V9RXdw7w7AiHkYwFWJYuIfNqtaCgYpDtsKhfmTB9aisEl3jaQ/T2KwHIJBxNPIRefD6Oe89qBznQJ7iltp+5umGHTVtRkP5WH1wgDJjVQKIIhvXNZMyHPM2hr+CHJJ7agETKh/SpRA+o+ild9pg4aOxd+wvo4//jBCWOphGKRZxRVCp5zEV5F02JMYnD0XH5JsN9Le1bRW7Sc05vmfPTjrh1OSNf8Tx78B6nV13RmLvwg3ZJG6TXbM9AfzjgrMdXKJRBnvGtgKsQ1zkoU54eDhZNZM/GN2tHiZRyYPrNmVG5cCVpbGKiCoBtou+Iuiymt84Hy0wFVN5uCR+sXQwmnKvWzzvkVclPqHQh2j8yT8Ye7nI790EdYGXLhzlvI0JK7hZ+XgoL7+7KZnhjMQNWhOWgFUJH4hYBpj4iNzSZpZZHecQoVDKA7CsmmhxzkdThLPtXCDK5CQCptRz9sWx9JQiX2ft5XmqZKey1ms2EyHsxgkocF8o7pcmanZ7xzOm9v3RaYXIE72CEyywFWREFurd1gOuyHuaWJ/Ds6F0BxiP1Ysk63QsQpixwZ8jN86Uf5cKiMQBXVcm76j/aJwPYDSd/rkMFyyicjyoRU+0pMe83r2m3fXuygvxncM4bNE/yU3rLvu5Kue3qzBokLvnFKw0+/nIK+nw9GdoFhRDJwtSJMEnsrLOKCs1apgR2bA+X8yq1uHraN5szlrHEGiTv+oLUFNvks+59+ce+zvSqUSMuE8v6yRf4nb4VMZvB1+aJXBk+8xbr9JwL9eCjJpAgQL/acocuadGiwgq1i2e427aCEVQoEjO+rL/x49bJSH3l9IVV4nH7k+v6Tz4DeavobteRuPskQbrvYVz93Wyg==';const _IH='53bfe2ee1f0bcf57973f8bb11117106502b90cf792ddba0ad196f356241323af';let _src;

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
