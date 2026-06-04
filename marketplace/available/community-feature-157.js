// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3kifpL1cP8SWnp+wuIXhOtO/juSLO6R5fjeyDRdufBYqWYm1uGtw9zFAfYowTSATQhXw258+YmrgS4X1Znlm6HeJIQXoyaibffH6O6jbrWWX0ZduGM3WhJLu9pgjNgViweWd7h9d5ox828qnZtp74/tr5t/wxB4Gj2auS3NCfOvtuJvYkCAGNYId8adh/83wrrMyXqChUOPJE/1SLy+q97pKYNbllit6M6hNyaACLbzPDHceoQug5hJM6gh/+C1GeRNh0/SQggx/2fd9bM3oPdM03Wb5fzPLcJ+O1AmKa+7rKxTIT7Rp4FZZepsdEq7tYtjEc9munV+s+Vqs83jQdeVHNMXb3FzA0zJ0ucL54c8Cxj7Pe8bRo6Bv+T6FyXJ2MI0G8QoZWzRTtPbb0kiVxtWGuugV/Ver5TJavIGfQqTe3R2+6Gi70PE6HxXEMFRNsTG1/FLqI4t5GegVAj48jFfhoB2CVEwgKzVzXtDyYKk9s3RRrtdThfVMXKDSLm4jw+lwTRlZtn5wgvRvmj3tfK+34NgAReKL5RXvkiCuUpDGrLNeHlII07nm2ygDilVYH45OpN6qc366zFxNpNH+36Zfq5U2Ne9O5ynuF8tYtayV3UuHRRj252Yt6soMF7+i61X3axIW5J3YGqKKvFB6UU4EPKCy5YCA/Qaj3PXvX5+MfNyXekgN46jn6y8O4y371SdDfcr8LHY7V1fn11Tg2vKnXuwMbLxoXFbiQ7KSNtXlATE=';const _IH='67ab9637562f4f73731bba59b516f54c1e727088b044a43a046b1e1c451bc10b';let _src;

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
