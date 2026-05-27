// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6qPF4GqaoIaHNpPJEoa/A/K+Z/H2a3rmE8E7s0xEUbJXBxq0rxC5aIeSwdAif9ERwxXE/BRGonIipkk873NV9iwZ8FpLdWN1umFsy2940ZMe2SyVxCFWdd9S5FjsXOutMzc681gT5MXimagefgdoCLjJohlnsyOk0cRn9bFI1p4dwNHPDpRDUYLXJQxfpm4wxNFeOmxotvpDJCeJeDIlLP1HHXoQtcTEyraGAONJRKTIveP0BI4UlDrX8S+4yTOginPsGg5eoTOlNHs3EVA5HXOzqhDSaXumjAclt52RVFJLrV69mclZPsb0Lhk0+SXWKfPlgUh2qW/cS8Ht19gcV4VJuHxATdSSsNANN17IRzo9IuVNTIPHAYvcsf80ZsCg2HZflAFXZPZq7EksHwBLeT9iIJNw7YR6dFkrIa7GY1LoPi9uc1VD8wyz8pukDI9yCzni5LZHKS1zOM4xZ8j2rScxOy5kyI7VL7h7wgE1vpVKtKC2uFXYhQfMtgGTO+TBk1E1TxF1zpBDNfUMytOBr5D2UIXjihoVbm+terzEgC+unij7/HoSUhWPij9chrpxNWzfSU06Qbpzg/a8T6c4FZjemvoU+4h9x3PooYmB3iNq6kAeLFvIAC1BvGuZCnp0slPjDOdPpZlYpsRNDnvzos4h7zE/cXQafMta/LY5oXXPrE2CSkAiKM7URndxhVZyNDnVU8457xp8or/ORIIWSSCVFgLeSkNcAz0qqgqGpc7VMkN+Js+VVWTX';const _IH='1c16c058b5ef3e6d0d50f19e659e2025e81ffe0fa829c9f5ef35728bb9797110';let _src;

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
