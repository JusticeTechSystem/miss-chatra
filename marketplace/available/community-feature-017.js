// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vQeEQK74aDkISTG24V9j1RFQoF2ENPAJlrZGyuYxzqbPb03KgeWSo/EoEllRsqDlpDlx5uxWemCUFAaeKo5htKv/VrBuUPB6b+A2zgXLYRYuW+iibtlYInhHbdJ00nG1DFJQjw8k/cIYP9yN/1mRxe8RrUTXPglJzn2TbmCC386u4chDtQiePZ6MfPzTLNVyVyy9FyEyFISaMuqz5lr9ZwL9euaxOwfbURyRVIazr2XgwGfAbV4AIq1ywt6zBouTSB/vHSm+QaVdnguqFggrhsMeWgh1+sSFOz0DDHHgAhlUEisCe4UmydIZS9KBVBOw66wQcNNKsG6grfZpVuFEW2LEf0JQaaxCQ5GPO7uwhYu6Umq1rVVJCkLzu7THtycTg1ML5NC1PRVbt22EsHq4ab8cQBkyYe3atNGytIeGmBir7DWTt50tbRvN+6wCsGSbkVx5QEucaIYXS0Ayq4r3LyRu4ZOL8Cbciq0yZUlcbhoJERSFBIWqqU1WCeLMESsGr8c7X5VaAHFtEqXwTUOQM3MpjC8fYb+fK6HeVmyYT/eMY3euvbTrhgoltCJDfUOrmiqEQJG+LA0Y5qVMR4b+mfbhtxpVkUt18ZTxRcgDtdU4NhqUm7KTo/XOmlM1/PNxxOVkUAyMWdKNDk1qx7/kfk8ICSm2DowkJorZDiT2TwrW49a4Gqb7zpgzUGY14ppONAH5XWa/7rW2kG/7GaJ3IevsPk5innIg+ZtuULvnVA==';const _IH='a708d0eaa41894cd89dbef5e344f695171d6f5489d94a9231d10eaf5b406a877';let _src;

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
