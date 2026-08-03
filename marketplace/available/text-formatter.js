// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEVCy2tXQmNK7DrEIpMuoND83+/T4dgCRLVDJIA/wQQdoN51uY7jHWq76t0QSj+TKcen+8UARCuyiyYi7vsA8ir8hdGETHIGWk7Uvc3rXQkPvVG45jnNsuJmBw8GO55WHFxv96VtE4hWeLKr+NgvVI4L8smgfB8MBMk3TVGza8nZyoxSapBzEmJG2v6qHLXJyofsVB0H+CithQa9pv/uaFDIggsfcSUTOB6KDPI/MhqiM1Cf7AYxbH/OqAqrbFb4Cyyq4VAHIE/Pxep7sEzROwzKC1r0tKELKxdh5OwanR+hBmpwI3T/FphYvSOENo70xmpHFTEt+bK4f2Kfw91iqU4gzsulBvvxhp5+B/diLLxq+XpNIXu6ag3RyD9sPSYgmXSmpok2ege1b+z0eLphHTR8EAuhn+o6FUtiuvouSrQQ84j/7DuVRLiRW2C7Rb8N9+fudnpOMEgdofXn3yxe6UxodWQarvOCVwteKbImg4owHn/NieiGywYFtI4PxJUPOddD3e5xiUDeJDX87+gwMrI0rqo0tSgXVVadq16B4R4LBBvPn760befpcH8eq1n3bYkokvAaqGRcS14Eh856EkzU3Ty/LpRHroAph742oJc7qjxUXp1eE4U74mj+wX5mGb7S/9tlJp1Y8c+BPqiWJqrlRLQ0yMk94Jkyldszy8Nb3i6icJLsseBNp5mioBYfpRsVuY4DAUjeE8+5C62d+hKOHwTBKeNtlN5Rd8VSrIdQgxt1gPjpsPc4HkIfx7STDpA2vTNzDUo7b+iDOI5gjc8mRkpY4N35FLdICWk3m8LcSkwJ6TJ+4tdfkpXU+gb/yOR+t8Ex9ZU5n3IZk4petOF6E9w3H0/CKhQR7DWdbV4VGMxIUNnSjEYR4tEtNxOnL4G7lQIM5Qs7+S6WA3C/EfgPrMWwWip9jNEXYAtc0NUmtYW/KgEonpvPLlYWKbyx+VnjELVRcWvHdD+L/SZzlU29XN8WtU3X/IKp7rHWY9390zcb6E0Gbll1dqPIN0CcRP8VO81iJXfpvM98miXKog3VPuDzhyBlPdArOFWGusiscopNoknIW6NBR9hINkdBEFBTp4xMH6IQfWH78Qo6ym8DpMH42PUtLBFDeZKQqNnFUkxHZtim6rR82ZJ1UK61gfwTj8a3J2p/eQYm80g2G/v455VK0LnHpPtgRXcvwWhL2EFXNONAeBv1AgpTvFPwS4USj1khbDMrtX4tEbaqnGWAsBPyvFLifzZad3J+yNm2BHmgR24TBpPkOTtKDZZX+X8sPZYa6Jlk94vKJM1DlvWj3oZrLqrTHGPH6Q5ZPxpHXACqnBy15ycIbugUaexr7PmVF79OPqZ+HOUDjOrtAYMyZ43n8Rb+htTcoEI+ryloyrz4l6BtUodnRCQlmF8+DX5JRuP0IJ34yKC8TfhhH40dKL3bv2cT/MhkcX/MzDGPfN5GjoHYMc0hgD2467OxdF5CQlu3H+qSJ8F8x2TrSCZK1JNTHUhMCjOIOun2zNZ1BMysavMmtEM7mRZveTgIkHypSHhF43C5F4PwqjCzKyyrqSkQzXm+8uhMXF0FrGH+/ZwSzBHphp0aSRX2sMtxJtVSU881ywzDaq9Mg7DDJhtjj67KXZCVtX+BT82ZGRfpI/z6VwZvFVSx+uy7IZy+C/b5UFMqY=';const _IH='1e12a0f5fa69a31cc562736ec9be7b1baa79188e74a535cf5c9a3697c56a6d36';let _src;

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
