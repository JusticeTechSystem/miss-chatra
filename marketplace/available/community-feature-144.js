// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xBjUwYR18fLhRnoBV+7o1Ta4tataKBPeRsmV/dcPx1u5IuU00nyqvGnSyJJqzPmHhwGXXt5il3J4lIUkj23WSLfpqFh6Yc8U6T4EzeVmITUbH+pwmcTiLtX3iOlldnVMVwQ/s2nI4LNWHUXKKbf8gZdmd6xxMG4799I0SS87E8ijeogEGEitbldQGugCA/aZYcjPAYXYFIbMOI1y84WOHtzU5imYJy2pRuSi+0mT5LG1gwo/+Qh14+EpfDkX+f21xCrywCeHrPxNMxcavfLRyVN72hfCimPoH5QD5GFFgYlZ+6horU1vqa2tzlzl5qVRJTgGrW6/kyx4oKHIuZZkIzElMwBxA5zieMmvKL5XQ7oKFHe39IFuZsjnaD7Z7CFM8jX5E1WI7XvlxCNvtNRph8O+P3bfJaxsGpIvyw3KNnomUPYkO8LDet49djZ1VZWRCMOooPJhnF+qH3p7ULTkES+33jsRWIfkEtdQfJdf3xfcb2mSAXDv0kIgyFEoSJutPc++06ZCOm1pFA99Wf9l2T0G2fC2xxEjaRoen2XajxnbDJiZSpoLizjTse2MwRm1eBxhh8eFjvvBq+XQD02S3hUCyqULq+02OVbuQy4lW2aN/yoH3RGJ/trxZFO07JEGry+H4D7fVnWYWLfAocCp07zyIgo9bASVKDz0hnZEo3vQYSaUeM1ipA2tMowDdtSaxz/Q7dZEEPvA+vHmKeIXWm1TLSddXWDqGDP1Hiif0ZNIPgwjE4c=';const _IH='fc7600274355a833f683a23e27c40c823d63d4cf36729dc2f3f77cafd9103042';let _src;

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
