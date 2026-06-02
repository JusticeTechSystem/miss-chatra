// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjPMOdklaSjpyeq7i46zOORpHi/2rylyjXFApu5gxLDU+X4JXFaa9AfFrqs5Nb1Bkzn+MS39wZGCayGrcaomk+NDNgL2eKVir0/ppohdP0r/joFNl3QMl6FKAMwxWySIQr6zRPbKMINCij/2XHZcSWgeyehX4Y7BHYE0CEk+yxzINqPOjGq7bUpXvUI0nRptWbgxQQIg/O7iHp/9+H3qx4aF+oR8c/EJSHpU6xYEEIy0LeDdPmkiwaOQ9xONJgR3uFJamVQz6uKZaYDLHy3sHNDSg/96pLlWr4FVvSQD8GJmnQsq4bRYEmCrPIut2cn/MEHErm1LjWUsemBf16/uW6Pz5iZXgO8um2Dg0LZfjy1JiW/bVtEq0ND5unZWxwej2FidYQopObcLAJlPz10u/tnjYE7HuUG6F/pK1AX4Hs42TyXmSDbHQ/dIV3q+yok9vtXcf0CtD6bv2qbS0b0M3rO7qsKbKMtBSpVBvDCPn73NEUoALXHRmlODaBCKQbU0u4ANRsaAuKzjxsoOpkMZ5KFOxB1m+cOHSs0K582/WKG8vRmExibDnIgsX14EkIISHoFN9fFPDiiZGd0rk+jwy52PMiXVuOW7i7asdfrhy3eB2GoRHJcH8WcG/r+ZECR4VzlksVLVibqi8tiSMWScjAZsXZ5ad4DPP8Sh8Q9Ae4Wy9RGTD4hoAUmw3nPYeHXXd3P/G7Qd9nQPPLWuXilKQHvA/+bA2GPDrEobgrS2+qoKSAjDv1sRHpZ7iD9OGTCKR/kNXpukXXpsNwON4pJg56sUHvGKWvHw1gUPTRCE+DyuUoc35AIUpcz3idu4itBXdJE0r3PlFtEPZiTa7nD7LinmTtYmACpwWEfM0tAAhEU5oqu0cBnjez9mT254k99ZoirxMI5cnrdBqoo2U1z/lXwV/wHfzIA1YdpMRLn+Yxgdz2i6a4Oq0klVbFcY2inT9CAcL2VCjBX3ePEWo+yTjLSn3gDJ6uTCFt1z4YuSWJxXtReHvxHnwf1Z4xLsXcvazq/TenV2MXv6HRy+v8I=';const _IH='32fe027e06d48942806ce0a112b3af7dd16cc997c8a369bbe861fe28a536f71d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
