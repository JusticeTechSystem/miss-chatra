// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOOXxAaSjIF0nI4ZGizheoEXZID1k7+QlHhuxZf0sZrJ/uXrkGqNmAhENVXcHwnzTjNxOsHJ3TWBO3Bkw3eUAO7nvKX1V4/gvAE7q7z6PwUkvhDs/ncRTj/nXsjistGfRLROEmhyaMCATQgf4SqxpM+rSarmE7NWGdbkMWvriSNkcSIXp2kRj5oQ8WsAryN8+XgSgcNtkF4JIFpmqQ/y6PG3AtXV6b9S4BnTH+8mq119wKAy2VFhp9pz9y01ZN7Emdclhe+ojSoYCGOgdF1gMvJeCwG7CCPK5DEwnhcloGao3MNPHTNhH0GqXLwzCxvF8sg3kGfl9F6X/qraIyA8Y16CKuvVCYJtOsvxyiIOapbYnhZY93i9gYLkTdSJ1fIO4hYwDqA3VCJh7fFANIoqTGKL3/PZO4Q0SuCinFUP46CJjuH9etO70DNF+tQ5c7HvNSbv5z+Tq/tfKj2b2kMwRRBbOxpr4UhRlg0h8GDs9Z7tnaXZUETQWTJD5Ru/UCUU8fFKiaQKxlbd8KtwpMTQeoE2F39JGVvIROIXvdmbR+J/yxyfdwIIKjYZDS/w5VxIIk7BAVs0zy1ccSYRCrExaMyVeiLRIcPBkuKLqVIk98pT45T1y4VrqFaR8fLmyeqkZY6iiNQc0awEYGlst/wGDv0X1X4dGfHTwjusl/7pHxqX9TII2zUvQccINpyJvibAfsvMeEPxDmic5Cd8q6teAZU7fo2FTgvHaQZXp2PxfpP90vu6GqCopA0tvgjYACOZYyyC5IPdXN8R64uR5JLyknTquHHJFs6Xcgs0oXPr+AXZQ9U0PETgLgQ87Fd1UUt+lb9rKM3Jjmj40fFkcZeTOKySxakMSjlzOXVpaIRFso2QuI0yHIPWtwSJJO7/XWmXiVEyKJX1GXfAMCAFqWcKJ1gMCFmqR9YNwREUaoBaHBg+Y0kLw6vD30gwrKVFMVFi7/6bbSCD5Ke9e7V6RvNmiwfU6aenXHPM0izb6ZtTtQQmHDU/UUsCP/0RO1HSIGLD8UfgkbfWLtkfVLt6iwvvdg4pYf1IlXXTt9c3CowUjDQrOxfseeHZHeP1MvmWMRkNSomjWwKpwyNsc2fqfQO9+wgkfthyK/4cBgbdj795WMdOyioYmrONp8eNYi4VJRdJexstnX2trBzSTFGHq/ioOXUVkWLKB/N1fQXt/Piyp+S+Qa0+A+dPr/+ecxKil35r7TwVNlTjDZnU1a3Fwj2VsvMOjiIhnPaDrcG+MMdfxVb44cWz0+eNVEDxUbjXcJ3ZmhFbORepwoWDsBMM0Wx4taSBF0//hLq0NkNF39LLKda8B5B59Ihn8gykCbqT5o08+tGiXb/5P0MNtNDnJjDkODfjViI4DZwYLEwfySjL9Ek4Qu7ivf0vU1Xj897n7hmxsEnwHLJ/pxS965I99AjTlkyjVKCL';const _IH='1f543c02623e37fb0b22936692a4c95ea39774a333a93acd13c49e2ef50106f6';let _src;

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
