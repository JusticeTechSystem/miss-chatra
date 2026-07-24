// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaKwoSUVaWHjdjpCuPKFqGnusu6lUsWoFIgh4XYDVjCUquI30VKzAl4qFBm3qzu2PBwgFx7g4Br2YmtZ9naKG4MKIFb7ggG7cJNzQPv7u48L9jWtbEvCwP1jNVpQGFiAwPseTRzMOy8pSH06mwPJc7aPKwkbhEd9WmTtMg1TkOBbnwWc3PFUVVasBfWFJJikIJbsiCB3irvP0/E/zIGTZpO8svj+tusl0whhju1JhS+hnV7J6ikpTneobUFAY+ZG0J0zD7p/FUJZKMocZBej/rOZk3d2FSTNK+wc6gEZQxA7LrT5mUvoIb/n5KefgG0spu5dyfcNbJ7vmQTf0ukVU0XgCKmARtqcWh5YwdilA5dCioFOUhTszCGLJNiEdfpAAT0rG8sR5IoaKuZ9sEnU2KafDa9dKXF8W14XhrIc92EyUHm5DA097benoe9P1WyUvzPTsnObdqA+mwmqmqPFgqNa7TN75GYmJcYsdrHBvPIajzwhJwroJR16ajkJujOOvLdM1FaAV1gmf/YKoApJdK04dL/e7p/wX/Cm60zE4HckyLcyI0kNAEgoJoIwGfrdP4NrYSWnCZxPFLiW7PQ5VSIPoTfcgSEjQEge/eKfjrilxqEOoroOKfAPKTGwN0gtGyLkscCnnxCPC18oepPgcV6Jr00hShTB66oeABtE7d9kcpusboyWnmYdG0w7F7WGP54+c1L5Z02daorgfX38wHHMmIVVr+EkPyRwAjNcOyTNlObDuGfgqG6knFf1B4p0UNEdyLAu09Ax9DKfAYtqp1qNSy4ZdEm0BKVC5+zSfIJeLZ4J1unddZeIZqEKcikpCYa6G+k62ncJmbYrdZOhamR0qVy4ycRpOJuVVFonq6GC9OtD2XZbDmIVZ+dGto9k+SXuQE3ZKz71NQ5eWaguhBOn+rZM4P3yGjk50mKu5fypvhpcJwb+uiPg7nvqCPDpa3pXmZtZgByyZWT1MABc5gKd2wuIJGA+Sr8i/pVM2eCWedvAVKDd9cvY7JwoqieaGCG7jUR0Le8SiE1rocmGmp0UnER3oEZFgAXRQtGAeBfCjLkdVyF0W7qiymOT24AUa8j/x0NmKNlXypHpaYdDoAMoxwcW0c/BsU8YCszTDo0f09o1egsT5eEK9Dd6jav2I4FFax7F1QHKhTKbzSmsLrpHj5qPVhUS3izeiwCFngYVGC82kmqg3da0rcgPVJ1JNbYy2icPX+Um8kIwXJs4L0KYCZf/0=';const _IH='292c6cc9356831be30873b39e84d8489826e2dedcb31dd346e71430bec409fe9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
