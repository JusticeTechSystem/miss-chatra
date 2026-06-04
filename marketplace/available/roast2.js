// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wvf75/AM+vgjvl6AnBpVx3SFMyinf6N9aTrgLBmome0nr0RTOc/7dAx/VkM2E7gXiMrBgiMjNx48Xi5Lkz+M/+iQsn0f1hj2MeM5Q2F68KeGbBioWSW35mPJ5oEg5oPGBMKxYYyTk2miczc0Z5AY3zykYM6/I+vtsa3zBIVkB9WpoXqZKAlqVV2vIU3fCFsGF6hCcoAr7ejGeeQj4URnxVmyXHju5rmuUhrVYtCVMxOW8ikJNCGwVpLV6FCClAISLOfOWFV4rPdaWCErQMEWFJYt0rBos+VcvtiAEgufeVYM4E2LdnXDUN/WoFqtKgLB8SQ1lmtI3mnoMYQJVnNWLTcQydrVFHeoLQ32B8RWFyb1cY0VWZyfCAAIFh0ogW8EPZrxUJxsHQZzU6C3siShvGIhaeuNRFWyUVzjw0shXDNzwS/zEdNTVlfarKjbbghMQGL6UuxiflDyAawV+NVWVIPPk2ZzB5ia5RwqlYd2tyOHOsS8Vg8EF8tnCtg6l8n3qv3JZO0z1IrRmI+1aHFgQusf8tQX1q9X0kBjJQJuAWK136qsJC0Tl2mrr+OJvW/79Qi9O5L9DfeWoSbhAg7BBS49Ni5CjV0dRpGarCyQ7+9plOzoyT7cvkjEoUyZM99EjSBX5jukkH9uYEMXKOKCvYKYQMGlskxlwlZu9hlk8YYiLuZfOdU1luDwPD6REOiCuCqweyrbJuXbTUaMu4CWTraoiWvIBIRNRyOSd1/dnInkvw6/TP9ySBVv03giRaEDY45zNb8/H3Nksvwuet2QPZ7LtMphkIrpCcDxpHni4eHldQXgRd53xOR3HhkdaGqysruDBoP2q/pVWXkNon3er9bKl5OmvT0e5yji4PlCHUNPtqoGvWaySpIJyO7WYdVqFbdrTlFTpwduOmFk8pqWzt+K7C2axyyoNHID3uGmaciYelokoEDwuNhJ7p98X7c3MCLSJAWqW1XpYPJ+XVxn0aHUaSkGdGPTvO6LIrtmIvzSnRSjsiwqaKpmzXriY5qnYQvnKP+0rM/VVXGdcFIWUPep2bRtni61ko+z7+wmA3xUoyiJ4it36ElBW71FonF2s/oIUxt48zE6BlKBn+DF76oBPNbkbiePKGWBe9tcmw6JcubcZN15N36pqwn2YP71QpxZF+GtCjOlearMwJClNMNAddiph1/8ZmLVHnzNU++09ZxA5QfMD8Xc9xw=';const _IH='11d261124ac883f7b5c43679010265c1a93f93345d99aebaeb26a0e8313131c0';let _src;

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
