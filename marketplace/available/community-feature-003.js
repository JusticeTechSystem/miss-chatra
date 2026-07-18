// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlD7r+RZZRfdFE57+DIGFgmtGjbr3glbxn2UzY8xVVS2/QWjtYx/nxVE3b0apg9uxuC37uT1QnQsswiXbKBAmFhwTqWhWU7z99Ffd2Lb+vV3jFDqoPfo5etkm0FRo1dKcDHzC4gBxTBORYvVAerB8xr1xWvgHVEYBoqnK9XoRFE3wpsev3Rw78GoHJa6YX/zdfLbtE2ByOfA7E2sgPgRqTndIxk9iH4ra3NDcJhrK2+C1fV2TVot++cWbGlD4ZwRLZQiieML0D+AfNGSv7EZTqHNWCKLGFtPZjxaLmJPOheZtxxQM8gOKh6g4dhZaxOH4kPgy4o+ZA31zwfk+cbsiCZUF4bDDxZT2e3Xym2rZCJTHoB3cenWU/bjWG6iJT4mRmaUrQdCONyXmaDB42hY1v6T86SRa36OvPtE727gfdDY5D4k/o3uUYhMXXJQB8SJ4QIm3tqqo1nc5H0QmgHhPYqd4x//3lWo2gRUo3uP5qFTYzaEGEJE0EUFS8MAFhY9qlDexrQPiw4h9Q7WEV4kj4qhbiHLCoDbSCUJaU1dDids0BdE7N11r7gMQJyqNutshmmZjQ0VjGaKumfWc6nCoik5CI8qDr9ivDsQfX24wnqlc6NZTEn7kYNR2Xmdc2BfbeKAl2GzaGc22k+cxrflhdZupbW2zsmnProjvSnwOifv70Ww6Y/BJhnX32uE2aeX/g7GKSuAHVm3w9jiT7qeUghjFsKw0=';const _IH='220c647557ad44bc5f1148cc92fd89e886c21501aea57029676d4818dc0caa63';let _src;

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
