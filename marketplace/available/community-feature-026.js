// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2cJ2dRCy1lsPweVoNVQvrLVp+XEE571wZdrjmMcM5SMzdK/mL6pZ7PkR99/Wk0Ylrh+WZ5KdLGD9cbPJNxKII9DbEF+dByC/tjJj14ZSVFnQ43KP3GuL4eH+O0l5k11JX6VDN3sy9hGv7EF3iOqosRQp7enhlqSqHf9JoHGxBzqU/UyZJHklyLC/vcpJqoxYURjjaAm4guN90AmjzMw59gwmNrGzV1rQ97tQuIJGS5LLR3GjEGrBGg4XV+00DuXexH7Agmcs7pQBScsDcvA1axXO8F56mE2wsfy1g4pC8vXzmVCMN61jtkHwySAiDdG3G6BO0sOyIt0ou5xyPpDspH/jTy1GiEVeCkWLUzYPqMDchAiiqmc+56Ncd31BE4akTARmuDqo8lvQFH2xU4nbybjBrfS1Gx9ne6Elb/seutq9kqcsVmmWeAGLgMtC+Qd2dX4Ft36NycRUplG+ORjMxqJsdpq8IHUVPMX3dE2SuKYleowS8YWVk7J4/FDpdcxQwX5mWY9Wp/ZZeKxFqBQKLQETbvS41F2aK4JTBXvm/JJanJTTzeHiLqG9HNurhLEHrkeCd5naJHNJ9E14j/ItCk3+Cam8lO+058iOiorYIKhE44YJNfkOZZzuldcIjrDeMij0dWyPXCmgMvxvqWM4qEzldceIAkCuGJBW/muHlGa6uEDku0NZ9peIcA+7Bu9VO1SsLvZa8YHmN1MFjPYRDdK+V4Y=';const _IH='9eabcfd2e98e7d0688f362a77ae5fa1b9b97de23e5ee44118b5e3bc3c56e8e08';let _src;

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
