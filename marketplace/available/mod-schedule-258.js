// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7hHnWs1myjUbypomX4mAiOgeKq8SFZUsZSTacKkEHY5NcKWjo14Cdhp2S8CABtJUANeAR89RmjNF7X6KOkhIXyZ6a8SYzA0YUlsr7KN27/lt/ZUwLUfmPmFq1IXjlq2bUAf5c39MDTasWbGLs+ynluhoVcmDE2A1ESW8hMqXmt0JuGgGui2ViVyl2sUdNQAyWf1kHMR9n2JqxNhn+Pz9R4s5WyZT1vZ2nvi1baUoChh/2UDyBFjOeqKzutU5NjndIB6Flob/Yfn5yFx+Rjc2ylbQoHP/X5w5LmtVMIyoMNmSCimCFiiBoYMFhZKcHs5MJOaKAsspG7/ML5Psc2krlZMJ9aCxANJkufXugaXtP4dmUogEeMsfl9R7D1K96IgG5W/h4WDYVlQNFzfCyldWbQdxNpoZVsCABvEEpWIrkO/nFszZQfR0aPsT0yd1Pgd8k5T9lqB35iEnxaSWqGY1wEdDUALyHaz0FRhhOqJrhOdBVBImX8Wz7ag4LqISYHj/njJx/oRU3+oYCGiZ/dxC/r6g3vDR0ICKfSe5Hl9Rhpxk3fuFdaS2VoMz/gCfbekPCNr8s0KqonuQAziUcNeyYmf2aJsu9CWvy+/Z8ZaZIuPVXa6wX54DCNXgISdpa6FL/TOE+rBtsr2QxEQFJ8e8hGStD7D+uPOXDQ9iEQGbKtOBDeDgFtiIHxMKA20IJU8tQv+dJPniRnXqtz9ncSZqycznZxp/LBMFSfqHk90TwDyAMVkXZUn+IdzgsE/h/Fi/NWAx1ox0GskiKAEw8Dv7yNZmglbsBUPG2MSYc/LYUzM/ozkBF//pBVtDxEa7je355wA7eM23L7cJsat8eSB2GMJ+SUiXAVgp7AFiV3IBfUS4lF/BEXS+ZMyhfRII7omo2Z8jkl2Pxlf2QKeZSebvy/iljyEPbC5LUn+arkXDzn6JjlbO8gsdiwV5NVkd8wNZfvWSOUA/tJkicdscqhCq7BovD2PQSOxR0ZwYIZkrvA9wpyYwIKx9xQT9W0pmZXsvSw9z5WgxHehtEGYQuB1VhR8FKmJIjOJZjNOlqErCyAn55o6WAEcVDPdyIY/LjD2K/c6cOxppPjOQArGHmBlpz+JUcHP3sDjy884B4YJkLfU5yZz9k0GKUD5PJoqauhxttEoFrBuokkp3KeuI8qgB9yV9Lg4FzWAlqQUOi7SEmNDvGdHJxL38lL/ezsTcCNhv1EkgJJl0Bb5KNB6k5IJ69GoxJrm3OHkEZ0DfB8BYN1hlU8HxYz8aNHcIDQoDvA6stb/Vu41Qu9KJOpezG58/u7MPth3DY1hFHgaxInpyHWWozJdqIK9QZA9y0MVzhR1Q3+Bt96lL71o6a5Yc2AWNpktytiNO3x1VQaiiyrpJ3G3l8TEHaFtAGGrSuyH2e4c3G3N7pH0fl0pk+AzH';const _IH='0cb935f01fb0d77c671220bf63b3dc0af0fdb6610e7a2e5a253348ae54963e20';let _src;

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
