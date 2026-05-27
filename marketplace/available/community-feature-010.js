// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j4HkM2HvekzHrX92Uk/q48aHeqINBUA6c4dl8xELbB/pEuWbkv9fRZ939c2l36CHKHZHHeruiuImNzNM14lCcuugeY+Aj9N4/gLy7O21qyjcMdXJfSDCvJSiQCXQAR6FM1XOA3dyBB6XlEXJEMmF7n7bGcWWr7n8w6VnxztPWrulEqgb/mMtDatsXhAAePgwa225oa+V5N39wTjxUyqqR5V6URqvR8Y+Q5gl1iqEkDTtMvmxNcBMnQaEKa1mbkDRc69RdmXWwwoxXTEeXC33BpEpn8SMu/k9BWLcE+66hKIbQ7zE+ZBnJG1QNDtoPqNlXavBz0yP7+DHdhI1U0KiNnQN7HxLOK1qkQSROv8CBQnpxTe30M1tSGAp1pza5riCJOI8VHhKTN5Ge4hrfFshavsEzzVHB6X6oz1eAZakdZmmM14kkqkBmRp5612TR0hI32hEMQP91nkLfeIlwSsZx+goS7Y8UKDqyCogtzWcPs3yBcDUiG8T1SCYCRjMF3HrmEzR59p1DAX1F2r+YmTx1V0k1M/T/7AAR3LUkFnCGYR52/555kFEPTApYz7dU/oSxM5FwmPxYJihzNU9OPJjWq9GgtxeQeSv1sUWB+zrSkvHVK7RE9r8mSs+rVpyBifmUYIoPSLa5VsM7U9zIfGGpRZ3PrsDf/eSlJmAOGFSg398/9unzWme7hV848VxFs/yZRyNCZMYXvsDfkx/9Xerr7B47L0j2UmQkWgCSNb7HLvASrAl9Jg=';const _IH='47ac89a734dff90e025f337b7422f4a97577c2eca41355771f232fc989ee2d3c';let _src;

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
