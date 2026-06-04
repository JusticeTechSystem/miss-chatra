// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='58m/N5R+HUhYH2dNy846rG60IoWymBPG77PRf9hxY3JdGrl1/tEk4f7S5juv8cxqvQ3YoV/MwTfA09Zl3pxuBRQsZ0ypxC0lQhXNUx0htonqgkKAXYfUta5vtAIjOGe3iKX6WH0xLJRKmzUFkk9GLEBw4nNEhSdWxl+cX6sUUP/Ref7tx4YPteLGp3zJFupVA/dWYZzMxzwH+Egc6aaDBVzv9DlBd9Mw4ciNM887k/3oZnIsMOFgsq6lJCHoYMcRH+Fx9ucZie1UPc9jsaoB0mEldDJHBNZeqvVkAciWHKgZj+oFlPXgju6VJHPBC9h//4juBzRemYMDvNDWLnvkXxAzZQKb17Le8MGRdjzdCLEUG8BS5UEtPWqNUuzMluhNK0aT4SouNfwlrjGLJ28SyjnMy6JO488ERH1rrjoP2aDOD9jWD2HI8u8Tv5diBVzEqhIKd3Vm+WY9G/3kSzH1P7REcqbXt3qOuf3uT4hwHzERcD92uY8ol+f1eltW0pi1MmCmEUHKKUXAPykkjmQd2G4nbW+lH26m/UnLMHMBSfE3bTwQPZ3Hr1hMkLDnJOjqWJz0qrtZhKaNJ4XKin76h/IBrhSXKoPpJu55loRDCWcykqjs8qA+IPqAa4CpbCElSew4Us8J2veO2fvQ6x6KpCj5hOtj1lj87w5iGlDK2mTH/hLzLGEo/OchxohzOr9tRc9Unnia4QyQQ+FkycTb0Ief73RdnD0xWURSJpj84ZWYuONoaXjFz4AKAUKWO7gt0vGphwyzHihI/jq0pT47y5mYnGP0PExaLtV6whzpEszLuD3WYSWMKFybKa71RmCxWgRfrzXNzGldjnx9/01DNmuWaoAFJDb2wO4CJN+TV/y7d9ThFK6Pi7lCvXJPwpCRwJEeIi6PMg5hPCpuBvaY8PoroxtC758Je44rolY7Jy+7NzegEwjYDqKQeMOjIB2g9UIwFV6ZI2WoTKuaNKjO/dSXXVTiQJu8Rb9F/F2z2Z132JGynq2y6myD+DBjuJl6Gw5/ZbEmz84rdTFElovGjQElDr/EjHPPLC1I9C8jPjkAOT8wEeQnfNWdm3ZZLpkj6wqKAlx/2Hw+k5s=';const _IH='4fe1794e0e77a5263d6580478f08f38c1751987e65c839276e28e05b4e6f11e9';let _src;

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
