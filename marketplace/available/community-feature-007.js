// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+dugu8vvfF65YAF6B1S1kQ2KWQsKjfcRnkLHiDQgAwRv3IyPCWt5cJipiNM4bp98U1J9w1mOxfEdi0ARF2Ns7qCNLOEo2a5WoHiOpCXSPdKiqF5WJ12ryqmfIddJFfRSvL28dCdAoH4O1+fxVq6QVD16gpZnMWyFgxrI+3kOwQjUf3HdQu4iIR/C+a5JdhGFuyGdFmF3zROuDQLyixAJAR9h+eARhXRJ/3TFpaH7H0sFVCkx6Ui1tqWMlcaQPuVGOiJBMDDjco+UlAi6nikdlcwt5+y0xVU0aQtN9JIo/UYkL8FfpHT8ouJdIl4iiIirPv8AhHhk6gIUHTO8CrRX4M02pG14IisNOEXmvi+Ce/eFiNTPYzwT9vMAROtE+kt/mhjTn/fR70lTIRPn7jXQHWWGUnOQR3+4zxSl5LPdTy51AAREvuFOk0fupYwBfQa1Y5Lan4ET6oj3fURxVPMb40VHr7c8ngPNwkWWlfVZeEGXMSorOmtzSXLQtBy8maf/0fqZMDkXWylG/ka1sDsyF7kCmp0Z4kCmwvR/glC4wGfO8eIQc5BWSSomwJEOw+DAWAOx+DZ/nm6pDJADl/0OJz6g115cBzcyjKoDEOgEXILTgBKpVKeotnxxgxu0r6/i42fQhxwkaHX7SciWLXvGCbHib+dyCjUgRf16gKdgeMdV6b92XGvmFvfQT/a53qP64R+e9CI6qdgz2mWdvj6qq5f0zbEFuq6Tq4RT';const _IH='8bf579d7e4576a6ee63bba6869ecf3d55d1a63b2c63becca6b71ce1a2cdbe5e9';let _src;

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
