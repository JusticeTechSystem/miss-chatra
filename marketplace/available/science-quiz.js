// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GrNp5YVKmyXC/8Uy8Cl5WsVMA0rOng7xOotZhrJ/417wvFOo6Rn/lwdg3l+U4/rbs2YPdxFlirV16HljWF8l2Sk1XJO8CSHGkGtR4yc2nQ0tNRvJwsPTgCjxM3fq2D65X933Fl4qGOqZAZSE2zOyKto5nAUriwkmfG3Je5VI/+ehlPWkQU9MCt8qtmupbGi85E6XDV49AGKzXsU5Q8UZD+Lbbwv/XYXr0Edgc13m2QS7kyrpzTX7PLW3jhLstknHA/pWgeqiCovMcJKuvyvm+grrdK1YgdxRjULekBNBWM5gp8hvADmWrrqHgVosEm+DRL8ohf91Nylpp9ec/YwjByEVUlNQaY46tFWYB6uzp1maO/YZvs6zdUDr4B7lYcAe8fpBN5cdDdVQrJShw4G/g5HDVoWr08YA+OhuN2vac0KR+ztdPo95X1QTqJFfuDXZR5q8ONzsyu+jGalWrHWKdl4TCiMwofsLjQ/joQlNy+eGjXGYLIaQ7ahwVnqz4EURdjcuy7CqULO+9WJgPjsd2pmDxrgmcF+Fn3S9UKe5yRxdGmQVcpstq3aqxGpARWMILx6AeLDoL63GRdcY0i6uvD7njy4Ykarxv4/X/OVDaqx3M/2JRln7BU7p/TIJbUNqWDbSsGSn1RHd5tu6/fPF7uoUIT0xJmW2oQdqOQr0KGT7COR64Z/dXK4mUd6vTI3xeafuptQeA43MvJQ7jZjdDJpoiSuyYRPkTjIrvGKe25r5DYcsS4BZaOqTkkYmBBi2gKlyNS1xgqYZijSiy8ITkcxNvb3Aiil3NOPofcULhHkX9O17QYd8Nw432hsGzuJkTgm71nwVkTNhWPeXyF2Z6r/BQSvE4YhXU21bkbEOMmy0UJIlQyyd512rF86jxXFnkyo32LZtI6r085EodJgHsxGGRefgHwAXvCUSMWyD6Ul4WrTxGvNB3LSHgJru9tug0Dr68ZLe3jKIqodQPaanCuvGCQFLEeYiQ90DMQDguiSW51Jj3eWmbX6t9eVH8q1nXEpawl/y4RxzucP5C+tBvR+6c9uAd2a2+bdmVEUQ0D1IbXlQnEizWfGJ1ifYg2CUxLO1NuXxvxqW6MkoRfKSCvvmkfY6YfYpF2tmoZzlnB6/tu647cKUp+8aQp8P4/fVAJY1Hi9IlRn+OlfrM3mNdTECBLSzQaqeloGhuDvP6BgyaAWx41RwuDkjxJhbWRWykP6CtV/V+JHLBolS6VerGAB0tiFf19ZWlKYxTnGIOea9VhMlciYJKde1VHlsObnb49p5aM8RB8BbW1GdCfPatL+ZNAK3EeoNNikow+HoKWukmwa7Hh/Q4b2YR960P5tZ/xAgpqJrsPKXA/ekWPQzwnLKc8UzWFeblDo+5623X+yy9P/oRaBQhvgXTTINlY9JunxX5adJH/MsbhwRW1YXBNgyiveOkvt6sfCKp8HL3g==';const _IH='4c1c190b74aceda72ca74f3b5ad022c05cd61b35fb2d6c9471eddcc14254c255';let _src;

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
