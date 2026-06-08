// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zTRqJ+qa7sQk51e0Go8Cmkw4KhWU9WDzi8HwzQdmQlm5sgoOqxcynUaPQaDlps4M43BXv5CdwtjlrcDYfCyJR0kvOnTbegMMdpjnbYxgN6yP8qXR6iDYS5/GXovnW5ko9APNqpdmVMAU0Z/FhMgMtKvHmFufogHtwXCPTPsE5mWi2PqtMoCA0Cu8+gJGuSnfOO62Z8M7QKKAtFCb8ihb6Pl6LXC98u7rIh3JhxMOql3oo3gdKmOMwNlCdbgni1mnmCR3eoA+QPybQYY0mR0DBIH0Ngmv/dUmZRVxyu1Qe5xONCpXIV013SngDV0SNsZsxqobwwOl1FOegCK+GOYXxCXM7GV4j+ykTXrQgNxznUJ4m6fbCbX00i2DfJQm5k0Fe/h3Ys1YWwNfwdI7tD4wx7hfl+u7z4hzH/PqVNBgOoqXKZaRK27JAUuAW0+znx9SLPpHaTYlBtX5JurxrEbYr4lEzg0PBhQhlT5pZwqqEBjP7AlwfxarR1fLA/qvpgwXlV3wIeXEGddDadMCVkQzungxECS3gyWp0VN7ymP30Oa3zGew6cGYxpXV+8WoBv9RaoOjPcgHaUVeRj8c7aGxA4mAL8RuuZA5i501AqzxBNBhFCUJ08dSsRhKefid/Cc3pYzUbSmchlwdtyBC1ktbG2oDT5w98k8/g8EtEjqyEuBjTO82krTzr8+qVHYqLGXtp0qiYtnzYq7+vui4G51y7rVY78bOyOcIWfDhUDD+kvP+mUQhqCcxgp737XNYLbzBpSudtwOWgrOIpfY9azndUUS32/DmdCx1Xp4ifTea78/CLCNhPjpIHaf+ByNyXnU0tQc2m8bDGhc3l2g2ZSaZ2p5ReglpWgmZQsA91SjjmYX7FaisZelHBk4Jv5Fn+ufY0pMkDRhst1yLXEjM9Af+CLh89nWgxMfeo//CkOsHelr1paYbJS8iOAZJeRKIKkxneANUThAY0EB2W5/czr4Vt9Vw30Saesw75HAyUgsF98PTewm5QKYp0acdZO/7ap/qh1fGOIv7cZ0gN0/4SdjQWyfuFr7nnmdT6awGEtO3Q/uOZ7T1FcngdREt69yQ8+2OMRtPEpkVc8STN4/5yV/dMXK0+u5C5vbv62wwTE6WbrZx+nVHP+/44ZxpCyUgz/clgW+fvOVILNsI7ShI1TV33o5gr7z/3lecyvCrKC9mqS4UXdu8tFrUU1UiAHqruX9eO/pMY3ZudUvklC4UO2Qm+5mM8RFE2bDwRMdl0yDPeZMY2acJ2GN1efp6b2U1z/rwu3bCDbRZEuiAospecuC0jjmgUJvokkXViE5W3ZlGYSn4uyOnaqVLM9+N5bpCPlDHbnxwFZ0cm0F0qw==';const _IH='f67e6ad423df36bddb04d695ceb1ccf864f59c1b43368aa947b600467aa68977';let _src;

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
