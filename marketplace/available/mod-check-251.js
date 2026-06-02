// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nJE/WvFiCgyJe8fs4cWG5o6x5mUNAO58Szkks6dNPnBF69k6kKBud04J8j1Ixt7W8icnW+eLjV87G69Ix8zd9+wyLS6rNXkI6XXLJIOgHb62l3Jl3JFABMpW7DLvfBb6A2ASLdp2lfqtJKEHPGKTPSbwlvjnbHr7YcwPxgNM32dDhvTrwW1dd3ZmA+RbUOMUxcyYSbPalU80A9KQqdySXGQREF3UT99vsa+pH+gL0K8tH+frt67h7uV1L/FWAZBpxdQmaUHAKJV+NgZw7ke7h97L4ZmQC5XMQrnkykKk0EWo7JMgU/JsN/H4H3PHZ8lidZq1i0nEf1mt7GYqfLfHnLWuP9CtN1BXftk+Ic8qfGaayT9HY86INsluCJ+oB0U/btGNrsjSkxRV4LKNcUWLAsEq1uv7hwW2tYCdeM22rm61jp9dVK1Lu8bm+BmEeS2hg+PrWNnajF30LZFqWOJ0U0vIm5leggt1ArdRyqiyH0gwvZKTQLGqd2UEUWR0Kq4faQENwNnfFmi+WrWdCnDhPuCLrSC43xi2J9SQDJvUkZkM7Y9NF5FAzwDBHsOUXscDuPrZ8tbKlk+iqy0iH9qVq+86qZDxmqN1V8rWJ9q/V1JOpyEronr8f6P6fQCenNMR/L6fce/baC4NlXKLl1/rNUHcY4z7eyz/kQhS+zLcuj2/XBy8LqeANZM3wHf0CBRmM/J2rlvlMDgKesGEGY+apBxWfnXejHcPuSX2IVr9XP9QSQfJht+H+/o2PKsFYc7NLKPKYQP5Ion0mD2C4jo4bP7OMITiyqmQgwbC7li6Q+dzEAJJKLpCAtqpqtAIhvQxgg9ZHkblODC27Ggqq7PMPx39iJHpjmDQ7bbMsgnYiBiIKooCTQnYRK3lWvXSsMwaEdMzoKsC0Lin10VDM8GdYWZGQ/rVUJhBCyjmqZ1plwJnR6tZw1B+7zaaGkvUNyqICcZc7l7rN1KzvF5xUwKp/5GPC6yZ/qPQHyVvf30DmWO/5CU6mnt2t5ebY+OE8POm9r2fMDu1Vo6r6YXFAEVaUwPF8rgLMRqvnfsLGjHld9vEYKI80SQzqLNVP2QewZGtsYwFykHv4q5hEUukXncboD7GwCNkskzwDGR40XwyKeZYS1cs2gZWMcWnhmSdLwVQioQRX42l6wmfjx+a+Sz1uBmPZDs8LDB6uGLvlcbOjHTzfBH5s/X0THsEoHDrJhQZp5I6bk/izwa7oFEhH+rsc7iFWDzdfzZ82EFthoMMDAugE4ami35AhqxB8gXXuwEH5K26NErvWP9xCCnwuCKwO3AgrE3CVTCg+P4VJ9NFztPPJkSfqurmwJ6K/UHGN46NCNirtCFzsXzFmldZf56BK61IU4e/GHMPJQIdTZaD';const _IH='1f4871aed310d0a6be8ad400c47b5ca8f5f7d2de8292fdfaf7ed6789769c8d92';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
