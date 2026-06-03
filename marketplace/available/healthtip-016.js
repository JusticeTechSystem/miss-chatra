// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pVsSPPTm0pYq2ZnByK0aAYXPtio3ZMudEMJeFxDUookFUUkoVzsot2n6JsgVxzTSGus+aTwdQ3jlX5DVS3ZnJEXq8xwTqeWOvzCtJkixq0twRr6R/URZdXU+M18n2AQUvN+qoWMZJcmnNCpzWNAImtXNzPak9i1ixEqW0Qex89WtVdKk4PMwZv6IXQveD4YHLpI+bAagYGyXkPrgahaOceZGCs3IRWe96aPuyGvaTqrZbBqVVoJ8aYuHsuZ/d6xciBlPA0I8cbRczTMfZa4yhadgGcvpkhe66ILACexm3IzgVICWH2vaU3t97Yd2b7R7hRW2lXThV3FNDSDqSPSTA76vHNBgRlymLMcXHdcVinHqOcfKytWyPmfL+OhY2sheYhdatlKI2fgNLc6VgEcdLPYDMw+U1cpSZBcy72leok3aQs4e53LL3opL/Ia7GdohprqRtWToJXpSHDt3wON3UnTWXEKNs21zgDn3rSN8iy1DQGdRhWlAuZ1oHG4+y62iki1TWiLpknR9xVDsjPYludWw2HowL99055RKGBxOfKNJ4XBAAcmrTx+6j/tDnGlVtu4WJIlbXFhmtqyY0/9vjb4PCM6pFCHVqKKEZ8/2bEFA0JC1FrHAU3DXnz4hrvNj8tqXwGXts5NVYHjamLAJ9IOKXqEtR0zLSVIYhdbXjS7Z3CJv6UwqlL+UE4e4DfOPMJ+r5zJvPLSlJtcpHuvVEm3v1YzUEKwDdyjb406U2OmV+xFF87TOm4DHdudip93BvEQ9wb58inqDDikrrdPiPUXeHCvGqbUfr9imzAy7Tx1V3qbij9n1wo3EILuSVOpyqoI7ADu4iPCrb7lTuFDMjwBqj8MYePNMv3MVFDWG471X+4b/Ojzg+v/av1nVXzOkHjUI1wVSogLh6WPVPNfU9hgPe8mYFBvQmcHKpfxT/wGAIXTM1rTUMuTgOP8=';const _IH='c32be86c0f9c36c02ee684a777f2e25a74a8de3cc8515b476c276174e18bfcb8';let _src;

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
