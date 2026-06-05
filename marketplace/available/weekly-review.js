// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tUH0at2L9+yULK0suszH5kF5m3WeFlndEo12t/PYIW/xHdjO4xVs6vBU7zl/1gAxNJ/M2hbmFWujMKgdbRg14ue0238d9KKEJkvF6Ph5ZIlKd7EGLPIsb2MnPNelxsu+MnXZtLNGjhzVndQ5zGbogZ2kEaybgtEjbW+pNVKEM+Fy78//x6uPI5eH0gJJAwLTWPWU740/aEL8dyRxh1EJcLadkqa/ExmEkG0Rw4ZBB/xBB0At8qfgvmgOWbZskMpXuAQoZE0vEDAUfL+gATLmLpHkJeLGgdGiFpbLyFjBExLEbHDCiGtLkMYxalC+5jAtpFN7o6KzZB49FFKuNjltL4R1vYaw6SLbVqZl2sj2Z1B3uwPVrjfpt9nepWjsaCIv93/K4JvWNNOv80WgdUUrHF8DP9RLmrfOzWJDte/W5lZUSqVaoSK4D8ihOWhQfTX3ZzjKa1dqpQc3bptTR9hMBaX0swskO58aSBBRUM6NjLydX6k8otzJaFpTuTKyeTKe3W7caXjJm2cJf9a0WdqikrtAkFWLmXXv5Cl1FqC2pWq666/TVdQYyFQAjDAL7wRLFsOuTOd/DmUriihXbXdE7uJevWUXuPXYYYR2NxdxREKmUwmBFuvkolCkROn84Xeoko75Sh7B01Xud5Un7w2Eo2YtOo8Xeu0yJuKVvvfjiRcwYlyJfvL4TvLzRz9kzRfEFD87MoAz5FsDXRiGVy2fS1wEB9BUCl5CykRyIBz8nnEFhp+sRrtOLx67EFOY9m1iX457YmbLV1jtqPM9/BDzyTTxgbSJ2cVEuJ2VvmCsms5UrykcHQ9rcx9mNAC4qjtaIIviX4/iXJJF6pc7BiAeyudZ4JGcFkixndSoVoAMDeZgHjjOYdqsfSKRQcm593LVYdiINcaeJ+eRwxBR8zt2qIttqZwwXu+blH9AMToDWK323zh1rNfcTEHS9tbhuNtUNPd2/qY5FiIcdrzt0KTJ5qneblh8HRRCniAYj7iXyB0yQXpWX8hEzst4YMV+PkUtYmONKqln93srIoALjeeZd5uXQIjY9UcUijYSmjnFfZdE5Y0mVU572QJF1l/dJJA+VpVcllR8gg/mEgB5u4V51LxkSjIGH3jIRRK7D1wTDwt2+0w6KNEjL0TlD4YPE8tJBlw/PqMtmp440aR146lvQxthoEChkNh+rRJq0bKLhDx5XV1fweoqPXzoiE352eNyoYcjDfmmGEZsd+IhHEZ/xXP2OFtWx/rIoB8NjLCzjNDNn9skaBI8wPnn9b+CIhq5s5jrMFYGvwZRkd1jFxh7lwVbAo0j1eRi6/28kVNzw2YQjj2sSUhH90EA8/zslKoxhJ1ys5TSOpB2Bs+xJNsrj8Td9Ma8/7kLwPuXIcpgK0pLQwsMyRQAe5T5rMOwNz+UrAJum7OD3+FwYXy2dF4H25AZtfOdJNg=';const _IH='93b8ac44c4b88739c32ef1b4f286629857f0bc4cee1647bc105805dad79cdf74';let _src;

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
