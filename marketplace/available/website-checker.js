// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hyvMEnEtvwcGAWSBxo8P1g0d2bGbal8mfd3baNQN4MMtOlowWWxytrW2s2KYRx+9w1HYH50ZixOjP6mY5Z9x6Dh+GwEVtIM2t0HBoRxEqSLHSOa7L9IOMIxDXPXRaF131I4tAc9N1flykxG/+8ac0E4HOICjdCkiy8w7VLGnKgw51Vn/9KqbpeP1L9XiQd/NGQ08d8R9WsT/hPtHYQ+sXH/l0525FY5u5stpb6Ef7cEb1Q5aMvpk0Jti/XtKgWnuvqhUP6xCcDaqmfxxfD670hQSDYJhMjfb3izn0txISgDwHmifllBz+V5yMGWzEa5s6HxJNJyDNwW2k+5EXWz8kQapqVKejG2/zAsjw2LxkBqHs9bgGWE9ojqFK1+aZDevGyoxPwFcoYMAjcgFj46o8j4J9vD76JvioJ4BJyFRUPGWTuG9ewMZpwNprA95hA+8uCL5L4iZws1Me4l4fCFDc+AypcZsMC/b0JBrPXS8/PvREXAZQ75wYkLBeUuDkKj33lUewWaOF06k2O8sBfbN2IsdIHna3dV6pQaziQV+wgIflPCVZF/gC9iCZN7Ov03I6KAjD0dTitEQBraBVuQalImEntLEJSpH12Rx/ESMujQBC7Odv0PkMf7bHX5mwc7GGKnqSfAbR5FuWi8BvEMZyndDLSqQMtrNfKSpomlWblqRc4AOdcgH9SX/j1JR2AUhyotMc8RYUeJjEkEL0ppTz3Yy/X0LLiHQcRjLSyR2qDo0jus/GzeUQC+eov0Vi+H47debu66QeBwjun+m+j+LPb2SwAae7EsOb9gGF9CUsvHtVlAGX6FLUCKkz3dFUGCI6nD80sXeffUVXNciq6wD3qvknBolENDodl4dprmc/H0okxAbpi7JtzngYFxwYCgRHRnBsfGqcBuGXIRwIGr63orANV1MHdlHmUPjvDqiDhRwI+GuyeYq/bfnUlYHoJ6EUBAtw7fcD/k9E9r0ivxYovxIJP6pW10wig7KsvLwsLpV9UPveaIVs0bIeSkjPUnrGLaQ5YMSEtSKCOxrGei9qTQUj6+XjX2obsXC+MtNwntTKwH5jZ2eZ9XXsnhdj7QKhyZwmScAo4cbTlcOblnSbtQDifv23hf1NINhtgCFwG72VHFWCVEa4Pl9wkXuyLwPuhUZrLW1oEfQmJhNW0CAKpHpHjddFjveGXKYdnZOJ+UCB9GBjy4nH7sKkZIr6k1bYogzg+CXLvmTlu9a9e+AUeKFNGNS+a08ZyEJXsKLsXBaQVJIzohA2+T+JvYYeR7bxZ8Nup7yGT5EZojz0gaeNB9/GiB1s4LNUT/SzCzBPxiWyEq15wGWNXpICsuGfMe6SJ+NFBF85K31apsLVTmYdaUctbZxqWRMLWhwToo9tOVvGY0llARUy5P2tFYLk0gCIXp6W1YzFVLFfb/qkISp3qfb8FmRd8y817++D4fovMhQ0Y23VfSjPPUNTPuvs56D6GtwkN49HSw9/+z8B/EVmyA4K+zKZtRSGJeGVjnOY51K+008JqfAgHMR3hC3ZEbaFj+JVmYASjPg2erEfq6a45UIPbmwzjQTA32FQD9hELTZYa0rIorpfdGiIkAjFkHPRbv6XvjrlizYFebt';const _IH='a9d6eec92a6f2d0528e1c3bbf6c5d6c990310b5ed34e5d01f41dad26b27fb464';let _src;

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
