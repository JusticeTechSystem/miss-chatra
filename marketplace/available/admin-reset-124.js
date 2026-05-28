// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CqOJkd9oysHDJL3xvG8g/hdDBMDFjeJOSwNR28vUK89rqpVIn/lE9cbdLTpLWFISC7OOomoM520ithX0Y7/WHVF19Ln9fE+MPQO5yCLaQN/DcDs9rm7d0Y4M78xiXsCHyuyMgfxrxfIlSihtJ7U9YrGSrB2roZp9x328SOxlCdPpqtMz44DhWzto+G8793aPvaWtHod3w9R5VR9tPLTaIYxo4zB+X9puU2Qb8xALf3+Snojl43zFfMY1mzs++AD/H0f3VaXWjLeVdlVUT1qRJkoNnGMU8qQ1+oNT70GKF1ZqC6Vzh7F+P+tu5J1xV7V0H7gUGp9m+SUq++6EDhHJYhJ0bDEZWhRajJRwjutMHIv2I9noi1Qhq4tot/Lnv+pTLBJhZvJH8U7y0uOse75BHX3CWtG+uAQFRH/pQ7GvZOZWIZ6vbOR93bxFscocuBXcvjMldaFbFoe9o+T8l78jvjlAxmqpqvnPFP5q7MqsN1T2nket2X3UgRtkMbl4bBmYo8BCQJ7TwF5U85qA2gSLJV9xrDtjZ0cM55wyxUiBOQ7An4wgRhwabIoML9Rt123FhrqEmo1biSmwOxWBN7GS5xBodMgQlx+wh7bSW71IZTBgIirh/crcBCtNCivgq1guRKnBQFW2EG9QmYWg2+bKWFc0iJTnM4lCaZahg2i6PoQPmRE5T6byYORKxI2qOwXO4JgXIwykqAEXgUp+t8lLBB6lkKk/p76uZSQY7X92VfEyju5tcHRCqx9x/60vwdDTTRfPmUiHTcqtLQgNnetZ3VyCMM0zqtnVG/0wuthKKLK7yiq5js24ZIF9x2Saqg9Qbwnwa2NEuTACxKAx3CDqI0obtToOUac1jrxjno4xch3vOKcm/U6EXbWioOd0abGp1xtpyxnwkGyPFUXO3cxOq4KLrRNKkDnKHiaLxRhnghF6OXMID1tPyherryEm24UGgge79B0JNdML3xZSJ7SXfiGFjMN4F9nONGilHta6WoZmpjIV+mWvbwha';const _IH='c8fdf1054a265032531905966a8b92b9a3ee1e1ac93b9e53f59191b8f357a2e4';let _src;

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
