// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOiBA+GmhsNBRC0XImFb3VIGo5km6xXw+HElgIm7NspYWwiaJen1FwUiQciL5l7yG6n6JixO8BSOjoNiHp28g64GPPscMA6PpS1NlQ0fhJfu1oTSITONcnMsK/MjoR2woq9gksXnlAQXFo+mqOc/hziugdg1/y2ZvQ3G/jmxXiV3KP4wyD9LC3s5k70IyQ06tWXhZvIg7EYwJRhZStMd80lmxl8c7xciaGdsxnotybDlf/wMbpUm2veN0Uq+Zgqe0xb6KNtrRux17XZcYLKXlRYeUDl2YslMs4f1n1bgXyTq+kvp736rgqwMjoumLLY/RxnzPl1qWtPe+/ZMZk3RUm34J8sUWTqTmHfe00UjSQPxOig1Bx7RNJadunaD7d8LYDgmJsSEeD+Bp49aqja3+rOl2hNjZZdAhM0pOM0w62/zi9YWqBQHeC29kqNC1UG+2xDZ6jtpsoXkv0jfMSUQxNy/I9wnITklmM30Zj1rExfvk28+9tifwKyQPbHC6vetD2UlpSflCfSTFBr2bvx8h2pcC6epUtshOiKzsTdI/BJuIjqIA7njUYhnNIaB5Wv2E6QEsD1bBQAf7u07Iv6BqdD8WlF0ou0fpdViiqA9KHCXOFxu+rsjxvL1xYtfD27/yftvO1I9REAZJrHjQq37yAy+BVr7rKZjINwtfprM9tbdEz8fnLuyDmrzje0aJr+Jswuqsg5UjrdLpZ6AdLtQymo4JP9dV9AOz2gbiSFdqwkqri4vmlromouysIKZnDf0pzz9gdYvEcCbHVO+wGA2WaBeOarNPtosW3+pLs0Voph2chRJiEe6eCIc6JcK09U4b3SOhND5z5DqaoRR2wVUWELBDknwaZDYPtMmoi59bb571nxNxq04KlJLpym6UDiu7+iYaV0R0bRYZZvjLOi41TAD8LLGW60+bDTR7wW1WDQWttJreFmEhSAFOGrFDoI7y8T43jiZ2pSssnrCuMooI/HZO/YlNKeaPHDwPQpmKR0a2mUv2m2i4zA2D22MD1dE5jRDzPrY1lsDETZ+lan9LIsiG1N4ULbw4j1er44tusOFuDpwguxM/vcKQKCLayaEK+7H8oupV8QGOOSjpx53web44EQy2bMOhfvm8vF5VqBCTqO5sEWWtdD/wEkjr9+t6Aj5aSksR5IbyphNMUykT4FMuvdfENVsTvcwfqyq7U5wkfxKmH9e1xh5ux6H1vVHrM1ihpEBN7ZpXqJD4OwBk/7HgxvlTU6kDaK8Wh3HW+AhPpMldTvyr/KihMCBecxdV+QTVKZUq0YblvhYwv9+Ujy4o29IrZoYgp3m4EM7I8yXYtsvKG41WCYZdJ3OvI19F5cZnY1pRpgvGBJOxrNL5kDOyAkVPm+ypcnaozdX9lFnZzaw==';const _IH='40359854433237c491960d052bd6b3c6429fd4424176969b1a19b6512ef20a80';let _src;

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
