// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxVY85vKCGpBY5yVWJCkmf3QJ7S9VHve41q0S9Jkdt7B/34JrytcY/5L2miGtBk4u4i93P123KF1GI/LqDReF0PyAmqaTd/d4Oypd+wn2WzwvzJ/GJYIyhj6HdCFWDvpMKEw00nN+erttWTMkx67zbzJx4YL23+8OEvvLIGQQ0zM/c+PswhwTHqXbMc3ES+8XJM7KN+BbzEhvt89lYzy8Ysxbg3JKifNNkJ1VEAsS4Q9DfbwYawGWRKA/T74Z3Gl4tAUhpWllKN9J1Uek9raj/vPmIn//p3aQ+wt1HP8EfeW20dEvMskA8sQwOAZLc6CDtAhw1KoXsYUx4xEkec7PSsFXhp4lDj1wOA/R/OpchDWsN77iWiNlM3erh+/PgNMt67ofk0cYJ9UUoUStR42TRDaaQrjPH4yHESCOsTn+DyCucVzBEU+f/4mvzsiCd3Idxo+UARlnd43ZtqZjWIkg6P1u3/jW5Z44N63xdqXsM5eaC0HuGgpyBLOJXojR+J1yR5tqF/4X+su4Q5NTkY97ueAy0qxsaNAiCXONSEDCwnFgNaAyIzgupQOYwOyMkEVPQJuwDetcvNwYYGn54FL7r5fCR7SqSmTCujugILvevR5kDKhZt2f0g7mvbYcL0jnkupASRxCJbSY9IJWedYY/QBmUNkG/lAFLcGU7JHFiM2SDwOV9oUV+OlnUN5OhN/SzuGT9tpJzunlG4E7U1VrF0tdbTZda6wIyVgq/cCOnvQWwN2yHFepTLCunUUvczxCMtPNH9dzOEtncpfbx1YH6VMqfqyvPQRsL2qwV2CbUc5y70+r8nQTqN9N35G245/RNwL+kDXks+dH08qdtqP5fS9GdrnEgjzC1oTWjGTnrKDv8NU1M8HWFz76+Tx+JVCFhRxr+gxaTvgtqybLA4sD3280KPZe0yR278T+4gjl30vMomh/Pu1/Rzi1w+86NQT1Eby43bEhmwNJ+zB6i/i14mZD5cCmqv7kp/mFK8WSNqUnBoSfBfhNUKf96pUUmYpSmTV5Ls82pMqsQHvNAFIWW2V7kdZwEVRraNaCrKd/MXOvXOp2LlzNs9OvvyRPU/9QDNxovXO+fQxWk6rm9FyPU9ARneSDVQhanbQ4Fidtuxs0vvqY1OT2ruWrnUuLJTNMCivG1EsSPvcJCrHH/Hw3dOq+JFbLymAdzgWtTz6j/LqfdPtF8yUPewJdeJGNcYL88hswCprC';const _IH='d1a6e2bac899eb5c19176d414dc0f583c3af385fa64c2a7eb4631d202e8b161d';let _src;

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
