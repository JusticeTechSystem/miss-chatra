// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1pHGJNiLFitVorsolXs4boWWf+hrnPw8Q8BlRjaBNXShGx1NbwHDXY9lKeeKooriJDV5ERYWtV1jZ06A6FOlVw1COqmGS3p7hlt8vIYUDBVsyShPP1BwzE7wUCvgLTF/aHD3U8pvVcKA9qMrGf4Z+pNnrjQOWf3Hei2RNp+U/Q8Sne2UbX6RCl8mMSFOzr89aS/+EkpEj9MYDRuHIs+hMqFLSaV7VIenPheEd6NHkZiXXDzicfiUvOyGaM85XWkjSVjv0PL14HUHXskcPkvR0tlmGN7DJtuBVGoQCNfc7DDkcq90b+POkJ3SM8tA4ZFF2tGl4n4tKgax9z2++vybv5/mMFdDQXAPET9sTfcnAvmVFb72xFnKBqxQRSIB0q0SuiMgLva3Zk3euNtmFQu+zFw4DwXllC/FzIC6+3x20mAwbHJv57+Zm4UrH821o8buVzPNQ4KBvZPpO5Um9zek/gnoMi1qcCq6qjV2tW429GhvkaT+NpYqkeoGFzHpsi3ZMZkiig3meFKYTlOpmqFhl6HizSL1DSgSDXwAfjQi9CUKx7tVHpTA2euoyeIxXi816o/jOID6vIwhPIORHXz2aKqxxhuRGmH483D+gbUjLH/0PIWBv8eyu6QbqrstAsfN/o74Ryl7edRkUtVJ7asuYwjkaMLetZNoMnx8XjbJwn6xRYTzCnQi9Y0er0/UYpbH16ofp72TYol+yBKwPDhzyAZjpMffpHvwKKdWm/rwT7mR72O1/u5s2xJFdWyG1BmvmyCxb8pADbqe9EDxAIYWMsKxrLAlWMudjoG+XBrJK0fmZqXhKsnEgB1Nn55eLx5tG3i0hacBpL4+ahIN/+5jc52Ud9CEvNXKFWZCzL5MJM1uiVUeZUr3cWCqeDBb0GxmGWifohi7G5qFZHzz37Ji6USISK3QE2s5bfWzKMTU8z8T3Iq+FUfbb6dd9VDCdzWSM5UdQNFJRMrjcWkwhATwHYJhOwLA/1HjEfP6CGO5iQO7R6vhTrH5rqG3HARza7xES181oQKW1X+vstMJSTqdjiUCT+kPUQJHDJ3fJfrr7CyxryqUKiID+E9gbgqQASC8HhEOFxJy3Ph9y48yyMvwjgwY6XDmAPz5gyEZiYt/cEUDGsi7ByieOm+R3zE9madXT7mTJi+Fau2VEMSLem2Ug9X1XlzDUI6+2A91/KoUFbtlYfeXwF6xQxAx2K+ubPJx0RPBo3s5Mvjag==';const _IH='1f0f223ba2567e1c2384c649e4bfc888e69579c48b00b4813fa237421e864534';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
