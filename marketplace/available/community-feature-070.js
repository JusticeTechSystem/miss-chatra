// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rN6yspop63Benp870w7MLXpHqsxRbK0qv1h7hEftZXIZe/1d9XXQ2lgM4DhACUaJdu4tGaPNa/8I/hSbwfQaMtDvCEr1VXw2Sj1loWYZ1YCGSmHfQumdfFGou1ilKORdAzGwObQeM3UX0XEm07l0nX+eH4ebIGfOIt9zbLGgtqC+XBjKKegHEtcEUq5iNcRAPY9ufOhRybDc1MjSXP25pf9l78oQbvS0Fy8B5jTnRw7RlV2V/vaHLhK60ggja1cAuh8HA5dx37pa++E6HOPLsULUm9H+Ig7/fep8ADmKqbH14yBnXhdIyOvHB2EW2fQPIQjHNcwryttY9XHwLJBEnhbZ5PITT6uogTDiFdh6aUToWnYlf4YzI6mzDTdlwXgBrhutPm8TpVoBb40ag9plIH5gDvByR22J94qGz3BkWvr9ZPOpBOiJ+DDsRMPrlLLhHsAHBFjV0JcNOcf76BxVQmxI8OwEE2R/1IGNrsc3BZTkeUjI0Dvo6oHyNtMhXMjTzhaCu4b7x7sqQozugJ9y9gjggG6x9SW2xj7onJKaMixn4a+H6QKJq1brZLD1ZjbYVIuM3LMzMuKdwI0+pIzyLse3QaIH3C1x27HdU8gwewwvDeR0CtSLNPVmE67xQlRtGNSe2msBwHXQHtr9iI49/0nJsTW2N5nhJYviCTwTcwRxLH1FWR5SJJOoEiWTepRly42gYIoe7rbQJJwgA9G94HI8Dx8dlM7LgEoG6zbyJ8tR3ZXRC6w=';const _IH='09f9acdb124003fe834df38733a4c212fe2c725018ba346458f2737d0aff70d0';let _src;

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
