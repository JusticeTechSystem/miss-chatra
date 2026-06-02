// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ex3vIG8C2w1RtAy7zOFCXwxF3rKoVTl/2BKsglcut+wnaFv3NNcmCEO4GqWGS1jwOvrABLrsgl1AScsVuUwxbwxRpfq90/aGbZP/oIos3+p4CmqVTLSb4TbhJZVbU+jamwv9KaM1e/G8tc9MMTGk8jPWqnytHT/2OmBUi3FAqeQf2zXc9EireFQ1y0F/xOWq2A0ee/qSbN2pNXLMt0rRe9rZ6LqpNYXYiv0llyX/zByxCHzM40Xry0trAAWorkRfLFTGqbmAB7yK8rcO/31J4hDl8yDi0Xzx9Vs+KzExVRXVOHBafZbzku5WwuayDYox70+FRx5Tfdr+6uweFSUDBvs7owajjP4q5gIeoFoRF1NcVGGr8un7E6espcekgYI/y/EXYNHYAPkB9WKBcp5oqLXhGlLilnhS+oy9m/qQ/ExPh1z3MwqmE8nKQLIyujksuaG8rS2wGembojiXQmRFWIc8dV8USqnGYpfivxOtDrtPyPnHy0M2AmsJ2ke6pn9SlToV+qotGtQxuQdr3qBaMkO1t0D0BfKsHVOluNJM/ogggUExVbhj/vEAFxUoh30O9eS5cE+Z7QQ6MEoAiK6VIxORaYyfH9nzzkkWq9vLakgGGSi//JnRyTQ1pCML6p1tNsYkjN3PCsvBXJFZTKOMDzgrgmSO9rAYBP9vQaUXUM97sI3KJQri7HMTcbl+hjQEYWSDbcJVi5YobVqiVR3J2glee2GL/leKW9weFpuY7QE8AGKfpGVZvDa4p5mHM2aMVR1Uaj267o1o3Q3fqLW+TJ7qJx+5kAbjaV5Plan9yGh0E+Fx0dF2gOBCnefasXfZR+dsXykbKoTgCzg58TxAe8l9ME/fPXfRqGXe9aHjgnSxEShaWXLZFDPhoOwibgxoo+8J1aEX8aa+YMjEjfrqXe7/b+WDO97JkrvVVjiaOmPkAuxjpWLcRPbjsYcC1vIiyrv+RYPkNZByRZhaqzB8hN++1unKVKZlFcXZHHsud5QqxlyQ147ojaAjSRNRcuxOPBYXZzTmRzs=';const _IH='49ec4c12897edb5c3a23263b1f030805b551001ca0c1668bec1c2115dec09a61';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
