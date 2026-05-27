// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iqDi5AJqL/1/GRLVi5MM1lwxUjG9W8okRSHJoZYromEnvzkxPkc/h1dnDZVmQ62JToHhcK5NZq9XFGFyFXgdo6SbYDt1PmBoFuT9e7qsmuw+h44X29AltElRRhOzwLD6/IqoVSV7SUCuyyhuPPw5PYTM/l0DddstPhXZL1WL9pTaE5FMXYSHCZOTHZLTo09qJpFFp0SGCDCdbnbRS/OxOvwtvvzLpOIK9cGtFRLdY817UzvOAfDgJv9K1rSrjKpS1tWMQFQxK5Q4kJL6xBiSJhybKy5Fds3/Irrnn61n39siC+keIhzl7ptUYSqWzxdDXVnEA+DqvxkTjEH1j+WkiEGI6I2JyX9n3VjBEbEa2nsou3EV8zbDxJDvpfwuhAz+ZQsjw0+chLJTjBnLIsEsYRJ58g7dqLom3tFm8pCxCyxxPSeZ3zd07CI3Gq7ngMFdLU/Zwz2pX/WFLV7lOpMZyaa5VqCmX76DyIFfI8EUxniPW0NYNLowYcFfK+2R3PL7pLdmtNdWk6wnt/3B+31JUQjfoZ71/SQqCVdQ5MABpQWFrxpRbUpVHcLji6bUCqU4f0ZtYLBKCnrtP6jRnLor5sdEgjSBxQ8OuR55ipMupbIojRu+oMXCK6G+FtkXLST2ihv59YuDsGxMlJtK3ZhO2wTPCMVWJzHT58Gxjz1P36Hw4zyElPCK0g6UaAZmkx7s+3rF+aKJMjyjv9tHWc7ms50Os+cDkvEH7A==';const _IH='b110d1f41a1003607ea83dd9bf7421f9eef284481962d2242559c1bee9bfed9b';let _src;

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
