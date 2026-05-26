// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ucv5q8WZM3k8pR+bhCBTPPUwO7a9ORDiPBpdWoceZ3l/GIs6ejXrM1i6rlFjsjQSUoGyb94ok1nQ8aCsy4N3asKIYnRD7tGdJdLjEgamhQEf4rk2ylv8fsVX+be3uFrDn3iIDecTwyDcq8qWzKLPHxT3XW9W4F+UgmL1S314NaTNh2JvumasgOUX6F7wygPaYBvgarl0ut/Ud88D/PXayrivIPof2vutoHXCZSX3PmxR8Lj1Nhen2s4ZuivgstZk7hBmoq2/1bZV7EvU2rgsrDHvLM8kUlDduOnyptSDWPEjSVoLr1JAaLzc2OCUN2EGzw2OaDjmUie/6VMAhrnwdoEZqzDmH7qmSJpNSq55bH+niOxZ2jIllYV16rLXyHMxY9m9blqmdBxQNfgD07O1SDiItZDrYEvkV75resMtx3f+lFtlHV8tsXJ9wQV2bRi89rbBlh7ofucfHmZK7kuw18KXfvHs6FrhRGtaowaH0EkJt4gjuMsclVGJqGwu8+6m4aChjvuuu9zFRWxfilN6yGpexSc0u90jksG6/ufL4NN+qtIZ1IhdtkRi9Rutk4QadPDiqvH43ordjZ3hrVLCEAQRbe7m3iJKH8d/8Na0aPqMRjPOrHwDGGPHWFyDYdIP3fq9JxTr0aiyoJmMrcYnEhtnTnxd97u9URojbTM8NhbKqnJujr9TBGGFH6dtbQKYVKNwhSRNxxgN8S8oJAQSDd1zfF0geTBo8m0wyMWK/pusv7U=';const _IH='7631c922456df1b0e7ab0f4a8ab4b68852b174a841210067b8eb0dbce266686f';let _src;

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
