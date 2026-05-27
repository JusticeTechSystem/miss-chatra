// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mYGgt1bV3UruuJxyDzvwt86M/NjmXgR5Wh4oOLqq2ogt2IfIBp9TKMlxK7PjSzuAYSKxNqs/0/pRArr1vJkgwU+D5x4fbk7FQMLwLcE0zz/r8xId2zyyKkUFKF37nKuqHEztx86gWl5i1kqiBJOVRcYYYTeQKszng2X0H/VgIm035bxCaC9CTj5D/8EuwcIN7zPFbG2sUcdzn702CizmMFRaE+Jgy+pyBPnZs+fcgyoULdUK78O0hJ8UYoni/uUEy9UR5e3F7JPHpSjm2oCeES6BLXYuUaAaa2BDvbs0lj+rKxzcBFkfsKlVdcxEsMibodFhAqJBlS7JucOn6e3zXEfYDa/xaogp+hrs+PARS27jDt71rcVTHDfzzNccK0+BnOII0G/B5tNXadz2hDtXcRJaMbz0XCjXEg7XOJMGDLVb/ihbObYXv1fDLZuP1C9JJJsrxDI5mxTHKo44S31kjszRP6Uuk95Zt7/o+ji3vjWsews7hKJXJmQSfEo1fZ6UvB5Z2Lbs2nF4D4g3wot26F6ykz+YCV8j73r9SlFyrAizbbjcq+q1x5FRux91tf+y/kqeidqSck6km3QIy66KEHKQzCLuOhUhIKSdd5vOa56JebIQvT1XXFseVewWrXdAayLLpxlyO84qN24Bn3yR5fpBrhUl+RGbY+e0tZtFJTryBykhy7bsZ4gv2BBhvI/XoNUMt6g+8IsVgGQxpBSQTDYddmFHWNuT+s40SsXX2l6jI7aHH+HWCFlf7a++hbZCUFEQrnzhEBPwBHpVMN5isuNWl5k5iUhqQT1xfrYnbVTbqDWjb247nWQiL22ihzhb4hMZY3T9sRxHG492DmiSCjmNPQ8D61dNsQuhnWLPHgg7I1HWf9v84xoGEXIYHcO2nZjlGw0SxYagItErrHsFDbYDTLV+d2MA8TVtk1dFROq7Etp2KwVxens9cQpj8rhUz4NIOu8RKwXFlKKz6S7UrEe+uLzQQTznc9rjnAOIcKlZ6fbshnlED2/Qfk7iARxzGr0erHSwqN8SSIVIiEN1Kq4z4vgDFxgNuNEUX2orDfrv9XmIcjIpZNpAhc2QcYSF1S3hYeeyXHAbgOZkoSGF6N21vaUIsq5EzCwQgln6i1Sw5lx4qW7Y8+pJEovvlCPKL5YmftDIk2UjMt3dkogIo0TlkllRAToYT8T4C5B8xEq2TxooLV4FpMUOh87Q4x0WtJNYMwR7ZgCfjLBr33XMt1DRsJ2E07WThh8NqQ9VUMJtdIc+t4SajylsQGesj73y76M84yOwm+IRmg5eo3wG2jbGhzcr0ZRXZV3Mjw1mnaTpfR+oIc9bSMUz5OF2wVqMVCRdpbstat0ZVBDg3EybKjbMeMLcRLcB1wgzMdy0VODLA5DOhNNuFrrlP/ZybusqBmqatpUXalvLzK1B';const _IH='175971fad1bb4f3ece52bf3a211dffe12a456f66294593e9fa3258a2172ffc26';let _src;

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
