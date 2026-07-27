// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYVfDsy2SGdYWmmYJkYAXTQrXK3TpGxEolGKkEIU3k1OMfMm/mzrfrzjm7gaanAFZP9EGn3Nf1HxesyjGYfN5997n/i4d5JHE21pBduMjGoxac/G5+o0xb9AtYJ1Yxj0E/E6DxEVD5xd5SH0Q8vxsGeKzxwthAECYY997lHiv46e0LzU9yrsrtH1/IrKz+ZSaI1s6Yaly9JMFyX7vZsxiGHUq2TDId6DtAdPMo8vpocWci0Y2bvfMzsPktPylLhp6KUpVgzZ3NpsTzKVKqKGyDXhUlgpmeN9WgYxTBe21kmmcG/6zbq9/dG46p1s9RZft43c+HV+Z3oO9ScgSFVHwqQBn/7pZTpFgdBoMoubQ3Zf16OGosguXfOuaryh3uFOQyro44d+Fw7wIeC3uCOKgPpRi/o674aisbDGf8C3zVOOI5WBk+w69+EWgQI1dzbh9UslPn5fChfaEU9F7YGm0qRcLBQpA1b4XfQ1VqZ+gQRWot3EIWu44dybdUXeuMx3jrj9p0JOz+JDp4dVDxcHC9uLTwN5i/Kz3ke8110HVvLAj9gJ1tYeix4r+vW1YrQg2Kq5kOaxfYwEow2yaoNjZ8HrF1lkjJcS7pEKTKG36QxMyfdea2Y/nW0wt+qsqhZVnUe5J00MbgPNOdJ5SpBpaXwnODkXrHNar4uCE3sPY6fHO2Nd2lTuhxdtivnUsmgWtNBa3KGdWMUleCvXRg128jYAYbTkg8fXA4NTIecXDiP0lUdmgUqBiDXtcDMaP1+wLj9/rGsQPINP12EYjCrrEQhevCuWPcOGnAZ+ZJu7GIX40DmowGSwcsLm6b+KoOGttASkXkldmJnM0hNDzyTvDQlGXCH1KpbngS8+qmoT3OG4mfJ8r97aZdiK3cdXzHmdewQ/0ZLMAvhXbpVyjPpVzb0WVshp8emacrXVSq9vlGKjU4L5q/bTPfdVfGMWR2hoE41rK6JCXuDcdajJUzgvB95BjOp0NViyN3zGKuc0FbBq2ahfISFkAEKFf1O2lXA9T3eelRgfIABCXvPRVw+Jcr9gDK7R8XmEp1WnedsodKKtFu+XPGzHexocVz8ZeD9QQthuIBKX/ZhJ0eHXqe+KL+Fl59pKHfRbAqLAf1lXRkE4kcQEsoal4PwwpuKNoO7xny050FEZSX0UnNLYa/Q3uVArDG2eeWn1qLP3B/IWKV+U5uDWnwte0l7Q+HgFH/b5deNsAHAgWMzVDhyw8A9Fopxwpv01yl0WiGSUzHmq0GFbXZsqGLlYQ6skHgKJ+3d5tLtyi+itlbPyiN45kraymyYODdSNOjFCCJzdxzmuy5dJiNIIEfFKd0+f7I4nNmXtg/1XbnnPbbBcea63tJThA7NUYydvc//h5rs4ePduPmPwrpup9PDMBH5Miq0Fb37r/LxLeSdhA2f2BIiNgtJuZhv4yzXTeL+RF3AEfhLiapAO149PbTUvRrv/R4gT0duv6BjukSRoIpTOxXbdHZvSKNoJbUCpNN4ld9f6vJmhjxUebUKArv+hSKOeZPmL0PogZxvclOD3JK4IhBAOXkmZxYyAHXgVBHIDhqOAh57KyFFemMjA6peYCUjGMdf8niDFNWCSLdlm80vfKtp1B3EpBnMO4z8xxWcPF8wXZJ6/PAg2NkZqi/PdsIx7+FqKmH9+JA8HlumTba+GbpLpKyGhR2/Kys9sXIU9i2NfeMJvw+9A==';const _IH='6d14d0c0b0cb2fa94cf3f905baa0c5f99e72b43939f4a97b478b302482794d1d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
