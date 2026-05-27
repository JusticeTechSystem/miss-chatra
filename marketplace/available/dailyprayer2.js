// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3aQEn22YPue/zAWWOvddFDaspuSbAsgjN2NKfc77O3UcPT/lRyKH96dDxRD+zXAPFxhAE1Kv8Xe43cJ/NFjS/3QRS5ipZU6SYKDn6GnGUeN6uWGz5M0w/LOOv/FF22rKGaIrYwXJ3spBDUsXFm/iu7S7H+CL6Oved7mQNHPT/q59pdJA1mCYihSD8BcbWgst4NU7SCr+Os5jhhFR29ArMmHnjeXRzVY6+PfW1pMxYDUNKIiRGyjCenHAFh4FUi7ljesm4dqL2gm6dCPWhQ4nobBVQ0vUo2abIBp2bT7knJ1srx6MzsmxCoBkQVEL3OyGhTaFnj6wlkikj/cUbsggmpWYVdmlPOsedNl/A+2Zv17eXlcvGnCcRj3OSiF9Og2ClnIYyqrcuzHU3p7nlvhg55hQ75bvvWmwezbnTkFyJ5TO3tZD8nhcYjuGa6c8i+2uIXCJ4l+113v5TMMqC+TxgCiaw1ifLH/ROUOlt10EF7CT2j7WvjcMO9kFSfsn+39SoWG+M5iN0FVm2vopSwcrgEpLw70a+Rep6R0WZ52WtWtQYlXrsWgk04/53YBNJXW525OiyaWxlmzPGHlPxwj26T/N8I+0iWyRWT2Bx/W8u/ptJEL02zO+1LnzzDVQd5WJ2/iLP+3kcETS2WQfMYtL4gcOTL0KN0MIYoEtNeEYW/1S7oDvw/Hma6RR9OvupH8w2bFYs6/K3RZzucGWkuOJlmkQPzfLw5L3Jcw26hka4T8KmdeXEpXZtxtGsHaMZ9Mj9rBYfyeNr/mFag09BXWIStM7HRoSgOx67jLaJhLbEyOBnlAkqStGM9C2T6L3EpF+u6vWGpk+fdgRYg+mD7n2uC3PGGxOVOsRTqam7FJsBTc1PlUEqXl1rm325S6IgFzQlnIYiyy+GhH9nagZQgbjDLAGVM2P7G3QubLqmT3N0ymmqOeTsCueleP2mRmtL97a2kCGpTKEsKkqWI5D0YhZvKRH8wF1pZhMGrjkPqkqlZsAj0NDQyuKnYWebhcj8Q8EKSqWTWfeaai6O+J7OGo6SXhsDK37iNZhpZaWjnIctSE2apgdLj+I3tWEdrzze6asTo0a9JWVsBgJOPSC+OFEO584C+tPCYdBXrTO9psL3pQc1IAIcp5ZcaIlW/4C0UAQ4ScMw8zWC7JuksZHdQ/syMGyHx+5Q4cculED0HaRM+nstlPCgKRvWF2FWrptnZLE6jBjzUD3298=';const _IH='35cbe7fbdfed73111e028156f57bf15bfa6449f3f5522d7f9048b4277cbf1f6c';let _src;

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
