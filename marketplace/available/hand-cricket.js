// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pfpDcqtnbTS5lAkIBBY9WwpCwepngSIbNjpHhwPu4pl40YtzO5cLLj6AGrXJXm8C5m2nXsarQT3UVEd8/hme6tBc4Fjh5C0O9p7DDKAJfF33/CbsIXi6ixTw/MS6QPEIJAhzrBITnkdNRtXwRLwpJ5uwKhpm1TSwCkgBDOOCO+A99R+fHyNMX+tFzWwrJ2erwzSE2nbASJIdguqRx38SMeXRnoEmnhWrNv2LfyvcSP+gL2uRMxE+fzxjZgILDsdtkqfxJTWokW3SZIYucwnBzXK4B9FqiG5z4xr+Ou/4uY+jPi04le3gmFrO1H2ZgN1G6wlk2BRNWPNoL/0IG4WfKJ9C1qWN6iUdRvjkalJkQIPNHss+tcWlIuaiD3MKtHGVza6q5w97Ut2j9WQeCWTejCyj1EBO0y8NE0xv0tjCvrBVvZJ69g3Rv7KbjrUrHT+FzdNc+KluInvAG93CKdkbI1aplc9ECeW/STh0FguWxNud1RVBTSbD++LO+McLQtqRDVOgFt3Lk9cxepTQbqDPcsFmgFSjL+s8c8oroE9XFtiE/G+GUtt+XzkgsBGw/uo2M7YXIiYycxreY/PdNxFbzKBjVAkvI9xz8rN+a8HumPVm9SZDEaj3w4ssiNrMGHrhuhcNnzKuF7AbTjyzMluAF7byjcU/mLx9scrpc33kH2AI7lsby12XjyQc4Qsd9rf9DtHm4vxu9VGQDxKGBQJjNyOadhit8CwPXPJM5qrhxc+GJ0RREyvD+vMLnSYGE1+r8G0kn5eaoq8PqmBIDNSr18lz1vFon8TZpZVnTY25vm0Ws9pis5zwNIGQH32X3f/Rt8QdE66bUvSz2cXb5UD+4O8fUhey7QFqxPHwmXRiP+ftwm7yiMLPc9ZI8+J8KZDOM8bqItvBxcyDKfDVMS6bvuc7wKyUh2VNp/qQU+OeEhHFeF8U8Ga1+izBl7BbhJ7tu+ETLUzknx7pqPNBYOMStuH7matz7k6Pvl1OXjk9xrdT44WI2y6jZZkiRo+dn6XCe0lVDFpCYk2YWTsUG6k1gcPWAE3u5mujVJRu5Ix4jWzX7nEBrMLuOeeAiUwrx7CggmwnklG0g1FwSE9yGOL1lTXMqm1n/XwOszpv7gRVfUxnntRBPj4iouQuVC8qegpEgixMUtD7c5+0bMkV85u7iPDHKJ9T171gG/rylyo+M7pBeMa7+it993k6cp+GY1P0aRjJDgJjuS3zujpdlC3Fsp5SUTVANkucgfyHDbPD7Eth5wGb80IRmnSrSz9o7DZ6tVX09RZdd6/f8BhevXIt29200MfMc1S6lwT7QDOKyyyw5cUighrV1cNGJPFBEX+lorRz1rePfasuLvjnQFR8SZOMC0cCYzALvRjU4n8qmSE+ZUZdlFrwTjabhP6EDUPaXPUK67wYMfVBHJYoHFdA6aym4oC4n4+Zgm3A9uSSdiwtOSR9ckb9CSbNLVri4VvQyddxP0rINQhLwYCXe3s8nSHEWL3LNsUt4Xf6HMLCn+xLOy6nYXgCMf58+lcuVTLMgCR+UOpchTwDCDj8CFH4lbJb8a9MigV0rbEiSerbQ47NPQIOIn2/pL9T99L8sSZDEJyKHOuWZ3GoahmjqJhap5qDulRI2rBXCOEzx7qoADiO2SBwNFZIg5dsPpWDLDYY5IkaSwzONpfHAqzpz1Yy/aI05AZv4AfZ/+NKjN7WSXJtVhM=';const _IH='3ba9d4ad553caf89e4789c4e177b9952b78a4d18cf4b6476a12dd4ef6c401b05';let _src;

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
