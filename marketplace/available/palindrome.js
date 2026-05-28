// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='72OgYi/Y76g2oov/zpfy0fN9UQ2AkJIRyUv+wkj2JtTA84tHumA6dTkk2ZAv3U40aaHTzH1rTLwEua3+npeZQoVqNAv6R/ipFk0QUZWGDIrhQwY83DmP47jYZawRan2rplYjhn/ljiV5Hwz5WKJdRKaKIA5tyLeSI/f2ktgOVx6LmiO/zK7CIeicodWQnMosLDKHPn4v2dB9YzzfMN/LChaS2JJuuEA8u0XxtpgQouc48+05EaISAx+fRq6oV5/tkLDvVKlGBwtxzn8rt9kN4Xx+ZsHQP5FzBj1IRdscbxqqJExbrSihe3r2Y6veIbOVHweV7XG+tD2AH1LxHNLzg11wXg37HCy1kgUqs2cziIEboVr/YNh31SGCfTmDlPmsmfjIimMvPVIRyXX0UB+NpwyRpyUUPfYmiehjViYgIz9ijwt0GyHKgz8WBFZ3w6OUPRJFuonjvlqQZePXHPEc01iHeqw//w8pPH/VByr7FTAG2oEO522aOzIKBCrYKkbMS0Hbl+OiSyX2f9OVyQdronqcdGjSV8yZOFAGkqtxBPZIqgYPWxnBzTRyI0bv94hcFm3tbCrVBTcLidlMgeWF7ttQZmqfCYIILT2H2G/KrJ2OmHK2tqknqy8iLs6GXfZDSPu/bc2JF1eBARo7yViaNeh09y024l3Pl8QuU1GhHEonMHZZ+ceOlMFHLqrP2iABQQQDWygGUNeQCmKYP12WdaHtU7DSqXJvemiuZRRvgXzspR4fCz9oL7N7psDdxtMkclJ6UYJ1SzqJpSO9cOaK9UrcDc9eSoSiAZ+au/61cCSDmY4BiYmG8NPjHhT51xHsWIPIiSfdPBkxKTKh3ZiKYdASWa1w+AQrihaWf7gA+X9kN/jWtb6rs9MGv2ebTWrCdVJZvoPSDOROt9uuNnuxzcfhq6FjeBNEb7rFotQ6tPRmImTz2nF6XIS9VT4XLa5B4g==';const _IH='e178c41cd85ae564f488d6ec94c1b4b2d5859ebe12c6c0646a942c74f44e2024';let _src;

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
