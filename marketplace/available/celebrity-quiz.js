// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vDOqrdAMrA8A1LQGpUhFNhzHetQNKRZ5m31Au7hnAXz8YVb0D0mrrmFKsm1R7QAyaVaXBsYTqWjaosd9WFavqoqmmoo8Ap/umRr4xeHe0wswzbUZ+9yXwU0JWQNFaaBI5H6nxYxOFQyDX3v10A/Xx2oim9YNKrpmRkHmSSLJ1/0P5VuVQW8uOGpVNwKcNjvRbp3RTQbLJSWL5qt81VtgIDJgqnFdERlYlTpNifj1CFYykGcLYtveXZFnkNwfbnxHX3Qz2wIdgcm9VSOw+gB1DcY7h5KM0rEdBPxgJmZsYKv+W3yDPUJPJeK4JLbQtn1Elsr5p7e51B5wxwIsq44MEDGrX8a/m7v/7MonUFSl6EFr8y39kHI01qgdvGqP3GtHjeul7rNflwp0zRyNg1MFCJFGwPxkmRu9+LDtb8sAsFbBgjtB+DoHEyxp2DkU+L7WNtm6piNyBCg7sA+4h3GJTz4cf11SEFJZOIpo2Z4Ewu/dNoImeAbg6TSMw+U96K6kA0bj+Lkzj880+JBGMSeSyGXsb89MfESnnV/MgMocWY7Vth1Uv5TnSciPKFz/qiH8yP/CPKN1OUex9rsA/T/8XdLws9lgmRRSaMTzX/zMPDc4XBPEFf96Io0amx7AsckT3xiD/jpyXe3iq+dBi3TFy2Ka3JfEjQTEn7HYVQMYE0TNzdr2UfkE8OU5coIjZBaQWX19NiR1vvggYzwRbgntYvjejBsGIRV+hAnEtoCsCRmLLk0vJeOWWtTSIRyBPqAua0c8s79xnmCkbs4e5zjok+FagzPg3wFp1jsHkxR9UAlKFZyO4XMmc9EVWUqaMWgE7+xPZvsOuy3gzDO+kuSFjjK2UuCavRczgqD3GqGTMgiaW1a7X5onbnot5oX5lfTs4fTaguBxjyr4DDPxKz9x+TWTyJxjau4M4NapmxAr6dNJ3HiKsASxreAER8POWrAJQZVhl2Wg80nC1v2kFF/aYTySQHGAkklHVGcCQ3K7PDsblSyAb1Reg3tnaC15+RRXe5REtMJJynGO3gJs/wR819LmPVwIjEcCzCdJ/VeuvJksxm9kn8NptM1jWbYMiwBry7vibwbgrsBP+A/jGOD/rTt9f4zjrgwJgbLupbXwrvJl/xjUYUjJZ7aCM7I/TReanmJvt7vCgyUG+aT/lMWha8BRrHekGaZU9epCnKV14xNAitPTLVyskdT2ZJnirMiSQppdWkxwuV2a0jVdA+EoktPOdWm6gWf9iy+bnuMqIS6mQh6H+lwvkGG+wzIhKsevNTm/VIdDYU9uGmOjoeLb6NSGlB/d1lxv5GnsuhYuKowTqeSSpgpjEzFdTafkLk7QsNgCK1s4SZz7sf1xnwCn2xgMgPZROk3xyzt4lImfPl3v+SI98KZOY02avvlCLQXJjnS2M/M4nucOqeKGm2UaaIRH7m5+XcZcBnnZ8Y4Bm8o=';const _IH='6e15faf25510303596e57a613caf827fd1314db4b38b9659ba2b30888653c247';let _src;

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
