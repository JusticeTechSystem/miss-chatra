// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i5ndJ5d5F+GdRXkI5vf4PiXFD5vBAtg60aBF0CsKsdE9ghgYcNFDTBxxC7pE3n4eBxhLTqJEelIcFXv1jvB7yUdVsOLGWmWqZSPVNtcQtsqqEyUwF7pKioj1xR/0s6UF2jtlxvtsWEIZ1Ci4nt/uro1EmxZtP1F87U1CpnQfY5hHVQr9zPTxa5LUFATiMz7Rw78hCyqOUrKOItWdiLf255ZRRhvpJ8TrLKPiEetkqC8FIhmU1AjUEj+937DgykFZjZNjju0PAL7bqfteSasAuVkGMyf8LoD5YId2cINQiB6Mnoe00ihmAJcMDtjK3bIzrDpHDGCd+XC9XPOI/34DA94zmYiNB172ulcdqNvQMTlVk04QXmBPO3sgVFqsplpj+3xQ10WntoD9p4/apsX8SVWaw6cJi5McbYJ9kANmWYXggilHuub/1OdnvIjq2lwTbeL3uOBB0KbsenYwup2aW5QtagTh5L5xRtTLD4YBnJmlTXApEqsRd99aNyToP8Ecr8bZ5CjO+6SK2qABj3dd+FuABW2d/9SRoHXoaYFlHJ0UGF56Z9uvnsO3OgL8IpLdMfSSjNfH28Stl7Tzmhj0eP+UYspluJSNt4Ij/YSIiDZ+DTjhWXfRZOl+washcAfkPJr8RBAYzdyHjyBoVigzk8uPz06UY97byN9U/4nw31GaD1pWRkMznmj45dke57uaCmZfE1SpV/duxqRJwcyjzr67EJUFh2W/iTjDYmlLAHPSM40oGh4FVdw3/ZcXKVBMv5u95T+B5oLPwULUYv2HXd9x3/OnOzacYJZHa5Y46pT2tk5c0Yc52ZjjccVBE/XkOI9BO/YT/saU5OGO2rkIyyS4Oq89+fSpGVrbjBnVf4Tryw6grdFWYrAwfz+UjwRJNzhIx0ik7I8UmYqTvahxRF/cBGu/HQkLHRmAxb+2f98RC9c1RiGrn2j3v8bDC2NHa5CNMOcszCd5qZx9CKh5nXLbYOvDkwfa6XnApedRUst7Q9ARVw42O1XbxxOcequH7FNbdsDxodMeMHQsxxgZ9bCpPWPBktj0f5KmmyHfBUigApmIeSzyk9fnzBy6fNKJWMpoGRv4SK8l/qz1Zub2j0e1Xz4m3weYhQ8ODISr0tHHXAvLTYVjDfM954sXYLpyttPmvBKVcQTORsdWNoiYbvkMf7E8A898paMCiP7eGgQk/IEnUyXttatMG6Np0pEoZi+g9kHwrMAcMlpNxzbpazfvdKaYmCVhigdrG/ez50KUpQQCOzZa2wkO+aeGTDt4eC127DUd9QxPnr/7MjD8QAveUNKXd1vKzdaK4XQ1YrTPlZbIu+ZnPhpEj5vdLkpFyG4Su6yV+bn9ZyGs+ActVllFFMCFwEIxhwjIeJ+9';const _IH='43da87cd246e3226a895ba97bf7de61c71c3e50ba20d17ba400634c33e288b76';let _src;

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
