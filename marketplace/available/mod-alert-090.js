// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WOucuVoh4Ji4YRXHwYxkOPe9ddJGoP1uy0lx/SPeifKrI13ZbMt8/KmdPsWEhn+rIGP4fDAhjLb8zr5iEnxk8IbFIr+ZrOUknklVmcprjbKUvNJkxKLH4U2rWIidUVFHeU2FU+1RWpn/EFUXnXuZyWFWtwOXgWw5/YEmP2LH3XBVDWQ85mozlkYFnm5Bny/2kM0qLdfLeLl3yOZUmTxjbrGE73GTNaXIHu9V5YwgSws/39u2bnUg67Ezlc/9cUcm3p6VWglnJREuzTg0CiFBuHudPLrjU+oZNm1EWXb6pm+U1ZIYrhEGpY+do+iA93HSYfJD3SoEmkUJ80LsscIVLY+MaPHY8mI6O/h7CQ1Jv026REmJBzSCnkQ2qjMj4V62YlqIVwgKB4unEp7vymEL2BBFbHYHMB7yNuG//ojqlxkaIPFI8AMIflM4yQJW7zp34RCIqeZNvc2ehA4+Iq2IzPCtu5jDYrKxRonIi+WHQbJcNgFCjtcF8fHEXbBWNWKTuOdHUZnqnTCMKtlWKJJfT138RSOd4WPkWx0j9ZpxQe/bVqJkWVDQ2GyS4MfaMDd96HpALDVVrxDFU3KN0vKOG3CQRxtuJ9Ckqf+i01i8fI1pWk7VoElBX9q5/iT4CBh+o3tzkaIXh5Qd6ovEFkOaiub2Thg3s2I0wtvncgegy1EdVolcoaXOF0gEDxO3MsA9JtivuPVITOCGcJE/5y6TIaxLosLMM6/9TLHJGz+CllTeRuLiuq7s7OhBBMS+m6wKoeYZstPJHft2iOAQjA4T8RYItzHVsIYGTzvzZp7wHbDBs0gP64auEqeIEhcFUFDC8V0t3w6mIDmL6a/OwkfsFVrEq7VArGKbOVFLpWor4JKWefljU6VaYISiUwVHSIVRzxzpk3LhRAiins49M3rUSfWDZ/6EPocmGMXVp90cPySr867OhEdaWEykSK54wK9GphfiOelbQ0Czikxk2fQcb0Wzz6b4bd0fejBc3MjJSpG26cgIAZjoOvoETADGwxS0aa+3pmAbqAFrOxiRPR4UoOaZw++Lutmv1BWCpiYvsv/hKxyDCRodo7XhWr8zB4e7oiChPmFlYr0XyIsm4J/yStmJMamDpy873s2sz62s10fAjO8cfcScqbDBIRqMZhdI0VyeqCvc15NUc5Td9pZ0tohu1vydqY7BJTKVRoZFjMEz71sW+EA7V5TwixV6JD2RccDuAJteG7+2AIadfIxOZQwjqS3ks8paUgjx/qK1zfBScXmFcDveTNf8MDdNM6/+H4LhcaqyBZJ/qST8SsaAF3lCwLZoPz7T9HkKYiFIMl4aGQWTpxJL5XWsC87h9PCVR6vqJ82SLKbshZhfToUIgJufTgBNBgCN2A==';const _IH='fe7e55028acb2975451e0c122a90a4dc14f3c34b64a93079e3c78217301611f5';let _src;

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
