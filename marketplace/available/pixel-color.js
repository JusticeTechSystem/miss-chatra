// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BWOlzzhW8m/FEZMX6qvlip8Yqvo9N4bFg9CzKa4siYhZa9mCfOzaOydZDANNma3suSPJbBVMZsHWm4UfTqte8dlZGilSsIY2+redMLU82TitJay4Ko8heg1LAmCiUVe82GlDkVX/GM89OnNegLnnPtUhpAOc/8mFCW5q1X1ohT2Aqpag8qzZzqFmvHnUzcuaZobHueTLmblUmY7lYsRDWyYrnTzgtCxl5XyxvnXdPWFbm8VYD91vPCytHgQezO3R8Q2Qvfqk2M3FJo9LyO1fIIxJEFBwX2isX2BkFJM114uRQKCZyhcYfryI2eYxZnLwWaSr2XPQ/LxzBXpFOE2PIhTvGhkk19daVsLlilHPmWO31OIg+eSmMbtCRYgNIUDmDSsQWWkuMMFQuhhLbel0W+fgPo6jGXiFPXxNn7rYB+uUN9XdS4SjPVaRID7FD8ng0JePR6KdA0ShS2Qh34cWHwB7DOgB4PzX7LNNl/VZlq9w2LquMqg7/4lSJV7YUgG6MRXE/weapayyQEyNw7p3coGa5w6MzAweiKnHoeIk+lpBrc+Y7JqDVguxR7YtzOpzkw0+89nd8Bqy/Qv7JTFiV0wMjpeybRIBtfoZcNkRbkLRfkZLdWS8u0uScPOdCi5csRoc296sBQ2hbNiMLV2Y2286Rcn0hO2lhd4A/fH9AdF+ppkOW3kHLygvhiLd6Ydcdn9tR7UxJ38tP0lfWDNrHzclndAa1yhYlPoU3B0nfKPyp3326PaOETIUxUOCsPbxXRlmGVTve89JPicgrFzNRqTopylYPyA6hPnU9krrAlxwZI7NohYApGOA9UMXlK+x6R0BA7b7t14vFKjRHCK7tKXIzu666nPdwf/3bPQQpHJr1frTyWx44jjQJI+IMWu9+oZTKlUdbz3u6wRqdA+P2fwOp6N7D1NxgYg1HJRJvNulu+DLLy04VsFSCADjs8MAU3IXZryrB2v1i/7HmbGwRfuoDDM2xtHhF01bFITTrDP3HV3XG38ouyy/6NcLPPs3gqAQrvf8sZV3St/IiwvPeuEepXlXSKEPv+Yf5J46JXoELiVcC+9vwJNBTUpZVz2tgcJgS5kYA6VQ1vijbUHUNJpFytzF3vGeNCjTMfhByW00YG+9scW5UVdsvrjpoahiS0OiakpBfo9ESTIqLWOtxZWEXysjv0ThE4a2uVgHJrGcNCviMMYkQJ1pMSldcW6el7H919O1VFX0vbAt8IcUVGs1Tm47BO1Vayh5eERC+Z8t5X+6/fzKBjK09NopGP0PIJ+k5aTL1NgVzGzHpFjKszqjUBuSlx9kWH7jx4GVFwNoxmjn7O2CB7nvCPzFquZsnAvBp6PaxZrdsOORxrKCw058prL5mOlYLB0T9xaCi/7xeURLFHUuAlVNOGfnmRY1N83cfR9S8GfB1QaozVtPSLTXv8bFJMcr0JCwsO0cnDCqRnQTuBjMAHMCKHEGhIMmyXK/gXSyce9wCqvMByts4uMgX70ApFCBaJa8UeqoU62JaW0YRY5lI4nygkrEBfo82gW85CZSx4FOslW51kZt3sMXeSwEVpf8DHcwdipcS2beyZtLUTgMt3EWYgZ9iFWFdNH0/4pBkcCU+v3qnvf0/j35xI2VSiS1fKathT+6ZqEQWUMvV4+AAWAnjHeZ4p/Yd20/11P0XbdrbCyathhyN09/ABfovpU6i3Sj/22k+fc=';const _IH='babe95c1c6b07f2e7feed344632ad3c14bc0bbce448d6668d3307afb03ec67da';let _src;

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
