// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U9r+Mx702mQdsdkQ1ev7qJKj546Bi5ybahM7GIHEJYqMYoPasKPyf91+p65/pkeG4Jy57nL9sbOSLyTXWXTvNuLOevnqg8NIotP9nK25NCHTT3l2XF/abpLpF3PPcbmWilq/5Iqxxe3i5/gaIy2GOukph1cXn2fAp3eDzjaJXF//l0TqFlrikSL3bzwI6rhtdlPlH4S4QY9MCXy9HqUHMgCWnfIb4/BquoMaWnioY5wn+TL9MvUbvQGVLSpc/vQ78MUSOqjNT1UY9u6qgqU3aAS1N6JBWtXWrTDaFESljexAXJwUf4tOaiLpTu1MXswDkaLSblVh0vYKuIhCL8WjAoYVGb0Uex9VLlL5uryMjaEyLn1T2tH8Mct7Ci3QgdYK32T73GrQS81+rRkTe7wNFESIUa9Nr7kJeOvsiRSr+j3aOP6ml40xr55ACMLvloHgqHhmLWueK2oOK9wKTfFwvu1bkpwJ1vi5vdqD+seumAWimKr2G9krH/NjPMFOSK6Gv6fumfKBlp783M2bL8kc6Nix/iJqpxYfEZ012II5VGIPZ/FTCe2U9Zi+I9Gjvq98gsZvLw2W7QtuCbgVNX7x3h7JMFL0pDgmkP3tBKOcBp6C/Ypkr2tTg26EryhXHAjDf7U02FvjE7FFvv//iOlQCY+/8bjwJTWBuohu3dexVfJHwyJ9xzrxUkIk1sOb13bsC9F9mGmCS8gjm2ek8KrbRI/jo03fA2qD+gmYuPp7Zy5d2UlwJxYVJb4yx5rTCADCjTbhu5mQfUGpNEGJv1G9Q4ImpC8s6KX8L17Y2G60aa9Q8o91oC755HEJ6S38M+P1Hhi3IlFZx7fNA2RUJkMtCgqsPNxinyFxHabY/oPgBkfwNn7nVKBV2U7NU5SRxjwpL3PFfjIDc0wzs+BqF0uvRmA+ouFwSfBX+qdyzCUHA9EpIvHKw7k80lKrTQWVeklfXWPYGTOkLcUjQkqfFyAI/mg44ZhO7mW43d2yQU+h+kOnaGmLEy16m1BuV9Odb/l7sqyTFVOJA7EmeWilF8W4DQVUelKAPHggyd92vLPwtQkR8NcWrivv4eRc7Yaj8ATo79+6cfANrRNwpVE=';const _IH='9cf30540ee41f1bf5ee40781b89b5ee0009cdd142746cf9fe890d650e7a841f5';let _src;

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
