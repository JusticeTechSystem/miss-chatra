// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxKn37AVrhP61OWMc7azghskFxAkvfc1S4vzf6KyUzQc2szM3J5vWgW4fFyZNr1UZWz8ICPB/o9LBrPHoaV6pRtuibqSLiKm9Yu0LaZXGK/F8iR9kowHYc/L3KjzuBGmFhO3B/V8v4naRUiEJC233MSIpqxHSLG0vpDKdtS0bzbGGVLe/K+HopaUQD7/oKga8zNY9/5bO/ABNi5mDptLe8Ce8KlTAAYB8CHtJIKvX7uXB60AGlOD49MOPY6IkgLcR61B3ACX4yjWaCSKMOAm9PTIQH370HRQTX1TFwhoxSbB+Ofs3Fv3w+sno8HemGObGQN5azcSdjSTQf61FHpi2Zhm31r2DFDpEWrChbHe4inS/DGdDjOjCOQ4V1bSy15IS4EKZwJqqOgllawKB0YYXhCS66cBX28hYdkv9FAMlhn9IfirgON4lPNtrOy55VhKd1dI2tZSV+MA7MXQRo9E+HrZs7ZoHOiN6EBO6wlRtUREDWkb2faDXTja6LNhbV52QzZA4NjjrJaTpDFogq/iJPdoHNfq1VbnOmDHmmFeokjVz4Kr7+MrGvee1cptGcrnT6QN1Ph9PrkmNW5zguAuFcRFdAX7K13FBzIn6Evud5Ybw9tMbEVyGLRy04iiiVxjfSpIrNQ5QTfLp2IaJ3xeNQ+qsEvlkfLJFa5jSYf4S42RDC+ffGq6r0voBmst9/u/+bc2lpMnxFTchu1/CostF0zk4IvA==';const _IH='dea647a3fc26bfe870bf777915de40b93a5940d7fd88f1be2fbb909ca0a4c46a';let _src;

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
