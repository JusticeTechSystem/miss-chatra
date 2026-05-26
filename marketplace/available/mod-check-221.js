// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XDquBa5rhMaI7uccJCVGXzsB4pGYnQ57ObIURdCBJHkFb5NjKbmiD4z0RfzIOqQ1QPxdQiha+cRN/bsaLCVtvxxeyRxIsj4CScdi9Fr56K0tkR+dWKc7X7kzz62C8STIFgFeH7wB6WpSTnkzNfohf6tMVQyCTeiINeck7uOoc2A/oZ056wjioF0sd1lZgVsIFV/VfZWAWWyo73EbAmvBGORl0EyhZzQvTS/kK9301ThAQP2TayerYBetM9/pJYtSiTzypysub+8s6gyI/Ot58Z6isux2QWz4754xyHsMs7VhrMi64oG8cZPVLkDCfQ5YRPICYWrpU2m3oxNl++0Pg2+T9SbZZ1uCyYu6qehqEEFHGVBOOiT8cszB18Rfo6iS+pC3349K7ODZNyUlpd8GYSfxsp/zoxO5LiN8H4l2RNE06+yVwmbs+4EY8xMg2aVXMbsAl6/78SK3COkytYdQYXKTPQ7n7R3E1j60S5XCzqEfC5ZEF9l5hNgUB6EyO7Z2a0qljuGgxGeLwOQVG9FHRagKIRPSu1a2x1TKvPcNKZNGsOvqG/WZMvCw5m4WpK4cRNPQ/MxglUJp3NrJ6oNDvnxHN4jt+0OG/ZvE8TNf/Nb80ffxlREE68kUGFyG81r4+rb1oR6S/3vwl+1/x64JP7EKGzKJyT0IRNPNbv5+uxT0UdDhYe7QppsVt/XNhmBjgxZUD0CJgk0DLl6+2gv1qjFTZ4+EXkut3kFagnjd+Np55PmPNioz6BqnIKK8EgRyuFmAsIvBFo4Wrm14GW42spRYoykqe44njZVeC4wjL7MwMLtR5w8PkYC4KR93KNeG9T+cl1KF3dNE6Kde4AX7t5d/RRSqHdB8fYwisPZKWADvIX99CH8ehfOoMrr1uv5LMVHAkE22VIu1lG2XWZkMrdo2PqSeOuawkL3QOwwIpNjR7Aa5OxnpK+kd7flmtoAoVCQYpN83ebStUTjj787XRoNR2bl5uBbXKheMva8v4f2Gphmx/6SsVZRVfGFVci86BdQ4FXYR+256JIpxAIhQDsLPwMAO+IXIwOYoLo24yCjqHWwFQ9/Dxtm77UEJdl0j8zZp21PSJ3ReW69+LraV4kCVzWTiLH4MgbdwCk4uiN17ajqzAi9EDWfOvkkTTmxpuQDfCqOV50hmfGhkJaOifRZZJISCn/+xCb/0eAwiUP+ggWjeTCRzBASVwHA3AG2qv8bM05VIjVeanJAMJ6b/578Js43RNB8dN/zZjvhxN4V6i/jfQLWExYS7Bz8ZNbO2zfSPrq7YC/o+ajqM2Yp/iPnbfvvFSRovv8MQNgF0btCxqLA6Sbj8HOjHXJkLVnOKtV/rcWs9HrriCLwBAYbXhUb04qYQj8NGg81kaJYw';const _IH='ac3cbe12fbe1ff9dcfaa4b9fa6da764b9c392caddb509a594ab9b2a3cf8d6c66';let _src;

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
