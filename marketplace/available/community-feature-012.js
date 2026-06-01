// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4hZD9mdMb9hKpRvPUILWsOVGpPMnamfngmyQ/QkMLasZIr8UFJuEGEyiE2K2mtXLNaDt7f8U7G38c6zj4U+6/8mGVOHcietvWyElQrCYSynfQmHbshOO9JdZlgTApvpmqpyJtLfv1Fmp1qlfYyp2fLexvVyfeV5VcEAlKvNoLXlItQApjzh6DAdAkmjv2Cu6m8Gr0AEg3z2Sgo+yFUTnFIIkMYCmDKRy7978652dbLB7E/M/4P5WJ6KYIlh8ooX8SkaMOZAI+hVqG/3UfVBbBQzj58/gYo6sELSBaxSZqhaDkF9YNulz9Xdzw0XZ1wX1C7s67q+tbGIweC2rXfhXeG4zr0iu1IhaMJ72Gm37Mj5zwjnMV9J9CSH9LNtzT3+igzxxfLSGfz+FPk+LOQfPN0aNxVEjZQvymAWJwKvUkw6kQfoBl5DPVwTx+lmvqLXMMjCMa8KrEGhx6jZfFl/UQWIruuQPxwwt/EoPGzTSkdaaVQy6F1uSljgzNz/ZvYrvAbNpiNzg9TP3dMUqDUD6YMOS7Z5ebyA4xYJj92vmMelng9MMOV/Wi5YBW1qWHh10hhvR4rRWAtE4ey27xEiewvRMmUln1PfJSWeREbwrOBGuO8JndPjInawfdzAhGEu0+MN6IlxWZv5DoI6EzlYvY59eKbNxoFiJndCZn6Ind4dNTI4PtJCYmG3x+XHux9Sr4z4sIwthEUgfIZuO9OEsBsETTo6EvN7/H4sQSymDso=';const _IH='096c108f924b0016f5276367d69cbec2aaeb9bd3aa07d8d317df3eba8ac5a362';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
