// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O1WjN59IsFh6fH5MtxMKgFm+gu/yZiugY7SyLy5nhxeNWU4htmYdDpTs6cENpHGDSDHJPObCBdZJb7lVbOvdXWz3xq1zMUQX4wrw15MbNESWisskXlQqLgpY1doXLTKMtb1frPeclGQGKriisLhTnvAaS+CPkY2ON4VDIc9zRgFgZ+ZLr+sXbjfiiO9xKZZCG1H9LYERUZ/QYkHtYUxiyQSmaYRjoryaTW4aqn1MXKNDcdzIeY8YmMR9NbRj3wNZxRJLFPZVLZvX60SEylfGM6dJKG7veVWNppmLYwQC0ES2FoejimnNLJOkHrJ9btaek/BOHgQVBlVvLhh9uto7RvLYoJMArI4Go+BBnHAh4ZS7jrA/cfL7yj6n7fj89FLemac/LbbCo8bz0i9f2hjazgwR1EYSV/Q53ziONAwhqYBk3aZbEQFY5p/tq3Dnuj51SZ+VowM52H0W3yBxNTZaEZc5TLpSrSB/M5mrxzmzYcLImTGHdpoZhLEpmpjrR6F2YkOlbw0B+qld2VBCtm3e8Soo4e8mLopvl1/SE4+7kGHREIYvc6GEd3xI7ZLHvbDflLcCknwSFNx3J6RC/lttvBiuwgqwylb4t6Ccpbx0TbN0X//hg8a4Uap8VvXk8qKM0+1XlvKmzd+yOMZZWFd07fkq3GUy51Ufi2TuNKGI1ZLvMHEas9sGWREVm2WXVziaFIDFeDfeq+ADp901/+JA5yxzPj2Qxh7lHzSnwUaCj0IlAlIQhR9pll++6Xqz+nMi0/nUjOQKl1kSYTJadbmBV3tdgA2Tk6bXszHQaNdOT/6NdlLBPB72xsh8JrdBMC1J2DjDkT7m85u86fxRT/3577C4PI4AOtn5jAQXUFKe2nLCZcaHFWITcj1sEnLCCy54Aoqjmv+A5F2RsFnYpqyoSKqvCibZ/M4785ZcCzA5U3sMC5r/365XGWtPv1n5lql5zaCw/gd2EMzd8s4qGAt0vyX/IOw4mmniL30ZpsBmp8V+42IRqT88dPjV8ooB7hL+r7I9KQoIXsUif1ptQcaXbmiNlVeyjKe5uTPD/u6sryBlib/SUiftF0HzCRcP47YaVDC3nsqF3xmy3Sxz+3CR+QCUQYHeDu5bTuWrhLjOe9rayTrrTGO+n7ULKK8VBTyAFD6GE94xACu9gVBaaJHR9Rk5XZpGq7L6rFpiaNEwcI+RCKKaQig5LAFEDaSeawDbgwfXjbT+s+EQ';const _IH='b19145090e65c08cddfb29525a58349670cdf3a9cd7398656dba6e8e972780cc';let _src;

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
