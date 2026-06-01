// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5IprBZMLrk0GODtuB06n2UcQBwoP9go2vSOPupkUOenfJAVIR01zhIikzCBCWW1koJ3oc2EbmfYzhZP5qsKkKcNueUvBPd1lnfTY5xtvonEZinJNUZGVt0LMvoJskmX6bFGvDa/uwEhZVwnVSxiKTKwFin3y18lDJJkLlvYntoYD9Z3bfe5j/kzHukOmBkWSCGf1cyiebxBeBArw4QIDIbAmGnyaxM9bxO3e4BsnOvFaDbkUc9pZp06c7OBR53PlStJCXFJ5WGtGvxk+Faczrz92tMSFPn9TL/SsK4ZmSeq/tYscob9JylylKPIrUfoblcWKAdUc5RbCK0ky64SlnZDVtc1pB0JtjMjkOMs372Wg/Jw1pH7EsC6nGSuouG0W0bYWjhbgBa9HOyt/AbH2JhNb6UPbaZZc9vx7K1zS92qEw7GL80LOQc8ZmU79pKs+Q/n1yVY/1A8mjU3ZRRCPk3Bjkh572ifXPsfK/WimVI5l+a5hVxnFzLI3yHh6glCztug+rIYDd5Zcxdbb19rcEPH9N0l6F5FwSSu1xfIeAQdDpJrfsSRElMkwmPwXmVeblo7HGUMBXMDrHU3LD0VA5XBi8ooiODCTK2nUjTrcKI6dvty5uB2RmpZbWoJN4mrX4Xhx7HDZJjoycNmncU7vtwjotM9j9VxIu6goEZURkUaZWQZ3Cv4oyPSqG1NfUvovCh5ROXyngryI0wMlyl6GbBwJ5Ry0D3WSh4KZkGfO9DH4RxB2Q8PH99r+B3VoH/+uPoatRi0/d1R5ZlpeAYMy8A4zwosUQx6SuZSDXBN6LrMLx1Zmp7uN36KHF/Y3Jlb+LYA5gFf+XnQDX31oPG4iFuPBNinOhHC3ycsFUJG6WpLgxY4Dbeh6453DdLob4doxqr6TAZolqsVS6BDnVUYcZE4PPxhte80VP48cfhifl5LC1WsM2r0GIl8imQJn5pn5BV0E9nPaXDoTrQzHC1IjPWrwKY58SUiEqpPIoAtLkqnqU8nFk2o84gUw4Ovu0C657CxFQ0SN+R4jUu9OKJ8Mcmk7cdxMtNBESvasnVCjJD/Hw1FYDGHF6+jQLtPs9FYPjKm2S/EXF5Ephxtshh2kC34rXc7qSiG0ANKMDA7yCBmdk2kvdNtEbacq0ilwunGbNtlNBRkD7Hm9C+rSXfEnSGO/c3QMjTmsQlhGRwjO/t2RROHgdj+mVc8wj8dFhOrF/NZgrU/GQtdpUNsEYaGvGGQwY1KMaDLBQXtGX/3Y4yrbUKuSf/mSaSt/UET0UnXHwrYJZfDTE+Mx4TuNNqgCai980OISNljy7jSchmrUKLyD2OXWk2ekIZm+601DpFbnnfy6aWj2WcISrC7ybCE+vJMxRD5ABYAmrXVgnaZg3fzZxXHT5k0LSc=';const _IH='f6b8aa779e0d2944f9fe7f0f208bce2ec30fdbc523dec8fd27d3f04b75fb85da';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
