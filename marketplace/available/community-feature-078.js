// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xuDAOVtsJUbuynkJn4iJuPzv13pF+rp790dr03WfgpReZY1aVAk9GAG3739RVtaIudhT9nNfk+wkpKbpHI2QwmWd3NoNZ5pBpAoY0oMgPEv+AsslosGnCF1ivOQg10iymRGhPTm4pDc6MfhbSoWYorx+hdMr3hMvc9mKv6aPQWLcOzu5w02OVcmHw58cLqSvAo6OUWz4mrro6fYaH5O93xTOpMmmnWgubksTzvsn4lPlTu0wNBD+DJgsMXrjSnwz4OmzHkS7VAz2SqDd2/p04es8OERnr29FEiVUkUzzTlE4S+Vnm2ujNQnVY67BEUMhw1m9kRupG5s4pciWAT5Gaw4w8wmFjGGTjBCzPDgMSrjKmnPk28cFiXOJS9Ew7QUvFtPOEwCbb+ILo/DrUSmSZFOKFwhJMG+qg2KruT8pf+/Gxc4qxd68Hh4Taw/eGx18J2WziipmbfcZNC+6DUB+siMtvJTDfYq/dY7ex+dbX/nQnWE9WdikIf5urkLwxlgd7PwTFfbZGjm8skAOdV4cpI6PONHcLBbb0TO7o0kL62ZqhcpDEziRmPJyhVN2AfKuzNtfSiAbogz3q6e2w4JIzvWttnxgzNwmWlDgKqlbluJclEHmeekNPqDxsrv/+ci8zMYQz/7H7ky5Nqbnw/rnN7kszCTXCKR9484QGMGG5f797Q749Z3iE8mpu7/KzfYm5ixBzL7wwtOVg++uqHQ/d5X2BBSAzAeT/A==';const _IH='bfc0f1b193af8ec6e0039e58c264345fcdef99dfb7bc2d4420a539cc4036f4a4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
