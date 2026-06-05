// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2KNRxZs0F2DWbmJLS+BF9PEmaVcfsG1SAbgaJhV7fwlyvYAvr3K2ScAtoilwlVpp38N9zJrWqrlurBPom+FFMPIY+Si0Tt5dxce2bthe0vtKtiKRt5eOQXGkaFAOHJ/ZdRadv/nf8QBJBYxdq2138pfAC8vPLHqDpybqBoC9xxOaFkHU5PHjO9E7hEA0Hf1nlGSSFAeZmWlsLVrRQgVYZ7YW+aer6E7tqr4r2Hhq4niIjUZMDwIrO8eVwH5hTngrkfy1ee94X84SDQukmWZvdi66DsVtLLPl4dWquFqpqRt6Spa4GzPE3TeLi15UmY+lXmS3UVZSIEXsEZR/NucpCXoE6X4f5POX641Ytf4NnuSFsYUBpfoFHZkzEmCKr6V5fT02MUly+FOun13HdXwOnZibkH43KqWfq0z+r3Q2ceumxL0rBLLpQ1bJW5y7/YYi9nUO/dpial4Ix00P2CfHKl62RfK3KE21DqDlT7s2hMABNjMvRBzkOic0k5ohOFK6HV+nGkBHnCk8afz5yv62NGH4f6zR8qAVWt5aaIg9X8urWc6YFnwZOpnceI5QvvcS9rkevwEAoQlpFoCP8VI9kAm2nSqJ9sgGMGGguY7fF46KvlLqmn3tyPeqyXpWhUVcWv9AVn9wOFVyXaZt/NkLMnPk/mMquSNmfQugOUwU54MX41p/FRXmF8h6NmzZKLP5pyEDLVdKi7UKSZPlqz8pW2jyrBJt9q0B';const _IH='ea75160f96615ba3382f82234ce2b58fadcb340b6bea6ca265ed041291c07a3e';let _src;

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
