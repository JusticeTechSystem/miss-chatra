// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FTYuoBxdejyfxrK1WmfUgAgx2zTqajFMjc1cMtoeZJj2Y+Q5D2P8vqnbzquXzsw5PcFGiItb8scsQi1R0gYtrvlbT2/TE3JdXvI0TEXfurPEa6XceMMtkP5agFbd0Spy5e1T/aSNPID13b9fUSKV5VxEaWI7pF85Pgp4r4U3dwpBdL/iPTGfLiUQwX/apL+PMQfGQ7sM7+eypT23WObi8LZE+/MMUDBDiKNwNEVZMj67SvBXuQCdGCIGYjgfIhZ1nMqafd6TBCopGgG5qvGDwmB+/2CCInhNkWRSxu+37TQw91g5FYczNX2vDfJxgldP7fTIw941iEiNU0K/TBUcJufEGuaMrQZIc3gHI6p4iG99LCSaY7H9jh4O4v5SAFkNfGTVVRZz2JqZFvdsbDRiuEKosPYqIhw4dqWCvLZacEYy+Q3rlFASebuWn141cXcpWULCROQvXdJEmhKYgXH9eduOIdT3JU3EWtLG3ThD2IdUJMUl75u965lTUafGIwyiGSC0pSyKAF1RLXV2YTt/VR7gPai7njxjWL8OjN+jfJpqyVfmrgGL7N64UcH9xStqOuU+/jsObzVT3Ue7zJ5joVfe0IoWRgK139fHaF/0x5bZSwA7alLLuxER/7lNQEjZ1wRcPoymxOnwRDHDHw2eme/G9Vv8aJ0NK4SYk58IRc9ofTYywCN1AG5U/KgllE0Y+xNuYmUwq2qom4fa3t+1v/jwhUHUs6ZZ8L5vHq3gKSrHJJVJQI8ucJ8tboFrFQbsgQHzB6B6Uv2tFzgX3sGkIgWTfRGGs7PacKN1hs7VQsjAgAKQ1K40OVSIsFdPuzgzJYn3ox/m15VU9F8MJHlrI5Z4UfOQIpzHFtOlRU/+UuOCezDqKsvu0pe3HKkr2C6DoVeUNT3NWLY4+MlfJcy9dKkXA+2Hs4jbOWeMiJaQT1qVGFzrDgd6FfbsHBEhRhcY5UP33Pm1tTLRxaaKRd5Lt1F8mlDDBov3+G9IX6mmBuE4HCzUaf/ZZyulu1cYIAeQ8hao19CxFecfFIgX5yc=';const _IH='fa6859c5ce085fd839ccbbec4890d56b55ab953f4fe1870f2a7b5ff37b0d7016';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
