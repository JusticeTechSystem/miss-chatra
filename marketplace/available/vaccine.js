// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCwzji8A6dSBiINepTQPWg+pMevxVLgVPpEUq0LeT6Wqx1vf+RGgIwHncqZW+5kmlR4jKec980C88dPLCtg5y1jcV1XK38b1ud5WECIpgVGRaLrprmeZcYjq+bU1+2OSuA1STnMrQUwk2qVRfyb8QQtxcPBU8odvrqwSWk+yDmT1enpU9jiQxwiCCvvW3RFmV1IGncrtrI0hkfYE68rk4xh0gsAJyRfvCIPl2hoa2OFSwVnwviAy0YDyjzDSl24UKwD5UbUt/BWsTuaRC4Fw0CaUK4aobXDuOXqWlYaxakDpH9Cu1EVRCY9Pk+qSiCewIyObS8pDAKRErUCnCYwAoYnp8W3o7ncnWErfhhv7VpJ31XLntVXoBcPybz+L9s1DEGEowc+8aQ9tl2gpG5DK5QZWzsxu6jxVYRSm8ohItEFCIZ8IjjQ465vrcx+8suoxrA6daCdY14vPbAQ9GaB3MnbiibuD/EW86KK5sGilHH7PrjYUqX6z6rVkuLYXFr70mnKpjfMl36P/aK+3ItyQNIUUW/TywTpXvy6wyDOIPkWH43RWDcNYn2kfxqDASdzVWMHtNxbICMpToqFZ3Va7i59KbUzFE4yyiRYtSaWif27bQdTbRAGPBGXpw3/EGCq2tsV48EBGoLd5ZkWcPJblJO1UczrwBD9evGBiRLintzoyXWdpV/aWwVMuBmNBx33vWZFnCbXpne57cxl5n103ONE1NKuR+JNjWJRwSHGh492Q24/ztJjkS4fAYs27SYpMwIO9Kn8MUQW7/ZvcLXDp7f/RlLWMptEznA7NV2usBVcOuU7yri8nz1NN6a6onpYxBC80vIh6K/VxJ5nHE4sKDtVF0ateMRFf7DQjgrTCwKU6+bhiU3f4MM/Ir4FbfLg7LMCIIn590M4apq26+KVsWb33QDAjP3EDaqvWbgM3eZ5+YReeRO8D8Qad1JTndDj8cX/hLViVa0ULypzQHgV4CRBxQ0cR1+OKrna16JV8r6ACpZhi1TxaG+tjN1raeQ/yb3vT/k321nppDLa43cSf3mX5+h2xSJDvMxzJYgJcDm2a0aJZvyDAJdxRjmTGCWx5zS+2kXJ5Tupb19MU7rpC5vz2QmZJJ2sqVGS16IkKF53n4ZNvgZYlTxS6pWBCT5L5BLaUmX+RbRqeYBk/HPVvQK4DOxIgkHkdrAFFhrut6tKcE0SG3fQaJn71+QNg==';const _IH='fe7baff783e1fef1abcde61a8a3ae24bbb8466b9442a3dacc92102f61d091fbd';let _src;

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
