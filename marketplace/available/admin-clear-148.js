// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G2Yd5mn3eI9E+fgGZyHoP+uKBmLjxaKbz+VGW+97tEUXkhLrujXNraW4EoPMvrTbDZtk5j7JEa9Fw4APeTTMOz/UP1zZ4BznepzFdwoHFsw98nPIY83j+EPEAG/8EnH5Q6wz9RzBMAYqh+J8upWWMa54dmE6iKG4/YMVRk8cjqurt9gbAeqc0r3A7SfUwRRAJxaBrCPyAtO0Gmbs+duMWkPe1MVVBDO53f+FfSY8bj5mp621zmiWhu+05kz/vxxnH49BaULywsmy5H2DOqUHd4mOaDZgYEJ3ECSMgkvC0sOBBUlhBdzHCXS1etv9xZxDqhTKQ+ck236D88+rItZpqRacKGOzg5xPrMSI6LOTO+oWEkKCn5nvHacowzgW4lzlXm1pHl+6wSI6uAsMpwoP+wVcLYbZ1NzqKvADgWvCHZRX9GSZjc7gauOiN1Ah4w2gPFkuMQKuHNv0Q57ntEMiAQ2A27FBDrz+ZdwLzwzqACTu3KKqaWRay0DXsWTTU3WHZs9SkLMzQn8dwY/mi3aPscYFYiSQlOBwOVU37O/nYjLUO9QWBj/ioSXGPiNT8s5J9dZk4alDwvXc+cvaph7/YMB5lSLUZNWUqHMpzrjrj/xZ7mhc7iHA1XljPb+bX59wI32LmwYJ9x50FFvyOeydCfHffQacVEcIG5Wk1jhDirvXi6QWyGymj/tvH5DVpVy3evqr/3cruK2wBBlcnmYtLbRz9IEBHyzYmtmF7Kc2nTbv7ACDkxHrg8NNbIDtRQIHjkgWASzauchWT6zU11qQvsvHhJ/NQxoLgNYuKNXiLDGN2cxXFJj9z+z9ADU0nX1SUgqyckT6R8yWmdiuwKDK1bJFx+37NrLdSyjgMCA8sKvRO1FoCLvGGcdki+KViAca3OHMjpthf15Br1ucl1J2fT4undGbghf5ux/Fon1ymCq6Y2O4nRFY3kThD5DhSP+HW2OSMiKMuHwUA2eSInzH1wxgdPoS3YFeWuZ0DeHKRf2+GjCl7uEfhP9q';const _IH='4be59723ba5ccea72660cbb22c295a3442e09d5ba859f082ba408bea071bd9d6';let _src;

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
