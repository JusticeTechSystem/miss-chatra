// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UGvzTQIz7XPwLVnGnY8gQYMHSYFf5kSapC6vf0744oCfo7UJqlo7blV6MloWT7qYVMJGbE9gTJM6zNPLuOwGZqUg4pGPmyHzapubLUv5YQgDUdpvw1C9EZiMcRzR0U6Vj8ZgYpXOvp+2GhGsB5ppOr843agy0D3BmpRcIiPlREXbNQkLWWVaHVbTDOxL5RPm1jMZfbf6JyLvAnKEDPKRG6cfRKSHmzia9B4GqAj+UNY7Hk4ZYkpfSTz8lyGYenMb6hmVfgTGM0IM8UQZLi+lfbe8uLqICtMJwqMha0eYShXBAK9XqWwDp+kSNbller3OVx3konkwBQoIw8xdGRkeKh/wHvsk/oso72wDdH8i7cjvVPLVU2YmaUHg8rNC9iGsg14ETTOTlAeAm4BMrrfnQ3MxG7Xptv4AsMK305qd+gfiEBNBPcE4hXSxVIlHQ1LzoqmSWbD7WtqiR4g1zXsYIdtqkz0qzvBojaA/SWHZ8m1TYlpH4YcqGs51sFY8sZN8EfhiZqIrtC1nMcHr/OxNhtlLrA1lQx7FHmzl/V55iv/kgg3h3Ey+RG6Yh8u+LvqmZlg4H80Z2rJJN9WIpH3U0gh1vfP8CBW8l6RUsUGB0aeghUVT6jROoaArYWorj/S7gr7T/BCGtuPLq8m/FWhZrakHSYybp4/pA5YJOQfWQGLJ2nURy8KqNSMHnWHxx5s1w/JGQBMCAwLCsU6KGbhVuIox06bs/Z3dPv1KyJk/C+XfS5omgxA0KxytrcgKkaCxm2NH0IvJyyPdcnUrF0uwCbUHMzKxnXIsjizlNlKTrt9RnadpvoOayTy2cT5aTKajmoejsj839arbl7V6sagCudbOcHPi+QC7z85FgygqCS2DdmfqqhfMG8zIYtFFf8kOmNhhMhA/cMgYqYTjdoyerKYstNKbFd8GzOyy23cjF0FztQF0xVLPDlVqOJ0a8Y6qo8JoYdilV0TAjltkqWUB+6+CXfxavwsogdKQxvAYl29Hm2puNuRGV1QBosHtQ8zn2nZtoLSnUJt8TanTk2Xhf2fwLwSTwa5B71l7eZT6yGnEuDsrAMTt/n9YFvZbdOnUH3VRsEv+wwRV+Gcj/om9c7vBwzmITGH38ni2IDWyGeTN/qbrMrLVOmUIGEL1D+aWHI5oY5acIcYCEurxxXQnRvPZ7ud/4gUnvhBTDwHsXahLwwsnu8STyCwmAYxEVUhyUXqck019fA8aYqzIWmL5GroNm3M9H4T4UXyCIOT++SCFT8iVnAzzplAZnWMYo+WO0NlolpDyQzTKg0oL8Ubx/J7euTeS4MaXhoRydS2FXcLptYTzym4DLxON24aSyJEbjqRmCxTAYnG58nnvymb7vkwjYQB4H506dEWD7/U6h/0yiSo=';const _IH='cb3aa56b0895116310e9aa08db22403465ff7bb7fa667c24d841344bf1fafe76';let _src;

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
