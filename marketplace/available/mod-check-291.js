// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2Ove2CAQVaKwou5sV1SMHGItUFNf5aiYvclynHrHWOlqlb5DUXIO5ZiCZfVoPhUfNO30H3Dtu3s8hoObpqPozSIuOmiX8OIUHMJw0muKo0zSDzpk0SgCw0ggX2d6DFlamcZBlqPvojQZgnTh/qRnWQHFUAV5pUwOiaZQWNP1ySdSCKxqmYSzsaSf8CunPgkFTCrxuyfkMUzxDiZjgxlLRs5sgrh3M2zRnN5/eholqiGZJSdPMqGMvVX3kMqqIz8UeBq0poiNMh617W8MkopXL5/rMhYj5wjTgPfRqY0VzUyweSoNXSwYZrNpsvBFXs+BOUM8HLM6exbrY4+7w4sSanFBJ9bKdyjZTaBq25S6O3Uvc+uUtjZG1MjLvVHhvhSQZus4GGEMUqzERYz7xAgqMOz7sndrfycYrnSODhT1YZOZMdtVWeqB/ocMkkrZQ4ReN0CpL65Xt1ir7uzIqdKv6lk8/n9b99BbGNVSkAtApx0ntSuhh8KLmwXSqc19GP4PtYimO/hfzXCuVy5sYg2PDX+w8NePL3nKBgHO/LprZYeaNB0aRyYsXH/Kqz2sGH47jni01pILT01OIxDYidl5ayFcCdMUoaGsnW3BU/ZCtEhCPWiWJfSAvc7+dESmnTimelSaaytCi4bKui+ontGIgT8palxqsC+1beCN/c+kNTF8lVvZdHDeKBD3/vjKQjVFAJypsuFtDtIiIu/MUK5m2+SjWwksFMihqXny31n/0Ym5OxeoOdeEOdbZI2gHT0Ne4WnXkN4JLcjpqtbRuX7x0qivbJacpsdSUu+ef46+RKwkWNhYBF+43droW/LV6YUMzC9WdTFqUc2+QfycYEw3Bn/9K84h69bt2KVlg+/ApYH3HcS1wQalG8X25DrqbAY9m2akBpEFBmi6njolINHAAsPtxGlCmGQqG8iZlsLrdiWd7l72ezRPFU5Pouw1jE630uQqbbi6EUtgSN81/EXuBj1BIkFAA1ZMQ71PVRkSGgS1HCIMipiCjK+T+k492tGTgg8pv3aP7d3J7TX5zRFuFCKy8RVsYYJIp9oeaIrtJfYRWnXv/gsquU6QFIraZ5h8Zb02LJFRE8EIj6KtDghlY5hoFTMaz1yw39RIaCZzT8Bt74NvkZyG3eoyAgJ9bHULhdarz9s+qOefJQwHpIqj/VVRelJMPkm5IGzW8dPGw+Q/pUWEltsWRfjw2C/0cxuiXeFPb07ufCeizK4S8t8DtgPHmNDoLibXmpjpz9vQlNO6fHMtGebFZb4Gi9t3y2dLV2+bGR09IzVdkJ5u35+4iff9iL9Qh3TnaKCVd9DG/coZuUYLOJ5b4DhkVdFphwHqIGCIm3e2/t+6+RtIWCE6Ejx9RGHKtNyBfOFOSHybg==';const _IH='4de4707f52f9b550acb15f0f0c261f439de1b0a7a383e8cc088f920834591462';let _src;

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
