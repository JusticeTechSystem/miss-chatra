// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+QV7HHjymumpSoau1+yL/ync9UMIWEqTTO7y7gL4PXF+YktP224wgmTW6olYEryqidTTM5rVDA26uYsY6txofGBruZv2amDLvGyhvDUClSznb7BRmEq93CJhjKfytpbusjZBZVK8XXrCVo2S6t4hRJTrrTbltn4wzkg/rsVTAsrTgHPatCEQRRXqzuFlnPfSIlaiGcn4/oGXvCppIfDv+CGZ9VKC8LC3E4wOztPjRP/t0aBxZkyE56cqLR9QutGseLrhXvAwXj3GBcYRCFRXKnIReOwjFLXPl6hCIQ46qrJONnRRJuj8bXcTy37mi9rzrU3k00Q/6tsq6JY/QdoGR9tRZ4ihmXQdJhgEdSoteiVpcG6Kah9+25aPoP3yEhwLn+sa5rzYp0/0zC9Te6nYerGsF3WPLG5wT0iUnwLwfEbX5lT6UI+ksgbRFKOuqSMcE/dbY1i1pn528Jo8BdPMw4qNoz07I0zFsC/OAIUQlOSkCORBO/tGuswLqdTQBCjeML0kyW0i2K9B6UPgX0iy3TZtF0ZLqEuYPc/18hsgBRkDyzgxH5DzO4uGSLS9iViSgmRkffG7AkLcwT1w0cI+uMYM5rRcUjdaxryLQpjVh98KYHXoDF66zPUxAyfvH1ESK7xS17VhDntdORnmVaJXUxbFoN34vQdpIHschTqsjaQeIMUYr2yNCmS3ze3q0DmYpjPUCd3WDJvyzAyTcxOnHEbxA5xVe0Ow9ATtTMHUYDVR0vVfyG38tfvZLvbkiRZNfgfk1pqo64o+SNRZxWbs+lHDLLsLwjJuFemwhCRtdnfj36DPHAu8IzmHtsO0vpJ08mgzzlX0rXPwfY1tjC2j5oZRhY84W1X0wydpG1UX4PIahfntEsxRQALB1uyW2uejU2opOTpeWV0Zrwa5yd8Tk+yZVmR13SjYty8TfXqBk15V2r4wdssuIpnmmSFcF3l/S4VnLvrSEsfGl28W4XTg1MzCj218LcEdTioIRcemYV+IMw1Xt9vuEpzSnC3KjouDRA==';const _IH='ab7a0de76d5754f3c0fa4abee490d3d30fe38abf546a0c975e60bd224aeb4738';let _src;

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
