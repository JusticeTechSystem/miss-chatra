// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJ6hey+AGhUT/0O/iWUtGO0+M9/u7WQ/0ivSLkzMfWR04Fu3UFWfLKxbqWzE1X66zaiF7WjG3Qtg7wIqTxSOI0uMvUnQ46ZwU+wNl1qC9iCklxO+AllTS16Fgl6ILebud0MFKbVgiPP9o7Yzy2zkpXdTy3sJ5/gJ2abvtUi+fhucw+X7pZr+AdAWPf1Isyme4SkeszeYZEG6FnvmWxOEl0zIXxvqXuRhIBuPeP0tLO07tsi4z/ct4TMlJVV87MT+86sfBw8DNT/Y6nnFkMKbIjzeh40s2ul3J1WtsBPAVPzIkFLn84mVTMkylYwXrOjn/a2i/zPZaDFIGu4LP3XO+4xQTXKcGnMH+EI2Bva3Pd7H2DoJS7EC+MYLSTJcZ6Qeb5zbHpSXFIjKgGNBd70IPNhEIFjcV36QeUsAIjJ4ZI1z2mo0/Ten17pk5/HnqvC32GkKJVQlqbWfw5ZQbb74KC6SnVjm8iSrVHtKXkIxm+UAih83bw0zEyDa6EZhWpoWkN+NkBtb6fizYa8uhWKldeALvJxBOtR8T/3bLktNovqjb7iYUYaUSyVHVfq7vWN1xvjXapEn3WL2G/ex5UmOo8xJjccgNWDAMb2A+WHo4cE4SV2UQxywfoB/GdYeGW43uCrPUSqhR5Kf/m+HkfMq7mZzYizkfvsr14ocp+m41tgBLYtpB1i0lUZFj8/sFNwiM0Ois0oC6cSLu6YkKRF6z4YkqQSVSTMfRnj+2pe6UeZyV3ej1y/zOhMz6zd1QPrrU/2zz95+q2fwCOlWKtkWj0yHvqbF/E1T1f7em5LdAjee7xIqCC8wSQIWqxaavLOnxNwmr19pUjnZYzzJiDEPBbdQe3sOX/d52JsqiMILRTblVkJZBcg4u3TK2lNSfsEDzTsesZbXnl52ltjb1Q/lHorkazDiJ3fDoBxfmn561xZrT6loNf+SlQVjaZBpkQdkHM1N8PXWCHZx+IknQumz7ewX+J2ve981H8/loElUeIKg2OPEBlJXysQ7L4QXrcntg/w9xG5QBP3mcq1f4jhw8utmJpVtN8g9vA9IujSY6BxM9CpLh6yyssT/r4N0hOl9YCsqUBY3DddEhoKyuduY/jm4oiTLP5syXxesanqhGjS9L+ibYWXCAhv8VR+V8vkd01lqbOYl6SyNY4TcJezsSML9GL3Em7TBRta+XRiNrzKR+k0BdApOv7Q+dFrRZHTcgCMLExQ2/fIuHQ==';const _IH='20396c5ada2b86ea8a04307e6897c5370cb588f13055030ceb5813b0648a8061';let _src;

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
