// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BAP4OWaq5VV7ZFIkLai6l6y7CyW+eLFSXxSUmiUUHh1U0mWA1OTiKDvLNa54kEH70N9d3tJ0xLTUjemXlpHDNOxhHAaWEc1Gr13aC0pQEU6JKfFzEfQP1H3ZKz7rV9mahe+scHP69sC1o6tdAwSb36Ef1uIFmdbdsf9NG70V3YDJoeX0XMjmRYgb0J3ZmamVV3atzb+TlStila5l4WeyNNoLLxe5xx3k2aqnDdi+N5bCaZ/m0eguxS9vy8ogR3LiC1nNOUJ1kohsJ6YToxPX9Ez6lSCQiRcTvLMrmEhsZo1VTzYvFU4bjnkuKIkWSRPx5++BpeMsmrIC13E5AivLzqMSKKR9LQVfJvjnYG5YarYAPTyXvpbBv9Lz6IZbsW8JM76r6D5ViCzKVYBT64wi86QElY/y8nucmh9fZjKhVjR5uVck2aOtdbOATNIJ5nl3WRzmCRFqY7h6IMpB6irI2cUfOkYfXiIp2aZekiPQnn8wmIARLmGULfyvcYL6SVtSUxHpbq1nvgs/bFWSdWr0+edgOVOUlYzimXM/LCpfDy3D9xcWlevuOYROuJTurLrCWUYpgoHChRGoZ1PCXjto1m+zo1OmTwc6mSafsk/SjnoVc0bOmMNk50cZcsoBoj/ufgc9k87lXLHjSmCnVuGtjIcagwriFoepAF2duwwgOlnVRp6iKjN7RxhYGh3IXR5U1iL851RJCK3Ww7DSXP8JUBixNTvzEP7Gtc5RTuRmWDfJxYFcoUnl41tn';const _IH='40ca324d06389017078194520bb480ba52e2b0e1fc96789201fe2d139b5ff757';let _src;

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
