// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ58HPOiACyu7m6+MCtgZWxfMP4m9wvVrtpqUhd6k3FmWZIKhd2G2UNrQ18/e52ZyW6Hbf2o7OavaovuUmpKOtP4zVmdAcSNZPwo5D8SnqjXqvcx3yTza5v75oJc4KDgoNmbbJyWLX/IJx/Cq5SQ8t5lr/3g0F6NKeyxn46gisJgJdYLF+KFr98wr5xIFNq11u+HfAn8QZJ2DJxLia/a27pNPluZy1kWsRvlEqAb4VDGJwhdSt9i9x1atkbxDTWZg2PwebWfAkbQn2gJrGjRXQluaPuV/ZvFllMfqWGXitZxyr6nBwYHjXJhYhFrPeAgWrbYqJXxTZ82og+leVFpMm6HQ6J7gnHwRy5s2/ZZmNQio5jYt3CJfSxmxp6AruD9hcaWzX/2C+G4490VKBKiGdrAEyinLLCMouRx/Y0ZvKcZnc3wNGRNIFqeePDOaCXlUkUhHzsOvBziBK6J0iWXkC4hdlVdht7Wh9SQADz6W8VsthZJMX2rj8pcyWB8Ctd18ItOHwDLyDcKI0J4DH8mts2XvcflZ8+VSb63PW4LjWKaewXxyFIbLPfMHFLNpnWN8C4fy3w7MU/KI4F/MOx0yjtW7s+sFryRSwV3KsjynqR9CQOCV6ljK9HzF++ctXfPqZO1gtzNRRW/nQMTO1pEtYWQa+Z36GIQUMCdtF+NHeVcKTi0NStkXn19DKqszXl9usgWThhmhPcMGfx/xn3gIqaEHn/jn0Yv6SA==';const _IH='e419d0f4dd3a22fe5238e2febebbb88afd44c3801aa92e5fa53c875c555b9b28';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
