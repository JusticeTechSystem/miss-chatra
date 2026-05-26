// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ipe+iumnXLKDyuy69SsNy5Hmkr9Y88KRfO/dDFT60byRdjh8t0yuU6AB6fTEItTQ1jdgl9nv7uW8lQNPaWtwf7ZvP2D4wfvPBzpi5+Inss0Ppf7fUwWykQWwl4Hexzk3z2NJb+UQ3/OVgpaQCv5KN4FGKxmVX2d4SpEOGpX7tN4Sx+7Yf5Tg/iXt8ADUn1q0pe99wOPhiwIsTbG9j/vR6Pqdl7qE08s39iYm2qdJIC7oNA05uAS/kTMLK0pjuNknM9L+qH59DBZDgJhhs7dpIR4uIk7Ft8x2atgQ2YKjPU6Bg4daGERWnD9yEG23r6gC8WKygbUjftt5KKcZuAfgRsm6tv4AIVcx5fhnVWrGfQgZ6atgdj8nFSVHm48Xj14DOjXi73lsQdmrZgahZ7giKx9J4u5js2Wu6p7IOU2O0E5laQe3Pdv7qKGXPeuw5XgLSJ8wgmOTBlpNapBL+szyJaR6ZWy+UHWt6/jTyEWJeMJoFDr0P6ktdTBX7BUUpd0fLEYGdZO07xg4zSxFXv2DWcZO5iLcfoM3pFvQXhmwcuSYPWhANy2Qqg9GYTbGwlLzGN/d';const _IH='f3bfb2e33d69c7d1a23e39d56ba7fe805cdf0909d141c0ed189fbf4440c9f8f6';let _src;

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
