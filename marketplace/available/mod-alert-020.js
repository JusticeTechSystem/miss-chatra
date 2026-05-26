// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='irUOnIYd1kQkPOvQU3MB4qSChKFkYVbTSiebB5GGJpyVzDRrwtTBlyWtMwGPy4V5+WcFRkuLBNqvzpccPRxlsBqV5aJ1dp+75oE+ODLnbPoQwpwpcjVxTXw0UhROlLmoVSY0TuDNl1CP65jHh8WDxDzEuc6+THaA2q+77RC69lqSDJ7fPPOoEMRryYyYsZxBikteQzOp/nnZIDt8xsdCKCoxLMmwuHiDWRYiuO+/rTHNw4qm0kWgmAFBFVXGJePeR2X/CCHeaXhCYFFGm1YJT3eovWth6scn8u+uNc27/bLRtUK3RBDZP9bAb63BCKi0Rp/DfG+/YhZi2uST+7Nw51+ArUn91aqttsAHXqxP+bSfATTWyjC3n4fVC8e0leH0TdbFMH/jW99H/f7kv7E+nvqhG7MB1tAMEKI4rmnyIPHdLdhNJqeQhUCYngK1m2A6q/X3LjiSWQF2qwq2s9qOc5eAiDZS2jbcJiv2X19JSGRkRIVSkSBtnZoEZB4QPL2cZm/lUmCd0NATUbdwEDi3PlERwTBzI6M3ZYpIb45o7r0KQ+Hu9oe+CIYolNTNQh6yyXUHrnEi3Gq1wYj/8BQq7RK8mA398qM4fk+w/MH08weDAIVIKXoWQMsBx6NU7qt0J+UjqS8uW413ZKom5F2rBS70haPPQEwBwvuzgX/SnZHi4kjJfYHPnfZ2lCYDZMt+JlzZzJXqy+aPQ18K6GTciptNUy2TtHcWXX/WNm0czlRenYiH+ALfIaCHzDSlyasTX9xUfRqYDtHp97X1AETgJS5KsgTwEQ0DOrzxr44rocXQCwDobCxLzMHcQMPPDn0hZbvEx5EF+HQgi/090aNF1+JoHLixESWkMK/E62YPUD0dz1oNph7BOfyGnGF1U8wuqHbveqTH2NTn0t0zPTuQ6FdgP5YE/NuJ8iq+Y4DR4p/ldHEj4eGmd2IPgHTtriQGwsymdqvMLHg2poJxW30qRMxfrcals+P4lZlfU1OyvpZk7lm7APPL5dUhZXdHsMgY0Z/WPR24Ixjc4a9eDm/xHCNwBsJ9xel7PbPae/V44J0RnBUDotZKn89SgpaWnMNDfJXqt4+iaQPKRmaDL32jXWn17baqdCCrWYQqDAmUZ/Dohppr2JKsaA7VRk/onq+yy76sxrUtmv84Q2mKFbXDWTlUCwc7CusC1uIZsEe4dzYwR33T2JET3Vfmb19g68IAXjFS+4s465oK+ugbZWNt9I2hUboNJttMqYijTWf2s3I11BncFDNkdzxSqCDe8q29Z4Jd+i3yfsNg0RybqE3VN3k3CZxhxxSFsL48crctjn64G9XAGo2Le0t6GWgkx5Vg+bWjDQfjJIAZWEDFh81E2vVo0HAvZGY13A==';const _IH='cf599f69cbbd56d657ff0f99b6cd29161e77fb09fc992b5b76ca1edd407737e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
