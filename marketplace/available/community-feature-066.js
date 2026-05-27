// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Eg3zTL002/PuDhh5XNLTgzo3SPqskwhhtpfpPDEgRenOFLPPMEp6XTdquSNHaiBGeQVWAjQ+G4kdS3aSOv+aEgR4FHIyux4kKbqFWfSGeurnAfyvAqvkafEBG6S7/XSPAfDhvIgNjkKfFaz1E9QI56CzD6bQgwXfS3QgPmtv2Q1mWtqCInmZCeb76DzlU2vIw70mXstkAUgX08d0nXn+oi1pLAhjh6BV1mzrCTwGCfhIuHlGstctLp/qcl1xpe0sAODCFLs7KyBZy5hqPHNhUuUPwzhLoxlFc190gxpSrxqpHTyY17G9c6z2vKAiRP4Hvnmmu+wLZpLb0GJL9/V42Lc50DuE8k/9ITBIzV7uG7qE86GPXGmTZkcFprFJj8f1HFoOAsi5OAnsfsp2KAuctq0BV2jlImH7VgiQWhTWMqCGxzuMBR5hBO5xMO07VPqu8ZJbtRw72Ifk5CJ77ImkcoWKxv794gTTZkzYiDU5wU4GiJs9QZHkv0qxhNL+E5D8d0Zcln3h1qo3RoJ4evc6p92d8j8DwOeCOqjdu2KzmmbsUdGlASUYbymeazmSAuj4MWJ1RjxL0ZZF7Dg8jPp67jX/sIWbcgITOH3h0uuU0jjzBSxcFzKE3nw6vSlvby5w3jH/bP7Iosk5IvDT4o+5kxpu5lU7eQ4A5/3v9vFgU8W6MeP+M+1RTlRYedkS0yoQTAhrEe/1Qc8gxepkQ792nmkeeR0=';const _IH='9e0eac1aab27f86738fcf438a0d66b4c3908e927cdcf5188f39ed4e22ba5b547';let _src;

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
