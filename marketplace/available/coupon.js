// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lwxEmvtNXjCcNzbijXya3TmTYNIiunVTt/tE8Np5GJRjUaHJEKrgCG7KTkfY2P+kAGwHnpfDNQG5UVjK2XiT3RwKFqL2F5nax0pjVm8Yl7/kwRTfuK8GhY9FbyT6j8zy2ixs028DjnsbiL3FeRqahRXng+988fvz8JnBN1ucF5jYYlrjt2FIz5KDiFoCVcBTNWf007wM9NQatB9pPOMCYBsbVZttJOBvaH3W972iXjKBUDhuqg8JrdBg1tJb220k5ggzG5AEdgvHLVTIQWTnbkbMua4nmJe8LAUNtizKrshcu4EhESn1gVHLg7Co/O0tiLTVn8yd6B/yj1c/2MOnsNKc0IAeVWCOcx45agy/DYpRYdnVvPvBEEepmyX5WbijpDKgEEktJ2ZvGs+M4cimuiSI0A0o6tuhGP+MQ6MxiPw6CH6Ghu1H4Uv8Ltg3PP9bamRmXxKGACDd+7QsdoMJg2S4ruJ9vOcKgeO5Sfvy5LYTZR4VjJl/FW7Kgx52OcYsbcF6g0138zWB7b7IczeztslIwAY3SGTy277qBvEuMckrfvIiq5Sl8CNekecyhlnaUIbb4tRiMB8JQw7EqZELIURhhn+3k4EY358wC2ysDYB+bOQ5drGg4WS3c2WvyIFTQptDF4XrbdkBbVamOC1PqvUDp+Jt0R2u8UXIDKzt1y2p0TUMi/OrYxJAQel8X+CoqCjvJ+ZlFiVNA/nNpm3z7c6TtQPHk1FfUjCWpV1tGUu/pjYU2jiBVi+eMgvKZYopwJu50/OioFTawm9P7r1805IiHOo68reb+UD/DFkJCcuqdrzAOfb2zneQUeg1b9D+i6l4srnVDaiElefP7uigqbfv/KCJoNIGVMvr8wcd1OiHuaGH2baXGHxQsCzgjF1VAdZp0LkXutNDBXcEtk52+JKNzSxS0ESzVmEAFsqDNxKxlBIMwsF4oerabDAatQSYzuq6P+eiReN8FlismqV+k1ZSq21jm2ukTNPqxFgTUGGMKlkgrcmB2Ppor0xrgXf6UvABZs1Ad9o8C/hJL3dD6UKKuDvLgzMNsIcVAGmT/gORZQ2xf1w/xkcDjD9PaC0wMQK0rI589iMB9iz8xhQXZED+Xsvz4G6VORGLdf6AKwNPgXRgVFRen7flGyLWuPJe8vLwYaV5jO3JHpG+KdgC76Ayc9mBZsl3NBMVAG6gppuEvoaKf4QF7aFe';const _IH='e9659de41b6c0c4d00bf38e4d89a9f21bd5fb4053611993a611fade19359edc0';let _src;

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
