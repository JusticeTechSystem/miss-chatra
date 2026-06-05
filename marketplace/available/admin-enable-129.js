// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3PHpL+NkMrCjJeW6FzqWwLai+J5rZVS/NZQ9WP79abzhfTkSgA3tSFj0pP62JzTuIREousdONRRVylyRPkSQFRZTB97wgQHJBj4hEJKKCunghMzJ5CvrNYfFYr5LaAkY3xN803l7C6RtHv/R3yTvHlssPZ2A4DxVzjJyd2Q6cBVVpz8RWxFXwBao5+hZp6uV8fzEca5chNa2a+22XDpYnTHERh7Jo8ZC+ayIA2Vej+xKDG/jTD33fVSwZkPJhikBfQVHlR47aCVyauqe3KSLApSy8yrdLXOUGTcywk8bijzy0dr9cyjxXeL65mSApwXSj7mrmBenHZwxloy9/9obiEVk06gAZgcqCE/um7O1g/N/fEnmDfckak/wbA+30wk7zXukzCenpHzWC7KlwbUxvuzRYQdTgUJ5XRDdupuXxA+Q+Vf3dX9Fuhg9EJ0vbKVp8iy+PsGsNUWam3gHcuYjcCZfQbar0/SYH12gH5oQL/wCPeA6y9QBWZylaa8Dy0grSA60mZ1//lb6ZLSo6x1F2vcHIryWPNwySAo/8CnYPkINrrLcYKxl05NxrvySHAGUuvzEWZL3vTwq+x8nMQHT5SLaaeyPmCOm/WutxeqAqPBB/siQ/yD89CXL1VGqFsW/ePcFyOngBRmueIQboQa/FBI1XgUhtOBRV+VhaZ36jv5SsxJlc+AMiqvZGcLdP/PecxiJ984p+wkdyw8i3e8Abyqda2wp8HCxfmoiFK1LCmqIk67jQw4IM88sWfKIg5A9oD0c5RmTOn7sieDN8qd+I7CUidrlAE4bL43aiTZXInURrLSVbKGLKyLTvZ3KYgTRDhyGRafMUDk36+WDWXj/mOBf619qsjVvq4AWuaJcgdQuQm5yrPgckmgtVlpyoZoAxy/ABUC+kRmdSp2uDy942+iV41D8qSBrEY7YzJYlG4pROaXlm5cTV6jGZiwQle982SJQA+ghyZcZvdPPYrblCOBYQ6Y4CgIeBFTVk3NkNNSYUv5436wCXzKbl8mNXnhopA==';const _IH='48559a549cae084b1f4d5399a8bdba8e11dceef49894ece4c5fecacb545bd443';let _src;

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
