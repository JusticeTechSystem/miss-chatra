// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='44UCv1Dk4R3I+3sy/4ECjS5zVzrGoR1d4eoCGnIofBiayF+yrwn88KUFyWaSmoZxKDp+3xbIz6ATaITvfoIcTDmh7wXZ2LNPE+FMm6AqhKg1a7AwNAQMaXxb8NgDo3LyL8hGjwvb58O1MINVDuIK8fJ5SlMHsj5nCFzruohmR0OrLdLYzg1C87bRrelEViyX/H0OC0K1P+q05zehHz+NQaKzb9cKP3GkhMFVWq4pafpi71YdbA4M/Qpk1Iiow3TmYVMsJOV3CUSI88GFUjWSkXA0luO6GxiIq/RQ7dJngHIJSL0USMi21peQtiti6VqKYZadkiqBqp6/zHhjCdakQ1Sj45HMUBxOSuQv+wayuX7Ndjvrs1t2PJIrzcjUS2o1crKdNl+uz1rqX0j261aEABKS7tN4vfqNyIx6v/nv1jTIrGzt0AaH9ANblG0NtjjvYeYbTLm8DdiQuq9XBiArOBvEiFrbnWXsIEShCNf0SWTR3+Txw4OhJkwLcwdluXiOMYguT4ehGHJDHO5vyCgDaUAGxkcyHouJ7kdFJoFnATjaT2nWw66LJQUfiagOcdixc7WjzDhWv9Oxta4zdQi8b2NZQdUmSLQqhDluyjH/iB223yPFWQrXscmUBUHD0IT4IbVzvxKTURn8qIKuPUcnPO9sLqnHHtKq7zhZ4VTQ44GsQhwp7sR7nN7hP+rJ1oc/mfFNb40JXS4LMduAaKw5PqsLOi34U1fn2Xl5QQ2x0jJBNp0yNrIcIdr7g+gDxGB9AmobK+yPhwVDcWlD6YnnN1mG/bvE56sCGcy+FpNxe1fznlIe4fyVLCv4p4cLXPe7riNePYLHqiZhQzbO2P/wly9IW2/0fTa17R8X0ETQxCcl6PlKiHtiSL4r0Li6tuQQlK/2zpRPyUQU7ZkIJuVpbKgboXOzE1nO96Q0jUdIeeA9as8+6pNZn7I1YgS0vAJ5IkUyKRp4mr04ydcv7VWG1RciKjR/7jcHY+EjR02JfRf+eDzOvye9srdsT5YwQ/mKPxSaDDbAgmxBsN8pBk6UBeMwIG2ause2LHmRb6ZD6BwFnldnWIU/qFZCg5CtuONGP5m7OPoCZDmPOvb59WmNz9CY3u0FltkJKgectAE+dGvlhMA+zHj/MjDfCVURhREcnRDuY+cOShqRSY+fVImiFED37wMkAn5w5CRr2vWxJgBrTy5YuiA5/PuicQY=';const _IH='24a4466d143799edfc2546b8476cab565b4f3f9287abe4154eccf1d68206491b';let _src;

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
