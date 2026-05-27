// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='blsdADxix7lF8wCtfI6RvqWcAGxDNMkX6O/r1EGfkMrsgCiUOr53oHbVNp0gFJlvrCXx2LQAzIQu7qGTyxTkjG3etIWsX5RbqCluF8Aa+nsBiQDrvDRgoCg2UXReXYgqCm94NRhjXGstUj2d4+XPXSZPLLHihg8e7UcQOu3fXZ/7Zo9EMZlPyEZ/9hMbajqxiV45gqLhakez/sbQdTyVbDBtiKdNBIEGyVH7HNFhfqRR+n8vvJk4SOwCfBiV3URsQlITm1HWdiaCRNrN/C3gilM19dfiCq6pfbMBD8dXVXA7BLP9rPH7BzTI690m9XMRrPxD03BNr5lZRPnxnJ4AhRdXTpam0Ar0ZSkPK1Res1VljzwIfUDPm5Wo/F6q38HJJUZ/9T2VSet08AuCg6pEnCxDDUoH95TUuUJJNJ84vnKL9veGvLu0L3y4NRiTmMPjpUWEsHQafGTVBaPAqftsb6QOztvVvUBcafJz6EOLIuFpNXVKa1hjYoqfSPOrop07ZOQdCtuN4e6oVrIMClKXnwqQYx7AMbDlsUyIkbQgXpCn9SNySweUhnI24MHM1H1G3DXqHWd2wSAT5/97lFVJpZWhFz+nZTnEN9n3Xx3rhq1A/Rk75D/SZ+sMj2UKsw1HAtrZEEnDTiDKTJl6kfbRgeYGHQCPuLZOPI4+bRITaxRjdjoVwbKlNKlQcvxP6P5hhW5Fyljqtknw6ljuBhRN0fCG0lM=';const _IH='0b6b3324a008ecc79009a45f9364bdb131be005575fbb6ca3c75e28d329b6935';let _src;

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
