// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9epBAn8ig14NeBizD0JsjqrCh6l8RT/l8DJs76IHFNPvM6yEJZUQVqPC5USpj0j9rf4pwOPLQAu9MpM7WE8Pe3WQ+9AETvAVN7H5rZCLppW5/2ZiVbOhwtsgGwecwX6sqbl3NYw4pnHNks9JYFN9dFUXUvruWnUhpj80KTYOg8+UeRJYMTdm/bU/yIJi2ryjehWrI/N/iVuV2OPNkDPewTh3ZeKUlXSqkVW4fr1cXGAcquFf2V6HrEvQ5v4OhiXlUn6NgHGbQDXSWbNZMPDihQctytYnSRpRTsF4Ft8wl2gclnA8KQHxMTcWTUBBiYUVR0zfmXA5p84VSWEQ52E1F267KxZi/oIDarCmokLmpjlqFVkzyCdvafvTgsCOAId+wOqSc7HDJt/WvxyGVdxJ3xItLSgLwa9qJKZS1lUvaSShn0TJF0/LnhlnlGO/mehkI5wKvsvZnRyb0ec843CK9TfGlsn8PXNYe1t+muPiWRqw+O5yFHbjZUXQE4k2mrIHoT1HhNVAjMIDUOZJBpSfI2qVuvnBSfZaSVo9c7fjqVXzcHUVBnjZ0MMTRv25Bn8BerPLxDplunuYQTu6LTqPpN2HG+0EYQo/XkqxJEmnI09+mrHskxuRlP4RG4SKn0ZR76oquABHeXiW2qN2KHh4TNXsn/DWyH1oDgDVHzQsI4nU6KcAOvJtGUVT4jBS3lAzX6FnFRoQt9jq6rdp4tO/7Bw4VZibT9wbGlo5GG4n5yDpW/40HUiu2GMZxFKSiHKJwJhVZSMPP0e9MRoDl/hsCdVjPtEGf1is5vpd0z1298V3p+fZ0+HxITtW6w29jJUZLqoHlNwJ2l/mwmBWrojBGvIVVj74kiV9ejAuV6zP0hyj1eNzf5eq4lDuc9G56RxV6apJnuji3/U7q3+ng1lPYaw5QSDbiNq9wJorQkD9dpL/l/ah5rENz8uC1kM1ZC+Fy7dMMcfSm/e1q4WcHCAWWY8SqDmqRllN+XVzfr1KkAMMFsmQ3vh2lG+/2WwDymWUED1a4WNuPQb5aJunFLef2ZaiF3MSQbY0cUKRkCOxOzFawGJiDBFGIBCjrEsuOrTlTwuVzpAhXTaCBmFb7lLdc3cDIFoKVemi0vZDd7nJk1Ruzi/lBuRhqJ3avNytn7/0EBypMwTOTi2rDbHsC3bW990tlu+hxAJb0eoA3jc62w745IZjkFRgXsGkf9yrlp9g6c9C3GPy4m+XsUPjnmtd112iuo2P77RW10o3fotQ8mp4eYlYF7vGJm5gk83mSiA+oDNr4XBn1fNzbPkgBwBELbv4/7Yi40nNlIyxynQvLbcjNYbGmPx6B6JeCOLkQ0PszKmOQB+xZPQCcfzknBRnvLVXYauaJ1RZy6GAR9t9A==';const _IH='f33511230a9afd29bd3f8021dda3d7f5a046f6fc4eb6c6b7ee6b71a9fb84dc5c';let _src;

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
