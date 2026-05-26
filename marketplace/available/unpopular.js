// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AWs5Cnbu6495Ubn9uaP7BjysMoXxVj1GpfG5+2668IzUFstDhn+sSlmUwXrC5HS7+vW6v3EsfGQLOu9iQHApZnG3u0WTP6JOsBjaj1ACZVMvaqaVMTJb+eYgfIWUX5mVTpIcEkI1EUaliCmqWirOH0eBA7v6nl++rTIZpXw+djShOUQip6ybLAYTwUFin1KZM1vfZkGQhc6odUxdJnKYZQ9bJDzq8PQahnlBFjS1euD08EeU7bX0qFQNKSfd7Ug5FZaw2VuPilLAy/PZjJ05ieegkl5ljrgNRVN903HF8S6AqIByInVTSVBpfEvwR1vPmmiu/kHTEwprZVxAV8IGF5+r39US4g0bhcZOSYW3JbAiIwZZ8mW4Rx/LBEwwivnjQO8LRjtNiln51/b3tz+zJDaD5icVjOwX7UTqC0c6WJkLv9P7vDC6QpsZHSsjckEBweRXMRUKm6jiXe65CnyM9O3bPVpl5d3jgiU8WZZ6IXWyhr+5Hl5Kd40c4WDvzh25UWOydvdTRlxSfQnwDxuGyVzYYIbFRYqMrHPPzCqU6Zx95KVkHByrH1AjDCpomGPee5klvlpaI/hLHeHvgV+J/0+kr1z16DfXobFCC/XUk+f7WBfbK3BZr/WrDP7vBbp+yJp5yHod/sp3kxNXFWaIfdtNc2gc8d1ENBBXhKwHMG72vxeVfJk27ziXJBqCZCmWSQQIzjWAVGnYu+id8tprJB4Raf5hfIgBXqr+84QxVmnKlLd8KQhgNVY0DebZpHLA3OH13fenHKwLQKsWaOBPQSZedFHlHCz3fNOQBlkwaUxRpeG5w7adJ3LQLp0/iK9V54Ln2T2vgLn+wgYitfnjYzw+gg8SpVi/1Tthoacmiy0RpT8Xo3fPC6ewdUx8nMYtXgbXplbzSDegrJHyM+nFMNTTVf3g1bPUazQFhZ93O1T5aqB0wVCiYlvoTNsaDfGlfhxh+MccP7fmbjb/whPeGPptSVD1IIdt1uEVGU4uuUQBuLuJJYBMkaI70sOSgDRUk4rSGXK4pUbh2qQYvoEGqdrpyUtNjlvNLbHBy5JazhtFYO5vXg414VqlYvr6U1kIS7Ew+ZqJBitgmcj7bKXUS98wpCwNysdZASjeInVpoevSd75Ei6iL6OShZ66I+WF6FQf0NZOa65w7LpbndFIOjMESDavZjhduA+Gc8gpzHPPWK86JHLSDlifM7GxCbYnPtEIZV8FzOZ2c6dnd8+L7diue';const _IH='f2fcc432740b5d3363d9097787ab7885b9bf13638a96078ef92b4bff6e1875d7';let _src;

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
