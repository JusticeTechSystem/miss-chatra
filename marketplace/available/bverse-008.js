// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yMPMc+7bx4WFP/oJBga+vLqGt9/PVQlPUL04o3cHWBdPgL+WVtjJrXkS1bQ7XfCNncTHGelwZ9onh4rHWbR8JGYzqSES5XxfuONYKmdkCjHu/AgX1l67I5Gni0DcIJ+mo4SphRKV9itvsSpp6/yXY4l6RIX/mci5eK9IB9rC1H2eKkWRKEcozdRi2+T73Y+bnrEeI8OUIVJ96ebJcIcCnUOO09sSw1BewtmdU0vRmqc+7whNswIBuPtbCCLMaOsMv0/Jg1jJQ/bdyWp+KMINKMV2q+fr3A6Gy6MBEZa0HhPoER0aZmAxZy4V77pr63BXHbaG2gYvjBoKtRqlnU2O17j0REpa66OgYM6ywyFBte9DLN4vM3zHO+G8DL7MW6+qHGo592PQtXHW2/oqW9J+e2xoChCzO7RBS9/pWgQ6bOuWSlMA+kYP4qq6xaP0PNdfuE6c9eLqbXGV6+Q06O2OiJm5eZ9MtHC8TvGHP6SyH2uT0n/IfVeYHcq6DUYBATPQ7Zu5dFgjxRQLm9EILqOxnEDsBcNvphphLkKRktnjZDbD465Hjh1JrdmEUKodozJbJJXG6lAKpOG7DGiDtMv7ZLowJdRDodq+Dffk0ahAh/oFVfU0Cxp9du7sv4dpdW7lOIkz9ujRVL4u2O1250f/T6DLGf+340IhGEJdfl4enj5SaTYXPZLrXFUdvzon6Sxc1NJsIw1TaxSheQ==';const _IH='c0266002d4a81f142de008f9ac64315862faea5c4c40b3a854cfef3f97f3e3cf';let _src;

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
