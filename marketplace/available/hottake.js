// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4C6y4Lc9L8ZzMBnxklXwaPjp3IInx9jRjT2/evqCo7AN5WUKxpKDBvQhz4G3UOlCZbu0EEm6SSD6io9ePV2Sa0JhnT6Q5gnkwNdy2wfFkipfHEQ/3pBnAw0P4UEmjyMJBCUVIt3OzUajBPHE+2sUtvABp0QwPCMWYCHwDCniCAeg77QTTMsnPHmeNrxbT5gFDLpAHDhcRtqlDnVGDuzfiFjcDr68J0NvpzoVU6fkF7caIVep9AEl/fX08MfkWS6PmICy0skALy/tfISgJbrQ5dfRV0Vfbb4XFpZKkLnE19XOMy61YhIAeKdb6GiYj6nTh3vtLyNrJ8noQFq9AXfLcj96NLvNCsKYrjzp4s+5zIBwxyj3JnEmtknF+tLOk6e4NoFK3qqihb9aBHfW0NpAD8sBF+4L60B0W7+fvfhpPEO/llgU74gsUjQ+KCjwyyMrxspDz5J9Vx1QE3hHzRgC2dbre+aUZov6W36nbg4QgIqEGWF3SjdumhsgGwMFzVTQUKSLgFdgHTQQGQlKyknlTGfz7gnAeqvvGHoTR7vEgehQ8cRVFj4BSZoJFgJzYFNXBnbGXiinYFBAKuJ3VXsZRlbzzXG7ns+3e6iX1sh3NYuw6whHCKZC0ORTs/E+n5iPJNdwvEvkxnnZZTbuTnLVM402LMbRS2F2Vn6FzpP3aiyyohgUrp72/xLL7FyPX61cpinkQt0gtoba7ChGZZNecXzgFyBrpdESQWrV/6npk9RIX5a7t9AW9En8jSb/0kVzQ1uw4lb/ZpFGVunaNU7gyZhhPFPbzEPfAutmr7H0YeCjF/5DNUXai5HXYzZN2zNjeaKBNXP+MLcGi8qJvdU0QAfDfeZShxD5d+u4G4IoVUAlOso6BxREq9x7rU1sAVoy0HanL2IckSQcSKSD/fTNBnLThJJI/ALfDie4NXFsyu8SFmw72pJWycgZsN93sNwSxRNXjMJE4k8juQL7FHTZmkJxoT5YZBmqJBG2hHGB32X9GAszV49M4OQcWyRfKGXyogEwLgPW09WNUJrltFAfZY1NyXQsyRFJTfgi4WKwGkD46kpkkCVh9y56CP7ddiki7K3FHSg5c3zEaHkKcemJtlzsl9VwQYU55DaBwlu82w/GHDdaqPQp7DkKUMbxqNIa9i55EQGoqpI3zPYpZh9UGni9pSQ3tmeO7jAQQ7WFfvaf7YxTNIoqIddzkDMd29CBWfE=';const _IH='77e3eb1dde5870a1a0b16b9e259744cf7fb9d4fdd74841c4c7034d53d2fefbb2';let _src;

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
