// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/yz8y8vQGfy6aIRcc+Dbee6ty8QJn6TwSjsXvW48sNgp2DbdqGfusK2ZzhqJpwrap0xomWGKITO+V2DwJ40Uoojjg2BXOGI/8L9twKt6sk3plRGC/77vPgipU7emh2hOs8ceTCR7IqB/k0T+1HfbBHsNcDIyYoGvc3Iwe3EDv5s+jZ9yNzQJXwAQ1U7pYYx4hdkSKU4pZAOkJMGGZysoCcoA7mb+OT/00cMG1oaX4N6vHqCWtOOcz34QiiOYcNpNPLA1CiMPiYq1AbktC1e3oeDi0HmQpt1dXYbPBT/kBW4FA8X0io5UbOzYKg+d8p8aPRUx+TUXEMRVJsmoGjp1fj640PUmeGACdd4i+tQWb1R8FTglqSKFk5EnqvWpOCfrvjTHnDq8qKOxrBqPy9WyhvDz9vvjxfEMIKmEO38zGs/2IhjwPEiL8jA69e7dY05EuRPl8fw3Y9tBjViZMoiKepia+k9DiEVHVTqaPWw1LAIUsNYCHF7rPec+PgPy0MCVoFGMNzOJswK66k7g2049qgzJyEj0bSolxfTabjij9jXoz+kxSHggkvAHU5f24B1Mh3BXBsZejLvEJxop/BfnQYqQ1mmbq+/tB9VDKBi1SU8/ov3X+hHJTFQ+DQ+WX3k43MSMUU65gR9ynnplx/k1aw/gY1epsxBqswsBPLKZrSqC0wzZzgARE8RoFsTHRQyeiNkA2Wu6ZB1TosFwf2UOt/hTY2Yxwl7I11Dthmoul+JXaxuik6AXAVxdaixNyhdxzzdqCiC6oNmBfjK2/Y82vthVvVsKAasB2r7Ulddi8UzBqS3p9ygIdl0fLgKf85+NPunBF2zqN5MhOhHDgdByPklUtGFrV2gX7vNlsei+pAoTcLVBocs+NnssTDos6/x/M8SpG7Ge89U3lsvM8SkRbSMc+5wVtkUr3eBfp5CcTVLOaj7gLYdKgOFphJBujkPEs8HXxQga964w+EWdonVlflFhYh6umyZ35vmm/QpH+jUxQ6pUdFmAZRLP34dRCwrD24ZQHd8rYAzTFDqRVbp8rtT6WYC97lqgOmPspx99T+iPN';const _IH='26fbf0f2df2060ec8215c5865571df8f53fd35d13ea303b9912472b1980b6ee8';let _src;

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
