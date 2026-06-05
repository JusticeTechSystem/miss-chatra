// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='myayEnqP+E3nd9gZnzg9yhl+jJiV8X2ReseaEve8paeMZleV8loSaplPe4IwfKqi5zXX/u+EYITsUnc+oZSG35RRYf1LoK3KQZlRx7dqL/Wwxcbp7es7+/EKw76WYsGJ4jrUSqB/itJz5QizcKT1QyHrUFxk4Xq6LvJg2vf069C/Wj2wkxIMZh9PkiRbyN5nCibMmZIslxSl6SDTwzd3t2ZjHoLobvWn9fdl+hgFuoZoQ2C+JBKRyEIkd+WTBn/oZdPzP+rxYvPSiHETofh2VMzcJA/2B80nzyvoQiKyQus6fsV2R5HbV7Z4FRdAlLXCV26csqZkzqEuD7KsyTTHTwFU9w4my2MJrhFdSA0EWEn4XIXmXUfOXSwiU+3P33q36x0QYshgJShvxmFOJpTLeTRtPT0I7kbLHM9ePIa6CJ2L7QTEFb+mCLQpzc1xw5MozjiAYa059de5/E8O7aaxYFdC3KDNdLuTRJrzF+BYIFa816qQgRfHYw2MOeE9M1TRuG9LHJR6Gq1LNnWo+nPizbNHnOXmjHbZjrIl8hEKI8Q62wsa5c3ImaKhi8WDtg6Xspl0+MWrjh9zSsj6wtYybRvq6r8x9OVcXpsPXBW1lNXgCg57SevLjOnSVGqjww9P69xy2HrEW+OesNS08W9OKUMDFetvfbC+I/bACBaI5DmkEdiF8ennH94rmmVY6LhtGgAqe3S3HOabyf4+D+dVCEhL8gQy0vFP4nyfv/4Onmm41L4XbleyW+zHuwXtVJIUIv0uHH2y3jrGu5o59MKsg3GWPLte6T/nVRVLLoQ/RvHvdJkDjtMF+DRvrvuOhyACntLSsdDCvDvx5006Bcv9hEO+vi0jQr0VLbphwq8cjsZEtjIlcizmaxxna5R805jgpRIhmWQcJkxH6KWmon7qzPzyFfR5CXvcLGSTAAHtR45vsJtkaZ7RDRC5+mKEkAEVYfmYhv5Kq8zt9w474jKns56NOy41th3mL/OUGVrE5zy38e80N1MDZuvF';const _IH='133905f562fd04afe3de43487ed93688ccf9d213ecaabe7b07d97905f2da3f6d';let _src;

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
