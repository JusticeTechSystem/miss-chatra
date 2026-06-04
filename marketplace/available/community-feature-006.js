// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cpKOFL2Nz9A96g8ltyycPGRlvVCdx46VqFNDWmcB0j2OrqCjBTBci+uBAqYrmpzSetIt428jDa0ZTdHUNGY5o/dPOMkE8UBN7dqfJjkqoEt2XzraW1Ii3UxtbfbdVRBAtcMKAA17GRo4CZZHFOeNBqV847/VFveMIRuene2nupYd4qIXs+P9xDjpFr9o2SADy5hCfbws1G3tiUENw82e1BF52O8XZzsQAFFz933BihVuUtCxzvvj8giL6cPohQj/dHF6kPZ8nPxaunsRbxrxHW4QB7XgejaDiD+3nhBn/pzo2WQ4y4MgeWKzAbD6Z//d2AXXa64x+U+tVr6q6f20wbdP2+etGHl75yMJq3+zIfnj8Dh68d3nAb+1UbRy5l8Ym4UAf1vD0j4vGBBoD3GtWyRJLX0VIX5ajejG2U4VaSZL4Jn4Q+g1N0CkYkjoRORBqwRfsIlzcB8UQYT1nPzoywtAVjvnSbVWlrIfmCCXTABrm6YlSvt7psBHnvZpBE1d6EJuBUFrUoVfR93l+5+74X15M0nXR24eF3KzBMsnK3pD0OKQdGyy0JI737OmcZAmmfkQOsfj+9xBoPcx50LqtCDhZLJ0mKjFJN16xJylCHVtdEK26vN0YktEfUqF0oJD2e07RmrueTnXr9uDuuQuOFsLPUkJDMObRw6IEQmUgr1JrDBA8xMfUBdhTsVvqyl7my86EpxYZM8bkxsvNoapyQ==';const _IH='c23c8f3f43f8a7503880000c6273ed27fd5d2fe8277ff09683db7bff1c326721';let _src;

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
