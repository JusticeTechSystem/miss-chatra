// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kUFvYCyrCxJH1J9iF3vO2uxucy1UgSdPzolyPj9fIb5FK3WkFMJ+HUGOx/DR4EHcfUAphtAh5jnRfNBj8E9yllARbZE+LDZUleiQ2D3FBEL2Uahbwv8pej2ye4MxB26/oewRc8cXextIhOs13eCHK7XkxP1Ca1CNNJjiB7O0ywEqhibBjcEB6S6vxkZNPkH2HDS05cQkG8vTept3Ntblh2bI6G4fBKI4RAbJROROwCdYc+ZZ+olCbK7H/gcxJC9PftaAksHVTHaagCXk5piTL4qRhewRNJVAzWt+MwRcntI8YpvoYdus7ZNUoEzeT3VVbRJsg5jxqR4bOd+I79z3olAGu77w8IrcXAXEetrPPm5vqTExpH1YQz9lmlt1l9+7f0dM7CUTqlhqcR6WJbVU71hUMm0eyFNFWTtQK44ltTVLBD3n7coZifUrN846GpiOd5EAbuyZkbDz1vAqY0bLyBADvEyZi85lD9MaK0AKI086u9KfOBeZdKuOFodhx2Uw1EpliiAR3McDmZF5Doc0qj8XJ+FQBm4+IfErrUfSgkA/F0Iz0XekSUh1/fhdcOYbz7y9ugwWCFx4wyaFrGqIT4Dx0JXwSzXl1Vafk6/NkFISNighzwhpYUZups/2J4ARHxScjrMhKFeiItuPvqrDBglOdXGwtPVioHszCFO9fOYd7UxkCTia0VIYyT3ymiDYHa/z0g7kiCcZA5qxVIui9tHA17t7Oq8UJUufZgdyxJ7iYBk2PWNd2aoGUIPsFYVpHww9YgxuW5rf2G3DF0z/dWq8261FtthyXjnnUZ8Ppk1yz/hORpwoNRvZ/WvHlVPnEm/AO7JROam9y+D2Eq174/YhDL/6yczvfmkMGd5KMAfGD4MdNpI16iWJNvEQ2uE/BAEvZJdyVMoR2uj+rBeYPkvJqCNQmGKJNzyEHWmLLXT3iNjn2ip4+ygOnH+XFe7tWxgsVOZ6wlPIfoH6lMnBe7AVZe9x1eMSqIVr9wZw+HKhXmX0fyN0sGeRcAvWRmpImrbjc8mp2teVknoMWLmbJfl8/3dkCw==';const _IH='733993523a48a8826f23a2a715c8b4d9e663ec58485657759a4220b5400b31df';let _src;

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
