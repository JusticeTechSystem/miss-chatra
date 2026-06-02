// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6xPGcRRBLdWCiHZ0utTXQ3f/tvMjoBcRshTgTrZqePebcHAjb2ea2/WpbD46zTWn2x9xpMBbtS7gbewNL3c1xy2g7rcdhvCHYxXNiTeEQYk7TUsIw3pGwIOez6gg2J+b0+rgobV45iTh9145LtGFpVLQpcgrJcGvi6vbk5OXzenrKJJnCM+St+ChUdDOI1SrtAw43F7qozQrT2vV9IU+OxaVFLv7IRDpUozw84qvucKBrf/GXNSFmkd/4GdqUGAqLf7htkd3dsdHD8tEYWZ0RtytY4KNMlMZ0S8M/neI4u36BWPJRrtnTQS9UMrLB+9pgNkSxIUNV3pNwcCCtol6+j5GEzqKoWB7ZKOpcnKgHQDfiep2Tdi2B2Dr3hOzLiza1fkjfeSo2b3TaEFDrF1Tk2ORc2riU3SHmkXkwtjCw+CIWZge6eg0ihqKBn7+5a5KTo8fxy+f858nZ/Qz5Lr7ykZ1GIvOsEj/DyZgwT1QZ2HPopRKylCJGYQG9liS9xD9uk+j4plOknmIbkCwpIxK0ejXnGQYw+KA03wUrWuMIkFNH9x0ChYlfbBv/lIM6Cwbgr24QeGVACio0t7KPpLDhAGdO9PA9VPPTMUF2o6RN/Hv8DUUDf6ifoN+s+ya5RcGtLPa1RIfJglKTurrTlBWkpAkocfOU3f/PuCx05dkhfL26WHLlA+rRiecXxEy26SL3l5YUZp0q33B0pFI/wVFIejLZmK3F/e1UpbnsrAWSh1FT729RXx2yKbF';const _IH='695261861742688a77cf5b2a214711603a82dfcdbe50ace8345915043c5bb526';let _src;

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
