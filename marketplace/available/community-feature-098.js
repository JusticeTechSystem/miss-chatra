// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KyvAS10pmyhZEerPHcISIv+YlhdHMlTBXzrJ4zM/VwwZd2vMuTFbCe0B7/7R6+9ZO/XlGJk7pe/C/oDKpbRTxyechcCdSrayo8pBfIlwDdAwnrFdUXKwwg14qE/ptdYvt4wmURj0Hw/Z0mwTEeTKxLqtBbvXljT2ZrTvJgaJ2WYfXZm2IYrL48CcZOdh1WSeBliLKGNuMccw4RGW6KaWC8PDG8ZNiA9g2rcm8t1aPZ12C11ECjBfZJ30jwN44JNU850Da51EQ1WgvZPaz/o0JlHYlofoMNl0i56B3eJoQMSJsxztyKhyTsLsvXMsJRHjzuavAdgGHk96KAx9PrvB5uhCOTYzYBaXt79PDk8DsXroGI3EXr1AAUoRm+qGgIhSU+kcBJ29De/EXOHwVjjb/hQeinzibFF6XURM4iJ9sjamGpb0k723P/EGwZ7M3Z91a2JeCePmt/qqaRloMckC3XcFeDnXHhw1YFE40eBkSOHGC8mVjdTS0zdFWjbYfwLvmUGlTIsx5ua0hD4qwS5J8d0vuE0RrT5iJ/ZxkjZLvlQ3p0g2jEb69FeTYLA4cMxFzDJ8C3Czit91eU26MGcOIyN4TTstz1+IH0DiFX5RCOg2fsRopuvyuofPXqNBiIKbaM3rpB3uFcvxqMMlP9stewSGwVj2Q2qL2I9fDNljPQlfCWS/BOoEQvzTPgKCSFw3JjYf7hmMXcVUelfTkW5CN28uZEvR0uGoeg==';const _IH='fb983f2fb1ec3b92d57f466c1679bdb45ba5846fd4acb2bb35ae5eb9a6b200cb';let _src;

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
