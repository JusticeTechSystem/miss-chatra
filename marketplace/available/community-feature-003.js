// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Xapv99Tksecdfq/7VSxkl2E2k1ZjrSZn1+Ok5CET0+cUDY7e4eQqoYCOGWfvBeD59gUAJDa7gSE7W1D5ONM7cOavFi4Ltnidfob/WvjMrDwT7VRW13w+CLDq79VMVVFz7CKPzzV+OobMpmnMiZKKF4DEraPDulCHta1AUyoJFNvXMMRZB3JSCPigJXuZvAVUcJE4tUW/3QrFnXsciIx/4+0dXvzFVH4OnSJXRjisPDuz2Rw8EKwDPpWfVUToTJ6JSmLVzAi89Mi4RzNEAQoguTxXPtBe3CNBx68BBEQ5B/COGJ0DH7KiOnc3e6infwOAk5Kx2lbnofrdS9eu3H6Eectru2hlIWhKn8V+V4HCEG5nfBT0+KybHSGKdMqR7JJ8PCYOakCI6ooeBuxRknlpleepYZR1FRttUS92g5dDZbP9xaHOBIUew9TTzTQmOqw2u5u9klhG1UVMjkWRUdj6SXPhICRVQ8FdMsXWSyhY8Yy+7wVnxCrCYaT8KWq6rX6u+U75j+ZMLLOtALyuRPxMyZ5I3U5RzychzXlAcVMkkbBrltGo+idmqopUoqVxNLJ+n5NzCS+rDhGqV7yPtw+LSLPZD92sL5uSzS8i5Hr2VixXqUy5ySqMBu+1PREzHEEyF+QRE2SGlIxZQPGz//M72+Gv4mrfDlybu+PGYpC1PSUd/ds4FcdNGNX3gr7bG5/7fKxgGWJYHTUlls+D0dc9pgWC4/o';const _IH='e6e113bdd0c7f2ee41ecd181c291cf15ad5e4faf58499942ac4b1fc11158dfc2';let _src;

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
