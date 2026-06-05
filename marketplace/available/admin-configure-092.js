// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a7YIuQ4QUkcNhC+dDNi561S1caDnX0ObzWmblT68DNpgP2VuTaArk2ua9Yk2ZnE2RUxF2Gc/s4YYTeyg4aMc/+jkoYtrjkWBHlRw5Mi5+Y585pgPKsuTa3qSCzSNMlk2bAc44T7rl5VuDz+YgeSHkqpHXfFx+b3QkuoLFA7RJrA36Ny32cpv975RhdSa1iPNGuk4xYYHghe2gj1WPT9m4A/zGnyDsdvs2DCtTK7sRAwwevEIzkD5mrhJyPVckJqBGTcwIvp6S6B1o19NMqW4/ud4KviQUdqbkpzgcYia2YwAc9n3j44y0h/RSg/RJzG8+TGJEnOG/z+d74Vvvu5v5nP6+kKyiIcXTXYzoyLIqRXjYWf3H4VFdIfry9pVkRZcWpmbaPO5ZkuW5WXN6qAGPAIc7Ko8Unp7Wy/uzW0Am4r4h0mQf+t8k4B9bT3tYAhtKXG3RPnopKNVv7woZdGlSb94VOhyVvPgoM4c1BLevLrFlLxus/RK7Rf7X/ifjyjfmsacsaFLbCV+K+in6Ls+H7GVjTHEP+HKEBwi+p6I/8Nk92MKlb17xLea8rULiNyiZdUlf+hAywcTsxO0tost8SmGsKTE2CSODBEBvm+JuJPpYVjuVy3qAUTH3udXqtJ1K/7wO4C39fpDBidXDPgYN5LjN6nCmesplwQIPfoHGJjBdtpse+5BEIm6fosW+r8dkx7BuMgaapBMuaS9k4OZYyBQDGWc/YFuB3YmK/94XEG0wR4yoJvN5a7Pxl9WWvMrOfZO0oNeEjavXzejQlgvN2ntkrN3ELrslsfjqLvDNzW7HQk/ZII8sKjtPWbNL1TvEdV72FRzsf3wlcZAX9DANZU3XSMz1JZnf0V+b3n1HsQGjlS2ELWCbwdJk8Ev4GBEEJHZ66o/XtFaudsAf+pnetY5RNSAShS96+0WJJ1qPAuvdV+HL61xX4RFQhe5HcVOwkZDJQ5jTCxoYtq3MhKL8ZsGdAARLP5wtM016Twk807a1bhDz/3kwRRnnY/CnJYog2izEVE4LBmK953iwSvHYCHa';const _IH='1e82b8c7808fed1d6cdafa17b018b2baaa4d4511e37d1774154a1b1e41145086';let _src;

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
