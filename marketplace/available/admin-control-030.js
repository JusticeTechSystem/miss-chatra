// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jESZaZqhXjMUKP7r9rO5VQattK8uRRisP9FtU3lBr1+yIJeDZWhxEeZqTmPWNm7qtvlzZgLI5ZvZH61qe8RABi7vUkUFMlCrbkW3aBvzO06LnEKGhxiRJKOdB2QP4zDpCoLHZgsSiAKF2ODfm7wRfSF8OXWRn+Ij0Spy9WJw8THQehX+ivdZRkxDZQF3oAtTlup8oAICjgVQSnGWKNTA2Fga210Ddv7KMH/3A4io57CPPLmUpbd1iFwoglTAJ+29Tj21Q/W2itYonzCZA9yUDA+GqFscf2k8uVxjhDSseBoXOND7jLOhvmM++IWAX+vvTZiAUgWyR7fSSNDTkKadC5Lg/DDwP+u4Ou5KfNDVAvKX99xdfp3bWZTUWBucF6iGVVYlYNNC9KVyO8wpP24Pel3fQOj0fa/HnlFm20Cetk0moLA0GFDQuCWbO0fsT7wi1kpzJ1Z4kcOTy2ZzsAFi+/ATIDHbcm0ihtQZ670jkYyzxKUfnoqX4BDTQOb7bYDNgVriMIfZIysl7WgdWeNPcyGc8w6EMpNuoYqvMKYiycRGWc6bJivXOiQ8JNip6iYwUqbT8sLv+GDuv/mwi3+4HjnRdUUBMGZhFCKX7zSKMfF6wkN4QMvqtHMD4bQTmyGUihmVNvH4maAudKGZxCWO+COK29jPUZsozzUEL/h7sgRdKLpoTu3TIe2C6uVgURI8bLlXlziduMkeFgHsJnwmGaJJEZHz2P4V9PN700Pr7sANhogveArXDkkkk7URARDxL2I/QTmF09wuvijgYPATNlUNkWPlvz8q3pKUz710nASMoT+9M/SfzgHE13Ttv7XJwq0r02GNzFP21RqXVwJNhTWmnDR9wOvXznr7Txz2Csr2xdis21jNmaRDMjCuON1feHKaHow96I2k1s8MEu9nh2YjDWVl3Z7H2SsSG2SHnqqifTZeGMUaiMvms4962+9yYoRSYE3ihaEeiAzT0xssDSRefpecFZokZyjrhwHDtUTLp4ll1Wx37HM9O3naTWS3AkSqKQ==';const _IH='7c0ff08b01f3582c22b137be958194af43ade943d0341940f0f2d12c2a9f2583';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
