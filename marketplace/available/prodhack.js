// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y3QK1mLEA206HG9GN7B5zJhnwzuJUwhm7PkNJ40s1ovYD/7xxweZb5lhGOs15f9nBA4AAoC7MNI2tgbN9/KHH+Fk8YY1e3ZPBI1iEq1z7mqrfZK+BJYTkODiww3qmQI/WPyFxsRJhCkH+EC/V/9jU3ksW150qN3I0YkTHma/2I6mCRdOdGJBPMFuu7dVV22A6AAVds7h0v7d7tlUYIKCzn9kEjVB5aY0uCx2ty978FeJkRwwokcC0P8Q3/a9tMLwjdM8kLBlHv+NZNb45K/phBvb2VHMrp63JadhIGWn10nxWlEdzz8oiFcBvN+L1VtEJ9vsuYU56Huf/rcoIfLDXOsmNOBGl+n2c45tFpK+Iw6X/aoTndbFR+OA4y0DPXNo4pvY1QDjlm2zH2eUMP8sNQNBYYr2n763NpABos8ysAZnhClttV2m4IqnYBUbr6mjMhVmUy8LY5ZsanBQPuUlznzLLIeYAdPU61w7WFrGacsjRQEP5Wsri5nRAusZ3Uk6/CSDBzHi4wLV9EqoQJwpTTe0rCOA7Bvj0xsBbwCmGJB2hbscNwUj4+nw7WHkcERGmcVM8yECMFNW2CB0vmn3poUbBQB951+wqrWh04NohBdMKsgQpSu3FN+3v53CHx0cpcm64kjSuXP1sv4A0w91ANUQZ3Nt+dWnBhI76It2Ao/JpF7ZgUs5jEU3hgpjNboFh5+sz49tL4TugXcoha6k6bpl9wI5yeQw5f29wxhXDEAeYl2dOWblEBPlVNkzuLfb9Q7bv6vxB1XGvMy00MG4bSatA9lqRqSruMo2r+eje1cMmOmLOjoYd7cIUgkPp2KSa/T4AVViu4t7+TJ6dhuujsazhvlEavSr/I1lSMOuTRMzeVaExtgjm2DkoQfCdId5esiHIWfihhNuBRQcpmFeHtskqA9xfmjKzqW6VmKH0pHAIrim6L6h0G4/nQxBYK9gMenHalUmIasUGmpno7LV1SoGLo65Ji/HYEKNJIxbK0lcaeU2G17mWj/1d+qVT/D2lyjxgdm+87OMuC6Dz7hmWLs2Dslab8g9Xx1LWXSAgVEv8n85bFWhKkPfFbRNoO3bTy04qV9tQooR2/MkcSybENfuEei+enJbsX0hPUKDRaGVCAkB6t/6KG6oxY+jZ5FyZTu/WINXI/gzIcd3oFeMMqIZRXcX3AMh1fR46UDaDb1/JF/jQfy+GQvKXiGvTfjlhgRkHG4=';const _IH='35a672b03b25b87c488afb46720aa2e9b3a01cc5945322a1d3572cdaf8079785';let _src;

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
