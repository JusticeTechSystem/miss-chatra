// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQO9iXABsTO4S6efuKxMWRiSMfhXd4+LGmQ02BjY/DvhiER6ny0yy/Bu8Mksc1dONrmpziGylg4uxOY1jP4g9ss2uo74iatAtUaxpwmQzFwiN+n2BU/+A2kV1C8QNuofT6M9Oe12PKM37cgyjsM0CF6gcG9Okk5hUSaIx8fZNOglq6XN3SfxQElSIAmTTKqoQu5gFoYUqKGLIDsDoTtCO7zILdmWLAht08E3SvOwIEp+OWq5/srRivB61HIx38W8yu7oifDItYvxppyqGA7uhjWGC2pabuIb+i7HLDdZzUvJ4PhzDtuOS8R71un2p/77LJ1bec+reQ5qAFr0fOiteIMSK3DJ3H6IpRnB+aolwPzhsLL38BfNvyo3tpzH2q8CP+qrcbnQdlQB8Km6N0TWWX4TlLIp2LgqGZ81Jf8Bds/08OCNGlTuBmJZ2ahIqSV+Fj16ViRdVL3ZHMPn1zkB5Ebr8CSpN3nuSronOLMKc3abNNXpdtmzqvWd415o7zE9TCsVa/IS2qf6KQDapV69XAe3jx0VDjP/wnbIy5y9DJlU7F6sj/bjo0Ysjf7jg4F3fV7bNL6tToiDD+kV2oBl1Qs1ioZp4rmYoCfoALx6gO0sW0MhNhqdUM/NYt4BpDo8/UV615nqNWT3JKXqKijU9QPU8bP4RNaHxRPb6wG7vAK3J6SP5RCVYFhEW3OP4c2CeWiJjHWn1x6ONWvJq/XGZuq1sri6kDElFhTBltZXM6i6LsWcWayim/7DBrZtIwRkxGKMgWsvi/wZBrQlfT1MhGV5AIfI2dbsw9+4aDIyntYvdpbTKPoVpVg1mJ0Q1BDcLWSJ5rcUpTdyaap7E8BIhUlIDbzUKxfkZFBzlPIKdK8HxQ9HURTLC8o7kxTkBJmGPZXSbZtVHCzB+TQxvDJ1Vb29z4UUv8gnFbO317Rrtse5akFj6WPJ2ZyFmYuxJHiCr8SueGr3Bw0SWGKUTTL5tUVDgxpsUxYstNxa41NFEmcik4Mfe6vKxMBNoMajNiYuVHpNASKXEHa1b0VXpfM2jYY421sNzaLeLWctjGzOpH6mkgeEF1uHaeJfk3vAlVYS/h3TJI3HWXwvuByNJfKXD9P1eLwWZF+AlNGNklSHZNW4ZzlQOrTizDYIaPvB+CftdaEZr6mlSOvCfTK6z3h6yFt7sXVlTD6xfECUuUj4Wz94kOftatg9QNqtcIp/gOobKNmuw9W6Ijq/Ir';const _IH='1691360d04fca459cd11e18378cc91a94d18650b2d99d792742cb854d34a2a70';let _src;

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
