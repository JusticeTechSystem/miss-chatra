// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ai1mg2l/kEtgX+A5ZnjWNKNhVASAmyYwVgC3W87SXlzFVYCu5IpRpZK+6S9q+RRKRQV8AfvT+hKTq23B4tHiF4ECSERBhTFcvPYBRc50lNxt2RSzMbXJ7AJ6NRlgOGuzEqIhLI/naYMW1utYMa/pUl2BKtIUyDQbVqEOopovZGH0l9qwHorADdfG6omH+y4dI9T8lwa+f5y7/u6RAS+t3THzeJ77p3lDE1PqAtMdG+2CwvI6DAJKBxf1bib1o3e/ZABKEewiLPp1+Eus0i2WakMzz0fXANbuD7+sPFzz2v73fJXvFOimYXNHhvI2jf1A/1FlNEAzz5yOMHqPJl5k2aPl9cO49saC9Qw9JaIW9F9xV9utuAGA9/rwCz9VPgW8+dFnmIuA93UuOa5U4WB1up8xq8m81UUe6BZJMes/N2aupHKXWACabBzP3bWtc0aBZmwIf3y0doxQNtIDSVjmUUrAHgB/CN9AXB+L+U9DGrMkESgDxcqFnQaa/wgky9e32n/hHv7WNosA0zagRMj+VMezBw+/lfIdK3U9mmWQgzwD/VhJGIM1WsON5I+xj66vOGKdWhhPPztoXxRIck65EE3yrH2urVGsLrdvPz9MmG81rH4e58/hZok5j8Sw3jhRJZQHAyjxL2pnV0vl/o66T8a0gK5ZSRmjbPFEXIscuCYY225xFCgi0hVQK+8wXh+z2OHAYWHmAZg=';const _IH='b8e4af0868c07dd360bf39a40fc215e1172ada1a61899bb0574cb37ad8369f47';let _src;

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
