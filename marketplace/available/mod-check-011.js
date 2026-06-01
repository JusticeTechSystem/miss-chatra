// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6TUF+Z4W2UPKu7avidYq+PvTP39P4HR8j9bH1LTWx7HyIHlpd4bdORGzWNpjmkpsIt6vNng6y47h83s8T+XKvPbM0QdrTS0MFWLJSfaYNG7xXCh0q6AwjHXOG8rKdU/9F273AZa8DkGKlCc99fzHPvTVzB5DV9S6+OulRdqPhgfUFZ4IyK45WH5rHU232dZccF1+Z+Pqfrd2oPdyE8Lw8h3qNEzyv9Eibimd9Hx9AfzK1NOk9LMKB7pLMdYKEZs/JAR7KxcMzTG+E3VHhwtO0ivNiAobLxm5G0l3oa7i5xqEDFQtkvjJnOiidmCNzkpyet5KTDm6bU7U9eA1VDIexhE4OZSIshDnivtMF0+Cqh8MiZ2lCbhQKqbMRUiFXGXgOg9DnTVU10pplypkBcZTAp/CmYTX1AneK19rD7qJ/QDBDmZaRpMBZnmWi5GfoLfOJ+agUkGeY5usiSyqW99bmW6lT0zd16fKVRaPhF3HQjpdCNvnKOuaC7Dt/S7dGEQxbdVdKf7vVox+VYxO/ho5CA6Swxyl/HiMz1dM2HEb0tVQd0nzr0AJDXAyQh/9oXXzw6u/Ll0ZrpmoF4azcE7lBPTV3MwPvnHzH3N7bWCGRhESyHJeN7L5tIx1cNM81OAuFybhkoi9JJU3yHV0Aq87oQIBZrTLMxlx5KkC3dcBi9ovoR3A8R/+1XuEX0CFeRPBhDV77x9T7PuY/hDEwW7BPs+/J40OQ40P43zy9UqrRayXwsbTj4IlDHB+d/nlhzXcl9pEFQKJuslM3BLJTni+qWKZR4/DTVRpvna6iv7rUfdlZt7E3IGSv+1zk/cp+nlADga+sxX97pKDdsyG2k4V7DbssalfpvF3tYX+XSN1CM/ShCsp4DKxEU4LG60QQE6Se98SZhGpMvuoybCeDUWv33o9lY2X3ZxvrOV40WR1P2nFHIITu69DEluDHmLpp+00eii4mDoErUSlTVdoMVSgz6eMLdiA1kt8dZkaLGrHcq2J1PQVBBsZpZGgbYK6/zjtulIFLGVduLV1I7LCvwmEwCgXog4wLXJu9PA1Lkcg7u9+VT8fzdLra4erZnwdpkF96spBa5kHmqx2ZW9Zq4Wio0pUxVMlOJZAZSRhxbDQ1MUPPc/C4FeMlNIPA9xh7ttHbZzdsuo/QuH1EcvSwlnuctGKl1PFV+AqEgroOZwdYxZI02RmGHQlXzqRFom3E5X/PtzLFWCTjsekVZyVoyi5rMGS9JY/xPUj5ugVoCuZ5hNHZ2aXjV2ilzBaz0trkda0D7oPhjo9X+7aeGup/TNWDpfT/5JXTH9dOl8jnFYvSqIVGTIOuONEbYWirJsnYMbyjtCeLEuN77cesvn6DL9gEBApGj3FACP2gA=';const _IH='7f2461011f9e1b1d8386dbdc2202742852f8088e961322368539e9f67e5ef077';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
