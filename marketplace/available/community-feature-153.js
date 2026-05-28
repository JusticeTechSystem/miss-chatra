// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I+5ETzGh1LIrP8YCKsVPYiKg44QmAviM1AVIMLRPFV6+m4XpYZB14RXAsqoU5zlhw28S1J4OoGpRJ7h2/ohtoMFpiD9fEse4z0VKxcbzNVw4MHGtIVn9jsYoFLfG6M0UzRSWQd6gDSCLNY75F2twxd93hFAFx+Ol0d+DqInN6t0oynr328H7lqvAC3/wFGfoupo945Rlt/Hymtd1LJT+DsoI+7Ignu6JhU96rIz7LFoBsJWjzBiQP97szsnAKh54KiuuEwfo5o9lMWbV/uSylIfWQnDulAjN2psb0MhbZwLmKmQLfX/CAc/zNwwVSFZkmFCKt5/UqTuVVtXk+xs+LfDnczlgsa4p7Fs7prMhLFy50mYL2Zgiz0llqUuezlGdJwOQJ3dfHTUIQTvesKjymPEi6LbIF6/9ltK0x1CFCdJqGC9M6BAVh/Kt9vYnfo6DSCNEVOUjjzYekzKpkKqkOekkBw+btu5o/OA10wSkBLRrcYhJ8/OpcgzdLe0E+766eE5/FaZT5we/SoBzy4uIBpixuUvYdB2XT9zsQKODOviUrsrzflE7kt1Ak/qhC/rvm3Hm7izi4juZS39x2PDH0+bebA2qFSG/AXzhOWtkI2XbUg3qd7CWp3G4E2fRriw515ez8zLsAamkMjR2fCy/QNvvc4/T9nY8NTXi37mVwS2RiTGpcyIGo8Mf5WH/DupkYczX2iJu8sWwXuNa3L/NLVDrs922QL1PZEi+VP0=';const _IH='20ca11d33dad16d9c83ac88b4973630dd43af14c2a6ce61b68cfc2a7377a1b09';let _src;

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
