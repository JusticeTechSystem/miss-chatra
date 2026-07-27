// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9eMXTgsdKVU3Gr9Wc2KFD/Gz83c+79DwVLX+R/mLNy4M/ZPto/Oq5KWRMwW+b2CsiWJWYusFwrtjA5G4cHtCHUT9tF73h4D+y49wx1AtSwqxN/CgwjpAKCaJRuwbE33CBNGwphJdOHf3ZED8MKbR0Lcx2o8q5eGMfLfn97RbI0S9PfKRRxgGjFoULIAuQUNSsK3EdSq7pECKp28kP7n91Dz3uFlsTFPm7gTJ2n9taZkHhkdvjy+atLs70ucQscPCHe9NQBVJ04LxkxNKgO3B4YlSUAan9pOBeFek2TTqWQP/BjvETuTIYV9naJ9jlWfISGmVaUSQ/8hW/oeDaC5XZKS6eemBytBNO1jFL08bLAiUhVEG9f+1s23nAFPPunuGmzga/RckWi9mgcW9oxwSyBAKyQWj1TGstQt58Fc/6ObpVykNII2/+2UKH+5mZRX8vYRGZn+9DrcT9KGVFuMOoIiYIuC35F0fQA4IciXd2vP0EIiRWWhQkobpVa7Qa8T3/2I8t1bTlBiEaaT40lW00X2hdv+DC2tshLar/EvPxE7cBw9R0EfNLCYd3ql8NyC7eBrVppg8R08vG1sd7ujfLUNvRkoQO9Qbqkf9tD2V42shNt2CnxSt2RM+qV9vGnUC1KvTZsihcysyaxhyqngkx0mYpgOUNI7mWisc7kaGNfzl5GBm+dgce3p9xm/rfn38jxLqQUnIx/sibNBDb/z/JfuYYlT3corgvkBq4MjATzLacZ4TSHH2EWxBm5h9sGciHDHhSn0BQni9S5rlhbPh8jaqCm46RKr7u6cdsRx0hPdFHMwymE6jFm1m/2kTgw/RbSXXwjYcW2Mbjm8kOyn7AXKUZ5OJ9OVOa+o4bOvOemm8Sw/A3GfpkT/6nwhtmPXjqMv0SA1hzgTXlHlRe0KBtnLm419Da4JwtTLKA39pgOW499lewB7gKr6csl2ffbcDXCu6W+IqftvSM4mk/w9llColl7FDU0GrHpyg9mGlDOL+lNy8YfcSFlyRxuBQaf3/QiqQq8Fjc2BaLn4/DuECJb+4lrH/6wZUOzgInGYclaIKzL0xEUHetWp1BzMUlyIUW9hJjBi0Cj78Kl+oXKUiEFncQ44KDhVIoAHNarSUxuKtP3c1s4JeNGvR6DEu8jqQHlpeA9Bhj7dvNjSh7a4alK+Ezv0gRp9bf6SeiOf2pIsbNmtRAP/zcxbnaqbl+Ax/1XlSohpr8z8swtHFvjxhjsQGWENOhlBiFC4kryitBdSl7KMjLBcBc1013yvG9X1tFpMefibxpLZrSrwSYUvAd6ta7O0Eqjo3IuuCD3hgnTu7ChcX95QzNttHt1Xgh0uq+bRD1ecjZrLavwjF3uTDRLQJOzRtLf8DIXEdKKOUcjH5qYT/OFUoaoCf4hhxnQohkT42+3j5LYw2yDPsJUPVxXmBeH5mgH0P3F63O39YmYQYE0GlnaJwl4yVKwVI13LI/+KxJ7R/FyADIY7tO2SBdn9HzjNQcC/qMxsjEw03HzkcKLfej7WGBZQSumLSkeqzuSbUbg1TQ7Nvmqx4Vm6jdL2r/BRTDtHMnSHqA08+Fvg04JfXmTmRC7NzUfqI719rI1phL5XRkDS8x8Imsp48DxKYAQsWSp2BoJsPtH3VL4HWYeE4r1I91YNWmp1TQ2bx9+1Bht2CHNRCKwZcyRhB4C95sm3eNi3aLj7PJ5CvivZmQucEnnOihW2w=';const _IH='2eb845032209d7956277f68f0be295a8a475a1e66f53475de84dc061372210f7';let _src;

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
