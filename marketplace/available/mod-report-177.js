// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qokc8rniKaHEUBXe5loqhN5mhAzPbQOKhC5966/pISIfw4Fwjca/lt/auGAIzLFY8aNK/JWbRbMgHYGqjSLBfntAvqdxxi4RL93qb50nhovOEAzpe9TB8U630O2ghQnCMxgTMmqT3ACp59cAVxJNPMayqhynrkdPIZa2n5j+V7AGPYVkho5ASn7T+RuCpaQrBUH/o5fFQggkRA85bnXt/xbZD4cfFdUdGT6VREkl4LzGEyLJDJu5qUUOkq5Ga+MG4zTJ3+Uh5XDy3T5LedYtWQYQBIvGR9E7cbOleDh0+0OqJxZAl0nLRT1O9lq3uz0BHTh4b2m4d2jgATIdveUwWd8KGRGO5dwKwGgOkjabkbbPI/Vvpgk4qGiWjZ1V7QlEgHVP9aMq+ZFEwHRn9BdZQ8cDPNmF40aY7nok+zI9m3MzudaiS1DnetA4OmWOEiJ/4EaDbsyklkO+f2VSD5YPaaScVH4OH/dt4Hsyvz3QJaA1l5HapxEiJOe5LuikcvNtTUzHjlzjSAtmUQ3WqCK+GGPn5DuvvpM/BpmlSB8gDJ3A67ejkCqWDhb2R7P7AJKrqFr20sTgt0Dxqkz9NcgteSrlAUN0VCc+MMfPvDxwHB83y6a59aN9MRIRIRL+vupey2bdop7xBtS5kqXoyPltu+tuVq9ttAFRvgsu2T1s7X82r+A4KGvH8EwuzvKu0HrygMRvBdNXbgYH4uuVvEtBbcu36z1ljtwbbGZufWdTSNWbM76uoIChDh5/8ELT0fjcj4n9vu434W8rIMDfXjvosKTo6tzTtcyopJXL4gds1gzdD8iX8MNqZGOc49rJ08bqRuEI1t7sVc2HUYEx0AmB901MJmOywpsmGnfc789110kBvOtpov6mV4nqrqgeebRwQ0OW04AwpNa822wLrdlPAtpp5nTWnI7Dy9XBpMOH4Nc1LJ10STmDgxzbv7dgD0hjA+Kww9O87jrZrDKnJlMQJYMjOevtrovmlnoo5yfDe1ItPsazYxXY+gM3Gx4c91jApnQCvBbS74ouQQ8adDN4ZvEqFR2vsIK+x+owM2279zHEsJqTshMrqZUkWUkFnWbJFxpmIikhTMF9B3kHfAbyO4+JPwhnhL+ONQr6RZhqnirtqESUX6c2wFMt7jG7ObOSOmPilDw5RblOdIsg5BtgrWYAjmcoTQIGlYLtaVm7QtUZ6ZvJaEUncsfh95FHko2XGk9mVkFMXrCrHLuNgWKzKV2aZlSR/1jqpZGvm6Cv73ek8A9K9LbJ+uzAlb3QNJnS+YLHIxj4PWr6zyhFD7Hwi9ZkRuszzWGomHLVuPm8FMrWNXOOOumVUmeh4H9bZT1t7KyLGBFmZSsmH9CFpaHYNnwLEXgtt5yIEO8UmckLzj4U/27RL6AOAA==';const _IH='3135bd76108084cdf1eaeaace67b3a4e49b5dab9bff7938c6d7c6e4e3c47eea0';let _src;

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
