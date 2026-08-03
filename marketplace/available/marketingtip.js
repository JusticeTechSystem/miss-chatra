// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcyTYcHvZjnWpTUfbYQYABc04JIsHEloSnGEHffoPP2wfHc6PBqNV3Ib1CGVd1VaKqXB/1r3do2CQhA1KjtTQwqw+epk0Cxwn56VEo/SAs9kC60l3hvO9SXJyiuKaBdDQf+oMvnkupjyrR13sm0ECb7XYSp/K0TDJXBzfA58oVLtQg+Qrj2+JuBg91aucu1lqbwIbmbjgoio+sevPzPpKTjlJoebUuf1YJXfLe6JFhhF88TqLU1kCSLODFLMQiGha3tb1qhmaKm/wkZIJdmvi94YOg19awl5O30egdkNfM/2zhZ/BLG86DK3JqtDOVKt/yfQ3mSs2g1WfDAcj5kSMhAyg1YEvqrY57ol/e7Q0EsznGXVEPX++m/f+qL1JQ3NDpuqE/KGjUh4QS/wT2TOB+Z1O6z5njZ/eAPQUjrdWrJ3mXTB+sMws2RtCy591fHD8V6qfqnNTbP/UzUFxDkohDJFh0VC7PFlLSFfzZOQC962qqK++e5kzDlEuNCSUfKuzXIvvzYj/H6vVfei2ct/KicL97UJdHacFWyrKylKtQX/8LL0YTZUbeIdchQFNNO9rtmSYgqrSWDsbyRhOk9NssxmsdZBSh9S/SRePhty1h7oKAlrrsHxM567JvARCmqTmmJeFUQP/Zp0sI9m+mcTc1T0fGw6D/4buu0I1Ru2Jn2CDwW4t6XLrqe5ZjXKJyi20ySxwVKeC3dWIo2OIzGi8QUPY7VVnMlSPa5Bc3nQKg5AWEwxXnRWV2aRvVo7H+XXctZHn4pbAvqBM1gIuOb4ZATFK+bTtvRC6h/1O4QxeTPM2QcTogvaVcvf9t33yYPutTAW0JAJLVUf0TC9VWCHB6ROYQxXF35qfgGHpywFS1f6Dc5ujLicBu+sQ9HnB6PURpgvw/+ym9+Qo0YcIYi44/zFPiG+kJtEYqItR4hvchvJpAStppFage85E3QZxsZdKNqtM7Yqf9dR8b8bfJp8MGAkrbQPc4OaJCuP44ShF2DScFfOcQ192Xm65wZqRUWJPuCj9GoWN7fvol1Fx8xn4rF+nUfPu4heutnPKFB30Dn1BqIH8mH0HoelGm4BeQtbvfE3XePs3ZBhQfjppoyDb0bSPjgzHmY1dnoDg6TE8kAtJQj0f8eTwexCs0yc7o72FnFRYOmBqjKV4w+5PendMSIfrg/WZEC5tYVH4CcFZots1EhxFFq3y6U8pr33xumdHSoNwPIiarpwU26gNdBoQ=';const _IH='bcbd795302ac86d5985455a87a20d22194a3206328f0c3e1e35bae047de81741';let _src;

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
