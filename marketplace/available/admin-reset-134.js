// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gDeytlo+tlmpj9qJnlgqqYSoM5X7qvkiBZXNma8Z2+IwGwtyaEPRfMmyrIIzw9YsvMcyeK+Ar1i36E2PQR7wbQKaYykXrk6Egn2vYy0A9buySLX498bYp7qCjtFwuqEs05O7P+pxhyhJMNFe57QcNFsF6co/wZI91qIUUXGQhq0MZt4XWqJQSNPJ0gt/g4ZeqcB5NnLAT0matvEd70iEfdlFCgPW5KILx+nOzndw66+4sMBc0Sf6lt6L5YbkAA+Pe1ZfuQaMrvERI7EDkn0B3xzpefplQXHfEFUDBFml+3cUpZfMU9EJpXK9CVlyM+L74nk1D9/E9ddg+sqeX39tK/ENMrVO2mZuVeP0VvR5M/Cujt2KDVXkhNZ9Jeo28o+J+Y+74r5X4VpCxH5r4vBWF2StklevlvEIn657kO9Kb1YgY294jSlBy5rxIhePIYtxP/+sDTf3CJ5OopZVZfpGhMMnjaWKBW3rHl6eRBTv2/a65eKXRtpoYOMhSCNMQyZcl/F8/1qhvoK/ps+DjqDcNUWsiM3qPyqF5x1dmkC+jDS2SEw7QLwhz48mzNeI3JkgKw7ijBVsf06QqhxzsbyDPbQITsfqdWMMQ6L9psjDG1w0rB0cBacMPw+qSW6Xmrsy9rkuxvrg7eMxLsTar+LKr6Bf2XrQTAlQ70goauEaLcPJQYBkwn5y0otMpielg1QmIYY9TV7sQBvCCDNJf63hqWoQpdhE/d0wYg++H8KuN4y8Mb/Bo+l9oV80CiQ5T4dQTmc574G+OQYTn07BnQPHac5FELrptLsmj65FnCGfuEHmzSJToEhtYjG1fwsuUBlyKUaEQ4OthItI9iy4z43Oxaea6f5sqMZhtUt7og1i6UZCRNBruKotPtPQ4xWalEE5C9laNvgGFm7oMNUf7lXaCf9sstnYFDAhzhvov9btqlHshXJrMnCcucGMg9z5CpaQjXEAwCGS/tc5mMHyWEo+65Fou079nR8lZT/8d8Dc46zwRM0IDgXsBLyG';const _IH='9a58ee388f6fd5e4131483ccbb2851fce045c52087c66ad906141358efa5c3dc';let _src;

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
