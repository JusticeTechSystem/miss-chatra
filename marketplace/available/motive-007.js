// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ySt3Z8J26QBTu/dDoWp30szYIyzuFrBgHd5CUMFaPM+lcczFWMEabuYx0tDzg0+me3J6TWodrguEIi4+EFBeJzSc2+uSnBjybcAVT8RPeL4wsiZ5FOhJWtxUedGu2MZPTUF4RnGmU/exeQqEfCC89TUQ8bSHnfQLq/vsHAwPzqnVDBcnIlsw7WbSL8RfezCpLhi0yyFcIXfyUgCUEE/NpmhJuj59jUy2AGUMRroXyHSGMXzDQPkAcZo8iV+OVLBxvWQQu4SSBYT2uxUz4rmhIHaXMBgTjCmTN+4RvtkI3VTB3CkI/C9gIFqmvXSYJtKkWnZMUgVJpssM35c7lA86IffOIi26if6Ss3VVm8S3CTwfvwpbYeWMDBFsNtACE3d9oopVQtSMbucU+L0z89N/x/oWn9kzOlpnRmK3afS/+UxWhlWXtRUNI1jTfeo3/tL7fBVXuRHqCtm20zEJh+Z3XbTTqHsr4AppfOBukfVfs1Eihx8xuQGnwmrCCRpBl2NSUziBZyZo4jF+DHiW94RKTqPQmo0luOMQhtYmvAahsaXH+lNnO32Itj5wHXN2tKdh0IA8rgL51ft+GyACuXanm9Ki7gWxy9d/8ZJk/duocv+zFwuIvZjJFX9z2DFaDSzkcdCczyugga2+0Ri3US/gPNeC8YRDTfcaSQ5/Z17qirQcSJeJIAG2PGjoe/tV4HaaLJjYf45nYZ8dsQx26eOSUERXwDfm2tHQTrNko8/01IFBYoGmkCp5BppvGHC6pXZLcZ4y9tZLuy81jIJKPlKh8BIf1iADQxf2VoSaw9rqwKcSEE5u7uBzwGxTRelL9gVBBL5gNb2ipJY9E9RBhKQAkNjRIXfsIwl9zblSJ7qwvKlwqlx06Uxf4qhwoRnuN1pV+eAoCwC3Zn3W0kWuNbXtfgA2Yks2b4YPvp8kuzrkouA36G/sniAbyVOOW7g7xdZmMhk73ez2hC1HrxvCJ1lqolWlnRhwsqHDiPn5/22/6DlsIG7XN6SOd0b2KYx/FMkYbd+L4fFeasHYE3bYKk=';const _IH='9469ff7c861efab563a91b661a9731fd297981fe8fbdbce4685670649914efa0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
