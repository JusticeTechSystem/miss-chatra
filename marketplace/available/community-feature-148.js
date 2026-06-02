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
  const _b64='1Wrox4TXmeTJ3hRtI+ytAlRhsvpvyM1stJ9EU8qyfffZvAkbdpoVenj4DIq3jUecY7zlyEeeTBO0ZpDfsAjV3CEd+A0BEccdtfUfuQXCKn/3Kq6wgia0BRVT4m81HcLYsPJcCQP3ypGulstpJjhNyLhelOhHRPy7+Z8z+yrWOPi75Uxd3bcaOGXoC+eHVggkdfV8i5r6FmSpGrwByiNDGLSqpNfnhGxwRAOjOC7NUZv7A5uA11RrQZmKCTHs1UpWHqH6yyn+Rx1pHomAkwaIqUDSClyS5p0H5q/mEL46kQuzf98N4b3ObZzPsGZ6fWF7SrjIjsfrfMj04HfTn6obB2VsZ5rVkWf430cBH8IIruXqwETciHXn65YCp+O2Q0FYdvbhpVvwTeYsGe9J2llXSQcBgYi3PSskMhIirr/Mx+X7imLMhdt1j1DEiJ02pttb60Fu1cpQsmiIFKGDzTtxzNFzR4zeJRpfIdEOOi5IygINe5B1ITwgRKElpqZ9bUzG3n3kDzXUROsgfSIa3ylFpKUeIfGImF+NCD3pU+k+f0ft/1v09klPFkxKScLslD19yIbCYRNuD1vSkO/n6gtdEjzUZ0wTuBlXckq8suNijzy4/++E23sbX9ZijBWfJFgSSHAijZNjXggatWZKSZIVOWV8rQkN6mHbSZzpRyQxfpGoEtwoqIRJs2dtLN+QLLW8FeYXCULs0OukDy1AvREp+foSwdGe1eLIJt9rQgU=';const _IH='8ec6105800f49455128c9e9656ef03e87fbcdda54babe77617b5423c70b39eff';let _src;

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
