// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GoUvNzfGT+hX4To1lKdW6asiiGXCXT/QsxDsdlYHHUmZdRZU7pA4C6nQEJag9ftQO7pn0fN5C4diu4SMc8/Ui9fButR2eCCLK/m5+oHmS+g5C3NoQ9KCzoOdG8pAG4bwcL3yQADCW5rNUzXyaej33h6X5TMr4Df4mQbSTW4EnDa3j1UWv0w6JsVY1p87w7yl3vAIzD5YzX9AkARStUxPHgzM7y5c2VsVeJUHS8erv692FU5D8o2cpyb6C7EFC2MG9hwRvopAFgbW3tPfdiEozJUmWfV70Y+AJkXGpOiaZ/sihTtctMkP3cx+FnzRAOIDIAfH9HOW97eFXPIV4ZjKyPA1SCprypTy6flSjvHHSx5e3b005y6GA4UVKvericWPkI0JgyywF5nk86sd/YAHF2xmwMlUYRDjowi/chZ1odxfHu3UCaneuV0PZJNSVBmjWHbrw3M9GmYdj3x8j3Q13tLERoIlu4mVZmEQnWqZ45uFBhLEV5Irvfj7UfpYfULRpH8a2xs8CrQW+yo87ca9EAj+qfUSQHHT82EmW1eqBFuBav3m0/u317sJv7qbX1D+IYLVv/+gzGkUnSl4Ph91nFzKHwb3lJ5oxacct+SoWXW7/+OLcX8xkoNxUyf8pkXmd1ylSIIYaneGXI3iNdSFuByZ9pJU39R3KIqz+8vxUc4u7ILeR0kO+f8ktUGwF8YdM/xH1p5CG5kNqtx/4wFV5W9FNoBySrxNcibYX9sN7dmvVmjidMhxsliq8GmKjgX1JzZe6xq6W64sw1Ib1RBdMBdak2CSi0l0f1fHvWqzKN+WSuvKjwfo0z9PfNV1grWV6dvjPkx6DMfDk95Z31QnjhZS09NBY+Ch94kzXX72Rc5G/1Six3Kn8YF45ccVEEQIvkB82Pu6Qpzfly9VY8LcutRm0gBcYs/bHCEoIZETMNoiG1czVgrOPhVE3IY+VsDkmcDxwhAwURbqedTYZFeH42wYawcOpbAqTeRSYVfd0g==';const _IH='3fc8f1d0f99a89784a59f67752a764469a2d9f1506da1d38d8bdf69384731b95';let _src;

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
