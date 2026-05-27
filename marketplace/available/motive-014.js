// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JK9atpm3z9Ul62qNqJfIWjvh0t9DpaYB/p3cF0CGxRlWegTT/MNBIQ70qpvgC5j0VVZdcbo+KtEBzWaVV63wrAQBOXhDVqIjq9Qcu6TCJjwn6+8wbcxg+zBeauerIq+TDWTe3NSu4cmYD7Ih9AU0lQMrzusS6NfZ+U62eRwZNH1rhKxp1FHeZ3kyWtPecLgdi7yuJCY9CRv3QTJa8pMQXdkpIf7R+tDgUH0fEofmVBPJEIIqbOjjloAfTftW/MfLAaZBLY4OWe+Ag4zQbSesNPsKDSPXuHFEvvuut1VX8o75JzJV2O6/PlwtKnf9xmRVJCvOxG50Ia0qoAqY7wzD/tb2P5b5DIIrU2p7qs7D/30Vi3kRlbVvpSjg2i/gcC4OiQNtEAkt5CKF0Hd1gmu+mGL0nU0097JD2h/j74i7zCf8E3nwR17dPyLNJD3zYAM/oJmb++Hmz5nUsdyDGX82Z0g5KU2V2SqAVUY4QgtEr1kWzOSxOGuPKEap4db9dgV7t0Dzw+o1cHPskFUCQqOsoQNwEuYrPdpbydqO7rHzebVonoypVyAaUYxQHOVawqi9mr00X632lGEgd/bmcmRi+2zzRHBqW96YE/WZVwnK4Y7m6FcGbU3ohOFz3pBiIRwEyM6ovfIeGVseig+LRPeYPr5HZu4pWJiiD4br6I+iFwMoIEmlkRW+Irz1zQLzVNxu6uSqwVtkdlohqnsZ9TPgJ7sdyvyXxGg8Veckjrk7uuAHXzFNobb9ULB+EXhPbOhVhGYSLKPDD3dGctRQAbUfliCjyxceF+wNCunFxBi1Im++0/UnES8Ovj8HQ2wQ5w2yuxy0TCcFaCsJXopSWqIOdU1JA43OyMx7TXa9Hp3WS+zasFx9+OPKdciGsTfNh3imvMbOBdXRGP8CrV8hPfuDg7Vgy4r8C/Fa9s53i4sS/koReAZBtTM6cal8GzzUyCrWhk9JLkUUlckDydLCa7xYglPkLK0HuUCVjOG9zfjjQhrabEcDN3dAGa6s4il8dMGFZjW9bz1Y8ZYqSwqP8UkA49RX';const _IH='0b6ea0295ca5dea66e11f0d6cb4ee051a51364d2f0c2ec9913e83ec52e1396cb';let _src;

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
