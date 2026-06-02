// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XZsad8GS2etOtFmDg4uv47QW0Adh6kEi49+Jl8oWzut6i0aHA/QcsEZHLnhuu6qb7hVDsFNmrcAEiUQPagrAhUZ32WB7B2V2m2v7sGR6mSqnL/YeYgFwoQQW2jvK9k94a5G5/6UjxjviT0DfYSgmt6tgVktFtdCaASChjFDabPZoq+qDWUG+itfBh6kFCM5cFB9SRNqf5AWbZ7LNj6ycMkPINW+o8zfiGSyDHDdhPiHaN1F4pwpvUBFPDHqyO9/anBE+okYF/pFD69bx/e3+tIdE0V1yqI4+0mVtvTrmwjwGrydH5izka8B8VgOll/EmR8s4KLAFHrifzj7Y1PfbL1fGZjpT7F2Rb4waVrBdB+ndQKSeWMtnJHYDqav1k2Z+UV/xcewI/7hwiMk/vINXkBwkEvPs2drwAI/YSgW5fFJqleVvyHjpn6nmZ6mf9dH3XXxfjLBJfS3hXcmr4JRpDedY2ix4LmcQlJ7xEzo6RWn5y6Wjzi6+ZVBt6EiMq7bKD8NcmrbtpFFQgqAhzp3PNw2xmLP+oCSKXYPGU12O4HIXict/xx5q+14F4fq6l8NvkHpoJD2jG84QsELykDMIh8rUO54/Ieta8fTZMZ8fD9Ak1eOgvN/IWeGrqpHAz2GkC+F363KJg/UaIu7DU95LwoWMxwoOFmKlLEjK4lXKbesFJdvpPXyC/j6kbav3qtbc5/nOHj4e3ES4qWKy517OpNznTtUt2tG8YGvrVXoqLodIw3Ek+aN+aaXMgKGVtXFhxrT9kape/bo9ajczNXQ+s+rwPwwkj6IdgEFVljDhnA78/pFz1VDq8kmInSW726L5+aD+GIIcxNCG/IfV5btHalmi6HFKL5iXLlx/QFApp0pavROexGNpvQyMRnm3u5tvODmy3ok9ROXeUzQ/oN1HFG53vrvBgZzNl3+TSIaAGh5L2FjR1E6GDLIFOkFToxQV4QlOyBcbOO5Z88HUqWCRTdHjkInNjcZX5jbvOg==';const _IH='92674cb5b1b1386cba3dc53c999d4e3b87fdb15c4e6698c2592b0206bf8df025';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
