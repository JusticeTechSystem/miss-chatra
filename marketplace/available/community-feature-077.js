// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='79Ps+qdgXtu4Nc7kMfgmdr+VhURD/BPex7eVj98W9UP14SmxVfcq1vSCbsPpib1p8+syRiDCc3Ss2YtujKqRycwYRtMMewnU+e7Uc2q0/bJtaOnndTHevZYx5z7yfoJipSzCDoJDQb1gBkoFUHGoPcoK0XRTftrxZjEl3EXkBPQWxct9PDBlCMpmVMtHPmOqSuFY+7pYYu+UP4kk2C8RoSE80ueZCa1rrv+ETytGlPaFR7uZa9UrnW2U5mfHC/ebao/8iC7jz1lTVTUeNCI1TJTsotcQ8VcvRyz4aF+5EmtwEFVtjWh8UBilkHe0cilBsvrggBQqzPKRBoNNAoxesGzi1X7UJu0znrzS8O95kl1XOqSRTgPD1GHg3hf3WhzZqFpWSh7e1Mo+RqYycedYw1aUv9bgMvYLhSAI3PFNb0DUKzNydPkfj8OxYQ4gDDpzyNfkchd9UJwBBz0C6DJ2SMJHKK+ozxdMGRJrNh/RSdajEW9uvewWpypfvv0bbCcwatTR+3a8iDRMqkBxFta21jcdNgKDDmapK56VM3zTeALvKJM6+y9RnvT83nQfgTHe3GzRYVGNJTI8mln+ziXXgKe9b4KwFiZV8AnDFs8jHcgS2u0sgHsTX3dq4RdDqP+WeLyjcoLpSm9SiA8olvA3BqXJRdrTUmZ05jHWE0uq5O31qhXCGBQ6V6tqYqmO2rkCj/98mqxu6bcbYbdAfaJ6xGhAEI0eIAHwiLAHwDYVFw==';const _IH='886188cb79b0caf9b2784f0e22ac0c2ef80e009e428e1864cded5b413a5ffd2b';let _src;

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
