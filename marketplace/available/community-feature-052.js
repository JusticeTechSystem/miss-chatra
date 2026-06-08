// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Td6pmZRoZvBMZx85uDHIJWrIKs7lWYtsKCsuGyMFE6njwfpt4uTRU/WiG38UhrmIOed+gI9c2EP1qXeAtFgTfr5GyARgAuAZHsDvjlteVDUCFf031IVuG3sZT6DMliBFeDbYQezcXvepah9atkOSFrpFse9drmhV30BANToRS8ZCs36Oi6BRSK4kcIw7MKYwaizUFiiAFNS5q1dX/u4Q/rjwb6zAw2et6t52JuCZlOKWneYMimXR4ejqcBtH84VsUJh2KeBYR7yKj2QUR9tWhn94G3kgE4AdFLuuqFkieXLp/93OwMV+n5Ly4LvRwPlKKaC4MHspyhrtiofrA9zqK43c0cfPc0BEEv0IqRRjX1G3OVJEIvGTEWZIyxujdzcr3hA4rQdSSe4Jq5RQJJH8Fkin8Eq0IsaynFO90ZPR4nxASbyGPeSszYEw+BfMss/n6mBEQvyu2/zVcXCGzxD3blmDnENWMFea9e9r/9FiE5yRh7DDx0yCs6BDkjYXcToH9uBlFODmZUZIqieAfTqY16/6zs5SlbQZrtceuROjNc2mLUINUM7+n2HqTjsgMNme2cuCXtMx7cbJ1oGsbIuKJNpmVHqazKFowfMNu0LcJuKrawiOkQTgRnFE/SZQIEjUrQwwUYLmSjqLkNcYjyO3JDpIgpBSAeXqcC3gVPkdwRVoLxiIAU9RVZ1sCveCK+LPAWMrec2Z+CWmwLGiYIlQgh5NH6+B2URjSPAvAaoCKw==';const _IH='862a76c8a284ad4a57aacc0138ad6f8a654b658883a70b8cf6b20131b6c999c2';let _src;

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
