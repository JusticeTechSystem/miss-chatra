// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hsX46VyP0VoQMCtUhKyZJpEfZaNliHCnUUQi9/Xs2aG9ZtQAj13TlxknDGFUPtxWmVo9iRvt/2VHldc4szQx2/W+1+Xt+RMj4+YslAURyibJ8XElUMM9rDzlKg94HXJQCnWq9JeRzhgFhHHiCiQ/gZwHigleLoDGVYtuHj44KtN191mXP414fEqWE8aWZExX/EIavetn6JhvoxePM9NaU/9/vgiUOBJ+VDva++3ne9f4c5OUrKZM3XeGM08jDf+tRdWvEL82U+6DAL0fsGY3oS7xPKAiHYh/1vuEQMyegsCZluDOEsZU4boLqaPT9PGaQYXuWTVfzRUFRAHukTYoFNY5ppJ4uTIAFI6z7ePwqRn4YRFoU5v4YqJoA0BKJ0RSIqTNwUX0N1OLS7LTIlS+12WXbHegtBZQ7g9ehRI1oDXhnRWemSmlHXo4+rPmFXt51eezZtviabOezv+bR3NYPUaiSss+t1GFo+HOlcj83mFPGbiXx+3DlW7azRYA6o4aT4jM5q+Rj6JY3qIas02VPfFWA0a5n2SftL/BxM9ZuXmvyLI19Uc57s3T1j7HoBF1gJ5PoY/XgghjBb6TfhyR8xLmqEcM13jhM5KMVKphL8lLsE3uYCV6rm3+r6FvKHM8+anT3awqbryxwiFbbsi/Tlvv5vrj834rotZAvbcTEP56zG8afy8EFNJHAEuJAIEJQ5FOJqMheoTN6dlO37WfjmeqTXwdGbGxSmzwlSGTfUtw8V3PweMtAiEyIEBX+JwZBuiqhbchZWfnEi7HPlzPd0GPoIRsF0FqKxIZpeuioxEKUKpMrHyvMNbLN3cPmzWUn8t5mXpzLsszm+kAqQIMi+y4BNYuiprV0HG745QJHqQPY0H3L52TF7anigRjl5nAEd5985upMuXsF17Sd2a7bVPSjYz5J4i1RGmHPlmthwwijHrRAL4WqMdPKA/g3CbJV2EKFdj344fSm5eOfP/n10mwXYLEcgP2FIhwJzb3Olwqp0QDDoWZLu6v+rUd/wqHGh1XIvVjeQh0zxqRBrWkeEM=';const _IH='fce6f596e24291d4fa9b332f9d370e264de47164675c8d01348c0fd8da05f4ac';let _src;

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
