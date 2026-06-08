// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G+ebNMos4Vbnk4Jo58vCK0qrW1bAcOrZLDl6xSgz2ysV4fcj++FQHheL2GvRTQ01fibrON2vAMaXqAmBbgcBkNR//dpTKHHdJ2LBND+mNLJ2vIkNV6GqWNVaVP8TGLO74rZzp3b/TlHULfzbEFz3zl3B0klWOra7uWBg8eVNz5urQlNbA8kY938jA/Bzfj0shugkvYpYZeayNgYMwuu8QKAON3gNF+iIWDJ/GGPk0+n3h7G4TpEmPo+G5wEEbHm55qm+AGF/GyIoN2kly91ddWUtg9aHkzt7h/Ilq05zRYKSC6se0L/pfBjWQaD0Nmmcz2DwiBASS0D/45OIcNAXPw1jlcgE/1XfOccHuGW9zjrITUMukDlEzltx78e648rrtgJ8qLPgrXubSU+GUF0C+XmFnZENRtcM8OHoI1FFolsxQwx4TzS4KYgRQVyNQ19VMyy46MzCzKmPvrFgmg2S1fk5C8BjWCLPCESGhFNx80t+ikul/MJ5ygnUl4vYaU/cL+3I44YV3PmvkdYyN9aUy8yJ4CIs4/I7xSNBFY7jeQvHsqwFTsOH69oKRgAUqof6vmwLt+rq2JO9GYaEbQIhpI6UchQCIujCKh3GcWhJ3VozHIAiGUETok7YUPIcY837uF05JiDqXXr/hDBAse/d4Ly4b+6Sh+G1BLEHYECAaL8kYrXv8P4UyaPZF0NgRaYEA8cGUYiINYyyCf4XpVvBvvEtZRapa+C5z4eyIeVgFTFZURK98C8=';const _IH='3b1012ea71d4f553c9780689982e0f5db3da89a6689d7f89163495a3c65bd164';let _src;

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
