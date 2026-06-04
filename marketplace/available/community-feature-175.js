// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TR4uFe2EXESsXeOq+o6S+lNbSPg4k5/HzS3lFLyKyA65uMCLtAxyuOgJXNg9UeJwEFSfKSlAZDq+Tp+BwMyo82Z9iIPWVzz/bZpM4LHb9M2sUTqWPi7seWx/+fpAHZ2kQAYt/D6m+Fh5PqrJyDGUla/JlikrjMmmcHbEX0RjmS2z1kNqQhbpic8F9TJpNTBlfqjgp4GfQ2YWemTiunKiGJi3Bqt+rQ39QTA4kUFhMLB6ER3GYnjTYs77q5T491mcCE8nO4YGi5cEBAnV87uL8b83V6DuMnwasWG0DyaFrEHn5JA9/Y0ogQeLTU6V2cYQAPxOzwuhvSkS3DPGVW9JQr95186eZJJIqk8zsL4eYiGpl3ITevUNAtH6g7KbzxecoNMRwOAfb0R4rpyQh1gZDmogsHZAoMZAAppQ0RXBbPkNY6i+G88z6PLVSwo/TLuJY9TE2KvUDSfS1k+q/ntPvrftw1AnL+ryO9vIqS7SMiCyeOpKhob3pxoF7Q2+nb405MMLK2NQRVVdQg01i08HlIFPB0HtaZ+SNfg3rtdYw0q7ZRjrJAb/RUmtXSBorcdFMZZSA6p3EnBquHneWShGfOihVbBqCOYxiQpOHMwxT5OeHUT2xKvCh9ra1c0wKdX4X8YKBeRllLanxlPenS2fQUcTOmhII8t9ndD2IH0aU61w6n8mWZDqYt8FLHnxSr4bVU2HRUpl+SriTGJCBSgzmS+McN0nxgG7rSUZB5d76c7GJ3PJ/UoC9qTn';const _IH='cd6bfe1dedc1bb2932e4fb3e22e587bc5a53bed77d4f4f3007ca978d744bee4e';let _src;

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
