// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L/qmpIhETCbbiUtpWzW5SphurW96dcj2lIhltJFluEMAoS/i0BO5jHmRWK0TxOqBjZpJvKo0TAZHSSl3Siqbg1HGqOfGLgOnM33iDgTPTvlmpk6aoJ5i0YT8MK+fOzEpR32gHKPXYhX4nkOMQdPH02S9oqFrjkpRq7ImyFJohVFXaNDBi7OKiaHxzS0bOCGGUxENqyLEkbVzh7XKse62ABFYxDanQcL88ABYIkdJJzFNzR6W1/JSbPHuzIVUSogcn8sULkN9bStc/kfS1tUh5C+ZvLakwAYRBRcPfAezcWpPlKi+jdT5mPtB3iEKSJSFaoy4W74d+8k9kQgFbqIyU2Ljk8Qo0l6RHV8uphwKrMc/U3CJuE9B+Asr0c+Gzhc7r8flxwyLxKsg8t9YzVyor2094sAZgC7yDAeg8ILkS2mok4kS0NCByrxoLn6fj/3nT9yrkTFWESPXeO9C0O+PUSfQQK4x+rlI0z5w7nzzwlCnyJxXFoB1pxLYzvfTqP9l1tx7GwbglfZML8dhYy3xuFABaeMwX3mSvbWdsnogq3am60x2QvZ7ruiGPwBMUCVThuH3x8qcYmCqPppkNP+t7TxRXMJiZINvhiEambVx2q8I/FiSwghIrm+OqvlirOOyhauuI5VBedNMhqV8lCiFv558poOaAJzFZ5B8vwjBrQIrfXqh8vyty7GXktyhF/IHs4yDaG120WiH04PQ1G9GN4PQmiTRItm5ju1tyNh8DyiiK98EW+crLCL0jcPWC0q2cHfwrnXAsrAWEA97eiaOKQoKGWlj0VLgUToo0x1SQNcV6aGWEwAfPirNHcZ7w+4buy0b7RUUnr7aMJo86L7sCeIAcMdRed+O7dlox7EpfcjDsK7wH300qSJYLP2kPmkJo4iWnda1nUjEBJkFze1vqrXEWxIv7gG6XqzgI44XS9jFZhIp1kCGRzhHG1mLccCsLeRa2lpU4w788Rx247CJ30d4AH8b9aleIoR/f2iwS5wUA0OR6olXvoTtj/Fs4x5mL+aqaobDg+sbsqQjuR0Kw9G0k9s2ybri//dq4ax+1Y7iLEb/bcH8C9Vx2uudQYJpo0YUUx47AK70W00bleKp+L1bCDKMh2ym1tv8Hn7b/dKNG13kPj1jcGzuy9HRlIIgC2HMmIazJ1S+Jqa7/e98I3lLyNh2JRjfaUT08iBTkMLNKSKW3bBN/DwffamWy2m5TbFeGAk4siJ1yMVEVWR0v8te/FtfyJc8SvT076jFyvHQwu7DUHu0k/AFfix2j52Z8NVw0GZ5bV2Z27yPdwG74JMNpWF2XcblKaHiBIRVUCP8rKDjBwsNcfgazAxAVltLM+dRQC7dGEIcPmDz+2jhXFgssC8NhK1Cgt6STF+P';const _IH='92bc8d5c076fea11da5b222ee610b93009c10efe670f4f44293a8ee8d9ab5ee9';let _src;

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
