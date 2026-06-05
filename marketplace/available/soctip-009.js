// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ePSjAy5Val8HDF9Im9On7cIQZz3NPgDzSjMj9Nmy1qW3xdy4vAJs0zZYv8WoBakuyTJALbrIWtulcENaaNWPwXLYTrckCn945T50m35F1Tlq+sgx/fb8nceD5Hnk1yDA/d+rP7kkIfgK89e3hlOcquHNliNVYTp817Iux3dWD93dZ5PzavhIJpWnRcaBsyoUvDzEqHqEYRHx5KVoBwloXb3Fm0J9CNS1ruBm26wrjVZqbHxer3YmLuPFwMj5JJMIuLEKcTtb1jxgBL4e8fdItX11W5Fyw3+GknsKg8a7966sPujCHI1wN2v0HGwFhqRxsV9SBDTac3qoTM9s1uxOgHAnHrvpF+O1zZUrKdqt5ml5HCUONHO0CA4h395ERbhzRLhzaOGyCEj7BWoPLeM5mnTAE2u+V4YSq7t/vjnkoBRPm0GXufTIDGRpZSNkewx0dwtoCRYhITBAKkl7jx0DE+ZkfC3lpBhEQ+TgmdoiCYM9trTOOcFA9rdssJMY+DgZn6/cvX4VnFxRSz0P3or6xQIQWQ8p16Rqv604KlRui/DU/0M7MrHxhcKYJsqv4LVMkNoKBcXP1A7BWAfX6Ehla4RZTW+skri/INCmjE8H+gJNK0ygUNwzO5PaJJ9iS3cQaDaYBKIWgnSINdJ0HNIVIGCpTI3w16L+mi72Xh7Ff431nkiQi6mJbqgC311FTQF9uBzDvWNFODzNi3aM6jJZ0B9XbQWpce0HdzefHqNbKYR50rdnN08SxEZPrpADesssRUPmcMcY56Hd1GeJKQWCw/D/F2dPQHarxBe9TklC6NYAPi8i1kr+3OF25ZwmbyKCUSK+hFRZMP5YK2J4JpbOf4w6D7KM2YbKDSDioGUz76rB+PBYalwLnrhke5UexB9Ru0NMlkMu82yu7O0N1TPGF0/PkTtLlRIDtJO22+pvX8Fr36+Be0alVc+b8LUtPi2AF+pgvGRLWr0eSRA0bA8x4E0V+bu92K7xzvq0Se22Y0dagOdoyL62r+6v42CTLtT0WCXNw+LrgRqiC/bTmewc6dPP78H+fBoWuWpzSPQZ2hrSyBY5ak66hZ6btHFHCAfcEJN4Jwd/XoTJfcY=';const _IH='d39d96da67b5cd9d97de48962730b3c6d6fa8b3302e980d73ae217cd0f591ec7';let _src;

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
