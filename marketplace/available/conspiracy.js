// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KsfdWvmvswYc+qFWeZ+7MKzchv+4vO4UdZx4t6scKr7rlZbjTdxTy9qIvJyv/G4aWh0sSInB8Wii+72sRqRuClQwfInSBpGxzlkfO2etVXVI2I5H1CkYq3xnfKfig/s4q2I/z6Y8fm7WFNf3fFGkxnIUWfAbfNPqEqdYUG6TsxO2OOFSrOAeCElnE5EQ/o22n2+UlWlgndzyuAX/g4Znl9gueLll5UxNdZ5XGZLCQVHzMpHhKueUw1rAdh6y3oSwxghpQWwXmYbmo31eFRrFUC4y3hC56bqdeLdOGIPEGwPkXWuC0i9iljrNVhJITknEmoMVn1WBAueDTLMPiyvQyvp1z/jNdyu4MZDIS0vw6fZnrBhBJZXEB62Syjw42IrPSngbXFe7u9JrO9OIbZuCMCPyNoUqDw4ne36kV5PtxryOtM2q+x9VbvUW/VXdRTaYuFNoiJPb8dHIDZJ2d58BLJmi5xoviwUKj7VS2QMPpU/RiuPL5h9tDOHaMXk0xtWpga0eml1PmstLW4/+uattf5COjQT+zGPUk+UDl68Y+aH3M3CN4w9EcKwzhhwNmC6zbWOMv9dCFqmFXIcMt+AluW/ojHCaOkUNUrLBTxcw7tL3fh0pIXXELxr58NP8/UlzNp0RUQzSjqZBpfHanXacCL0YlgiTJCX/ynXTpGKCtKpZ5vYPMfC6HV1Q0nKxDC36WQRKnDHDMgTFqdzbmaFsZd13Bt89OE6hrAVR7xcgJRFE5hurd3BKi0j2cM7zYEnU1RN0W7CpCj/xAXiBf1a6bZ7b4ps+qAAMkN7LULckpZLJbiWc1vq4vVMqF/jU4ZgOnc9ZM5sUNXLsCIeh2xpClvcsPfUcEMeQdl0OCI2mEaBbPt/LKs3kHRehx+EMWhfTEbWtqQEo8XfI6SLkC72i+9JhsrsAD40W/HK2rD3oIfYxxzEXJl65ySqQk2i2RlAYVLLRNoMw5eZ2dk0V5y/sZ/EM3+vAEqeNABx1ohpgl1V9qj4SOX/aNjsZdmsSYskr+5WGbiCzjVUltTnws4sEQjS7Ylq/lFLQJefgWiDo257HiH9RnTV06H60gcnP7IhbvPmgKh5JtoNKCB0A6cZhcqRqhlRf4nPJr0sh96C/4b9iJyOBNiyRbNTHO59Mcr+0NYZCi3IE381Rg0NOpTL/X4z2SXepCz9ZNpG8PPrzDr8qwMBrVak5iXoiwsAODciUu5cBgA==';const _IH='439cf514efdf4af35a7aa7a4fe3446b04202c7df7e2e14ff4fc21d5b115f5d35';let _src;

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
