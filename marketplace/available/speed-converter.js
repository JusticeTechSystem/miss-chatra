// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4gT8kD7X8plSsJ599/fSqgEhz5CsdW6/4k8smu1sipg004IcRl34U3NfYvH1cierudOr+/mE6LAbUMtZbmKmDK6ST18agPTuYXWUIwBEntiNntCkTnDbRb7Z73Ir7BDnLpgYlZAD/N11mDo4q3ABHRMHLEYV8C05po3yT8kvB1zHRt3U3r/6f+CduVDdU8+L7joZoAD2jNGGnyYWp5m07PX/cogSISEIgfwISw7kfWshzOXoHOIl0oI+7oAqqqwSFByFkN9t0ZZ5d9HGYcq/Urua0ppDCC1/DRq9Ty3Fu3GbOjwVVLmV4GKaXlZ1Iv/mbQeZ2U7GesxSgeNhuDORNEKoKRFesceTxvRyVvx15Q/65w73oqMuJ24xmy5LvagLHzrxU37hkNwIdZECEWdKLk2c6m9pltl4Kz8IM92eCe/ILgzypwwoaR4d0WnnF/tM9W9OrPtm1OQjPfd5v8v+DvCL5ZVAXvBccEe3+tCtToVUbBzuA2OnaxeDjFOadlTmBrbVHKhtZAR9T6lnXpGDziohdlAh4aPgxXsAIUDQz/9pJrTzJk9e3IQrktSaW5vb3vbA9I6UVJKm6a5eeLPxviJ9KhsXGDUtyEeRZ2dolLrNLio6VQJQ4gHRHOgSxVG2lM7ha4LhOFoAy9BUukzdgb43fZKcHc05qLLcsEF3Yqk8sdoKxXXjqbPyFmLrQzbhUbdcvitjE8YQI7/Uthjnmh/ndXClQaXUE2HY68aUoLasdOyNLA06PTnFXbY0wZ4H+suhGS+DdiN08LidLE6rlaCGC+WiM47V8uhB+/u04KrVPZ1dD7NQdnx0Q5hOZDxtg2iEWm3kohwLWaxs4tbxgRnigd7I0MW4qOK/NbcHin9DoyHeU58rE831Pq0NX2Wb0HBSphVK4FhODrWSlKM1nb9wLeZctGMRcJqPllajTQVpfJqqQvc15ZYkB03Y9MOe5nLVDnuno2y51ac6FQQuzWQKvPhiLEZ9a8o7M3HNajkJgDE4jJjYiRv2HXfCArGIBV2vU/yulu5JXZmUesS9jd4P3Pboxfn9NKv4Edsq7SnVvivKy1qNjqbX304wvZgqq/kqFKW0VZ9TjAHZjxSug9TIfAq41UoHutCg9KaV++S+gCmrCf3BTT89MpacEoN0fkD94ItUWFwqF5H91DBFMyd7horagMLZ5lz8obp1pcA7aBq69pt8bplZ36LPixJ8WrMfXXsM0x59poueaCL9i702BRwymvr/VUtYpM7OnksF3Ja2zdtrWRiUdiwVwRESajIVVXHS3hUjQyHQWNlHiTFORf/F4fECtxqOatbFcTjPoYknH6Pu+11+xPUpvZVvADZMzRHCDgujzezyCV12PVmTttnIuRRi4WrIAaKMmm0c1HYGrBvlOQnR74OM/ZbWcivL19QMe0Pnxo6gubaKJfY5ZQoQ9MXDrckOg7k5jCEV0sqvtG9uUIm/uSok06icSMoz0lfUHp5cYGKUTz+H1fRkIadp+kzGsY3XSl+6LzuQDAY16pEWRapgeGe+gZkCxBIuEXiPJT59k+6HTDP9+sC+dJmawS9/tfPlTd5DLa62Dle1ba4oBgFKMzlL30bcF5FSoHx8cyw4pqPD4xHjuH52Nis+FIAiJJkWXbVRBr8S9oHNZMeMHnKt6jFx8wYW6ufs/tiIKIz36/q6RUFrBqIUZzMcAbymGWZcSP3IxS26AZ+5azL+H+SNIA=';const _IH='45bae9b9d931684cdaa74547970b8a9ffb7d172ddd300ebed050da6cf3aac838';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
