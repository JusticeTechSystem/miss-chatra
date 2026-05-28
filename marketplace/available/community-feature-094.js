// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='06TBmg0cEJCIM0Nxhyr+dXzn/wRRK/G/MV7w1PdWuW9mgHw84QkSYZQZw8e+3LMiqRTrp26GokoZMJ3ayQ2WpBksjf1qXDOCqrzXFMQAoPP9p7AknNYQgqsEH9l7lbq3LGV4BKsjiHQ97qh4MN7QruVPvjYu3/i+pCqB5FXEY+FJbZUupgWRInH86z4VKsyGZ7Dj8NrHWpUS+WPYH5j1VK1V0q54iyzuQyaP5YBoVS13A6Afp0EhQ0qGepYslpdfyBw7sLT55g0B9dQbjh4B1x/9OqmVhiiQJvkORNnP0h3fLh/Xgtk59Sg7cPkYpvyQL7Xji5tEkiNW2t8LcTEbgydFlv+fIhtkg+HqYUqFjhTTv2t9TnJkQn03hXYiw+PAgA1ycmsSiDpKc3blMyOLRoV7W2eVurXrkBxDBo3gfCHwDhc2ZCv1beYvfMbWJjX5g/8Kmg7r6exg/TIEXsUNQ71wQAI3lfhhrVcl/Sx4K1c99BzOMuW5bgqryNLmT1JXuvS7vFtEahSDyenp98zO+wKbtLeAMyc9EFNhY3LxiSqgJkqQwuD4cwCdDpFj1Zuh90of5sXtONEOLlx70yrMwAYuxgdUrGkk4x/PwY5Fk/JCZL0tahktbqrui2j3VJMc2EER57gNTVqzJnatP2CB3b3bi6hM2kQvrmuqE4RqwKi2RUaPVA+rpTrkK0ybS4cL0nmpnSY7Qt+JkbUaqcgwtXWXNmHW73e+QbdPNTcMV/WT+A==';const _IH='07f7c5aeabd8dba0161606d171342ead44b1ff4d698ebedaedef7767c8f61125';let _src;

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
