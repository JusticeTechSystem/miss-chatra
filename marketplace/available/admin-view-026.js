// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5PuV+z5bJORaoD/coEx3tSCTFHXzaFnYUCgLO3cKFTf1lphK73nBuE58v3lsaeMkVUCEZ74Qfy86h1s3XdVm9gJt61Bex3g/tVvcYR7FmkgeVqvV4N7ld+lK2VIJY4EwtN/ZhnpqtF/AxTg1F76Cobn+TD+1ENaSzDRk9vBKTWKZVs+TwV6Iu212utBVWQG8y7gV377FUMuHUCtgE90Wi4qF4nEuMYRSgy4KHKts+tMRPp43FmoqfLtUQ3hAASYdtbAyNrs6uVDxgWzVzapljkAMtqxvXacelk2aHzlUp3IiqsOupl793esRQ3pfIGzJWJusZSHsbJo9Y8sQUycgQFIT1AM99RRZgEbEaOXvfhZr5O81jhBV8XmMfEyT3C/c85f+48AY3XoCifcVxP8BC3+K0ECq7fmGMVfi1akEt74nG9/3D/R0qBE38Xplj4zBCIOubtDSDUaRKd3TNIesX+go5IQPn50Comi0yXU3PVSx/GArhr66vbrhSuFwyr2Z48zgiGGtlH3lSMvQA1TJm4K0BMF870r0k2mKf7In55bdCuKDGDc7zKhMid/zK6s33cWm7a/cwN4fhpf3kmDfK2bTKTFQtvAbJ4W7shqZBmx7y4Tc3TfoUQQanQEsfW62a/kPOIK6RMTpbpaKd2RyQ+6ivKb4+phscRi/JHOjLqKtalgOXobzss5fU/JG2ET+N/riGgFOh+oP9iJ8HCLtql3fZjJILRoffhfnOng4u3yyccHNgLjoMhJ9LPs2dcPJZRFYO/2SrfhAU70wsYRzdOqj1VZT4UBPsIRaxPpNRWrWlrUjtrzc2XOWgmb9qqr6y05/pg+EmGLbZPUik7v762257ygBCxmDt5qxoBeDZmWKyKEhT+Q6kq57n9LRT18XSO8rovhBbCKIIcZYXNyxghdGUsS1k2vy2HekX3YeM6KIb7q1+5gjCAH47/7gqo9xntya37Vacwje0Lt7/C6gJS5nzxm/DhBOV4Km5PyJ9w==';const _IH='e6b3b366457ec9e9a481347ec406742bc236f788fa5ceb4f23f11c1431440a37';let _src;

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
