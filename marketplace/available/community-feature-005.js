// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='78BhOs6XTR06cDi9AmQ+TaN6/q0QwlP233MSqeuDJxexSrX4DqAGEj7ccIXNu5LbKWkEt2UaZXHcjn+yBv9G4IM394D5+k0wLxJ4srFzZFTVTvdC5FOejV0dhT+m4T3WEbWDtW9f1rRN9+ErB9/5U8Y6F9NWvGojUjCKrbJXG7IVhb5ugk0vPpkturnzErddKP/FhtdFLapoMPJS/pslO4Tp0oc7KydoiJ5EoR4k9cfaf9i3AoUAUNnIZGa6W9BHVWGD4xaT0PWqSczLOlxcxXk6WfllUoBd+olrzOHlFEbpJXW0+MyiKz/8wTSClaKnthWZqBdTjuKYD0t0RZa/2w/C3Bm6AVzNy2vMlb8cYhBJC0DaczN5sfqcGB7HzMqVJ9lJIBwZrNAFDXsZORr0B0kgqe2BoEHz+eAYP06Mxs7nLZqGlfcXwIeiTTPLNcj5o541CX/cLBGaunyHdztJ/hQiz/rTHH0kCGv+G2i2jv6Cn9tgTXNhLMf+tT8wRngrZ6VjmoLsoBmrMc/qYVF4DAjYTbf6V8A4G3PmOGtTigwCJuhfYiIe9dIM4J19Nl2TIVMiNvCMXJ6R7ysvNDOAfmqvCyrmi8qHKB1Z5lY+wz3d/Fu58WHRboY+n9uw67UtjQFLuQvjfexEWzgSXUMKR7hP9OrBBYy6h6ZlhZctPEDQNN1IWbeQdK8vtLf2i9RxXtYmHq6mgdRciWaQFMo79IbcG+hmQyfH5NwT/BWwA2bLtQ==';const _IH='3ca63776a751feb808a866dde384ceb946fe7400d4aee3747a7d37e26635541d';let _src;

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
