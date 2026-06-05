// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NytLF532o1DfpgdrRxyxLW24Q1sSaC3moUqhx8w5OMRTS7/u7fJe9ChWyRQvA8vaSw8ZgEuwJLe/B4CnDVOQ0rSKyDryVuYi5nRa0iIFE8+dWn0hsRj29lU+nAPHi0o5TVDC3ytZOyo2pa4HIqipzi4Tpph0beAzGw7EXOsWYtFGncyXehjz/mMmiTmzIh7FrOdjkd0UoYWqsfrRhMbIpW5sOiOqHV5U499EGea+ZRYlfZ7jdezCdfwzvzadi0Bz2SLaX4B7lDMQv/NQ7cm7vMbSNztC5pSgbNcUEU13aITuwBzuyQdZ63ZTwEjj3XmPRP0ctXHniChG2y7UMVH0urKftz0xUt2+HEVAIWVQ10wsB+22WcCbcghfgBn4kcN6SMFG+VXZXj4TnrFcX92s/0H/F6pzK8XKuimJXbXRSzIR1yj8u6v5O53TNvteOezcNzSUkGfUmVbIEJ/L43utI6y1ejhRW/DT5Ugf3O7R+Y9nrl9+cLXncjjLTm+X3Vu3pfCOunXfJ68FhmsCx89X9EnTpndK6OGc2/ldlNira9dkahr1QzqwMxu7hWh/0/Ag7yBAS5yta7zMkkwOBMxwwvu4nvUJboLGckPlIv+qyr84cERIIC/Rxix4Sq7IqBkPFtYiqd6M63B0ks4/Cv/RFO1NWj+I3pDua3doyluuC96er/ejTir1UNXLGAe5q33xkC4C8Z1Cxf63jwqmsbVD+Y/xoULQdR46WGLFbqMignGyxZa57aBXtvYtLyPr1j1eA4esQRvfmgHZA2n2FPt7jEpJjkNVdhDHYH/Gidk5595yA5hh/cZYWi3Fx/hQXMVUFiPTg8M2xc/qsH2iKnuW741sLV7gb/MjcZ3qUsN73JjLYJ+OO5robbXGIuhf720VJeCOSqVwe2lQCqeEHWu1J9N3OU5+LAQwQb6dB895TUNVSGScq1RAAcJPMEGh18jh+MPBNaY0wyeiMCfa8P8dCE2JgqVlNjCiWyoZHn0YlYe4xJl243AXZBrhK/9sUcqGxAbitEOrj95Rs4eQA0Q7tlNttuhzhVH5kmlMzypw3P4YfIrEQJBJ5I682HVeSPg6+CUcOzxhN/DnO8LXgTfE7Tiq/d+tteT2kyQJuZRLzzA5+kYLsQozP4PNf88nxSA+TSj2g/rJ+ZvzA/F6a6sqmjFMlQgrXQnFZogHcwa1VDyiHUYy7qU1pguPY6KFoNO9qJSG/uGrCaArWrYSqOmYpkQpqjMf0Yzu4C2JJmp+5kOn08QLZc2NGI0miAW5AUygprPGqYbhtFVWElIf9EVRkZYMBFL3BnGiCIQhMEboUyU2QQudPrs7VfyJkA7IHynA4a91PosIW8GETdj1tnNwMCc4uLXolsR9V3bcV2XuEt5OggPoyEGXeQ==';const _IH='127efd0351dbd61026f98a3c7c39632a86b68426f13dfb9c0334b0cd17db77ab';let _src;

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
