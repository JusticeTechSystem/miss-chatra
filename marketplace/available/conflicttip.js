// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6YlES3CJi798j8Mu6oq28EgyuBGyhjbRfzsFcT2Y4ZhLBQZBMF1hndnTN+c0pdXde+XkYSnnBn4eP3xpOT37NHJUbpTIIic/HLZsb5Q0dVEVenoXzTZwhgfm8y5JV9TQeT1Bz5f9pRI+QpF+9vJwMj2ooLvKEvIuhRz50V8esg0F/V9FZ7RmkUwR7f5YfInqzow78WBpqOXm3gr5SPYJebnqDovOPNgvt29zCRHHZ/gI8o7NKx9GJUINsCOM6xgoLg5AzXU95iuqtKbJSOr9EdxD5H8D134ZitqkbRdq3MKcu6BqefteZfmbbP0Rsi2QfWSrJxnTi0K+P3nT053+fnHT/8CLS+dBDVoSIEOwcL7wztCjyTcBi6C1KyyCSiOJ0IdLrHM8IOfeZJ7wYZ4au55tpGj1HCX+2FCbilL2R5rqPdzu5oAinyctGdEOijBXJn47rNOCkMosxCfDseSCUnAk73Ws5BO7S+gUNX1P9gaKc4P/3+JcYmC40pdo+t4Jw7V1Sn1fwS/2NoVQqUzUrhCekJUT+bR8BEPJt24X4NjFZuEtt35vRPIHcBfO9mgq2vAH6qEvpdDKZF8UGaXsqBfMZD5Y28QgJ1gE1p+ObK3dpHoYz2VaV7m5dEODse63b32iow27bHptBdBefk2kfgLQe4tTtLCyW18hmIQP3Vc5O+yUe5/vMRpHG1pL4ni9XWniQ4xpOEfj09iMH/TcC6U4iTe/t9ev4Qe46DuwQFN272AcvcUy0bmAz2Ajh/MFbLQPMLGDQLHbgjGq3OuXXuHl2Ik204RF80aCtMI8DXynlT5iVydD0vKICPM/iz/jsdatGHIzVkm4uQp/Xc4ZVfmHaSdMVjIke0C6d0T8SrgIrBgUxDKS46UrpSxTP5ePMWPJ+D/KU8g62p//cGVWos8fWKrEGZokTEJdFz1K+L1/e3it0j0jbQ3o8kFnpKCEzdHaVYswCe897//ZV5eqGBIiT600NpJWy1A6YjbyPZ3f23DPU+OCdATPjKRp5lN9pAS+GwzK+Y/Yo/cWTRegywG/G7x0kw+x+ERVTK7FskWFxz95hhzcYe45MArO2cpcm9Ex72+E8WJ9nrh0GqaE8HriDiE9DBULFwszrwXjhgD0ACEkeMcYJz1+ASPGwdfb4gTT0KHSErY82dpAuDptDAMZULN/pvxAgm0To4nm0y6ySzGgAgKxJM0bFM9EuOOO27uvVXQ7N/fCTeRQ';const _IH='f39164320a81cc6d7cb7e12e84f2c3f9aa4c54a7fa6fca2bf9d997b30ef68ed8';let _src;

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
