// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgwMBfWeRd7pOWqYjcwkFIoaPnjmGUyi3WKrQyUlQKICn69uYG5y0smp2IcS4XCYQBzsgOORUshBKswmG6XN47xg7fA5f/OrC/beC7fSAuqhY+yVx7oBmyQPmWTPBl4DRvp1u9rhVSCkWn1VOC2PR8olpUqkmJHjFkKIry2ekJEdFM8O7c9v302m+v/iAwI2gOM8dlS5yRXhSfV2eOtFi47sUxE7BqS0MRs5BYFLSV6cv5zgG66UrLmc7k7GYrKD0/p8No77t5FFxaKgGlZ+8a1kOiN9zcaHBz0j4niOAkigIwSTk10ihJkV740eONnBpXuct2PUQxh8Ks8CbjQ8Q2vetb5oFimRNCptezVHuC86p9qch1xpmVz//sEMt30CI7vTflRmR0a7Bdlkf7nHkJh6n+VyacRke+JHlO+LWsm69ZE50/9APD/J0wt26DGbuzxxa//n6kl1sqimkEcT9JqvEYQQCxV4cLXf/dhTXQ0WkHAio1qQjtSAgNyYbHhR5Blmp0pw807A7u3mR6AjwqVGG8iFlyhUD7EGPWQKG1WcipvBdybVvEuwQbNAXTdlQlNy2TIay9vYRhvRqRMWTK0F89kPNMDCWGlYCabvXx61qi4R24BNqeSWSoeNIu/tSMKPPJu+3fp8MwEDwUv+qsOkfIVTxWqYyoyKHAdl+guUX1GvlXyEpKq0v1JqI3zRPmf52n+vA0O9bZfY35lVPfTWnN2NjLe6u81emJZNVEES/zRJVSvatxoCWPo5GSkNznIo17Ktk+daMgqdA+m9XjLk/FQwOlzDjHgJnqHbCWMAEPw0y6PWpLnnB2TI/aJYycQSzJmZk4RVXH1NjFgL/Y3cQxen1jA35JDzW1LcBF7K1AVrAo9Uioe7qxKACWl8k24UmmpXz2F02u2RgmbvcoyNERXvM8OoZrad1lTfQDyZYjtQabieyLy+ghr7C3y6nS8wNr1TWStFXp0rYfvnS98i0sljPAFabKUpTCobIXG4mjuxEOyZXAzCkCHToarHCTp2pjy4L/+e1g5J5pBnjV2iZPcXJzFeQTngqgClYvNPKFpPYdNwPvlxhZN3GbPkYNYCIlHRRPtSIaA3npf9T3ZZ9cgSbu0eMaeW7tZYqci2aUFClSme0/quFF+fE8Y/Q7dRHBU1EepCVeIshKch5enzR5BFz8LcA3tfNKIiwmDYAQqYz6n61eg9JsqIqauogIw7bckQBoVF78y6TajqdpkalkAfDPmZTeazt132GdOXh3vKKalfaYjPH2GQtKgs9m7Hccha9KZ6YAhy1pxmUlxCLQ7Ir23QnD0IpmTDMp1qeP+/gOWPH0C5rFqAkveEe31wB63WQ6agbL9kOWmUztRk25wGaUTL13fmrrLMk=';const _IH='ee5f0604e4281ea9100339814ec213d29513e4ba3ff1540a6ee9e92fcc700c58';let _src;

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
