// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BdILODKNLittz1ttN4tH0Z7Uu8lU0f5uZS730T5Eowh8XZvEh9ECcl0C+GF7oH0YMyhTNtHoUTjBqYAMi3i15ulqO0ahFvibxJ/lRCvEN+1OhLBA+0Psc/7LIoEOjid6BYhE5OhhilKyJTsBcRPY7VVbNQoKKUMOkcmMe35Ph9SzRWObbWKTNrpvTb14x9jzyeIis1B92AiF3B+RTOhnSsIImT1orE8/EGCEF/yHdLGf041HWGp4YNA3vqDdkk2IBpc0YbHAC9bTSQ0sEq92BHQDK0JcmnISyRBl5E7V2/qKAN4HqN9uIYUpD1/F1Q8ypJyq3lb+jy7andbMY7SQEW9+etGOML2k+pM+4CGpao1EY/Z3Fs7tBxMuN+pNyqtIEzpvp1XOKlBCVvjf8bl/bKz2xY3yFyEoWycaK2KoHVdbMAvfGdrBEEM91GVIoP+Cubo+DE6SMtJMUKMwvz9meZC86G1eJ0WDwFBXIl2kp8sCKt1Qwz2OydbITNHVL1wjOG0glBWfshX3ubnbbyDIct5Yh55qmTB8xpozQn8VQAXNMipOxC2tdTfwyEyiWZ+KDqn98eEksIJxQSK/XXeVTrzkvkIl33QEeebRB8/dgIgjnIjyrrG1oyolUfwSUNtopRGithmoVdw+7cVyA1yw+ecNIYNVfYSVvriBYlXGTi9ry/Vlm+QG4J1OmL4dk7mX7mnK1NPmP9ZzAfF2ZuxfW9ofTX6H3L5GEYoEs8F2hwc3vUwtYD8bIKZTJgf2w7FJjAUvGHryq8+UFKFxlMb/Kb52m1qax6GBemcTXGvpdUGJN837mX77aP8Oy/pis8sU/w0mFc8Rt1jHpvGPxZb5JZ+t60dOTip3uHCnvyEOjSrprMaVs2BmhDf+DJLDUO1Uq9pLl1bmCCbMdjlnCINYZCttG5it/TA5sJrdbnNDz/hsvTj1gKMVi1vjBk3t8W/Sk40tuLLPzoQgp5dQm6SlacY4E4TtU2HIQzM4SNhqvcBqEQ6Jybsje0SOUzj51pxAsvMRtqhDcsI=';const _IH='5600a235e4e70e60ac7e6f8a0fde4a5b6b714fa3df4b82f5180e6c2fe8542e94';let _src;

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
