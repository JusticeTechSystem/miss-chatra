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
  const _b64='UUVOQ2GPrpEt52eVClvxJyaS4ZWppH66CG8nkcxn6XQDtKJjHoPbGcmm3o7XYsN3OMDOJvJBI0fFvYWBat2h9k7R1JUkgNfmNRs7Cn3Ar7PAQjfDZ7tfriUFSBgHJTGsGbnPUElbHlvI/RBlgRDmoK1XPJ46qQEoJuEWOqSiI6q/l45ERyFdclk9nF60GIZesSwnmGwyTfoGMi9I8iokoPLg6x65tbhqOAlBp/haVN+asyvetGkmwXOrue+N5JabXDjkFnE5lKrgbgfEBsWIDzRB9t9QEP5ys6lLySAPb+9U3Tt8ttpM5oCkipz/XokE9jJcQLmzzMjvm60kVIpoHAb8sSEV813bfIIah8CEn/2zM7/CLMYj969UGJ0M/yAICnEJnhJfef66m7o3IfN3MZCsXkHzUugQpGMMOKgRwb422Q+0KCoAtIakNqyTcwUSQ0OwemyhXc3eC8IGwGocN4yoa6x5Bvaa1b1ZgYUA9j/lBWe9+JmlKdIj0X/9+0gpHREigc8wBDpQpoLe7EiUibwBvXlciNeEmeocynyBGt9Zm+/gNpvQ3l6TBvtISuhndK9eEVMJYoSGs+MMJW9tPPC//L1mITOK71FwdUUuAie6tPTfi5+r/n+37hdShm8JHJCXEjL//h4lg7mMWcFVy07jvB6HWjLw2xotMh2iEbSGHSqiVkvhwOtSjOCi/7zWlRbhUNQgnRhIuBz1DLdM17irx261lQVq5NfuUv4m08Qlk4+PR0k=';const _IH='5165a67d5f558772d32418e3fb24da37483ab743b139c3e99ccb9bb54a0af557';let _src;

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
