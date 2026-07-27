// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkgKTk1kPQF+TikxKSywusCvGT0JOMenN8XMZ4u3FZYuxulgAvTXWxX+Q8VAdZqVkX8nUPC+l8k27v1EkXFB3dev/Ps+EMcVGlmlY7yPYZANJhnI8G/PGRRBC8J++szjwbkrw7mKAzwfEE+xbfNimJt7/laaV0dfar0XTgT5rEAvfJeRGEZ43V4aHp+hE/MytgJtsFQOL+GaQ+1oPkuvNMa1O/FIfjcg8KvEHSrG//mKkd6AWaHQunmqfDwES0O57anni85duSrNvS3JP3BhpwgAsqGcHo4T380oqSmi75Nx1qTgL92QugstKUCWFmX6rnVt1Q3hPdkKuy8EOLtjIBPGyvkrfsQb9sCIFbhQrhJFaSPYbEfuojccAoBJmgx/cEU8VYkxyXxsCO4n7XWCNwEAmp0GI/0PT1iHLXV5v1AawyeK13ie+Ps820x6L9+nm5DU5K4wWjL6bCLIZ7ke/z2N+4J48/SycvOBRcnotNhQmP9VF/bpJ8YB4CiQwzvbFaFtFRhKKMgwK04ChepdggZ7HL/ZnMcZkzrPFHpLUuxMUJ/B+7dnVbWiLlOWSt7nZWlFNK2X5hl0Zp2Vphz0swg5w+azBSZ6XB9a/WnSDyH3VUKABHAtw9aCZkX27Yp6RKOFxudHzGnt3u05cGeNH2KCjNKCUEBy0lwWdPrf8Tq9XugHiO4I7Ulg4rP4WOnEjlNlApOg0/0Afsa0xTqSRG21JceUDFlqOniLj3OWYxBAVBoR1D6IiWO9tW1GWJmHbOnCeYWCzEbN3DAUUZ8qtaAza7+mD8AI/3S2FyqsRK5HiCq1+R7uiHTw15x2lIRpiqpF6vUMDoxhUMRP1hUB2WujCSdfWuITFwRck6UXcJ3wnEOkGzwXzCX+JTLANnP+lAw6TpRuAsJ7AtYtI0MAYepazm80/O8Dj1xiwPIX/Boj3lRf5nKTD86lCStG/1oDjp6iH+MfOWdiyaJjBpYKqasmKbRk+li8NRzg2HAVPpq5iu2Lpn1WYVyZGvKg2BAOuYqU03Yz04Ri2ybhDiXAEdO1XwnajAkK7j7Bri4VJWThrVksGtnJq6BJTXIx9ipX6bDPMXgBcZNsxy/6ihPpf/AJ+x/tiKaqAuahQGbYCcNWnfIGUBsDeE/RMQXCcSKDXsv1NqYythzQaSY3RTqDjRQw2R7VhMwlKbmOUc05ISXvs1tktyzaJUxw5hYHQ2S2ALX0xDobVWPppxJKbO/iRkbaZX0oKIxnO/iHlS62MRgFY/KgNUUfZEFlMM1N3K5vgKdSnOfGR830V9RFWOVCSyNEDiqqgzYD7nFSAqRhRXeHPLlj6hf277g6aYhuAwOQNMgXsemZQgfWflQHt1x1xrcYOnazCtrXHV/JWKaqY=';const _IH='ef8faf7023c063171cbb07a22f4eee145ef08aa94a1b5dd2358e762916a1c185';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
