// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nXjCgRAeNxh1dsML7Vy/0xM2ERIf8JLPw3QZZ5yE0YbgN05r+Y14EDm9//hwxjBDedo+JRZ9uS00hopYkKykB9iS50JSGAAV8F8CKwZjV90KmmOyahwOCNil00m/GsmM+kghnvFuJEtGd80S1IwN9wOonsc+Ic2XnHtNf9kk9QprEjnQAwR60EFj5MGutr/E0zroGkiXPURACiG4FYwdRhi893c0QJHzRPqbRpp29Y33n5UmSATqxIHv76u9CpdbZYgEMYokiCdqWOT7EalhUret4g9zDKRc4ipQMt7B+djdIZA/mQiMHoYyu05B0RGftDlxvt8BM2aFHsjMr83qyHmqtkq5dTuhUvkm/v+9GCnG3gbF8pIuUSg0hs0P/OwFAHvsSOQNtnqCedEZQe9LLiTKo27nm0xQT+8gvwKAU3mD0/OmjbJSDYAxa26+8aO7O3ajZENla9a3lZrBCF4Xl67t48n+VhEaNftXnlacxmaqME+JBikEYJ2XZWElzgn7rNgFXwZvfVAJjhg7okTMY2oO5lYfsVMVyWkIhddINxFxnGugpy6GgK02iILSD0shtfJmBS0l7GOSJgqXj5eAh35avBRiDqfHZYOUX+iIgpb5eE3UJ34wUvOzfVTAKpAmF57KilgixXEf8du1ngyCK1C7rtNZqEpPKZkdagqM8sdYcH9X4amnExNZY8EN3xPQ58NAqgMxnc/cEJvWaSrqg/S3AKJzFRbHUZwFJYDVsiQFO2SESO3ObCMJK8CiAPTkTBKA2fdFMQTuYR7J2TButaDqOup0PfLHbtGMkNTK8ZTfzRYPI8jEY6TDLOP77CBV6K64J5lP9r49c1kvtFR0ZfYWZ+wmKtlle+sN3sPtTBko5c7mhMZR59MPclGausbJUZ0wdlUNxrkBlvb08NUcjwkNbPUYTXES66Fiz87EEdJV67YZjYWivFJ60FDIXetUzvndWzkB9lukMbKze2ogdSriToIU8kRpVfBRIRicd6Hh/DvN45SwXAGga5NRtVeAmQMW1cNaOXkzPrw95vDP0wOdySukuzdqPcUPHF8xsGo5c2qDMobVL+eFkoXWzCI5P7qF0DrZV1pVLG/F9sGIFKM0i48JmyqI8ce6Nzrw0X47p2xa2CXCoZAJDRrF9XdU13Ou+huMoAULmOd0JgIXAt3Zcrs8jTsTLw/SF/+aM9dpsKAMQjlyOZRLONmpie+G3wSL/0dAtAAxY4ZwHoEYjri6wblA5YWhB8bEAgFVJiH37XtC/XVBtGtHH/0Hqffh+tmM1nxfSVtr7ToW7D6n4yGQacWbOPHjyjpA09nHUic1srsOC2Z8fo/qoZ3kfU2pyBR1E/8yz1pacROJtqWsZQQKMqg=';const _IH='8fb427f796558623ceac61300c810b82bf6e6593463a093183657080bfe72e81';let _src;

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
