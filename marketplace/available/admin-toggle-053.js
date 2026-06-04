// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z7HGB2CLoY3EQEDlAilY1oOoJkwK/45xdzkLZsK0glUVrOAcXTR2+f1Gtgp9UjcQgbrgLuEHeNbxH8ffQRdms4jkk8qwt4ylNP05ki35CCDLS1kOOkvpu2TcpYHVYMTKBNoY5gd88o9R4/eMrkt7KpYso88KEHZaMmTpRIRUYFxCigNC0bhlE25Anwvnj9RImoU5SiiOZStcGzYswf0PhvjLqeFcy0Azw8tUPfOCX5bkKFUJYMSvQwMkxNTfuBqFFfzRU4jwepNAEMCJ+DEWrdiFo+XwdR5qgrMOqj3iAm6VaOtuLtSSwnhiDLzX1h47nSJfS45N6+N+fj7MpguKE+kcqcJ3izYoNhRhjDW7BHZKF0w9tsNUtQpaGmnqFJfqb1GhWPx2fhxXVik2ZgA9VDn6zA+hoFfepvRHYrL9L1baupIurXeYRTbfcWBjbkSkcDeGdpTK1ZzkVBZNDHcI1dhp+MkL9Iv4KiwzvFR+J3qdF6ABHLpre3ENgc0LtKEW+ylNjfvNOCQsraZzcZLGPK2zZscAM+kYI4Q4xyohHLIBCn4uD997mIT7gFGenpoW7d9vdVbXQBgf7uVyzTBtP9NIezcMgV1sAhdzB/APgk0tcwJZoat9KZFEpvYt2/C8NKpq0pyOaudL0D1dSMgIkFIlA4BDzx0kqFgHvT3N02jOiqavbCa5/n/unF1ACfWm6yRuE4jKvkbWSyDNuU19pehoBEsN5Oavw8Xb1qS7PuquBRdF6fHHwD9y6dLj3ZE4jVwnD3XHs15BKJVvWhisTEiPLSIHhTj12Xexk+Z/RQSDrHX+8xyxVY8vVSOpkCQARNZ2J4l30Hq3wbTLPkOgiYcA/JG8Fwa+oirLXovspDhE1RXk2ekaykLzkIuZQPu8NLcPn3Vw24+NztmtswrTdaoxLhxUPuIwuPJsf2fNC/GoA8QElqQzic0B5sDOkJmXIxJbWjE0hkt/wb+/tGv8UX4SIR3XeP7plu/JPJvKH9BbddFVCQ9yYd2S7lbt';const _IH='fbb83dd62f57311c6543d06162e146c9e9e938e8c49f4912dd0e614c38d2f5b7';let _src;

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
