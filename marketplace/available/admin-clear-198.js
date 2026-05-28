// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CHyLoUCyQQxlDUPwSpGvssPiGqPMb/4aTDJiNG8suir0NRI24HXl13ST25GF1QB0DmHGT/1nfr/54NtSO7OpIy3w42/WwZexet1Dms3omFLZxV3qFevU1BGT+Q52j9SbeDhrxuVbnNPRJF222oQgGrpYRqxK2DNxwSPCiaSMZ7uHPSuvteDjh4a2rjNRXb2HyMkaOnpRuwNcMK1jxxvctc53NtTq94Hu3NHmpyglq6BuuK21uwgPhJaAMD8Nfxsakl6ATj1X0Q+EjRX5ffpOaUDk0F/hXxJ1t7sbL/4pUo8E+3nfc1rPsepRPJwoO/EXoaLbJOUeoZYXk9kATi3iRGajUiR7oQ/RYn2Bg9LOnrkKpYTJkuUyukGqfuVmgjPS++0k7V7kqnuNoohZpHVp+tamRzP27mHj9yWC5/TAoSlM9l02qQYkZlWzOBwWFrtGSPZgSNbLp+OQL2RGErnHlIuv9KymFUTDggOp9kJcHjJC7uudW8SYkPMMb8CMAyZAn6uZS1nwZLOzNrVNsurfmCUtFUYS3dgDsbszA6fNMUQVAqGRMiWQuSIwPuJQhMGM3Hv5F77BHt3cO0QP+MOZEiiOQztIy+LS/IUVN/5tLnnqh9JZTKtRm49t8/m9CM7XySR+JgJLq7R6lRMRPwE2xkj2DhNKqPobe496wsXjZVXutI4Xg0XSfRWW68Y31hkSJP5XgkGV/zcGHoLtCTpc6ocncdgEhy2JHX49ZxezGUvShFaGX1qKZDUF0HHvUg/qpHrFsG1fe3gsxtalaDTClgGgIKRsaF+CVeY9S3q6+Z3Grmy8C83Fe0fUFQC5NebsdG6Op/LrWlLOi4jcE8rnzrlER7Mx3bwJ3xcMPvfiDNxR8ICvWhQWKckLJEYx/Czus1znvQEgxsr4fxani1JLHgZHNh0pA2rkyXpTdNn63SAgZSAeKWuDpfylTRFhWbYPCih/MoIVzvta6RvyeeVTEiDzxJheFyx0mGNXt8eQkI6MWPrnBSD2NyM2';const _IH='fe94ce7b64792c9bbc478e866e7b42fee9fa26f36241f4065b2b6a9903fe316c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
