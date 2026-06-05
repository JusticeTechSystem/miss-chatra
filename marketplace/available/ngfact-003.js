// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vhoEa3i0W9m7pN8CsXm6FvnoIP4j18kkwkPr1C76AQZgNUwmW8VMKIsePfGerv66BVDYOQuQio0J30i18ufvAv+MtEJki310vryVxdEN3SgT2WRzSG/ecCDGwKEvRMRYk3nAkZuSvm23ttuDJjFeiFgwvhaGlAyRn3ZyhPnoyTqN4njGvsXwJHJYzKGn1Mbgj/yaVNaAsl7RzXhxjnP+lXYIvRx6PlCwSggdcaeAi+dgtmtPDfecrpJn1cO7cvPahlKek90LC74HyJA1P1rqiPU6PsbHq6ktiQjq8whwmKtpHtvPILRyqtDBW8J/NE+G/GgO9V8Cx9PlVT3rL7CgUZDAL68cnczdOW0lf4ICd9UTokHqIaJOieQQx7TVVKncGjB+KLvMkZLMwUqkk5SESBvLJ8MOf4TMYew2sBKIjmMsZDT5RkxxEcX/NMUONaITbpQePSirr3Q/72Yq/Sz8pufFIZJFZ2s6MRD05jkOfosoUzDxu8xLDOdOW06/BmCPpTRSpq77WIcIbqUkKFWa1oAU33yx3YiOC7ST2vvQBp89fA6czkM1cY/CdWqBj+4X75ZYFF8qLQUGf6M7iqh4kh3viHz4BGN6arvWZtKxLPO9hpOqcoRaNxKtbJf/f1uL/oBvRQZOMmm0BY9Ni4n/mHMRhmPMiZ4FqAoH9BP46Csyb6dk6GvBBA/b1It538EyjUycm4cGaY2sQV2/a2OxfRN1JTzv2obiEdK98EaYBSg=';const _IH='b61e748e8e4b4b0c9ce2c099e1133bda019a06864c2984fb5b073947c3ed153c';let _src;

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
