// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6tK5BUDislM2o6G5wfvEguELqGT9Bn4NrbDG24PswVSnvquxbx7vERqdLXZ9Fv1rW3/D0r/oh9dInBD8/xa43U+bx4DyxOv0mcwR85RC37YpJc8uPlxd46P411gdkPfbiUQnVZEFeT6ZALMkBZUQded/sY160v7fEN1lEXBZ6VgCQCrsIH3SFZ1WzsNShhZBBXO92484yjcqJqbBVxwdZpFgKEHhAsSmLlG4npO0J/yu581FQln2gscF5quNkjeZJP2qf2lugjUn3T89tC5KP3jPBuZBB5oQ7jrlKZo0qUeNdcKWBHgIPxlXRA4iF5YIBNKkyJZahmIjPLmuXwr/tYrAK7rLhCPXhpFYQLN0mVioRNP5ksPX+8+TGgkGlYzzUc1zRK3h7sJpZXRsGvFB4zopw936JSxUNsMR0qxW3zd/2/X0H2VGNfkJ5W32s5Rif4QbGl5UEt1n72RQjZ9jzrmfTOb1eZnrzGpYTQlawlUonBPcAaya6pg0PHNGyF3wc3iBAPKlSe2WZCyLRtVacsiDCtnGZJ136LKdXh9Dz03x3u0P4O3+08KX5BbT2waL9tovJ5flv035TEcSwo8AffNDcLgh89jqMLzQ1IyDBrLoWo7kuQ/Un1M3mgELAd2CTrMXmMrKLbS3Ztp2CY+umrnfmMUR1yxufl9UoCUWo6IxXtYaecQVUjODByu3XytE3vim90vgLNbIGktQFYQU57QH1aDXRTGqv4Uub83kG5Rsl9aWJOjidqjW5dDqPLe6NZveuprm1LHjgcRWsNUZ1pdvBYCNQZs1XPyniqSQdXKo+RQG3TxshDoXLZu4hpNPUAEDz/2fJ0BEYj8184Ct/0bSO0j2stI0qz2YEqqldIcwRlGnSXIJKxpTNDxbDrEtQBjUwzpUaU1Xd7auSqRaQcBkKKTqdPLMyjjNN4ej0GzQai8hpv9FrH/vNoZleiykL4k2Sm2bNt/QDsHFvoq08Bd0qEpbFCcoxjHCDGe9fLIZd0q4x2i0noBcngbEDkf8wQgGo4xzH9Baf/Lt41InrJO9lXIM44uFf8MZhbc/0MXxnEDhXHNEAQ4QIoNT238EKBAhJQ0c1PRcQwnE0k2QhkWI3gA1c5LBtt3wTwQvXPsYzlpzb++vrt9iq+LpLy7yFnxupB3Uc4Cnhrs+0qRj9sGetPJ/TWCb2VweRMR4hUgBuwyrl1BT0+LpW6/rmO56lwJitDRqqQmnIUfPlgKTMor5VKBZCQKRrA2i8z0t2VAu4FMj3ZTD5hWEXXk3564kayFOGwoKlQIbpTxEeZNuwZID6O6Hr3PBjIM3u47KOGJnwyRlmPM+F9xfuM/KF4iIyhxKOw6KWIZ52Z7S6A++ncclw3SevJvMvn0LTX6y';const _IH='2d34a9cfd6ed6e4aca8d189027cdf6cc4f08a33a71ef41908050db5980141eb1';let _src;

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
