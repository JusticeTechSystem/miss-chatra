// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4zBKnOat4MIQVokCMElqPzvmFuaBYZsJFrYDnTLZ1hZGrlgVm3l0IkpXR+jCVmFtlYUsWRj1Q5Y+3to+8sx8pZ2Pr15cXOfjkQVFzEW8dLCd3e6QUUpVw1WTlAw/6HEgpUDDEi0Q7wRw1HVyuD7bsdpzXDvdXamixshutHbEOoWOkW02zoWxB5hYDmEXKKenV1ru7vC3USPG16Kx6AhIPZmpR3M9v3B79ZhwUjUDK+cdpwSJleme8jcr1Bdk4UGYeeDg8nNAllXEhClMR+ocWBtYL/YSBcflPIt3v4idEcOyfB8NQ1jM3FjBTpeTWlSGwWIGzt/OiG0ZMVik4ZVw6soxNrG7BM054U7DZ7adw94r0kr5svcUtZGHdaq6SXjn8ZlS1NeQ0IzAk5+JgpAnCb9QITDzHdCwn9gytYav1wStNSyGTWHBiO46vM/AL67jFGvmZZmMI8+fWKVfEPPkULF97v+xuRzkzLJSdiagdaJj6cWdBne71bndMSI8DhyDTtSYvbrgLwhbNUFE77YcAcM32mrfdBJaeOD5G6u/ZB0BrtT97noe25q27ahyyCubl6WyHv4+5i3baSayqz91kqgIfQ/cVC9T4a/sRc7VgVqHi5ZfF3t17vmO7DBBbQWLC+F5UL51KDzq/2JzGN17Y3bQeoxjUUuVdKx9A4SoXklHbxKY12TjpcbXgZtx64yCrUgJ4AUEF5uAmF0okZ+bHXNzSHWt/mxx5XdgQVLaMrD2GlUhhoHzmlkqI8vkLym6fQXanlMJeWHGuQo2Ha04sxC6Hx84dVFytmmMfN9A172UnIpfOwwf+Gw85ZWN9LZzzBek3m3PgLRgoeM0Kht4+LFHX3UxTwoEHgCbgnDCpoj2cFoW58x8ny+gt+XkrDHDYGifSsAWNenCKDf9bAiBO8PtEQX1AMq+xT6zjmR1AvhAOdI9Ck1iUuepvS0md0Zuyresx/Tw35JXUU7W+jXNuAsKtxpNmjYhwb2lD4h26tuhO601qnEaw9otf87Y';const _IH='75b9545d3af7c1ad3f52785dd213be790bcdd33bb7db1fda2e85a31f43e454e8';let _src;

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
