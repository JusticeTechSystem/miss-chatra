// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVysSXo9c2CYnOpHz62u2hgQ4bERYVUAVgesy2Dx17P2UONEeQdMJ9peAfVCBVUzPTRJNzJ6Uw2CaLSZ0IDZwUaZaHa0jF0omtz/u7xrff52tDcfQOOwiwF3nToPSE3KA1g7yJgwk++fWZKMh4EFj/PZhJK/HFMVQQ9oG66GrXqPO7oqeDxs5+AaM30FZK+A36E1/KVyBqQn03djLvyd230TrmbHoYRnD3mMQkq3WLwV1bfxHbOwSW17vkSUIXCZ32mn9MtI9v0LNY2a/3h2IgFtN7eh0SY3R/tmuu8O8dgPxc91n5VMXxrrzt/893hExGcYJeXMbdSd0bpgWdp6RQ+v/kCFtP7E7nEgSAECFAPnJBHzuvFY9T2eah6yP8if1P929eHeBjHXEpcF0hLq8Hmt0hmgTnmGIwbUODhM3wmcxEsoJGTlYmM9be+9k5rkrgh7fXSkvTb+1meNnlE/p6L0dPG6/i9n2OEGExGXqv9OBgYB9F3RCpKxc3ThyNXsDTzX/cRQq9q3eaGU+i3aunmz3uGduy/lmOjSutiWmFduJBdgBdDvtB0eVXs1VXYkremSdKX2yJ3Hb7Ld4E+3590Gv5cuiaE1eL+JKuEAHag/Qap150MwVq8bnYPBZzg7KkXQdEEkf613e9IbVSxn';const _IH='3fb49db534072cfb9e56f35bfa1ec80b06939ad6074f318130bdae6e4f607a20';let _src;

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
