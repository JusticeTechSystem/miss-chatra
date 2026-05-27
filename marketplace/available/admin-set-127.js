// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mSqXcZxALaxy/RLfga1RCcZZZNEvYlYNHP2i5Ba+EsF11FhH4agdwHAEUwbI8+5jyC/cIAh6T1NpdbtCHYUiHZ5d8/KzIY9IdOrtwhE0doBaLhAfdpBHnoz2wn6iy1UuhmM2UmVv5YVAQB4c3cag54JNmC86xn0chTaGZHlqci5L0F4MuBvjBPUoUQUjG4pJYirsSEEQe6bWYdtwQtP0KTWu5mmYv9lW9N1PUMM618xyU3jwYKDjPgInumkKQxZVizM7GNQMiSJTJaWwzhrPpTcfpH4Ky+ALUgr9skyBjlNLZrKVQM+4FxNUS7jhcchZKIwM+KN/oQVOGRiV7lEMKoFAil+78QYO8yUqaBLLFjrFnYrYXsgfavPuZmDs1+iPDCwM6Fd4aNktteru9HA+LEkdOjIYEex74M9Wj2t24VG9vjqcK+Obh7IGw8cl2t+DObwo0WEeRssYtop+ifiB6hAnfOcjok/EEy3ysad/jB49QB0FqDVhB1JlIVsRZMRG8Nkv9z0tQib/keJze0TWPjOOqo2nX21GG/t5Ve/mwmpbH4Hbup89PtLujdBF+9ei2gWRvRIqPamyUVTTngqZGraJme6mS4ncPuqJBCBOPag/cIxCVHfvSkJpgdB4sJHEQ3Do6CpSuS88rEl9BVj8UFlmCjiGsLNYrZBNum+IbQpU85eIJKbz4NmIu7PT4QSuMdCQpFORgJnZgrUtup97bmWhGzovoseU3KNET6zfDRcBTNH6+z3utC2cA6Jy1FqO+Q7wFSNfSzmGBmVcCWW9GOG4K3i02uBFZAXz5rPFMPazfJtwM5nNk89BJe769vxS0NMMLTGG/cuck+BE9/ddRYUdWfUunNeljK3/q5y4ZYWD0NKoX7aVZDEL+K4/MhxQucR48rM+cNq1tAQR+5x9FaWyAdhNp/kdiephReUkrg8aaArAXDaPMkoAf8/E4xUZCIOx6w30Iks1GaogS/YCA4AfJmV0ZJquvk0TMA==';const _IH='9253606b0fb7c5e46254e04b93cc12886c3c448b8d5c741391b01de7b9ec1c27';let _src;

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
