// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RFV0eFC+aiUB0Rm7khZAU1lEyoeX4sFsi6lHYr3++JZSjlZXSYuBIxbrg5H7u7uJhn6NF8Ben5a4zXJe1D94D6v9UT8MbmJ5vPetluNhRhKq23tRq6TVXvlBrWaxCLqJo9cMlkfwiriC4C1XuuMkRi6ZAIB+0RcAKyZ/mywfR95Y0CukDjZal6UpTQz9s97smRGIC4lqdfKMlpPCZmg7ChrAB7R1TeMJi82pK0mUbksYKRUY9IFuLcOq1ootshX1W8r4Elc6n5reaE8XJGO3aysdsz1jK+4RmAOpSe/ukon4yfylkC9JOL4cjrhQ4yLhCn/SvGJ3QmvjhUCplpMkuOthKkblucm1sDXZffhkEYEuSGdzq+BjP98YdzM6b917DDEq+oquurhAdN1XXQIBb7rvNn5E1DymSASzO6I2NyqBtJ6DffB46G+iS5eAUYbZjqFBUVVbz0qWm5P7ojOQKNXI1seZ+s2YIl19qRPdJzH7ST5FECMpnpSmNdtJFvGCxkl/DdDMTIm84gP0SRFD3NXjK6KPlEOFujvIZUiYYPDUWQKSz6oC7sP8gBShTbOyHnQnH2B91TOgPcbQT/+jSqOWkupJIDYjiGUwzTtG6fPTpjw+flVRqaxLW/VB5ltSnu/S2S5IrUnNYvUvwHiQLR8BNNkZLXv9XrMCJ26v/ik5nytug3F3hf/gtjpMKfj5YY6ZqQ1Oxsjs5DrvBsf5t5wq5iIS+GmKSRmKlDtyXdfkIEtIv3Gw+D6xZV3Cf66x5m0iwLJ8iOLctwHFfMIGBkEzxFs/3IOIegA8JTfJVipXcJxUbP2QhzebE8pP6Lj0zjLHVrYFXmbya6z1VHlxqbBU7W12lxelNHxK+ireSQAZ9eNmwaDK9GlsTFKiLqvUAlzT27jfQ/xGb1xgVGmQc5gER95NGJfD46s98VzF+EJ8PlPYJ1xQljedvb77HlOuzz/d05ktNyIM3yxrappynNdCQ1vCjaWL/0kE0qddk5oM/yW4AI9GZjg1uCAO';const _IH='ab9c192793084aba7cb4ae638dbd7fe0ad9241d484157d7f165ef7d355bbd5c0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
