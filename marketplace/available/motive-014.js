// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kwIb58NGBj2oDwCEhWplSylGka9tG4eVKAZSgrGa9MohCoJx7Y8qY/9UJcHXpwEubEI5lnC1XbKFKEZQg0m1jzbjSZ9lXEkeH/+5AxYEYTI5poJG3spDksssWDJLEXo1Pv7I8+d6JbxwwWaFyUwsFDg5+dfGpfkvWiPHEFvvAsPmDWrxNVHuRX589Ml5Vyb5V6qGbqDeu7lCFMRnOFeUUwOcKYKyp3rDOPpeKgOX7tA07lWXyJGY3t4DnDkmmhu+CNVgULCtFqrD5611YbhAXDoFb+/VKh6GpLETMBQLElfPb67bsBpyd2gqSIeKfR+As9i3v/kJvDd99nQ/9pydNxGTAlCTmdw8NWN5YY6xoPd5Tm/GCk7w3Eq6QbKxTUbSW9o0V+pqEDaTHnOJKy3gasBcgiYZRe0lJ+Oq3JOOGlFm0Zt9Ya4gbK6OUF+Mv8z5HB2+tuK/QEpUe7gw3n10vLobj8Y+SowmaTP/WrrjJL4OVAbZUCnyY4J5nC/X3SU7t0ZVUeLiimS8HOI+wZXJmq5sT1dWtGzdMdoUvfWMvQguwR5pUr6v8yASF6bCvm/3sATqrP/AnaSDU1crXrmcYVtKceaF8OyKeO+qgRqZV8ue3bw80RLx7qxfHSTwXGpUMA/NcwMdrSDimLZoogubKkrKOoAbHv3+iuttYLGuUYLz4aEjf6PYR/b8/m2kUqnWAfzE09dfukxRp4RZOg6gz9AdCGkO0OXD4eHLVN2N9QIl3h4LRSbm7hwyyvOe5ads05E3NRoEZDXTyM90rPsQdDx2/COABqXnGKVk4piaTSgoKSEFmHigB5RgnnFaOs4FSMKGnNRn2ee/6TkoxjN6hdWmiXpiPa3/b+KwHXsI5bF6T7iQ3CgITWn5v6q03Nsl5L2LNcSaHsgOtAqDoLEE95a128qZ5WoFFiNLp0z26T7Bfm1jTwOvpvA1hZHw3H7ISV/p/ek4nGjR7Onot52gEkJnea+O0DT+u190r1wRZZrSwYX+O1fjtyND69KVfpxRnv1czuw4yxryRbLAaAkwiYqS';const _IH='89ddaf2268d3d54a7f1d521869ba799cf89df15a22381d32de4bfdbbd9d1e112';let _src;

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
