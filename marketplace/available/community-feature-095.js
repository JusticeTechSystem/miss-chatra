// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5SY59zbBkpxoJ2IB5AhqLuavbndTiECD5cft8nV1QTaM4vcelFxNsWtkqq+mMIujezzTsDMZ4B4Slm1LhZ+l30zP6bxKHTYNj84sdffqhDXgG++wjkD0fKGKSYkNkojrN5BwpO1w05QPDp10fgWyDLEJOx+vtPN8+gALmKauA3uz7aL2L87dvLs2BtvnBg51p4lYljm3d2gU/7eQ2kPd7AcoPCa4kzTlDYG9/IHWCHnw010nNayi1dLCTao0GMmYHP6iNd84RBN/+bUHbdCzIn1rjRxuNFp8ZhVIawgNHDF56Fvm4gu3HkNJVVkYUYGmvpwAzZSI96H4hHFTW/FD5ZeHicERGHKWZjKLIFXQUrEUQL2q/m7SuE8NPFqe5osDbzpfM/fT4gIOa7JAg1NnXcrbP9M35U++NWlnqDJvmTAI9qdnvgZewZD6FRoJYnI6eEb7Zyf5NKOxj7e+a3S5P3akfhfFotvTzJtNKPtHlflNpnwCtTjrWM5U9LcCOFBOnS2Lyy7JnLVGopMixIo5oIb2qPbEYK73Tg5SunWTBjGLJyKe/odEOHEuWMnoCi0Nh2nZNP8s15hKXIV3PrICTi8CezAcQay8cFQS5Cl670z4ZWjpkw1zdMQxAWIVnxb6cfffzMfaIHGc+3gkn74T1i1/OzNOPupP+RNmxw8H5Wnatqb6yIxyfxTAXlFGWL7jOwOrKr4Eg8jEkiZjINpG+JaLw5zF2rUq8Tmvb2MnYm6WWmIdQyk=';const _IH='350d736749d545baff272b0d993aac751122400f71b289093b4e8e255237eb80';let _src;

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
