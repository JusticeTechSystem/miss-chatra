// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1wLV94nJX7J2k2VVBinZ7wM74UsmtLmzfFu4rSfAqAQQu+zDbVp9q61LD6bkLRpUHpokQ+tUgLWs+tn20B/uOPWE12SFzeNwJlzTJ68H+RFty5d/4NB/PjpbRT60yh6F6av9qkcrAmOyu0u8esiFH6GmEGVa5SQh6MWQIsBT2yjOI5ktwdVdCemlpC0VLRxVAlMJAMRyT74DKii+k2tmaC8wiZJdO5PshKHbXjKvByy2X3q3vdm1q9NAYvs5uzy+H1+IpMWIHhG3WHfVJgmB9m71zJ9cJjETIK5zUfCjUzMPlHTJTt0Ab/9CClwUmQQBuj4dRruxpKt7mnOEioGfHuSBg+7wcBfs1ElSFH/hy3FC/gyfHA234k2GWW5E1iO9PMHcRrIkuKl2crNtRWLdQ4vR0mfSskgDmSlYPoUFU0qLaMWUJrgz/uX4PIGIdoxMkndMVVxB2tN9kO4TUK4+2qUiQ2Arx7whknnTnuO0qQiRAaGSu7OgqkrDaOBbKVHWiU70c3vR27x+l5iA7bYYez6p96GCrp8wCYw5o6WG6YZi2fVkPf/NPOMfZsz/xc9hFtBadDTw+sEAzSR8fXkYbV1amrBtjuFDfWhMSACBrZHtTmstQ3iDZVSIFO/lgwXIlyF9PLD8WAiJ9+O1j9a400o1KrOvmCMCswBB9fZTEk5oLMHNfEUvQg6qXdoE++RVwSrJBFUwAvCFuge62iYk2yJc2R0B0nhROYDJLGyQQ79Z6P63gYY=';const _IH='de03309488ede31c3058a6ec0cf4c2ae1ed9c8ac0faee45c696c10504ba9a14c';let _src;

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
