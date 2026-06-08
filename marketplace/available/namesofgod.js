// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nm8ZX9ratRl8n+hAgejOd+9Ze4ZUxut33UKOgRClkCew0lLN292m8gOaZZl5F7Vn9vy2KLIqqHS8+lwObrJNNNEhBDxR8am3QUC4HCcMfndSiw5hPyyQsW+7Bli0OE5RlNNSySRUKfdbxK+BD9MicBsGjGGyMAqYOUIjk/xgxMZKiXQpfuiv2EShsIafhRf+N4NaKzrN6RGxltNiDe6cFw4lhSORyMOJlBDVEYd2apO9WBUYCwxyQ8JzhxI4WylU08Vq7m9km+v1KAYh3kmHtqCqA21AVzrBVQ3HP2Evon3/0UZAFGAm6pvgOxW9IcOvOZc6e8XP3IR405CTGSxQdBKCtyh5Kd3NM/nqq2chMRU4MwUO9grMJuXmyWRDJajyETmepuU14fLIoPfovt6JWmSCP9LvwGsh2SaWnoEO3nQOLi4GJ9SK0hnMKMRcjRQmsEUqrxqFMvfKQ5SAsNpa9lm1cUjmlTh1gs3ruleA86yngYu1r2dZkXQhM/f2zWZnXNjIfaLK2eDnyruWkIXHuvtFsuwLdrNlLCii8MFQDyXEXkHtLKgsOZSXgR/u7unWogYytNtfF+imfu9pSWbSUqBDacFdM8NDHMvnZMrK75q9DXJbJuGXsAqQAe/Oy0vCOKbMejD8NRBIKhKvU5WTE6BxRoEynSNl71KHDMw1dg8I6HKfRhnVLWszwMxjTD3+enemrnH+owBlNHHo6zUtSqisi9LGz8iPcaDHnAzWLRT/95RUhqPxw3LbI+kve46QCeilWvogeowGquR79BP6KhMQtWopvoypq9NZvFCYwOAT59/NCd6VbenDPlztaYnleIjkkCEyx+sOaOG2sdz7ghsKa199qTJMdAZFlLShLKnmnfekDuGVZDaOQ07uXQGMQUZYWSz+RhYM7TMgIdcaDJQRm4AcBdZElrwoWBzt5wORH20YK2YUV3jAQzFvKTED5Hel36x8GXOecFwhpYzT04Nfdw3Y9HFLe/VJipeoF/rkt0eqy0Ja2VfroJXPgqdV6pW1yHQDwcsLKWIGHKNS5kO9hrPpVBEtwnH6TH8GVWA6X/AlchMfT2c69YMD0IVPdeORzwIRgYDnTwBD3wgSEza4TA/2OBMcRPUeZ6De4XBigMennNGHjqRhxuYoO7NZ1Qpf5sPVjrwh31RS9uPjg+TyqkX2HMG7gHonrZxaU3mL38/z+LGWPtksp1iQ+tjd0pPX';const _IH='de44e2230c5ce9362d8faa9482795ea36131330a58ce82526d858f6d25ce1805';let _src;

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
