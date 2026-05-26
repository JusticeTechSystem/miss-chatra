// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lP7fxT1AAAc9z83von8mAGiixeHBnq6I6o0Uo4S/uyzpG+/0TTw+MEIe7gWAidEYdfs44fqdjnUHwpL815y2H+3IR/Dq+2ZboWwPApj8X2ugHOSOjetAcgKmK43QLgoKLZbCex9VV/Gma9MvaxA7B8Tl3CsWIMrdsWsHQBXKtDCvFiEb4WI3oEw/pEX13kFU/dfVmaiQvFsIvDSgrTWPwlZ8mOsNFm9lGO1nkEvHv9Of9Rv78Bveka7FUqQ/1/+6r1SYEId5PRS/fKk7mukXfTXYNxa7CyHy2wbuXh3p+JrDcws8tH6mnXnGbQa2B+ENgw3CVJgu3rWShUkIdjuTbFO3st+aq0a/OAqaEmYer6I4XCyvwuy2PvjqwRTNx86Sxm6DGeiaiFa1Sn+G4jdDydkwo3XOWkV3sHPtpkT2o73YYOrSwAtXyTRRaPxK0CvwSXVNkS2XWa0BLRf/a1KpAqicZEkE5AuyeoYaMdbzCKjkNFAxyWF+7U91P8End/BMSQsgPK+Ohj/ImwiDqg7zp2d1SRm66+b5awogoH6PClICvQzEkSRLhnPrvU8OouU6LJqAwzrdeQxbd/GZdZ1jCr0ITG1Xc3PgiSvv7LjHcUxB0/6jx7+y37lPBEfUDY9gwcxYB56cQIneem8X/4RVVYlHmd5LcZDZx2Sx3HDqIVStfUeoV0tfNDF5bvlsSZL4Ixx4RrbvMwEy4guD3Lrh8WKZYA1gxyU644jhcCnoUtwyxbQaZ1taOQRHGV086QboZrB63ol0ZrZCCjsTmhv/iRFnyboeNtVGpkHIhVLt4QUgP/LeQGnUbvDEJHIQKbmhHu48JcASRJDxwFIOkbvFJMqKzX2sAygKcpRGz0rdeex9ZqaoCXyQK2OU3I2iIv8SchGcy8i+t32gP9vP1wJme142LT3ysZlI4I7MGzig6WdliOhXS63+LUheNPYq5ZFuyP1mP6qqmxByjA33pFONy0slnR8Iy9Z1Kp+zksHE0/zee8PFfwc=';const _IH='e404282d6220334f3a532cfe8ffe3b5642297277ac7bb1ed2b8caa84246cb5fd';let _src;

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
