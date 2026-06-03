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
  const _b64='Qq2SqkavGhEjLalXgl8yhtG2+ZV6/BMR4fBW7s25ptDBp5bzS3EsaKZENqDMM1liThCEpbTSl4QNhqFd82SiWcy/ntCkEMlMkvfIp7fM0AuhzVdHIg7Z4sUJuL+cyJ8oyoAOjxiTd+Aph4tnBcK2YKa1eI6pgn4vcO2dl5XwjdC4KZdgueXU5BPLsJVjMv6hA3Dvx4LwCskC2XQWmeoWvkK36pe3jgy3Qwhaz7OchCZ+Rf/SXhYRoZZC6/zpoGlJXayao7VDIbfc/8BEXdfl7/DMh8pxm8ytaqsYnylcs2mclJI/NTG12rZHDTggsZ2ys2sh2M6GiOGEayfhpn3ksdbX49CTNKYZFwALWr619ufEIBvcP/oMSg+EaH6YpjqyjiceQdxnWGpFROZqF31v44tFV0qJ08unIdgV/M2Iq+W/++nlAXevZWlsPVNfWXmzoZfRPKXTylor/vVCAROmdnxXcarEUZg82ZBP7Cym0xCQjwmZwKfXmz3Hx6xj0l2rPGuK7ncOlQLoplf8JL3auCO16QmUTYKbalk68C7vA3RUwRVxTdWs1g+OJ34/PpCVQ2Zn8mEwML/CS84RtW7T6L93DxGix/M5CIoUV34xJm5oqDpNsBPaDap/RSoAeCDxuq9mYIjTe8JXjdCe4l8Q7LZZvpbA1/vRnCYVmg1d2E+T1Wr8BYJimxjX/E/lQ6O9JKEAYHrsBZvuJQfmymoYiWSs8hLbNBPBZ9ryXmrtXx83NTWuS4O+fOxPXA+lg3ySRCVHQMFFslTOkb2fIYj4fbbjo7rpfDJZwBjjZXqvdvdhovJAS8xVJFty5BOezeox9vh4DVoA7vDh7f4lHGm1r5fzeSTNx/mWVx8kmz33hxGbx9/Wtn3hR5TPrpJhe7LXwft3VACojVwXTEO5K7j9ey4qP2vQriemkfI/vQVVPINygyOxZFj8aoB0R0Q=';const _IH='c379f408826fed4a73935196e21c0ccfa897cdfe8f6140f8b9c062e066007a40';let _src;

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
