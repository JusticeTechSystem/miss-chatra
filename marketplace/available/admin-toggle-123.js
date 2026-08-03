// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNLpM78SI8s+1YCkxdeEwezqNM0lp9w9fy1pkT7/E/KfbnFfX1SMHWFvJ27soMgLEk0D7Ny7BY2c4gct22XvSFCTpe5V/vdGmN5pLFFB0NaDtNm6MaQpc2H4Nieq67HuZOuMlk1tn/cCIucjFbS2TLsntPNBt8Q+VG53fBjh1wlqhSOA7XPZURkz5/taWucpL5HQuvtpP15RUxjx/yZh8krE9LbNVHIsud8Epd/01+x3tOc7Kugw3v1O90aqLVyNVrJbHg5RR5QIi3EdrC9tE5RObtnkjeqFPgiBeEoXNtPLGOdKbyg6W2z4Kf42PYfX/i5hEZiA16pnZjTEJOeCe67eXwJHIp+K7FColRAatqgXj/073JyAZvjGcmTP1m1ddQxvnVxpz0l1wQZflsEo2KD0ELIqJUmkfhEAElVOUKKAcu7kEHU7EDyUHEcdnI4XICDB9UQRTAF2FHTY+JIzLun3eZXEJxRO3sZjKT4YQeUsTBDoHwSzGGTx2OiIc77AH9UcGZvk5FQFiAuloBhaCaD5s/voerDgF2RiO2jCHGHas28nPgiBsmCZAPvv5F0T2w3Z2RUwOMK/DwqPFWwyo/sc3deWWZfxtIfIULIbdXHo9HtlT5Sy04TxgxLkltCDO+e0G3dPoQJS2e6clxLkXmzuScg+1bWShnV40N4JFp9I5Wstang4zSgaXrxLKn4SaWW5RQ+kwaU7kdqo7B0mri7deC3vuOdvwT4wiHXFjLBWjGY8s4qiYAOq76Q7hrd53KQhBZlMu73fvi7jlTNyMVW3D5QPVOaTYZy5sIjZf5Sxf6lrr1AvmUvuP3SlJTeatZQhUzQKioh0mzqDPgoMUkt8PM0AEBh2/NEdosCSsyYwrYZICQKFrCF1samgSU/Mogynv+v9jqss9TxjiGSlKMUDM7hbmsbR7/y0xjRPUnhJH5ItJt+Qv+8eLYIP5ouF752Xk1MsaIqcLwad9hVAERNcxOJMPsGRk5bHvMV1eH0/sXTFP+Jv4JBgxUKd13pQ==';const _IH='a1402004a42c128617e25c6ae5150569e1867c61461bbd1641b216a2eef891d4';let _src;

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
