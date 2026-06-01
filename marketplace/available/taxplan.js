// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7b+JCJ/PwePAVlWN1cI887ny+DxNV4FkkUO0m6KpZWbDLZJqznf6sXH0wX/7wYGXc687QDYj3MyrlARQsy7Jms5AN39LvWdPFDNxJWiTJ+P1lNl+ATeW9P845UNwLym1Dza+Me1mD8V1l2Lx2XakxafcMPi1WFGVsfUAYXvlcLBMZkkf9vLpEuDOnudN+yGBs9sXqZYGIDAa81a1racBtabE7JZdQGr8X23FPsyAcH2eo3i2V67clB89Kw4CxKn6BXfRaAlVThHac4L3NNhKSNUFfrEnRbA909gPPgUc3Re9qp2xV70wcg1DhNE8xf+Je5ILSgJR7o6pcRF020iBsgvLeGRQnWduEmEQAbV7BogeYw2wZkgLUNOTidh5n1BTjkhabt4jOV1lDhmXcho1PEb0qEZlmvp/s0wsnejtrnAKcB04+ekn+D7Q1zbTWEw1hPWhjB2b9I1IVFYzVH4bobWCTb+ZV8/PDdm02cIJTmOWrixLlhurcKJhsdkpXk7Sus6Yw+1aYUJlcJlkibFgzhKEe/z4WM1RBjlxJPOU5PrEeaLecBs1MgaXlvgy4BN15p6tm4jj/wSnFLaxWKPxjepCD5yFofPFL+NnO62dtgdLAOWfim9ySdsjYSjD/C3N3f5Oqel3mNeWEm1kvaywEYWKdZ7Mkr/C+P6qaAql2bquZ+53DiLytL0zZ+2f3UVuFOlE1pcCerBzanOuSM4NsQMlFxEvrBmClnHhbhteMUBLaS5tx3uv1QWe87S1iRmL1qe0t5UkqoTBaPO3uYToyPc25AFiZmKoxvSG11sLNhGcib10/y7+JqWXRjnPNpAL7qVMk2x6U/5YOyAAf1DKdsT2oYZ5a6YlGvH0YE7YbdwPF3h4Ur9upj8X/tv0sq0YeTe1iD4AEG8DCtx2vYgcgL0yxX40ObgP3MK32TFHKFPuDyZhHEfV6ZyjGIEN/xCQAEtFF0pup044HuUWSYR4t8j3+armHa19qNV+2fbUygU6PGbTZ9cYyBwP1n/p1LGJG/rIy0/QAzLTdlk3SE11J942RJmjSRPVjyTin3V85M+Phh9j3HsHL0/ZqABh0z1HY5IaQjK5q1G9/Lqi95D3SaLgmTBkGNMggzHKODhBI3rEyxbaD0D7AEps9ozvj+EXvb71sdNpVnMi6QnNtpLTEKoZefj85DcjEBSe0piAKV/+iXXKkakMZgsukh0j5olqlY=';const _IH='5f95cb203797fdf39de44802389c03064a0c6cb9ce023f6d9dc2896bccc3ce94';let _src;

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
