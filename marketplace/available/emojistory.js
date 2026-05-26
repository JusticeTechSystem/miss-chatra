// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jUNgArjPq7API9K1Xou58RQRPzfqQSz0oUUJsAmtP7sZUpCnzziKlKZ3N6+cfgTBrBGl5A1rXv0upmUyagtf25wtyL9PvBHxp/nDqe0sd6Mgv4GmIvYbj5TO7hG0gYEN7HaS42WJ+Ubd0p0SSYyT6AvUNkewCgqCVhNeZ3LQCpW5glecvC2RzRYAG4Xny1+wTE0+vCRSQ/c/VhMAM36A4He9rC/NukxGurBtdJkqMwASOQf3ZvrZR91gMHFiic/NyKTfepplEKU0tIWhcdb56EOMtorr/LrXpSvkLqBH3axZo+QHYPuVZZI55Lo4ii5PUJMm9E4rok/ebMM71piLVo67v43RiBz3ircnwb09vncd1e0uo4fgNzjjDQzMiKJ0vnQUMOAOISA85D0bi1WacFheHm4RqN3YwooNBKBwRkoJRu2X3Tamo7id53esGnkmUQnaK8i3tufw1N5GJKen/vExZ5X2NxoZ0JhJde6rMOli9UwqTuBzg6nJeNXmZLMVl9ayRMJwJIOKTKd81SCu+vYbqQSeMxxrWLbbN6GqwnHO21M1GpJhTkBhE4skg9l2LJ8WowG/KVgcJ0BQHUJOmPj3GkLkJQjsNepekVHxxRzmaCq8uWoD//6BT2nqXY0qMB8aNy1eVxmKZFe7lhee2hnUWYWI/oGx2TE1Jg2jPATR6YdG/AFxhUJn8CPhwCSNoyVpD5ZaUsHI6o7090mmNgypvvzOi33sqU8au22/PI6fcUvTIfyBXjQyDKu9Hmt3c6R4+Pwe4gSBdiFSpk9f4zqiV/vAKzPphKyltUd4MiLNJpe43M/TuP8RZFTC88MuC96vhC3M0l6NpAAeblsSbfBAR5o7K4qco7ALL24vl2TQ/O3zm1DAxwriD/J/5k47RajuH8GYpSgIBvqxGd7cPMi6WFkaRo9K7OAXYKQXFfRg/oGM4Qf5WAP+SYAqlnVGKXUeUzTwfuDbtO9TIiF8CuTO6wmKaftBuOAKeh3EoBxZDpkWRJya5n8smigt+A2daQBMTFx8nY4s7/C+OuRInEz3C/M5BG2bDJ7ph57vI3q5JH6T3mmpeW63hrNtA+SaM6BykbTxSZ7Qu5rHCQ+ccRqVs6LnE9LD/i3/q7k3VW1r1+QIj5PPplrGIK2Q+bM+qFdLhJgUCWiAuOhDA6FdJeGTS3jxdhbgBXp87PyspPDsXxFqe9VQ9r8N2hPtuaq3wU4WsOIH';const _IH='07aec96d8e05b0ce5855c5a1e7b4a10ab15ba89cf3e13e29a1239a3df479ce9d';let _src;

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
