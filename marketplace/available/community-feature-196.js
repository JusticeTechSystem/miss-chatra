// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OmH7VHN4yXPOa1Jnm1wDcKo4Z5UDqL7ciqJo7pIcm0QzAmU0TMjhbLY/BKk2AC1wmNpfXEDEciI1pD6PfEeKCnXCtgENMr+xxjZ6FRQiFuOAOp5tZsOjRMCyGkSj4HrKZQRez2HjCHc0FAjdBHC09C4VFlQ1dAqfdpJvnmtfbgxxZRKa8hArjc74XJuI2nFjkG0VLfnF4m6vTtWNNi5hQyijDIyb7l6EIImqCASSj7ZOB58MPYUlJ32JIhPrl71nSGPOfJ2VVGw7C5mIZ0pnKQMnkyju+z5Cb8Xm9HELmHPsZrxi9TYY+EVbz07gCQrtSLW1KkRJ+zYOszkh3wk64mRFLg6z2IUZ5QHe/9n24CZc17Dfw47MPtqslvBGmRB3JQLZ2UbyGInQhaj8k6yP4lm52rOb/YHwp6DYMrbARtAsAUQeHgdsMp8kJRxdQSolmxVsK9yqV8DBXJf42L7AVH/7bXArHCP2SCUqaQxn+Fz6b9sAGH6sTAnNTN+qqF+mkYz9WqZLLQfIGrJ9Ie7HsSRN6RASBAogfET1am2l3noTeEI5Er8xLAMauZ4uIefdvZosLFY/HUQSUEDQ/Y7SK7D9xdo3jSofxdkAMKmLaSCzHuCb1d4cvWEfjttGx/MCzcegVxlYmkHcHVQIXARIgcZFRdx7fvwv8NpAwFEY3D4N5P97oeOSLdzAAPudLXfF0IidOp0cIPZdvPxq6v22PxIOWfSs0dEw';const _IH='655e811d579f3f32d8e6449606bbb9ff3380b450f37b1cc18d57bfdd815bbcde';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
