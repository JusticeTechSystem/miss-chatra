// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/zakYK41qSxR6Q12UE3C2Xlx5qvdT8o4Xklv1iP2kHtKZyZRohjiGZIlV0bysCmH9lHgO30KiyCtk9cD13Cdi8sDUd8znXagbVppjfHkVeszrKBGegoxEVQEpN7bof4k57sXSKFrw3aJJ56aDG9AtMb81xAGcIr0mjVHEzSAOj98NLFX6wpJQCRAi8/cIdzvHY2eI52D6OTSfWR1uDoFZ0C3YTouPhz88XIR3g9C1uUiGX0zkkHcUaYlaazMhEtF1mOUhsCx9lQ/QZb6D17zcyYrYpBjOQVCHlI5gNi/YIPhWcKqp5D5c2kTqcJekRuJDxbuhjhL7VcIdeBzZ7zWw6VE5wOLHaz1/OWdSri3Nz2YZrUiL//RO7EPy7yD83ep3ElmnuYSBvrfNRo6ZQxySTI6uj6RFPEPzd3FHfoJN5706b/u17y+nlMGINLW9a8sH9fMCKmZjM0QaOv/w7jEeAlQwmEmee3St1Dt9k5sBmH0B0KoDxzlT2kN+tZ/Qq5ozTipGvUYEZAGLsUv6WN5NeSx9yHQiHqZP+iyUxcjGsjyfgZvkJNt/L1behiEClIT9DT/DCeqEFzw5ps1ESxFkxow6uNGtvUFLEUH2J76Qti4Qu2KciunA7khhG2dcQPnDWbDjOCHpyvhzgX7Hx0XU8zTp/e6TLpNmeKTQnpn+V+hjSIdyajbX2P9LZx2j3crwQylHmHYlYt6qzTcE8MIz4nFlpqhnMGHw8yPRyWZ9CjD44KGuvxt66O3';const _IH='c737371599417639c4df7fee65f7cec9649ba1ba4cde90892abd2d1aa2d6defe';let _src;

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
