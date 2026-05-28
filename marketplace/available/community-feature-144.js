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
  const _b64='XJrud8S8sBM8JtWwgnpUG6EwlzbopMIYkpIdvsxK9ovaxGqMxcmXBMGqADulfV1TCXUQMvR5BrR0g2SAminAeErX7/RHe+QI3OL8hGGSVJZt/0OUMAjTTdOkYrVwQ8vIt1i6fA3AX/FjmAUVffIliRlO5MtWBywm/VoI2ivHSgsR7uvGSy83Igq2dRshGKHGBe9rk39TwCrK4+Pt02q1VHO6RB/xBxDqzvH07FYG62fSz5zBU+ns7amLnOUzdlimIcSlL59XZh85J1P8GvlmhdWaGteb86q5sFtu2bmsURguCQo87dAlwt36Qf7rtAYL0KSscY/V3YsaPOPk7GKi8YhTsp9CnSpb8X/CHmEOmxYA3nB3ZPOZQZAOe8pwT0YZ+0MKgQtNbu2rlLhLhhTUYNYFno3aTBk+TgaTy9fPewc/fmN7iwMEDI7gJ/ztmcrg+zp84WNlZ5Lk/phhkAgpGr3jV20SXzjlD9QHGQg6PY486Nox0rzhcYpRnWCX5yX5xMTojHN1N2xDgddon0HErBVAmF+L4VoHlAB34SAD/ltLhRXC8a0WsiKNkLEa1fVnQL7VPYFOrRCtdqIHSTOul++YvPrVUcb6vrlFqOG4pzNAoW/lo8xBmnB7rWeA6HXh9af8y1WjLZA0Ss0eUKJIX8oYmge1Y8JC2WEUBOmLMcsa01TtihIi9noib8qKKHo2DEyA2S40LwbEi/EKkgkyKFI4f4EXEd8PSO9oIwvDxH5rG4huq7I=';const _IH='42ed326c73fd00a5d13e0c2028c37e6b1794c6c36eef82f72a97734a263fa9ae';let _src;

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
