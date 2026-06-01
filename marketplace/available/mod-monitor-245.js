// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4iQPJW2r46AAFBjcmYwC3yK93V8roRIKvQJCsjBv2qbUFeI2jo8q+U1Xo7rHiHmkwXPRsm+ybPDoqaETDiOnuHIfNqkb/uMtV1p5gzvI1U2Tw8yl9CzSHdcgji1+zTkdC3mjkouzl0z1C8lf31hiOAi2sjk/r7zMk5YMPwd9OaLaA7u2UI08DhsT/csToURHeanmGYhojEl6AmkTAXZSo4cojDRURm72aY6HiXFIOIRjXNq5bmML6uXUULRoOquv6DTWeudFRb2fvvs8pGzkNP1LlOiVFxej7CtDM4ZPT8X2ucO5KVDiX4ZatEebPJ49FfhnqkloEsS/KbAvDSBX4YcebQziWK1NBjW5TfljzmUxZ4SrzBGP407sQIhlQel3Q8YLBiH7A0ovPHwV6k9z3wzXGUrStjNhOfOr34PnnYAhx8FWsBQy2NXSHINwFSmcDbN9w5lYcc2CAKh8wjOSDMKIrC1Q07ToO0JqsWWPmsEZkLTOTENJI2+zrOXIMOEeM/kQEalBYChPGvtGPvJ+ZYHdZinF/hg4kaa8ZpLs0QnaNT2l/SiC+S+SATU69hn4LqsHQGhS3sV9yOTL48Ebmypx3lS8Gzsy0R2CCcBPNHgW886RK4Pd9TgHc8Nkg33zlFlrdsVjyqFBuH8JRcxdTen6DJKH5uUudELQyRu17d5/VA26F9lO/tUGdFWCUTR242OpiaUcj+TKaGqpA0y7XaZnTd8qjhz4YC7fV8/i2P3KwxzBYQdY1m1owJSiyJ3CuarhG2bR/1oSgPx2NAnqIpLk5QNobRMEPRUBbsqDA0EcurAySudX8UFbIz8CuC64bsMtIvKPdEvlv5RxwUKCKOppvN74ovxe40XLQksgh8xAzkY+w+xSYxzgCEjL2JwCoGNdfepoLyK0FVSQpLScdN944n7YTS0dEqRBeU4Xpo4px2Lohkl02cLHnDQkbFYkunv+c6lVJBL/Ua3Zy0VrqPA7R7ivlAs/5oFuYVPF9WOVX4p1b6TXCJJhX05aGqTGEASBy/g6Ol2EiIIEbt5airy+FzX3RbOiNB0RGkriavYzzWlWAF5GV/8NOSkbb9YNVq6tz0DPqQw5FyIhgDXIMRKZ+FsZxtn3BX5446v6Yjv08elr0LA2Z1swwypGgmSRrnwS92tb07h9Ko+PX9/30gJ56ajqN+xaRPugj3A9787fOSicc2TcF5JSriZOD0indkDAYMeSeFkSqat1QxNbAaOilOphsZ3Z0Jm69rIMnZJEXcuP62pFBpFgihzi1Y7V0W+Gzuq3pG+1ukya26I5dusBpbH++964eWdK3WhET3K9V6KcouKxs5PRkpOkjITNOgw9NcG8M1dwao9c3GemgqMvr0OLfGsC+fYQfB/XooTDm3mLTiKN4vnzaW+qQruyIX3';const _IH='1c1ebe27022ff7c98fb853d7982881b9f81b6eb853d045a6cb48cc4e464f0eb5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
