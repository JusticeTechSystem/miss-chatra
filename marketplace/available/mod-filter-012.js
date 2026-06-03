// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='McjFNHrVE7Gd9+WoAcH//zBs0IK/7uUKahbVArRvTAZtPKVp2mxdjTHq4DgifBCsMuALeDABqM7zFWDMtmICou4dRmr7Yz3vdqVwjLBiMKQePYA4pNaCjanWWHSgkceK8xMbtS+jEvfV35cSJbwk2KPtlRg17uRB+goWg0eA1fLviXRI40DgHVdFJCxdQ1bDr8FjTE9sC8fZy5UvKi2lNz0vPOKFR02mcQ8LznabJif6lY1f69CY1SYgCET8iRKvY16fk5jOypghaYnEw+pWuy3o9//3wKr8fgB7bdSPoO9cTAfvsvELb0IDsmbXdKIQNnyo7S2M7O/8pUUxAqnRzN7OQuOKpp47p5oLvv+ZVQPbgNhIPrx2IJ/xXVavpSHiarzJoqv6LOBvergtTtnkBGqkxomlh8oEohU85lrJ3wEH5m9gdRr69eh3l4wGG4sROqhnHMln9wuzA80N5NvDFk0NVT6jVz5R3bbbNDzNL7PXQvL+yg3HI9XbTLwGPTMkNroXK4vaRQle8R5GmuRe6yA8mTA6TCZ5MyYxYqDKdwMrZbFcWJeql8zx+bI1RkZT7cKzq6KD3I/B9ChKt1+ate/UjCffwlAjdiAFoIbarMACL/8gBwyHa//BvwNyOORnG6utQU8eCG+eL1oVISWSZgufaVkv1oDLpmOIRZfXSdAzAT9F2VN34RkL8amnaOvqwllDbPQBtkPHz1zlTuHAQeblyuT9cGQrspJElOhjdQ4dTpILEYrkL/TiVTj0YxvGwpVP6Ulq91OjvKxzvH7MCjLL7V72ihQ4p6ectPcfZCIPIiFnvlXTKj+Rf0n+CrXS7ndV24tIDWTvB0ft9rglbpDNbX/28k1VD/ilJ060pUBLnQrDCVWinErBed7QxCl39KQtx/G8o9ARe3hJlxrbTyaYLw0VbSK1ZDAPB1zjiCEnK9i5wDmXVfpf67U937szCbTIU5e1L/i3ElHzia+OT2EHsWRkeOz0FeTaPe2FeWNHyACNMjNVfGbiBlcucnLvPwRaiuMIJdUBRYZ8c4zx9Yc+y4Q24TBIxDOw+wwCc2kvq6RaRbqh8Scv8Y3BmfBx/OWdaFat52FysXG7lwCQpqUKf4M09HTRcG6DXjTrJD0EmJhAJ1Cz+77egJHrUdclsyp1s4eGq4mN4AvPwbs1FvNHUzHKrGnRP3L4BE3gdGuEAiK1Ne3UcsDE8uFhjQ0O1ufcOjtZYeCvuv70buCl0av9IaABjNMClqNeS2ly5mc9W36Wi8EocK8MJD7WTtEuWfuuf2YJswkqKV+54vgVhGep0PZpfN6UQeApD5Vl+JrWWQlM7qCUqdXITHR8WjMxSbLVrxS1ZERnX9ZydX1j2Ts+0YGJOTFrodEDE9734liUr90=';const _IH='8871308cbd6bd5096f4066184d16dbd0b66c733b3eaefc855557452c2ad8128c';let _src;

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
