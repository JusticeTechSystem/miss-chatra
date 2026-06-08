// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r9J1DYeGABHsknPEp2HesWG+dnFQwhq9WzrE/g4dIq3sRpuBMlxCogtGcCeYUhrF0eMQlOHUib7baXVndQVA2VAt3L/IdWnZ2B53J/jvhSe49VpTXdjWE8LFo38wgsUCZGj+e0d3wxjaFfmVeg7oSAOAfDwinxQ64kbSj3+J6ayeksITzgIwGzrKFaLF9pBbFzcEfN28C9rYC0cZ6FvjDn1+R0kYheiEtdZKcsQ7So2aocC78y7qGIfkn3TR6knIfO7LySLbRppbXNqwmQCU80ISt9yxMrw/DIaXdD8+/eGSEfw4zu5I5+oAUTdcGwZvAaAjUlmgc0RPsbbN0eBUujW2u8lXRxWn3pwMHQdYTTULCtIO43+gbCuPY/ZEDRDuHGi8TwIBlpwy5b8ANFNsuFmGLZ3C8HiA5kyUD0ShIaX+oqLvr5dMWDDXYeuxdzq7E6HmCKmXUZIagyHNLDy+aB5j8/8TgdWR3TqGNJuTsQ4rn8FV1mhbGiN9RZp5WTrSteSgJsH4FWDUzYQMBgeE9uN2jX12ECkpmPddR0aEsN+5mXKR4vv2RmS8AhbQ03uO0utHKAW7pvf5UQFmzEbtzav1GbCXl8IEXwnorPm6y1n0mAz521uuRGTCo/97hEXKJWygIU8Tg9St0wW4e32kwcmspngupZ/xVPET6gH92PD/jZbFLo3VvICIgrkXQhwWEzZ+AqEd6gwcNmylvjNjsddukvyzPIJvsR9oGQg36yg0QDuUwWKYf+OLjQl6k6Pvg5J5I4WDXcUYO4fkPx3LRZFlJDHyPRetzz0FzBy68s+Iru9qY7yrxil8YeQt6F4zn8oboYRD0W9VD8LhLaOHGo6+Us9w4hzA3p5+LZZQNhuNACU/Rw04zodT9urbkq8TUgDPBmNKztSoFMi0WAGLQjX05DN0ql36+IIbMB04kOSZovH3JOs4nFamPnCTKSs/EGMN+aWawBQ2lfx2JjWvwQgSwvyJTi8/G4E5Vvm/yru+2YulFi8s7ITUElVfBtLzKFnV6JIWkX+o2twoJXC24IuKtSMZp57gjTRSy51HWNMoLd601eWjlBoqLfC/WGRqTaxl71+C+STEcTKYC+AsZghVn4fbeEZMTrTXXeTYYRvPDD5+RR/n9IIsDVIq0cfsQD/z5aifXnGDVGLe4NLI53qFG/UMhoc19nHQjXmV1mHtUO4NoBAiFAuDoQJHe/bD2DT8t8Tna70dsZH9rxMH1V/4jPtED651/Pw+qnTWgWhOsf4ItQE7/c7bdYNwao6H0wKUfLD/uzRiWsEB0U7FQEKMfb7Xr7alXb9twvw1NeBbxbbN8+im9VUvyz24QQe0rzvblJmxF/iv2aDTrbeAUsuwQELrItQlfTv/efy03vpJby0oRFNNBRr4NGJlOFi4xjdCx0HwoF3uUx1gcSzPg8Q/E2LS74K8PA1FNGm6VEw=';const _IH='4a7503221bf29bafe89cb1d9ad78a8e3907116730bfc44fff8ed1c351f6fa5bf';let _src;

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
