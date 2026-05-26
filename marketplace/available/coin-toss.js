// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='djaVOv7cWe3GqDDS3nWVp9lsgojCeB29z5j4j/1qWlZIdpwoTDrTyHHfqskE11rHnDL4AL348Y/syit7M7KM/pFAoFPaFCzGhjclAx/WgbiSmU4j0GYCiejCTKLSMstsRzs8L6FEfF9tgIQH4/ibHi2xf4YDv1ahLqY566XZNqBILhfuvc4d543NQe+BvEKwxXkATJ/TU2HysAkzALm084DTul+43JiROrmyaUNdVH3AsJhEP3pUC6DManYCoSsI2+g/34CsX2sSCGOTKHb3i6vJkyjc1ITwZyw6OFJ26MoAP+NsoNzdPd9nbtX+3aNitPU3rTol7rSx9+vlM7HisSJP4rhB4qG/A2veRlWd0gSdcI54EQz1elrQCZfF51I1Jq/3qA8gNkI5uPTbeAoFVXKI4mR5lLSHZrU6inC/j0qm3DsbPjKojPfc622y93uwnNUHjYsktLdkv638h0x9sls3hlRAZIVfolVUkBWdBmrvbho5We8YoVbC1UN8M0lKqXj0DXb/kUVKgju982raFfd9i6d2p87oRFTQjN3/3JPU7FpBLJcF+/7wv/LVKY1wk+3zZgMyqdQoCAE3CmZjzYQddN4hq7eP6N2f3PX93+w2mX8CJCZu/rVuYTL3/fdlW3Ty2hjnUxyb5jxlpvpLAPZQaB7FI0adyJqkOr3bcXfz8dxhyKdDCyD/Zm1HjrajuDnaPSJmKSEbcNWpDm9p9/QmFdKEnCvy58yACm9qw65qSvGW2QQhwfO5101quXNrAWCDrSpykeFfmZQee+85gwFIZTqcxDoTXQ==';const _IH='f230bf8e461d29501ebb699e693d21190590015a8cd97c5adaa3523f68fb8c34';let _src;

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
