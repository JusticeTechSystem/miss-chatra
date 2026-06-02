// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LjjuekA3RU4xRx1GX+ue/bot4vJPE7t5X++slYk8Mf+l6YD2YEJrjFlguQSLktG55t4zaaL/roW/cgGYVf33oQK8FmH+VlyA/fPEcM9HM/Dacpqy1lyy1w1VypiWK3Eq3t1if0b8axLULMlXdQdnM63NaDn+K1SJ4TtbTNOzyRcK5A4hsI5YohXJYEyg3rTejZGmUdcEoHOQacEzxnnfV9uMSb7SB9sA0wzmdWqsIuIVNIkqcsPqEpZuThMS9rNgyqevOkLgVjib+8bN7xP2/l69h/zmKv2FtofwC8F3aDKPt3EfoiWV4tzV2C/nUL+bvJv/KZdiWoggH6xy/OaQ9b7e1T6zW+v3L4h50kOlSyKliA1cu+IWzDh09EQQ/p54HGt6NftDAiefDOB3g9qLp4u+Jt3v/m2hnMu+x42B2I5XHO9hHJuyYMSQpU1Bd8JbF57tQ2yzRf2wR1uF9UfluQX2oRG5XsEZIms+F5pgWvziIRep/WmbITZScE3Hxug6dRP64NNuCci4ygA+qxCd41o7mYBkDgVKeUwaccCEenx6LsrtpW564BTa2mG5HKIsgK+E54IDhwwo789Dj3T5MFFABhg3Ft241726Y5XBdUxTkXjp9WWq7BtvKStOX7wW1IQh7AE0gausU+LilxUO+mgVry6XtjzIykJjhBz7c8cnjrnIlAj7zaq8A1FsfrcKwBv+E5/C6KxXn27htC0nSmC85QefmUmGo00h13Y=';const _IH='433f8e799447ffc58d157ec31078cfc4d46421ac776fb0ff660cfa51292e63db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
