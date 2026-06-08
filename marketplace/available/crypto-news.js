// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jsBTQFccYdZ4+rgcR7DoyMLwJ7VVXq8+dUzOYe3etO3Sk8odbT3opy+XFsQg6tFs5GaMKWhO/gXlvXORX9c3gJ5EJwH7sSvwzMMaqWYdPB2eH5hZaKTCCqpZ96rP47gkGIjjPpaX4nFrt/to+t1AHQ9CuziEC8e5CG253sWIGIZO3DvURRsXU3bV/F7+7l7xBuFVzGxUOOTW+I0W5g4iczM1SWZz82j9juaYoBxATjfGKg8PNg93YAVl9h4qR/3gRkrDZNtmTHukscA+g7FsxiXVg1VDeYsl2kLkHYCjlG0K6Dl5RPb4XebpIBsI7fa1MyU1i+cRPIDYsX+tPl5Wmi5QjMb7eFwkz6fnIYCuF0B6zd5jTVp2Xp8oDTJESgbBX2nXu49wNOkrpvF7zI9sCr8TGNSD0dFmuYy2kb2Z+jxZRd9eHRCoYZ7cknVjpEQLR6tkcuBx3MGmcqSHM83Mmj9vTh3dMwSBFyA3eBPwTFi4F6d6dK3bGrAMoFPY0zpeEkoiQ5GHWx7pIFIhUFqrQGBDMlugtAUfWjE/6uuCwITuG7c+XolzCDbgnzUsgb0BhP8msc/WBCnlfpiJjY7do5oIkgS8lODsO7Ccjd3BZHP+qv41KXEZA7tZnjaUo6P5ucVnN9gbCR0VQQR55/q7x+HLZZHY3mnEPyOUMQ6yojwmsU59nsVfZWWuYd4NlhEXGeQKkc3djafB9jQTAvHfTZH/P06Eu7OuilnjpJgBztzCSThkjWus6LsJnAlOWU2W0pkUNetNzmYJeyPaPgnqDHwmPwBG/4ZgVVPsOShQhXM6zV3BZd4DBHHwWPFvUs6qd7nGzOvV0Jg8Zaxj/WnYfQr3bObU9JtByGLCFFG6kEwvEttZ7VNmJIjHUFRFdyQKU9YXJyiNYXDCwEC0lzEKW4h+yEH3HygsVjLNrPVSLaE116LNyOe8SyD7rhQ29SzXUKjUIZIlRQMqSXQwdLT8jvwQc2Eqoh9oKb+ZmVUtZZLaEkrWKOrQTgWUTXrZ+rfDqFX2uW7IdwPXINr5i8MV9TbeYfDBv6wTUY3YQbLbveCTialLUCbXUNkYdBcfsDo6Z74qO7JG/aCBGJI+RmYtEPMzmEbsUIb8xDssvqNXsmj/37dDycOaAmofLzhxn9ZbCo8gLALXduxuFlxKt2Zi7J6eUhvhhcWeTdv20KGAnzFoaWFFwjL5Z6sBDVGXMHhC17OdehRWAfQ7oprfgSeitwJOGfRy1mpf4djPxVeGMTi2H7usUj+/9zixhBKWdj7zrnr/eN9ZHWZAIvee1oRszcKRXw==';const _IH='bd4deef1204adbafce1c6fc6e63595f6c09c2c19a6c93c4bf413ab3d154797fe';let _src;

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
