// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpRvT1X3KAS3WJnbk97oqncgE+Dj6fiLXUCZD2xxc2JB3kiMKL7ZRbJWwKgCvrcSiw1frv/3Vqv6K/2QLQBra0XO4FMoKReyaPQbfOUpwLRKpJUpv+PIrSAXgkKmpKLpD0rN+4KCo1fk0AYmyk4qzualg+TA9DR+wbqHFwNswZIKxcJqOCgQRDIg/VQPgJFsZnxENUa7q0mC3e6mqXi5cN76I2Ha60fryAsLdQbIi17DSHpEyITf17z21ynQAbVQR4osgt2FHWY4E/bzeaY3/3nk7XoR2kSqQ4a6Lm5eB9CVk5OYf3OwI6eJYwQHlc2ry+y27EMfACvxaMpyMV/KBZ63y+ZHIjXbrn6Hk3P8sbAUYDOdWJnfF32mcpe5fBw1rMUauhX2u/OKP9AtpxFHm6W9VHsqKJTQNShG9HtIif/xFg4Umh94CYto8qccKJWZL+QCu4fhrzwBzV0lItpgMlWB9YyDbLIL2dTtbNyVgB6bjLF5B4SmqzYnRWPxHuCDtZdufuRyhSwyU/Bbnb+FT6DbuyCnQmIhX0zp7xyP2lbZ/WZymRLviiCW/det4Z/pAz/quQWDwLwC2zoGTiOCXlKHV9T3QwQ4+7mtD7Ria51Y1hfdLTHlrIgl58ooMsG/aCotnbMtvv+YoxHnsk18QXi5IWPapp0EFY6qicMJrjY0vi+s3tUdn0W30klld2p9fx7r/qgSQNUqGGepJU3gIRMRSMf3mVEJd+IU6idxJ7wMpvJls5IY4TcGapOGmEdlk/Oa6aOBk06HKpvIxI3D2cW4RWW0/f6svXYzgfbCpEm4gdyvmI7fahe40OX/oWR4oncF3h6sm3cmtMAClORzONRh6lTI6CcekYWl0lGetALBujJOMmSh0TTMAx7u7SdB+E2mhK/PWMb0RpZGP0CbFxb/Et2t5NTm1qq2r8OMQXmpC26AC5AViPsqdkS9fQ9xtDehIIh5VHoKMKKouZ7LOy9v5X0sJRGjx4QbUD/7jIkCVLiioiRsX/fjdhloNm4Pkh0bHFmaUAI/Vv/m1A454y/JGbwEaQb+wdqz5GBHseccoWaUMN5IeMUElpKj3VcYSVtD/pxa0pq8HTkQDKnpPIIVSRGPrCYh0sJ9oeVsZc781QW1DH7UxliF3s16r63yONKj9w8YPvxQXNuinNSMMCcSkkhacgWsxuD4TkABcoefg/yz1ViOi9Er99BDISsuOsPc/f8iNJsebngqI9cIYlXVu/6BjRQ5Wcd0iWH65Y79sl10cglFl3YRJ9aDqsXiLId9Lc4/uModlIw/3dA6HA51hhZ8bmnwQehV1WiBuS9JErlWPr63KZ0GeyxhnhPCGTNcYIGPR16AlBHZYV9Au5FvmM/o7wr9Ht29ELjCRGRY1pQw==';const _IH='cef2da9192f23a69d94faf0c8c0a49a4d1cc03f8d4705e74d937a47c5e8eabda';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
