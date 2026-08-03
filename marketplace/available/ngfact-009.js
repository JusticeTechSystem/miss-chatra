// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzgBvwwMIDp8UAYOtb80BTA+jphDZNcsUCLqWeXWOs17fPuDbnhriiis4yLxixMiTH7RYUT9eFbR96PTv/oAADm1JpicsEfEEsZQs5mnLS4MxvlyT09MN85LaI31ToBa2CxBfg+Th0ralw+NTlHMZ98Mfph3pPd5u9yrCUfqHJX5DaHmHSDnf+QFlr6S9D8JeJcRxVyRtHKIDVTMQHzmsBlbFUMJzOUbm9IQSv9skFwagGj61eeblBa6nU8uPsqA68FlPPW0El1OIENZUD4awuVsQ11+IgjVXTs39x1neDSU3zo2M93c/BWxyD+KwsDj027MxkepjXa7rb2X6e7O+E1xM7Ii1MGqJhV28xi7xC0jSWkZoM+WGiX8QK8MT0G5egqBQk4Ih7YATmItLWGdR/mAK7b7hW6vrMShSFIlboSO2FonA8FaQGf1VSbslBUWLvE+En9S9Ggf604LpqEUXTyozyhb5QcXO6015hPu3YgzMxvqXcRQOtocZkUZ1Yb7RgiVKLOZaEEdlOY4lqvEj3+OtE0XJCWXyPfdv7hL3jU3XDjyP3OIwoLquySWxcyddo9IHgYojllQa3FJq0LUpTFP8LI7dRj/pYSkjIbsz/lC/fpW62Hwmlsmp4T+SUuBGCfb0vzDJ+ARwHYvTAc8mHXXlLBh6zqzz8U2X7VZuo5Dx1S4xFsXEP4d0yW9lEcB1Cj6ASPF86MfU=';const _IH='dc29d7b5563533680cd06b51523a201738a76f324214eaed7603923e90250540';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
