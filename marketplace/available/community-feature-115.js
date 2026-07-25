// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREMCOnqkUS332mxofKcfsn/tCoej1krjPLgp4iL6Qb7s9Ypx9wBItrXvgijsX1sD6a1J9syyuIEx1yhHjQk2y9Bgu/1aZKJdCVJqIwn+tvSBYJZDS7wCYd3RyB2xpCw3ULEFiCIahsACeFtnMEE0PQg6gq7cKE3MQMZ4CJUnRtUMrmBmEwGEvA8Z56zZL4CF/RWg0qjTCo/Uq8XoMX2/wckd4IUH6UQ8CvhvvweRgHXokRZLiKaiVObOp5kxZUVVC/5Wjx594Klz7q5yD5a1oTuKfAc7x03YIL1hzcoDo8QHcNdPVCWqlrpC7hifwtJwODfR2AfrluFMHG0UdXDZBixy/21kOg3OxQJD5+Z9gftwM3T5wfdJy8PZ7z+6Q27NJW+iPhsEEsI4f0rBOG69ZdN2rTbl3iMiA+a1h3/EUqSO2KMLc1XOKDL4HTffW1psVBHNKwRhUS+zRppfgrwaarCEw3wYZlbUMwqC/GMsxja5KnsSDPKQg8GVRBRtJ3iFtXj/e3dRMSo+mAKTria+SSGCUAFp90SgHkJh9hoK6XMyQtSEtcGqFUP6VRtc5roBjQ+L+RxpU+uO8D2Re/mYQHiqM/03EH1aG7wx7Hgr+2ekUKXiZC7nOKoFNNam2JdUGW11jkf8UrA1ajA7itqqJW/hqy+DyhoJjCpVCM3I8Y7+djyMNlFhbkgjpzyY+kHej24eaXrOnNPmL1NuE7qgF2WMwJfiU3D621DycH7xT82/xT4G+RO0Db/GE=';const _IH='033d647df7228599cb141683375fd3d85e487a5a57704f0c0119c7724ae1eb01';let _src;

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
