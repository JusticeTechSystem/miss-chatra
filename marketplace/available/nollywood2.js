// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1iMlJtpilmV5LmC+997Aj7sdqFaVJMoMerT0qbQzGm/3C4qNmpsDMTucvszJfBLt04BQ2aoLIKdMsTgNIlIo1QF2Jvl8gVLVN8lkEVQv8bT5z0I/s8N8MGDiJ+GfO3wxN0ID8c5DRpzicnwysluR/97wqgnpPnFz/jZXgRay5mHMDJw0kUmNszjWjnYq1bDE8tpZP2yaifWL49mEqciIC/bXUwbzTkm4Usz8/C1FdCNFpdHoCr77arWxvbrClNZawwnTHRuIoR7iqdrSq6PyGV/4uXoJ45gGK7w2ufjExuFBDwh4lW1Uw29KMjgG+wBe4IPqJEoj7Wsi2YZW+fPxfrJxksQy2BIFxmvBOu+XWzhaFgZn3YgVTTm1gCdcWbLQimoQeSBsZ+aUbrBIl3OqlqvT7HpRSmEyS/d9OEF4uvO3r9F5x+BEK4apGJEXgPe8V7CDZks51e9bBbuAwxhRrbtoTUS6LAghEXWAJxawSvIhTsJ3m9ekuufZJYUbSasmDM9LRu77oWOQXn/I8Orn0fd6DeUGXqLdli5cHrYidrSwPYutqRhq0GGRoj40Qi+fsmNwWwp6l9KQ+KvtXfbQhL58KDmHrFxxMeRW2yn80aSy1fA8aooQA3ncSagYWNluEhhzebI7aYLnqmMbUctjuqtqW8SmqLBw90ugXw1zl3EAfNzoh2TgzYvddaPLwRGILrgBdSQvoWZNL9dbuzzkOCcoR4avOjvFtIZz80viwL+Q6rHSWmMIukRUIxg6mCAj25OIz7OnjgjkIki7RE3YZVjenDlb/XtgGKNTqPAI7Jpg2pwknUoxgx01PiwcHrj2ESIIFss+QSjrUGBG9vLFk1bAMKRPGVoHWdRo4E63xcIDmuk/0Cmi4n3EF1EmFRqqhAGnQQXme9aUO9POL2aymVWhDlqmfTEBJLR6UVlYYmFMDf2LlKPmHbPgK+kxvuTyUXXVrvtuJPwIynsd9AaBrpIqrgBg2dERO2xhcvxuf5dhp31stNTzDvPPOydtzcVwruYdqUXrRO7s/Gzi3Ivc8OKhFdRuw+rJ/t3RzilyCwIgIkE5W4cUyKuGOx4Om7hKNG2vEKfHWQH8gjY8D5m6TrQ1qJDmGhGlN9oot0v3RQMOS2Z9UQZm5eoMAi7xh0uiQmA9VPcs8foYldyWKLBXAyXSdROzEoIV7uVFSfurmEnT8ke8t7uS8ri97rqGPuLyQBKmDOdbd8DS7bsSKEA=';const _IH='155aab9660d9208b9cd93e4680eadbf5d8798e4106dd1b6e69a9e6c9dfd9d045';let _src;

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
