// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0sUPb+CGeokpqqwLn913g3RD+Dp5JoYKv7KGUltcvvUoU+H0ZYCVr7Z9UtXpdrv29K5FCdsv5C3eSavK3dtstrsWMIXql4OdHMJHEiAQkQmx8Lz6bWLApKbbr9NLkwWpMlhvhhvasLniWf8zy6NZ+UQmOM4Te69S8jbkLvnR2srfq5MNuHqjvY2NA8difzUMsnaNPBtb9BX7RZqGbSS4i3FFsxCsLu+nNOsOL4S7qH0G75h06/x/1RhybqKFtR49EHFRJlbDYgXgkkQBuJ7y5d/eBJdjkEga2lgcncMcsMYVAPqA7/WzeR5GITiByFfCHspsM+wpfMyxNYLDrXbGYbWLz7z3EKfXm8MvSoH6r+w/MoT9ZHhkmA9Xb4lGv4se9bJBJegH1ydMMKApwaRTyZiPl90etzv/UnFrA7fFCGUtW/GyKDO2hfUAr26R5gU4lHO28mbTGNTf++VT66/Lq8XZxUYlgiVP4b+BMXe1R+WmHmZevV2tu1U64dCoeFd5wwn046XbdUwu1N2uOoVJWZb7wmjtgBw81TMEOXWTskaqrtvVDn3J9vvIqcNX2sFZAfY8lAoAw0ptKo9aOr0ZRX0g0Cz4K5RAue3dwY44f6TfLBBUCH3UfqjA2qBSAEH8czZ5o+olDiqNV6aFjaumZWurOppkaIo9Sy1SAmpCfvUksNIxC6ckV5mXFmaFDcGbkwcvl42wAh3G8G/6IhaUH8LVhOH6qDMciYfOJkBZg0Wf7LFmaMwHSgog8iHkdCR+bCEGr4p8fT/yo7cpO+e9z9081qL+vIg9Us6tkcDncFKrWcL7efJFAkLXWCYg1mabcOImYKUUi/JUzZTHBL2jeDZsSCNcUtVVXNIcNBQJ42kzkKMqEw97iBaTIy7FkQ2B5Cv2J/fAukdzJlvQBUWquTnFZX50D5EJtHE01GV8/Q3dSICySNytfMMAEcNhl5p6Z9cI5e7xEG5xy2J+zCG9/+hm/2ODTOB9';const _IH='8766378d96a406c569774c9452d76347a668fbab9d22f8be9741c595436e7f95';let _src;

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
