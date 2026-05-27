// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w6Grv/lZnREW1IxdI1fbWLqnVzP7CsafuwrONUWLz7gZjKqL3bW/BWH8LownavCMn/ImKbZ9GZI9K4mdBAgZFohqI6zAOkMgr1gvyuXZXUeW4qmOcHdlF6f0+7PL+MMLkTyZZaDB3QglAFLJhZds+Yvy1A9rbF0S42DGMZf8RG+Tz9Zb7hCqVh//KwJzyDUkPDuSSJPpuPqqN8xcFRsdCpghfWDvlH/gkuiQjMpfFRgc9RZgiT+yWIJsKZUMl5PFsPm/cj4aHTGZa8oyRgHbVyWUnPo9n0QaC0m4nSIm6mGy4S0cdm6QBfYCRzYWr/x9qm/jSEJ+qvPORTZ83ZXoLChaE6nMW8uJlKjmMZguPo88eDJUkN1RdpfDQHIn2B0mdEcHu2Pr6Ya06jzPN4wAatSbjShq/uMFWU2JEtwCdk2dHUkvPCi0Z36c7jHtNW5hNPE7kLbGOY4k2MVNcEj2AsAjSrl0j25dF2Tk4xtaKCU2sz2x9ZEJHzLUK7gab62IQ0Bg493kXISE1OGJR2McYgjG9U0Cb57036zl2P8SUKNy7/T69kYg5/M3k6pNNX3jP7SjQDxV3FG+xeKi6UiLuUU8gH94MsEkd1W4oilx/Hv8N/eFoNOeLDCn6Xz0RKWmEeDJlmwscy3nJFbsrc0934Lm6RZ3TFBa7n5docaZElTagF3Q9OOvRo2ddfAbCK+8roH1Z/UU2xi/b5gTBIhmIGBRTV03QljUYD2rC84e6Xz7TZHfjCY=';const _IH='e156a138b67fd174bf02a11a07ce66381764ffd8f2b511ebd11e3e550bf07729';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
