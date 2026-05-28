// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uJcULCqUbPaSuuGmm9XrH2NyomTX/dei2kpeLoiLb5AT8UkW/EPGlsioFKyHgIX+BDcJN+CzWJI5qHoILRzWk56G1iYjkeGbd3zxbHNBEl9vBfuZX37CFCwkrHu9ldSjkm3cD7nK/XcnQaPE6Tn0DiDMEaoTv1C1ximcxkWOh+A11bJJsYIiDUekcsh53mm388qHi6swrzX2/zQ3s0v+jw90SwsN5rYbdM3ce2Wbev4j6hudC2s5Ddy794OyaUZCxC2sK5si8J4wJL5S1FuZtYXXhFcpR7Le2rQ0qjB9tQFR4I2awAbHTsU64+6uFc5Lpl79OZKfYxlpAKXmvaCbzOqZsR7TDh2q2KN6xVRUtM4h4Wuzkop8yv+4Bp8pJdS0muHEyIge1wzrQ6xOVb4T32fLG0Hb6AyCfVm9k1/Yx2GZWDQPlbe7Ea+/mh3DdN2PiQNVDwf7VK6XnWqb/UYjSFTVrkMS8ecLOZASoNkTF+vqSwMwik995OtDvuE9l8d4iA6WVLs6kUt+8iPEwLRzMMuWVe6FirSPxW8AXKl8j2wc6PzK9R6b0/Zcf+gDF0x5HSPl3KtkcCrSGDb+mfDNFZRbH4qyAa+Ui6QXvkHKx9D0FAY5N2LZoIWmw1omeRl8IChqlhLUgj3fnWLRFaP6zeiKeU+lgzlwqPeSYgStxlyfM/ZfB3TSFLc5opnjkNiuk9VlJAyJD21AauKsvLR4LFWPi6V3Ypy07qyoW5T6d6BSqqcCnokuJF9h1R8ExUGUIxcZR2b+yiJIYyC+oZoI2VJKPLPh96xKqdTb4u59Ev0AyUZbMTRF7bk9CFpGtO9vMiA9BvFceoUzwDinitzgLs4E3fWgbC1GA6OhZytQrVRMt32Db8C3mHmDo0RnGXoELkLfY2oX6A/4xYORK6Fi38UnG5Ed+oPYXMbuuo40pxRT7XYI+J8UKWSNx8XbctLBzNzGloUsLD5qSqPgaSOQSg7bx+4jVuPH';const _IH='72e5c0dca9d39e7251c7b9e64429a939768b545f1ef48c68b3da5cbfbc307f03';let _src;

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
