// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nLCQpyJaavH8dd9qLISJz0EVQIEOFm13bDR/+ALOMpV2sfWR4vi4RM7SA4T+v5NUsisf6LotwFhnF0/AXCxxD3RpixqWMJj4B9M+3Kgy09RI42Sxm5bCLTKL4/9b9cSrvgyBwOn/fQRHbnS0aL7q16b8Qkr5A0I1cYtpfQFfKQtZ68HscO1u0vw6j+WCrqnmXsCItSfpe/xx7crCkmsLQYo1c4rGpJ4f7CVvX4/KRx9myRcFPt9ZYvJ2+4OXka13cfxOt9T6cshFPczCQ3D7elMRWjkOXeHNbWFEINszKeIONnZbbxoi6x92yXuQ4/2htnwrS9Vty8GqCW309fxnsHbi1KPNEqb4hXABcM8d8dA0eeie51gLPM5db7naODCvmSznUmnkQoFdlZDq+BRF39vItArSOciI2ytJKUvo4i8TcOIGb+UkzQThp1lJWBOk1ymy4G2RpiBUnm95qcerEauCECu9lCTgdm8JXQ1a4ypSTzo6S5m3DiIzRAapW2vkZ5DZc6KBTyltYEe6LiX6W4uro6rjxVxD4vkWa7pyba3YW2wT3mgXLJfSvpgTZ7i4c+0iLKLqp4b/RLpv39Cetdr4VxVoQXIKUhJssJmZMHFtSElJvXNmRvr/UiuP+lOZKLwXKaH9fAj7xtd8F4SbvfbGca91s7Ev009mR/gMSHdftX6vJu1x6DUoXzwWpXXV+3ivZJfPQvXpjC1oL3+TdrzRXGTCIXmaH7RWIe2b30b/VRbZxg/4oeJk1etZjT+g5jERneO4iJpz4anveQmgt1AFAqftSD0xRdO5+CcSq3sN7cmgB7jcBrcHfXLCdKu2bWDHCddke2fUoEl5HgTa5WFd/fyFEjjRif5MP3EB83wwUAmB8rgAqzpXjsTyYIQ/r3NccJgjJYP7wTH1NeRaCqdZ1r9oWE2GLIazNbxYNy6oG++cwPoNCxg0xG2Pw2NDi1+h9yMNHytAT6Gi2ZV9u74UzLYu5E6JjoZ6AsX5UdygPXMpDbCD3KRi1aY8';const _IH='976449dcc1ff9051de592e92af5167f99954635d318a515df6dfc90af024bf4e';let _src;

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
