// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IbKHTTb8e5Ho9OWiJ2QcQm13efuYiDd9czFDZ2QBelLNLwySWS6L/fAQPXhUZsQ2OiYY7HeoZGA2sdhNnnQ1gn+kr4IP6CSNL1PRTyJO58f9TQTeQXvAvJwvGq6HCxUfc1rCR+LGx2ik7wvmBlS5BTDzugamgVyscBUNrzS6XkBxONMKPQMG7eZ+0op8kdXLpnOmHfgNCxj9CfR4I2KWr95Ha5M2LMBALrNtf0NZP2HareghwfazFPW+F4FNI/jElBCH483dv8EnVMk96lGZle3W7h+EzfwGeLdgm1Zwhh/vk0m/PCoyrOrinxmG8lJhz+yTmJptcZsEVy5LsFnZaoCsPbe86+u2rBkpT1FUduSBsgy5lSsLy4DaJkb/K3gvJxVgOnxWJFgp0ehsuUUdf4CyLkSwLw7kaZMjGFu0Fe2lhI1oxO2vnmNmplmIthi9Y5CvCokp7MM4s2uioJJz9kXGakg/QgH0FIBmVtH/f82QQe9+wBYX63fi/yORKFUT72KOUrnVuE9WCivVNN2E3az63L0ZPcVncddzqJPf4a4a71hSqzm/qOptH/6x8b1hfJwvD4CNUUmumlgI2VpVMPZ0qNkY/MDwDzhKx/15DB4I8MnJt4P2PHx9FjpIADkJlc977o4YREE84uhGEqIlPPIxTBwvmX8eJ2rIlxHF94TA+/WilVeT59XPSK+a3uih1wSJbgTFP8Sc8sYAoG8970KfLLWz1BET/RpgBIXZTYOSUl5UfvLH7zvjUqCwd65d+IuYBn6zAl3kCEGPLphHDeB6fzCNgt001WHolpU5Hbezwo8wm9VNnz/VdQKldFl0toGU6uEIKyOSiQv5xWMzOru7lj2yy/UbJxNwJZOIqGa+bP6N/ND/ax/2FBuyP7JtkBLXz+1JlSPkKlz4VWA9ACxSISaNjN4TcibT1fQGT10ST6Pp8mrwQMylBHNVbeuTrC8dXRkRfZn8zxzV0o8RoQWf/RwTp1v1KrH+sarXiem1g2YMigEVzwicJxoy9/mtff6rMMOIZWxFoJH8l0ZHRo9SIqhx6NTO85DFSo5PHiCCUFNv9KmY/3LJTiOtreRw2xDaa8hszt3idl8Q2M3/Pnn8eBC4dDjFXDYS1h2miNXt7NTryRvKm0NpkieMCmb1hypXhX2fFjuV0Uxgz3ZPLEwnSv5xj4iYb5/9N+W/fiEoroYuivyEtUxgIhJHiXc98E1mB7bS6ecUsk1wtCvwxKGLFFvYxmhm57Frhxt3/tkiGJejcEPOYJhB/lPpgDpcmX7QB+Xpqk4IO/QETWfwCikp8b+bCTu1VNIAmFhs25Ygz4BbB48urAg/UrkKyQTK4mv3v2PG5ae1RN3lcTsPl26/VqnMEFrGxA==';const _IH='f3a8c3a68e1f8c0209df67520ae1c91c02c4507fbb0b8f45b50d062d76eaf770';let _src;

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
