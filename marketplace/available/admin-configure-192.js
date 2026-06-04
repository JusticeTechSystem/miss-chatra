// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CdQrMBI/oKfzzfxi+pVePzLb6pVHb8S/QlSB9+V8RhLWA71jKMheRITwMaybUNTBhVmYoO3qlabkOlhT6If53sVHyrvV0SKEPytAgNDVet3jr4eZ5ljRm+ZhefBMROhZya0v+raWm4xeB9I+DGVE6wVuS9hHiSf4pqhk2+VyhraFRJfFdI+bFycg5sumBLBppycx4HCevh8Xh8R3GeXM7Oc7+Haz+Cb5Mv56+e0vVsIc9RqFSjOInetyDPcNplmL/6Dsdk/K0sBFNUfaIqFg4iKHZynkfUUO4qbyDkcLYbhebzlc7QPZ+RJRhbcksi4tsP+CrFWtcdjm0YYBjxsPIFCmd+X7us3YPB5guTQ14PPRnFgWnIysAwUP+zHrzje/BmzIXT99O6oi1Eu0QpnrvQH0dn6s4LGgCOos8vsnCNWx3cQ8dQWV94Ha2m5aoxJLHjNv+kBz00KeS4mRxNqFFHhIMPDs4XRXtmXrr3y5IlPNzuXsJ5dzF6UyOvdR7FTcXucpd3wEcxGVv9eS5wGK2VUwOn/r4XZeu5qlENCZd0Zh3tSxA1aDF2MdeWWuMI2ZuvuKQcknLPIf7oYKzetwT0EmkQUl/q6NluHQ7Zq3gzPvCQgw+m3Z/J+g3KM5MTt4OXzoFQbsjJbO6kCRdRliAtUiW08LzTdXx0e5+brB4dQ0e8MUBlKEVGeu80i94Zr0cy0J9Q/PHJP3Qc0xjWaEnhD7z0k3zO1i3w7nHDc3wCZ2JcwjCCkBUBv0ou1Mkpqu+nu5jGjFTrwRTTlzmE/ww1AniJu4+Ff8sCyejlTbo4a+EbV1RRoyOxHixTTWJ6RHyLnDen6o7UW/gllIp/8H/Nr1NxX+89mju6ofzzCuZQ8Bt/rSbf35ROZRNqllGdSSEwsnrgwLEzjWQHDxB34X92fhjlBxWT5E2L3l4HX8bxwd3FmkXlj7sVrcb1gzTkx68VitKGJih/RYMgfYm3zkbx/RKauNoIlOGzHHQn6dl01//uzQVIQbej9D26XpMNTpwSJ0Foq+4VOjRMCHV7MIDkwn6WQcAQ==';const _IH='928c5d6758671b83196ed485b282a0f3f8b72420fce099edeadde1ac68ef06a6';let _src;

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
