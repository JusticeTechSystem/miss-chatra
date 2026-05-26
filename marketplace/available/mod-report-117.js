// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YInSKWaxwNJMrLR9ZmHPXb0cmH5Cq0E624GM+vt5gaUwCBCcv1dM5tr63mow2RtNbSxzrdzqX2WE85EzIbsw6ho695Fdk6uUdP4Fl8DKa/NK/iyNsQ9mObgjReLT0ZYIBJRhHfBRdFgSYm0VfhxKCKrnLs4uRqGuS+EniOD06R6xL6H3NMaESahFiW/xZcrUkigANoGf3hhPtMC103G3tiYQjszHX/6dMtdCLTqeIiRTR9iYtic+rGjQ0/viACEZbAF2fVlf53YErB4VlYkq1hSBiex8aLN/lYdal6ogJucvwHd17lVf1sUEJAk+hiS5oju1TF10KLKP4cmB02UYbn4+o/lrHxykXfk4tEDQUE6QdG5HJT/hUyb9nPeo8Q8mQLBxO72wPyY4xW+81jXK9t0uhCVlwHRp8bcm1Ci/7jGDd0sDZDhMTVPGsLzNqWR7Nij6N/YNAguGGFssy3L0r7xZ9Ny3FkEtdiPtvtNwAUOgroLTrIcX/7tJv/GMhVYhGsUAdwZYEqfVrr8pz9CGOYBJ6+pr6tFPjU3e7BUE1VQI/MhgaVOsu6mw9LbUlrq+v/LdS++WGizs359edBQaE8wsjYJnpHEZ9Xnr8klHAbiQXT1iN45lMdrDY9AJwoxxAzOdm1fpY5MRwzVWWea6wCdVm5WUkN304nEVE5muR8DItjZVY4B+c2F44KwN3pe0uqAj0Ee/9zdAIq4T47kCaCEyquLYbh1HU8QNzJVhz9ilbd3SINPR8i9zi+D0Sc+0P2QlOSnnOJWJwJRSOWxvAQqZVOvETUW+s3GYy4u5LRJ0q93M+549u6TaE6a10p6c2+IBY16dKyM1eC95P2kehkoZMSVaE0L7ySm2J0tu07PIb+CaccMleZYdaZDjkaA3fBvkTFilLxt7txBKWZDwiMTGk0x+BnJdmo1v6L61q+BS33CevFMa+4OAIGXoKRLXXDIungb9LQBEvzIAH4h59Clr5DWzN5+j1W5Ir+PHsE87V8LRiIa/farqFUraq1mzkpUUFLOZWqsTh4roswD4D7QZ2+BIDBO2CSDQ4K33acL+g0DkPC4GXXdA3ZnE6piQ4BCOhpjNZARhMlyWt6JDctLw2w9JuQl2x6J1dfAIWmkBodopJrKKi3Y5fjuerD2WRz/g9/Ix2CJX1qWeHs18PHqp3Ox/ajs88xWbI5x372d8Zb5/OMWF+CQ/v27iYtlRTofV1kNWBfLHJkJAYq80Ie4wMHSyJdIsbExP+q8nRyG/YCnj58NbHU7ylLukVDX8d7KCwnIB1q12q4JOSQUUmJI8odlOo5mcFqOU4qHt0Rs5fHJGZu9G1GGoPk1jMxyYgx/Ln4T1ibKIo1eZaQIhydrm+QPO+DK7b7A2KhWA/AZVM8L2faO9pg==';const _IH='203d7100168c6c9b0f6e5f8da1cefac217fee44d60f02c03361ccb9c56e677ad';let _src;

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
