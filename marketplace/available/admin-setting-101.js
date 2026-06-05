// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xp/JhSa6hcyV58PgnLclnW52lXzrmF2/nZ5IKg9rRgjlUfkH2XU/vh8/kFIZGdME2TwcqV/eJCy3DDyuHa1wBJUbgfzEQ3JpBr7gGb7RWS+AOH4vJIWIivruv+8oP8GD5rIFqN+iylv/kQ0OMfAfj42vOhPe7982N/J/zB2t4xdvpWL3L5mB59jbO2/HdG2dJHVP+JEwt2HaxiR+S7vWRKO3pNvjVbXJPRYNgMa2bq4v/fkQAUHy/NVOvWQca3WkSkbSnvHJRp1e4j0vN8fbAhh0o2M+mCya+Fhh2N+vtD7adnL8A2BCpXMKfn43cItzMbWB5spB7V4qU1yXy7cYN+47QJCMJFLEEsL3OHTZCvCOhdThV1mIgkEL0jHd0QHjFPZ6j0guLHWXftyh6JE6Q/viG/Je+IYVYlHvz6FQehYkXEa5pArmQyCbEo0a1e+Ij7X9Gu8cUtTgSmNZmJyZ9FhqGoPIICd5sizkK+t4UHCkrXXHo6uZtBICCM14DrGnxZuSS8fxGz+IRAoQ0VsvNKxPsQWSsQ3FC8LUC+FAzGsez2K/BX9meC0F57to7glywLWP4BRCUNPhUXY6YT0nvA8uIBOH4tkIFldW4DFlKf6Cw6VO0Q6KX2DBNVJKP4qGM3EZJrq1Il8FKtNH1Hfe0HJA+q0h77G7y12VX7/pMlDr9TicIPypPqNat2GhdlVFZiOcFzfI8jIIfEsQjZYscWqFi8jPmp44bO6rEUOv+uBdva3rUkRPDZfS6ZtmHbSdrMmlKoNUlnaWjKIvJEY/R9Eg0AF3yVCGnwtcjOqT9ZA4Y0SC3O6jdJ2cjjD1eIApHGO8CWvN8MMW8gdyYtbyZwAkCEr/mQGvQ93w0hmm7XtO2gjbAm+6J7HKaHnEPT8ctYXCXgt+BQqMLWPGWh0u0wZrMS7S89DQ0ukm9CMplwU0j4fgDIyCHLc06xbq0oanOmXz9l8eQ28VHZnVPBK/AGK74tbdmJwmRs9tSNSJDLyM0CjYFEkQllh2rPWPXyZ3j4UT3N7Ccjs=';const _IH='68b5509ac763f5205f9f2882517cf22da743f49a4ff3e6c599b9019553f043fc';let _src;

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
