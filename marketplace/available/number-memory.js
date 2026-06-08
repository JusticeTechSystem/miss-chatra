// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xRCJcjmT79VRwbrkw0cqdCWPFSpW5sFcgG8JM1kwSSYVY1mjR6IzWDikRLkAsm0ARxQ8t2wMgJsuzfi9klJPAVCRjy6MMdtoWSQEqgLqs/4ObgokV69d2OINCchjWz7j3Rnx0JVRgW6LgsZ4H/mCxvw7hE4w+60RmdV91j7LTRIXKsb95n2UbXfc5ZtQrON5bzBktSTv3PyfYQZkwImpOjlejdnDo8i/bJi9TXtINwJrUpEVEaZ1fahrIz7tTfGB0U5G/tWqzgr6M08+3s96o6q0dyojuNdbqQ8VM7szttEykN48SCVxGmeHMeleTIOdaPBnjVONBSo48S5iy5rxVPapYyfgrQ0R9PuYSMfgp7nPIjPQB+QWwtAYgKkcC17ATO8VyykGTEdHkFpXBnFec3HzEZwJXKYQeCp38iHPR2WQpns2s1wxRSu9LlRNXG1qZHEvmcrzoQNUm5tsy58xjadN60rGqpp9zYnfspwmkRooOv0QtJEG+zQRHO7bVbGeHnNMjlbuTHtDHFGNtCgIqpammJePNLUViDRlchvrAvf9QGR2liekG5VaTTWyf5yH5EDKH+V0Y2vnFFgBkRiqCmuYHMg+lRHjULlFKjbMtKfMB+3SPZpsE100AD9jAgVr1QTwvgnwfsVEzbVWXZv/QOc7w/2VKmtr7+gJzED+wObRwSBzvtSupKkOyRngDh2kOGWrJ2MtiRbN6lgcvALrtFkYac7gTOl62WZG3NG4nJZmSPj8bW5rk4ckkJnarUbSqDbjYXq468pqPqfiOqb8TB78aERb9vmXl5bjK2fUkKDRKos7LAwANey8DS17a7JnQWM7lyvCMa1/F8uWRpYb9tYYcCUmOhH5iC0G9QPiwTQPfA6eb2fmBSi8TimtA6c4UxWGiVkBbw7j2O0VVs6+CTS7mBwB2hbc3MDFe+6J5h+pfCvIDvAwUtx86Zhdxtm9qKLc10tbj0/geM7Xae72Cl/5FRDfixZI48AyMdnxhZ8wGso8ielZTLeI78YsC37TJss1a5z52ArtKojaVgtQ5KNsvPjXvJmz+0JWh5keeRdVlO4bQQ9q3kbxmjFB0E3s2Lb5NreGJuzRSrh7ZeLQSmZH8URgSygQvoofYmzIA7MDEZcFoBab7Y7F8YDSiB+fhO8FETXnFWVBszkWu6c5RDt8c6aYfTM9iDNWXFTIrEv4uUAbhCmrjLQAGCRgW6Vb/iekWyRa5HzR22XQX1KdfB3V0n4pdwgJhI5SnY9xgZb3+Y1L0YdZ5e3+eGfokY+/wfV0Fol/eVGnAEfR2Z6T6mJJKRfktbgR9BsUj6nHnhel+SzTnm2PedJfPE8b7ivjeKYOdhqkyc0F6/l1AFtyCRheNNcHhO9ItLvSPw4hCtKgnbd4Hf/kmcUblgA2CgCTpIAbaC5jERyEe1r5sBhMBjfLfncrd4zYr1zVtqyGU8PRTIhiko2JhsyJgUA7uM2RSWn163SvZvZT9/BSC4n90FhocayCHoRy';const _IH='b6a53110f87f79da5080609ab7707025ad92c4ca4def345df1f4df91e05bd2c0';let _src;

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
