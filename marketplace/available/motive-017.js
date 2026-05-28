// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WEr/eDJVboSQ3edrq6/V/0sdXgAQEWJVRi2G/EinO3HbMLK15UyH34V7E4vQQri7TS3KqRiHKLVRnKaZRBC3zU2o20X63iFiAUFPIuMvL+DU2RkSHIyssaTaFrwzr2kcASd6VoOHartLvnepuRZeGQIs2qy39FzEoyuGGMVRK2phIW6iRz6yvej7RdjIEXSilt9zcNl8hQS6F6lKXCq4lUz2ptr87n+gd/Gtu7736e6djfCXMJ/dKVVkE0aEagKyIYe2MzQdBMCHJ0qpKqYrelbIDnFPRSsRza7FgQJ1p7OfW0Te0+a75MO7JuK2UsS83xhwL8ywwCmHv47Z8c30NnbOSZ8Ko63Esg9cnW4ponaen9QNjEqs4JIzyWSiVurS5lkpc5M43p/wzJBX5gPINOFYX5ifBlVKcnkrTuoesSIGsSCBaWvMUSN2xJWpENAD6aPHWRW6NzPC62NtPUEvD8jOyyFCO8vQnd5dcV79qSXuzZVwUHJ/Jj+H81NtXzNWKEU8ri81+ZGQhnJR1SfSEZhkicdzWHs/J/d/wWl7UFr1P4+2U2fnjGCucWGFZOxErucrRBiVgsbXYnb4fhk1dFBgvbRRMdxG0w/6LqRoG0s65W5b2BDs11Ze0RxCFEkIAlWHFOf6KJhbD85cH4pu/Qpe0Cks6AQJ4aLZU5ynTHgQyVFCK0k7HD+xoAIMfLJw6uHYnzxw2jkWvB0wQY+evulMkJ0ocyFG1dL35BsshMiyefKy2B4uEaDFApIfazwdhQc9Oyx0KKIYTBVeJ3jmUAPOFeE5qg4GiLMuJ7n2Q9K0jaMewjVXnGjgbmPSTfa9MBCtcsUTfatHgg1a/YRYgyjD4wHh25attg8yE6cL30XsWlQwkYRHCDl2pojC2Ha5cG6HZSXVJJ/oDupGFp+gX13sE72gYqa29pl4jsxsyJF2nLBKnXUa11hZIkJRBhsGv6YLqiQAuY1tpLP3LbQAslNBhKQg2wvKcQ2KhrliVvStCLN7fku8+/w+NxdkIE8JCiwIZnKaYv69zh8xYreHUhQ5';const _IH='62939a3260ac91c08c5a68c7a039b9ec9df8d43e7cafe5b60993c506efdec8c6';let _src;

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
