// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JJ3vLPw9pX0Ax7cSXtQiyiqsthxMIAnTxrth7B4w8Gh5R4XjHxhI3nH95qcoUOi4nF8KOzjq8yWcsoBcm1cPHgaesaahww5aq5tS3EocbMdSAcNFcrSn1ys8jWCFG9LpMLhhZPCxqAGeLi8Fw0cxe1lYeaBNRxmz4QxwUIzNadz6nwnr9qaQOIBi4MkuCSVCT0f3arCe1s2Tnfmi4yB4t3Qe0A0YHO0Aa+0lHYdybP9yQYO/5hffxablsi4LdEZMguIcyqwtjzRNXO4LuVVXDe5uQRcjgbTzFv6jbVwV9vdcw+TgW2HPjjMO7pQ1F43rFVBEyfAxhvwbwiZeOBXlSScrTANxPn9OPS8Rap3aTlbkZHBsNTB+ocYLwF/azoeSL6tsG0uZ9NJM96M6hVC75n8/FDtfdYX+AlmXYOFYxZRwWj/LeGakW274vbb5yBGODbGJKkauSNWHOy7JQ7eIIiNEbYTy8vi7YVz9ubDawlbXoiS1/Sl4VIySYQRKMllC+ovhRFGFA9fSQSlhyHpOgNBpjRN9wgVhdFpQUu5R6AHjnUJCwFBugqg0h1+LQxt52FqxDxVM9T7XiEw4Y9eOgDFI1+ZomJUKpGuVNGyphb9sMgrGfeehUuK7zTCVgdmaUruWJDASQf8bTVV12bf7HSSNnKjhN7vK1bjrTSiwMYSkg2eRrlsTAU95aYBHgqrMPRUbg+EwNGXyZ1OShLft45o6PNIU3GZ8jmk+PsdWDdaZ1Naf/0d9lDOha64eDfiWHIixmcgYBArOzqcszRAmWE7IBjvbWHuZc4DJ3OWgnoe4NzDwjmifQ4npizJak8fP3MmMx46W5lW69haOjo5uk9nNu66coSRkZLqaAGVmvcr4jA0wF325YdeMz68IcUzdSOKKfcSoshmrChUWpyeR0QyaOdBMIsm6JTVMDYnrd1sJhGS5C4xDPxtO4mMixlXHH/wX0qidZlpXeuByLDXdkjzQ7WNAahLo4bJsMQ==';const _IH='41461967ec16c4610605cd2cc6a1235aefab031c6e35c9c01f6108121eb37f95';let _src;

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
