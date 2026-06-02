// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qIdVMNLoiX64/I6hDUsSKUmxOFDIhwvT13vTn86DAmkO7mhaS4ICD/RIduGrQkRUMM1BTukjTjSW5I238J0L3eIpdhIPeaWezIVzjP36YTGSQ0pc1tkxthXNQjbAtRj+Kv68StFJ8EoHInpT0FTQ43T1aF++mhaf6Nm5i06zd6OEyKytxF6fb3jAoY2h5rDtHNoyG2OUUqk/0WCuyMEiR6a61aQPQDnfXktjc1r24IWUKcjVAfiNqrH+9y2pmSjXxjFkP+Iz1ORIyygJLb9zGf17tWE/d+a1s7ex/KMl4IGfZh6iEDGR75+wRCNI6fbjniKmXSsO6nG/7W2cXRvdDYdA7TvpZJa+XQlEJooLQEIh3XeuewJK/stXB95FLwxzI1W3e5UhIiO/kcUgJ0ndbd49dXq/MfiB/etSfQMyJcMKIMy1Q2YjPQvUQ/eXdtoIEnn8Xqg87nkig7U5Q4/Z0QDYcIYvtciA9ceHJH/ENzCtzGzX0f3T49V8XzShdBHHHwklxOUEonk7ecnK0ZqmNzym798fD+axbd4fCz8lppG1d/lRGDGVrlZUmTnuL64Z4iWSub5UgTZrt3FNle26PwO9wzQKw1Y3U102fmetwQmQzNKCcPLH0UUkY1j6vGY5B90OwXa3jEtvBVcHsPZAjTN/eQnsfBdSmuUFhv77bC271Tb/M1vbpYu9dSoy06k7UR3GpbbKgYNT83GFKBjXGnTb2DBvddELizqP/sGeI/sPR/DjFGTW4Pz8uQww1A7bTELLSjkhfp1UCz0KLAnQE+o5WYeVxsWyJyPcSxD3d9WF701Qt+ttxGALs2VgpbwmXOz/2Mov1u+B8KIeFvbNbbTa5RP7mYeFi541wMmiFJudDqx/uBhMLAAd5NT4mJyDrkG/t12e/AZQuSAqUmPpWzWJ2unX/BsGCTyQS3ELgp5LR9hYw5fntZURkMPkYIqpBvX/s5EEn8JFoATW6fVx/+C278Kiljck';const _IH='4bffecbcb34e9a655bce1645817eb4005f81f8283e59937d190fd3b4f93adfbd';let _src;

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
