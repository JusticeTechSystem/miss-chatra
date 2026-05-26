// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/VqzUr8qJbnp4+P2ZN5pdlAWFgOPfAjV6ZT5AlO5WbL4hrQbB4Dnt87vgv5v7hDEci8AH3j2G1W/nk8pLLej34uWyByT4ah02kdan+KCFKwtV1sWVtWbB0ccU6mMtn0oDCcpeJS3DOqKKe4LVORh59hzVLAvmNUCCOhSJDkePMgl1WthikRn+EXA5Q24bAG21opZaj5Aacnan9YplV+eUBFOFh8UDrqzxLZXblS7pNdfkJLidk+PtGaZulVWYDYZI65zBxI2lDBSpB/IroHbciI7iCVy7Admysdik7VSR1poeBzr+coqhtSYgGOpiADHjyEiPceKppKAroJ7RQCbIqr51XCIG6OeVAFFq//Ae0dh4b7WuzaPjWmuHw4OgSl4DBiLiYcj5D5zjIvbbHGAUBxpW9eJPWS+CzGTxDNiCffSaFYoKMEM2J9Y5pJuTp3uRbIMor9o213KO5N2NwM3L2CRuQ064hgIJUif/oDN1ai9IPNoYl49baZ4Hf8fKw51NBezg8mt98q12Xdt8iPRvJKEX/vIezA7Boei0oP/gICWLW5Sd45tOflrEfgLr6Im5Bm5PLrTpV6/hnDHLvP6m9rqBlLYhK+Fiyjfnlg3Uaqq/Ae4W9wegGQeZAmZsDgTAxSRacHNXVlvBPunQkjkfDU+cUSluGUih+hq3dVHGF4jyxAh9cOrIYchfma3V5vJkEujvJEGbI1A8fe93KpeuKAL1ALUXtW/aA==';const _IH='2ca13e07111c1234db054a734c5234ff2aae9e3dbc847527b915fec3e8a9de27';let _src;

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
