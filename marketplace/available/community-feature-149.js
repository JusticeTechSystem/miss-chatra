// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ786TJfqO6sXUWIA8/+4Jl20McaLoQ5QCj7ZBKLZyxYXCisznUgUKS1lc6s3jmTV7/FqjRHLPqOFwwwQFjkxUfBemkwp487nPaYn2325Bt1Sqlwdw+FwxsjrFkpM2UeQW7kvQQIES4ire11yOt2mmWzVtIu6kbDzIR6At1Vv+fkfouBlIz+KjpWJ0IoJfCrA8OrEAnhvoNQjlCBpM7rfwl3akUBdsJH4ILK/krlsqYzKAM3y67Z4USUEQHvtwKpAXbYFtcpZ9Y5qIThP25e/MznLWSeN/N7ZWldIcHyAXQVeH4jcjMT+P4TKl45UlxOBmeIGGGHhI3pHiKcdXTiF4pJEI5BgDonFuIQ0HfYUfy4ozZyy3Oh6nC59dhfWMiTkcSGix7Rl01A+6hqiCaAdbcoDTTf7+QSmeGBk7PHECkkWDnHf5cBComobiP4QOeJDkGANud6Rlii3Lzjjs4YDJgUVH6ilwODB2umo36K4kENLCfNppE1wwJAW5vHsq4c/EtQOYmLj5SdpEAgV3hx2bByB7ETgDt5JyCriFHs6wQxo10LLlguxBlOa2L/wSzJZdiBsunPEGbcL0lf3fFBemGGh5BxoWIfx+bAa+eDZV0AHd13Pi8D4G9sg9MerF/ubWL5TMzbKQ4Se5yZH8YBgdjmrgsCVgYKgeJaGqlEJnfIL8jqte6gC9YMp6Kvr6x/tdfaWYfnSm8rpl8N1/a/EJlWjw6bf+PRE9+7pUfc/YurutKr1zlFQ';const _IH='cc7d156d72b133a395cf9dc695ee4122059682a01487f13d84af9e7b5d99c0da';let _src;

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
