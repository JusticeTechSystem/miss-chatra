// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2/wJeKKJtVc2ZbWzQqtWptRQwC6F7s6twfMph5ibgb/dVbX4bYfp5dR4AsqPSJsc3DC737gbMWU1uWDNaUJgk0co93Pibk2+sAkCARfh3SrPXdTJ/MYAhLzEksdI32XbjE8iC1zxuqnRXy4hUN/RBOpTNg0aynG60j5Qv8fxPWGvwM870u1MyhGtc9attVUPAgHNiUa2jAVbnSyfTofj9CQWRCsQELgJjUaJV/HLPA/z3hDQlj9m4c6JBzudyt7U7NNa8sAhZNEGiXW6rV4crfsYsV1P2LxSVm/1eKFQ5aDjfWiGhq0H+JZsRMr0L8BiRro7NUhibPR52pvXKHeUmeWc98jY2aeFd7jt1HpenFUUZ0BobgP+PnL9iIO5nyAXETYdcNW2ZSj95jU5PkP+yIWljDhO2LoDWfejZGPvEa1QQVK1JJZRXGyWAEp18BK3f5og+9TI7VtkEK1Kc6xzOViY6Jq6KNEauoOBaF2855/2NeaHWN2MOyo1fYVVFeagh9Ey9Jk7J8rxbhz7DC8Nx/eDUxtPnUx2YFFYbauFoM7Iie88RSnLUP7cQ0WF8wB+bwyoZlQhQSCTTIipcAtj9u47Rjzp6MV90o1f1gQLxtQk9027ECO3eEG+63QSIkntvVmzfW1Mn6jm27TwGR5/0qvkIGTxAMTBAS8gpYiGGzzCzSsZWhmtMeMKOdmjbzCKmbkIgCdI+TK8rjG8rU6NYkxNgBUnoIDV7KGlyiKvFrPEfNFDDx4vEOq+fsKZKuC6Ji6AM+RU6kw4TSXhoSFxM/MUGeaP4U3z/n8AtcPy016Xd9Dwpppi3F8W8+jFuRYwPkTVm00SJASE0/Xle2ZGTvKK+XAje/nNkrIH3MJ12fqlI4yPingF2DD+E5ewXnwocKjcKUO2jhFww8wNg6xBuJ68IR39qSW3YHnXzzB7q3S5tp6fx8nwBjrwbAJNlAAGV6VlNdTsEADaGwjEpajD5Qh9aK28TKW9Hg/xmre7mG8Y/mbhGN3UAOzoKGOvgLsYhmq2m/JVYG3bSc0obe92L+VHk/aM/YbPpIvdd0b/xJdNMNioCW+8rdhAFO3+JG+6uZuExT6Uf7C84P8GFT+vHDOf+KPZRGfg7vIQz8T8mJ6M5M5q6jBGn+Noys7GGbaQkdSgI9c8JIshdsf3y1FEi5zQ6WkTjcecYCP4/qK77zb3UB/1uThwwQCyEuqGvIZnSjBLnNvReO95qCSfUmt3lJV74/ZZXrmwC/Dcgs4QwCwO+UT1GkKiLqwiUWx6wCZrZJHwJCLvYJqaDutCTOSOpiH44muCn+wKEX4ZIQc764eZrf+ycbTZsu8fOU2xUSgDKNOx+cQ=';const _IH='af746c28494c34ccb945324db80df6f205e3a2e1e0e03246a7bf113e41523021';let _src;

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
