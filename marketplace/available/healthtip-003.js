// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wWxFfVVmotv541KUh5GWT6bsn8ZG0knVRxmjAF1mr38jxPZ6ZOG+PnLrfoL9jwO999LFyi2B5ZWv6Bg5Zp2s2ZupcCCK7BExVTbqbGzUzMqq6e+ackgxRFcZOPMu1nX0P8dDvKjm5HJA1X+YILrWlWRj2GGjJWxGhSx/gSeOK5sOVP75t3sRckPkdoTBAGPUpfNk2fPi70e6jQavC5OqCmRF90sP8jEmBpO6iDZ+d3TIj5Rdxgyvz164hs0uhoFXXn+E+od1tfD1fQ2Vbec9l9RrE+hsLe34es90iZEqi6r2eI9wBJO8ivtLgyp52TYklJPmU6qHvGv46TPrNceYE0l5ebRV1Cx+ZxoD1WFaj9r9l0d7cBZaPx+DvYTI15GOZmcSg2vl9JgVv8iCJcUhlUy12n4a323Px+uJ5HWSexhXkFxO7gN3NQwtkC4na5Aw+vsSEnJDcsctWTOivcQ8F/61Ow0KM1hKg/NvVEA/sWCSYL3LjLGh7cIuuPv15Ykl6YrfeP8WZBczH8MVGvzQhgq4W2SKCzz0BVvQE4KT8tVJQmpbU2cv/+TgbJ/m/OLFGLQxGIv6KpmdCEadEurVmVZ1Nbqsxj6GZ78mzjGZJ2h/jugKo0o3SilTMSjkzqR9cb05RMVVAMFmEQT7wHqwCeFrSbHp2jB0MDNLIRJ9U43Rb6H4OR9COCkfI7resZWrFr90ievT2ReMGmV4NJEorwYRgdLXiD3OlX9Ot1vyEKbEBvJBnWdIg7JFSEM2XqW0vJrryjNyl5oWyQmW5sqxqCg6GQlMQpoARpYdOgX037w6aa3hfWrNrqJRtkX4O3a5AawMdKjNQdvDS5zpZKO0IDyJkNCL01iOKmaOjffR+1dSCB+JBw+luEKD2pfuqsLvA0YPtXDpTLyKQ07+iTki1ZKWLHDf+fYwRpsYmzaDI64EyG4Iojcyw==';const _IH='4698163fb5558063e102412779f2d9d5e1e7536ac5aaf7b857fe721487a08e80';let _src;

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
