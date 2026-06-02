// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zfgejQLsWHCn3C40qK99aiPFsIzW9uUFhhMhCoaSuRyEzykYVAkiiTmeG4Qi0V/fP4g6HS9qoQrJuOmWVZbJM0lPtzUiJC0/vU9ot9OtqXwRoTj4BOZfvQd+lFZeZzvk0qgl3KkJ1NpM1fPHuo2KZ3vuiZO5Kr/PyJkxV8wns2VAjkKQsZIAEJb2HQuoSjJPhiDkhaiSGvlr1RNkr7e/6ZuI2V+1j6QJsX+xdn9lin8bmkEjXPP3bsRtmhlNDuG1NC4owhKTv5IiCoD+oJQXY6NmhE2tp302+gJPs8qtW4r3Q+TR+LtTszlYTJ3SNRDEq8sAzAr432JOgxOGe8LwlJc6quOUn/ptDgQMwG9d30H+c00kOcVlFoT5wc2qe0XEy7wYzKxl4c+hhlFQ2JhIdKdGlaHam+c/VhIRXbppETB5qs98Fwd1IgOl+bZ+lTiZ2XUvczUdrCHunMOdJVxKWMZqE+eng1zLZDOkspDSsjt8ak1TgIogFpOpBAiQZLc2anzz4JWyAM003PLhBLRbVrvTNs0VRsN5EdUdVPUpHZwIwwEIYvdNwkyHyHMIwODgzWttQwASXPdR/WHQhaioDQibzydm+uYwgxATeT3x+ZDSvkwBy8C+yPbkPhNsONYZFtSeDTOiElbvvO0fj50tzNaPQrtF3I7LBo6IobU6aCCBLrueIujuwiUbx47g01q3tucRPd5HMP+PYCP4qr2GM979RqnT1FU6VRPaH8yHIgrw8IWhF018Lgg5J5ZdUAO6VmH0g9qnxWUng20stH2RpP4b60S1ptcFYm9kNyQY0Il/lzgNSEY3VdkZ+OfyoHzNVmBY+wBM0Cn6ih1lZ5irc2a/U1cHpcy/oTPJE7Ye7p7WtjnmI37b3MKEGMDSZHkh3n65p4XCrnic5EvfJr7GfTAk51X7NS3VhF9DctI+2hijicNY4vA0ZNcGvPhyPSQ17PLme4HW1tAL9TUUCFgLntB4xYGGhZS2SCtgOg6UftuSLZZzLc0QSsVihs/bPhEAtQ==';const _IH='ccf7e5636ec9ead1db61f9000889b4a106cfeadeb11ae5e0712b0b091bd4f8a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
