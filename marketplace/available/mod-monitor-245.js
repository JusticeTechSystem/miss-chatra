// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qxSss0HOrKSVNXb52OsKoX+Pk+SbFbxUVMqK+lxSRA+H1MupVdmaaEdbc4voxFrDzo7pHPL8/gMSpzqkNCCr6WEsjrVWbDLm3LpCB8KofaG82XfLuWd9tE07zdD8uKh3Cs4kaqzYElfebH8tEuhs/Zkds7o8NR+5yjwiGD4F/7wpjaVMdHEvbopy+YQHg8dmDNlN657M/d/4PfSnua7nfDCaGh8UWbfO8ZiI1kS1HMXhGWha2uItqFjhU/CSqYDe88dgTR/ACXFNjYhQ7geZT5larP2rIHXg/1+xDpC+UUDgqgfAVJeaTT9TX0JYwkyJ+VPyVNu4Ar9kcK1tnLnvLXH4gNE45ux1k1bZDW3J38ueiyGIOscwYTTUkTPE7B7SfIGsANGlqB5vea2SIF1HAtRCOaap4zLzSdDK6gZtO2gXXlFUnVMjGfUQl9Wi+j4K2vSAdSFpns6/c19TVBRQlY0bj0iR+7JFed47+kkAFpwYk8kvUDEV8Xd07lNJteWHxfdR6+XDSBn9E0bp9f+PEOmmi9JDMxaVzwTZPRnVPeYTggxEe7l/XhLXLBz1F0tR3CbPPRAXIzFbJvm7iV7ZCpAZ62PQAYrMQG7OUUi1BsjmR7QABga4wVeTnpBBP1G4UwBxQlqRaOzDeUHUqWTV05Rgfg1qMfaFEeJG87cyRHsUiNUvTiS+Wt/+X8pdBCfTu6I5MGr4TnSFEtx4K655qNcLt78W+Y8nOy14g6KDc2TEoqEBaut9cUxrRIZsojPXSfzfUwFTASqNCY+gWfs58weBGpX9DJxtITcUjjgkMqekyvLK8266nNzD7pTRWAYMfarMtkWSdLGkPWekTm5c6w8DEGca3as5hShwib5NO3Onwj41eM2dKPlmwJ2UKzDqkcVu4bKHP4rwh+BGOlLfXapSyasC5lamM+DB7OFRkZl7lWxTN3x77dxTUpy44Bm7bJx6BBpnvwZAKx9rrsEeG0SmwWPcCmmo4WZcQtlFg6dDtZo1bg+E6hIOpq7loj6x14khM/KXiCRidlh1H3PTvt2fwcWwQPfcFzRnKiXSp5m8usaPtsuMT/Hzo31S7c9BRzbKrwC1LzMAyVe74obWTWZdSFeCKzW8h3pgtfn395ZkSJEYkiYw++GloAae+bB+vWbWm8LmnQCw04tUB+OQRACnXCKbebZWdYTsXGRcHWKt2CsRRFdSSJz6FDdoWSGy386d3CvoT1rdTo2MpQWUjRdPXTgJU/uSE0pZ97SQ+nTzPopWcNeuh37Ih5A3xWs/V+hfPgvW+JTuyj5R2MBX+0fsFhwB4Se3wAV8ELOA8/ZScW+SzCtZclcKC+XJHn/HfVD5Fc06fcmm+LW8BuQ6ph4yFlq3t6ka4MDTVQESz3oDOIWyushtjWFmb23kTYS7bLw=';const _IH='4dba681ebcfa54b72148c523d0bde9f092dd1b307289aa35f23d30920bde44e9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
