// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Shn4IgRouhChy5OF2AYcOlgALe4ZiW7GQ2ikqharsgxV+mhxUnhUcIfV007qyUk7Cz8emiWNwRa59+b/sLYTJ1hUOP68vL6wN5ibNXvrpYCTwoaNWglej306CFnXO5Y9g19ujqRLV9pSAValUUCo4DS0WC5C6kMMmetmqEMAzBJsttCjSmkVRke2xwvy1tZUjZg3dcPuaVojOgBN+b9GMpy/Ud+2A7ULNrF+edWZRyi8NlugnvbheycQMegd3r6fwFJkBEgFqKWbccfwEQIG3HpZAJUsSVB3OWANxlHPaLd6qf3D6r5K3LlNGh4E64KcDyqt9T2PGcDSBSCTDbHtZzPWis7Swz1beJwYAJMHxcbU1lD4To5BNZW8oFiy7G6wjaWgS83L/BihXByvNXp0rhW8+DS7yOsF060eh2AdIQkuNCvSvr7kcubit+y3WJ6nm9IW/P40dlqNfnFvGKtX5G55mzSvGM1rP3/zI/nGU3Feko7P4v9Pt0dhAF1q4kZ2PvFJYLsAx+4H57pz3YRysxyt8vt082e5A3lPNaeFnbQh5eh6MnhymeNYFDKiKgBFU0AqTkyZ5uDx4muk/WVtOzKLeEABXNKI/kv8NMJ83MC2W++DDkBqomeBlWVM6gluwSbjaQXwBm5oUcwaB+x9ohbfQs0JLt1xj/uMXd7Wc4tGdSz6VjchkFRkzMNun1j7GYBrh+xI+/GJm/JjzniCUhF8oIq596LVFqqBLv6awEoezpK/0iZuEi8kHmfzfXdI4YJUZg+ofbqjHYBDVjuU9beaOxMqhZaiS91FHetlmbKuDFV3QYU5Zftae3v+EoR4MjsqqOo367qae2K4AFtmAkbDktnyeL98zTpaDYC4ropn81CQ9kPSWQ7nfZlDIb+3KIYUK4h9WVCODX4iEXjBFFsPecgKpCVKYYeP+mkynt8qhEQBdk9K4us7+EK36V7FBsLYuvFley1e9r0Reli0PygNPSw2jlNCwsUXSNmeuIIVwSc1tA/TKaCBZd2cHpLW8GawWDtr9536S+whx7KL7nyZ2nBkHnHlLSEd/AwfW67jxo+VY9p6YJdz1nBFVb4pqhnF0L8nAB3WGdgEvDSejv9qQ11CABH5aWIt6egP1MNGQXlHt1gKuMiQ7uGOBUsVb0GoItWl5PYLZ1aUl6gbzdTBPJUhR42g7NEzPvg8apPwHbPSaDUaqebiYhSfqajmccYb6JjxfsboVZ7YZJog0Am2R7MJD3j7V2WyZ+/NBJfxcPDud1tHjE/HXdc8hdiE3u2FKucMMBpjB3HnpNByQwBGfcoA6mj0bdRKAHse+WhcZcwFaTzmZLqXmxImlArzawEDQefd9aw8XFe0jjhA9KJMgODUHkD1hWahRsOyogIs6aStmZdQXA==';const _IH='68676bf56591664b2ec6a4cab04e5aae75a7709a37ca23cc5d64db1b9613fc33';let _src;

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
