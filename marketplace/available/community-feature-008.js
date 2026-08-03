// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaI0u1UJrmOK2RNmLOtfGTwyMOkSfLCPqAuPKo/Axa15g0JIdE7GcSiOFZhZOk2niv4VZPX+lJDWGTW8u/wstzw0VJ0pZkP25wtX0UglKRuxyVTMQZC4V+yIdMYuKe/aO/oabYlESsZQhAt7fH3uDakR32wnClVKZ/6KU2jVV6FPhTjPLik7NMIsFsFRPQg4YlzNskDr1wn0bzi8LfdnA5NvHf7CJ/8XXc+FHEMe4Iz8krWBKHlWyx4KsmFadRgNFBU7SAuq4RCmpclApFykqB7QZ+FrI6Iz/O8ea3OF1sxLDxyjouAjdgMI7fg8vTmkYxQ/GywLq9X3wsBSQZRG0Za2azHKPu+vRqSSoQVKQJaopwIAsI3ao59xERQ05WYFVQxUzDjpnLrCyVnUl9hmNEHRlg0tLmLyrJlt5cqzJO/BOi8rrizSidFZJRIrGsymHJt1BNrg4Hw2J7M2k02qOenF1woFUPlPyifK8Me1paCqn7gdM6OSB2Q5ISb3mHFq8VVCXHrzHwgsEQdRURvFXc3IRiRikVH6ZOt8MzK34yz6x4aOln39rRPLiO23YxcOyLrU4fXRXgj7R4u0Zg9s9nSALHY4K529kXxWqJGX1KU8GqYn6g/xqIC4nwG6b7Qk3RsrneYYFvRKZKXvO3ItELsklJgfrQQKDujH2M+fJX/ac5ZLSXQvbYD7u/UMrFdBK52mzwf3N87ZNYkIzNl3mrSw==';const _IH='ff730bb097c0dfe2c1a98de9c53d964e7a556de20be3ec8fd7cea6d85387dc37';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
