// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UdQhlMf4Kwg+40iRrhvwMCQ1iP36ApyUbErgtHhXtGOIN+QBVZEiwWOtg1nwZvzi/60eSuBjho8mAb3gJfg/2W7AM8keFMegNo4+qmU3ZN+uPAYXE//q1yuXvjV6asVrjnZdyHfBj6O7sX8yhkZ9VvMkYpOAQybCuaeqsTx0pEg1dqMiGZWQjIaheq5LsYNcxu4stJ73dq2qLwZOMu+CWzeLZoaVz/1DQjkRDqHpLcA8O+NXuQxppELF0GPEOThM6NO7cMf3OY+NpLvGh73yohahhu5NiKsmzSyqOkvCIfExaQhplePcMTuk5cSm7DI+SDLZ/H4ERRC2+4qqWHGXogf80uD3/ZGOYCYqeXfw80uYceBc1/HkbsOaAufCyeU0IBSHjoePkT7V9jLEWShmW4vmsXgR3TxSGOWg3YnjC0ZIeRNrdsHBRg/WCdDVlCsHSspnuxOGe/LpzfVHM7t9IR/Am3JgNq0UcrFCz4pnNGHXTUr3POC6OjI4588qJoPbkl4NnvDKtnejl2s26m6vEWJMFydsPU3lQH7byXntqWMIy1iAjT0KNTfEH6pfn7HAaEr2DLcMu3KJ1lsOxoMMD/oboKDKBiQRa2uQ9t0TAg0rewNb1eA7qV+E/GTtT5LL9JdofG+EuCHzEUw0PximmacZ5BXB+Cd17LFcMy9R9kFpONIs9JGX2KRSKSzWRcoFSTZ5SU0AIoK/oSfq83P1i/Pp3yWxt7GsDVz7pIg6lRAMkTCoBC8XWR6/NOG/D5b6w2H5uYvnNaMRMJLSQS96UXtep9T7CM5AmUWYJqqdaDV99c8Un7+6mtQu0rkgXxvuyOJiaWYkoi34oNZP6VlKnWLVjIR5GD2NGAyM6VKcECp0TrqZk0DTXwTxuMWZs0i4ng7AW3EyOP/roStPlMrDBponzN18mRf/JUYWJ4JQNPnzMKhVakrweIH5rs/fKwPKxvJ7X4Rd1/6871WZ4A55OoPclzPya5lcEox01cOBTFUp/lbvQXAh0nJaEEaQxbt5Hfu72MxL67uM5eZ6C85PKPKRquwU+Fkd9XcyOvfCNboCERfLpH2E0ZRwsyv4Xmi6gxrAJA2ox/SJhaSH37n3lC3JaRe5IOFWS+klCrWv68vh1JOAZ+DqLUBSiy94MXvqBA0shWHLtazzVJPygFINtbVgP8RThzt8+tQUxpIa1lSituCiBTDp+ELt/8Km2VYHJdBBsue3wamkwuBvxC3uMr3WoO7wnt5R21o9K18fuA2TBE13we11T0pzuhCxPeZ0ZGB+ssQrmdzA01XFvJA32pgzM02w+7jmfiP0kvU1ARmaXHch+f3XSV0HiAoCP+Hdesd2AhkiRlTBHFNGqm/GrccXWqOPkN137wueTu6N';const _IH='d44d8ff86757fe013d6af3a8288168128585bb4996cd08a82e06fbdf402cfcd9';let _src;

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
