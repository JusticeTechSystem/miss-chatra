// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OdELJwXO1whXThrxZSmbLFquDKoQMdH9muTNK16tuBjgC6XBOAO5rgRpHnrZSgyTcNkjYvE5r4lNRIUK+POKrE/tICWxVXToJuN1jGyrEY0odsudvo+TkUH52IeJc7N0FMqEHFb179eLgNuHXfIYanyoqOvs325f9EzCLqFtOxiHDA6o+ULw6px6AtgUl/7c9E7ytFX1CFAwA40hsc3RUmOlAsnbNEE8JWkpInnZJzDSuYsTadCptxctoVPqaaqtyQ4AVAdyc32xS2l0kMQpFiFRhB55AxARt7RnENaOB5AOV/A9icdnogccpWzMUkU3sWFG1wdfM+oamzhSRPJsp+uED6XJ237gRjfcN3tpAAZr7+jmboUqDmef1lVpqtwD4lLJ6PjCejGCsfihxVluewFATVxfcCjXV8yyCWATJt9RLoAd3VQBl8qfIW++CQlN6U9R5giJacwooX0Y1JbQznVyL5JSMDL7bF36u1w3VB2uphMhscwxmeOlifaVXHlC3APBlGFFtzAbNmguqwRneRBtI0AenIO/jzjJplXEcRN8m/dZtOJK85v7jgehY/ZQ3puJAJQn9KEor78puuq3F+mI/f/Xj+z43tpPAI4DxfQ6gH922fJzSgU/1AvXKWAWs4TW6y7Ysw/AOfawmeKJfL+UQDzkAyJyDbmUw3AJnNL9/Mcqe3fWUeJmhvUnEOZiOOrvXEX68tiLFWG049A4CQk/dHCvBoM9uLf2E0A=';const _IH='929e8e4e3618d94e318f46b10391a7fd1764002abceb92fe6400a42ea3290261';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
