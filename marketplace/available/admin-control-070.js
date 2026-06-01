// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyS5B3CjUj7I1pMpYX+R8rTZret+1ngzVZQNh8DZalrm9nywu8bEBu//FfBEWYmfb+Tg9dhL06AqfU+qBUCN3rRUd9QtcIXaf8xk/Gmzs6eet8qsn/GeL1HW6xNikPtHCST1erYvDtlhvqMN5cVMMAKoKbi7nCGI6HKhP88DCiO7bFoktc8pgzujAzW4mDE+SOvMqjbQHiz1pG8uPkB1zTMOt+N7w10HuxaS3R+Iy3CKHnOQ6EST5xXqSmTBsfKKd6M+4XI6j+qzvSEB7xwLMMlDEaGCfnAb4JD4htWoNahs3fr7xtV5whrYAx0AvBvvmmpROG60oj1cW+LA2ij2060IhySgp2TKf3ael2G4fd7y119LsCCNh35S8+1C1ojhZH/hllxs33ZGlYJ9TLYu/q739FOlxoxmlpC2gMW2z5rZTfEvZb01rCA7j10nlRNCd/RQQsA4XTQiEWjizQI17rwQQsENy5ZjEzR9+ONH+O1Ltjvm19ZzHYs4fxetmPWfLZpx8VWTuMCDr2wIXFGFf4AhaL3LSr4cDc088sNvu4q7H6pU77e8Qz5lL/0p8/kyTcG4ik/kp2gQn+UQUo5DF6e3E6orOT+YoTXcNB6mtaGCaOUbG+kmQL7mMQHeW0oldtwecJylImcqw9ym6KDMRrPnBBMeBO1yeqzIsBFgjNKZTMZaAEVoaAaig+xwKN2SVBh2U2qiXCpJbXr66Ow4SwMNiB2SpSYtslMZQgMn1Dn5qc6wQRwyLeYebE3yIPxUwudee4ygvUjXosqfId3sGOSNITVxgkXFqURu0TY2fAf+ca2KRhXuAH+xFLAvP6GEmjo/j5OLjn16Ap30hjx7nsppjhXeZ1O1lYmUPu2SrDqMQJvqJNUSGCF1E1+lNZO7CQE2Npld/q+ZEfRIZ3kISNLpbLaI7xMW/xXpvIkwQ99jXLdjAcvWInT9dACD+qEJNAbtLr/ZGPQbD9sZbBn9b3hRUqeOK8OSsGpwTmrfdGwZ+skGeomfk24Ouh8PzCjlM5VOvWY=';const _IH='7f00f07bde001fdc2b1a65423442f943b57b20d7f803af5208685ab79f219852';let _src;

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
