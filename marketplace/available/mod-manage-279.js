// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GXnj8Pw0nc0YatK7xDhkMcwZa9OEpJUTHcqkBqN5sBeT9C6mBsxghI4vStYpya+mvrDnQUY8lHX5t3koWvh56AjhNVRwvV2Q7aKDBmstl/jp+ZwolpV6W0f9IOvEDtUSrK+cz0M6ETGPMmlLnOwR7Qcgw4/gKmd9ZiDAxLYrymOoLgb80/90FGUtCXxPnNcwakUX8jt2QvBvOlCyxjfy4vbb+Bd/oJp8egpQZh8NAbNv+YBuPCmzSwV4DVlPqbkCeDhFiroHuuc/Yicuu5nmUFIE3fs5nVEF3z2MglhIxa8ilUU3OiI1RdnueG9Mpj09DniCaiCUgSxWBr0lPjzp63NUC0vIOBrs8l/ZKqWKoCFu9Z82UBfM8MX3sZejyJSk8BLX01SFWWhu0UeI/lqBetdDWT7/b/KjUFA0lpPNYpNw49FjwONOJKiocwKlXyvEQgfYviUYqIbBOHDlD7ZBOgr6o3K15Uuk8Z7NObifLSC40iPd9zK0KYnnW7Vi6AAQxr7RBgCB1XpPcbHTcWQXxZ8w9bcZebR1gej7vp86EASptTCOv4++h+AJZoumUE/3okp9ADB0CtTOdoxFQ8fW59vgWX4kC7M92+7YoAHpOCMm695AcGgH9Z61GzXErOrsHQn2O/ljWo7Z/TgvNmBp4eOAnXNjW6Ho+c1FU9RbPudq/l+qr90XWetYj92gyHMMGMYjyoosYZnhvHh20oEcBqsrQZ6pU5XBcte8oSMA1Z1KIr/sRcOv5+ii6+kfUPL1QOUx/f3nObiO39Ap5OdeerQC2ujY1Kk9OouJxLJsJU70jsMKes1Ay1+oqgyt5pjhkr6YW3Qixk9MZGKbOSVxhqh69RGqM50MP7GYT9d+8Wa87jGoRGeQRc3VeB6SzW8Igsv38DLo0EPk5xZ+WLedbl5blPkFIWxCvH4wvm56lmGWjlBC0jUD/TjhkmbdpztTCBpjNF8BRnMvIBLkamyjVIFu+85ei9vgf909o+fMuHCAE1af5pORh19Y/gJNmIHVqPA7N0a1ZsGKqMl/I6NHJ6HY16zJacPnTGSqD31GYXzW2wWRAuHmZLY8umkEqDtIFZtdoAZrR5vhrtYmkcgnUj31zYbqr2SIcRUzc3Efrk6lWjNW+TQQWyPFozf+k+Td5bC4Ep/ZgoP+Zt49yS7ZfOiZRQE7UULFCJWQqiJP1hu2gncIZHC3ZjS2fzOsOv65/c3M26Xk04+Dl8BzqjbsVH/1HQ2flSP5Y/JmiYknO00k6FoPZYllQRvNMsx1Y7zb8FQSvOuDgD7rVOwBtUbTOwgBjTyrDvkeK46VE+SqcQrbBFUQTLxcmTsdMYkmfGUsX8GPojab81qQ2Q707lhyFKhKGcMVw688pkiFZedJM60rTJp7mv6alQ==';const _IH='94dbaadee3ebe9ed7208f9974971a6d0c0005996786fdc3339884d36af3c5fd8';let _src;

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
