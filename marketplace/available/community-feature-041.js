// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8lhzq8wJJc2xu/MUzBeJIa65xWehLEQYfcbbZZ4EMzq+RZwyI4L2oR/bIn/EixtcuCqKKU50V/ii3/SJhLa/eM0BH/rjoyUQhmCnR8fHTquw7FlI7cgiDYU79FQOcBdrMy0j/hxC6lTATG/AtDzW5kQ2Ae5IGOZiYflalfDF8zCPcjUKYa4xXGAmTrl6yiMOiH3K7bvuGLRCtZCc8apNFoHriNp4kcowX1RLKMFXBPH69CKf+BB9MhUtpa83FMYbaSgjpdzlWxQnwj6mFm5qGk89VMwEleXOVfeSRUyHn/QcTjhFSEblPCiT4sOgkCH/Ohe8B8IZwrTvZ/YDAn9kuFacSgRoYrz0SApVsxmrvtAsTquDmRf+NVXa0Mcr7CzZZBmiQpPK0SSEsAPzk1o4gnwny5xvvKPcB9pWs80YVAW7HMAQYNR0m3FRpBN760lIbq9VAddpYHbimzYol5JnV+CuaVQzgZGqOOm6aTbXi+fxgPS/n1DpjqvbZQYxE9yhLeX5W7FHpnEvySfrk+0Evt8PBCack56hYoFLqCjha0Shcvz/1O7HaGblUCWx4lPmTVZNaruCoJMJYQcNTCG3kyscTKtfIsoqkIWKUSYVRkbjA/GauyLepWnOi7CLwj3NqKdP0to4wvqtveNrXFpC75inpMSd0I6g+E4TRV30Gb5JJax+niZjTBU2mA3VRhCdA3CKwXwhxm9p2n9wm2nMEhmzhPs=';const _IH='45d099b758b5ea694fe4cbadcb6a2869b955fd9f53d1bd3654b2fedf49358b69';let _src;

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
