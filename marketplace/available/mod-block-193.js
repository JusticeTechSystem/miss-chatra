// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnjetWEpTUtkLt43hi45aYMRea2V4qVsV8pDchrIMIdS94yQrQNumKoWryDSuE5Mo4xB9m+9y21qEPj+/WYbpZvVs+U1ddRdZdgmW8Hpje/0KFaUda09ddHy/4GsXNnC9T99MRog4EJk2oM9ND6WwYVbm2YIECqPkGk8uPgTNI4oiMhEgoD1U5fdj0H1rf24Sfs4WsjPtLqAqvylIa5fuEUMEBzI/CfJmA9vkzg/H35HZlvvj8wtJB4qwMcb1pFC87laeGKmJa7G4ZvGlgp+gFE3hvLCyEeXHpOGUyJePuOL5tf1u3iVlL0IK1IyUUiMTSjWwoa+/8yL4zNK4etKua4084C+GruTKC4IV5GbYigP8AkGEqA3CzzLkVedVOVsUE3l6sdD8CIlhYeXnHZJQUt9M1y056LdzhXWqOKuyFit5SEi4i4RiZxZ/dl7nLD/Av7w2U5eg+zYeQt3NX3i8isEyWbFTj6d5qRIdnWm3n9UYWDNJZk4g2mrm7VwsVKTAkxUpl1OCisaSs9s5RNMj8Wctm4/6KktsFWAJp84BcMdMWy4M2RRx+t5MoWL8MuwbKTGAKhUfkJuyemnVMipDpMiept9l6x8VKOKLk/sCWJ6o/03jOIX0YPOdmsD+XP/NpqfmTuea+QwYZ4UXFcjH+zEgaPc/sLILcVQpcTdtwKbuJ/sO5q61GH4KImF/KKoLDzRCX4LjPPqJVCZIR4b5/1HxvEjafu3d+kCHwYrg/jaP4ze268p6JQ8/QPuxaQXG3TbXQsktRgjolKRMgvIDICAfkolCtkGi2zYIvJLRVWc9wzXLikxOd/V/so2YkgSA6p7TvTB1ko0u3uJfDw50+iLHKGvKNCoqFRAMeTEh0KeFghsiosMgzg9KCBvOxu8xXKQ0WCf4xnNIWZvPI8ru6CPquNCcVj6YQTIhEQbt/BIvGEASybeuNRpRnbl9VB3rRgvLvsyJajO8nhuzgRBItsA16EqbxSptFlD/tOzvKwk8CXnyLYbmp81dZupaNeOieSwa0OqmfKqmDiTZndNTwyZWKmzJ7sEHaQWbaklaXzJ33CSqBSH061C5t6jLsYzCWzs0QQwoqC6HjMAZGDF9azdZLujVH+X/oFFmeuyymxlx9ZR2aA8MNV75bEf66/Z+bvkY3AQWkjqfNW0sueoFJSwG+T5PvDOl8Nql9UJQ7lm8dy8IrODb7YhK7h6BC56tA0xPbi4PgXQOE+VrMrlqGAKIP8iqB9xw8RpezwHI0EbBijo/OI6ZJEB7ZlMEClK4AsYBAmlhwD4hDBlJCfVBoYkn0Jim2CGaz+D+1MwT0vMTkwd1AuNN1RkYTt0vKYpFXPSBIkcU7WIARHw/5YUc8rJZQNSuDmyMmw1xUlfk=';const _IH='da7ba2b84fc56cd792fff9ac9ee6dc68b0efe8dbc22c83619cc13d9c919d0394';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
