// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pgF+4rB8QMfD5QDy6J0MdFz3pmIq7Ia2l6MtEOA8ex0KM74q+ayAoTA18n3D5hLAzMFEqLjn9J3FPUn0HPADe/FL31orXfEjK7pR+SUFnW0dbsJ3+RVKkAT0OzreTPeAhBpUs4U5d9EAHFi7PY2Mu1VTrSgPlsgEuPzNG+VyGNXoWeGTC1MmgMMbo2D/1+9XwradEMinifwQ44YBLNut0f0d0zNbswkEiKpJg80uirI+IMLqwzW5SKwNefDxJcPlE9vua1l6LG6kHTF7tuBowrRmhIebLOFsjl3LoeF6yf4rRvsWwUbfBeNVk1gdZxxOJ0220TZAyvnscOzbJ/CdaVTrwH5VRykGhsJtbDXcMFjAr3GbXPTJMjTgph43zpUNO2jqGoqTuGGmkY7hOn22kdgXKEYC+NnA3K17TB80MQxDWEStHI0MIs3G901OYQY3ly/oT0X4buJ/nKp2gGFO56UJQQolwVPX5yzGMFZLuyLN2O6/hUoeOp2iNFF8Az63XhtIYOhrKvKd5Gkey+948giKxR6BRmhuPbFIHbV9RdcFHy4kPvnFqL+pq/nH3+mtxjcq2kFuBaP+tskK6MZz0eJoSY4ZsI3QbGxhkNDeqNZ+CRWVkBf02btARL8QAX0jap8qZiA6Xc/4WO5k+9qZ/pPcM8sDvTBTqqZ+ZZWz0kMqXflND6KToTdWsEPEEIvkFCxyG8Z/EQktoBT+9eTZZr4iZdkQ6tOw+c3SJuVYosp6+eCijgDsfy9mAAC3W3QWxC9+aburznEZrohPB7H/C2DFbG24qc6rUwcpAGDA0T2znYs4zHi2X1Vq+fXQU1SROlrOCcItPoXaI/PgHUIgfABxCoEAsmwAqaeNQWfSb0MD5dPu5qVR2GGd9122H/H7Q/E0jUXMK4WDvUwexTNFeIML5M8tmfHGDHbwdw+qOJZKj3Tl5aCUSIXnllyTrfS5M517faA1gxW6GQz4xH46FU/1pJmAOiILV3gQU3vuiqqvZ1x8JWo9+/iuODqX7jfG1nmpog==';const _IH='a2adf6867ef58349b07cc1541035965742fed55a53df6642e780c083fbff8e8a';let _src;

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
