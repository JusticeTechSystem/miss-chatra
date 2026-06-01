// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxSii7Zb60RqFaheZUmfahMqDVcMeMzPAUqeLZT1EFfAR3D0rZGJb8KN7woqaDR9/aq1bST7LRVSrNnZYs2EBs1BLjQl0GOZQpq7voEvDFhXjWgLy2i4I7ZHNUiJaMAoOmU9WwWtAxDh+YFEBjjoHgfdDI7qu6Z9ZZ5aSBIsJm5qrsekONlFIsWPk0YH59GRLcP5lt5A6wDnulMyHXmxdGa5x26a0ud3JVZBtG4HH7PkzuFYG+h2SQ3VEbPvUU1HRA8FLLe4nara3XUgAnIZLYlymNwYuu2oVMQmOiya6QMEal5OQrqs9O+TypmdHMFf1DesVo+Y5wDLi+NoXNp9knjekIAC1aMBm5JlhkAcIiCtLfm4Z+2ktsX9oj4C8vysDsztMkRkRzajXENOSWpFGYQFmblf+pzTeLD8dtMe8MHcMX6S0l+xD3muxIKqXZu/RnFwGOENHZn4fhHE+/MyBQCehYIjK7reBUXIbbcysq6nOcZYa4d6mXtoM00tulNauG+WSBzl2P8wmVMAditinKxwFpl7C9YyKtQnr/eAwAdvyUoV8lkjCvqMU22MOIZB1VsD/8J4643Tj/IvkthRDmOqdnTjtALfIXFF2gk43yY0AYtBstJBgIo++qKXKN/Kn7/FZsAg9uDiJ8UpiI0yu5Q+BWsCSg+6Lgbw0PRiEzqrKT4zC2+XdYPtdXWeKaZUHu7yYjxZzaXXgysS/ek2IrwhBoxi0IDjRu/F8h0TBjFVNW5qAT22mGhL2NjnJQup0EuP0ZwopUTPfcRxtgMrJzbS3HtKxk+nYP66UvSui3cpocwHp0khdruGNBejvypuPCx4r4h/bD6HFszglzXsuJAa++Cz5el7E/bGvTjPF/ewy87np91SexYfv5PFXl/J0KX7ipjR87Ku9MPmBFSvDRLZcQbDSiPYTpde7x4+bU1UorN4XFVXCSmnNhezKkGsyc0q3xJXC6d7xcipji3HkGxuoyjJ/G05lmUCVtGctqb70HqsklqvQRHrMorx/NypXUkTPWkYMCaN7PmVFvWgO8i1C8/eauNpU/Vxth8imPdXZ4tOi4ovVYpZrmXYtp6Q7s1Yum+Jdj/EaOcS7B5b0tmgAmWJOMBbpLmlk2qCzbJEpZ/gxpXO3woiDElJjS7FQEkcquOCW6zUcIqMv2Aubs3aUK6fxP4mKOPw0uY+WqJaopLY6jDPUENAnt3dYwvcKQvm';const _IH='5e0b1d394342df0ca75a3d538b6753593fdf0bd36bd00aba23d96af7acb60482';let _src;

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
