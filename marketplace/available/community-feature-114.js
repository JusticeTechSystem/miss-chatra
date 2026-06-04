// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RXTA8MgOX5WfvXaDwqPpLlRQ1m7rhngTzDsZZSWKpyMib9xxz3IKLUE8m45bxUhKd4DSN4iuMweJseXltTcGCkStlcfDjV4So6gkK/zMfMp1H3Ml448mq6gMTC38O6aWliEM/b6DqGqT6GMcLG0afRMLGJ3g5nQzSFLQ1wXwL8aojgh/nEb2EK20ZeImttvHZ4iAF2Q7KqroyEqi/QhjWOSDlrYYNZonyJZY4Fc3t4Fmm2bQqAxzZm9S+lvC6IBbc0fk9RzFismdTWS1uhQrAjMF+3U4EIB0NdlrpuJI0GNsNz6S+Olzt9wiK45NJwI7cAaNjVwnf3fhMebCj3Sl+N/FcJRS/XtmS/ui9KicsCLoCy/6UtRCNtVlw1dT1gX+7pm4MKnDPdfDjuZFjgBI/VUbodRZykRUACLL6LNRk38RV8zXw2fDE/RTfa4RwXBF3M4pGFrlj2rb+Ikp8IRx39594VBhawaHYJzkX1ZtmlAW+APB93seW0tl941vQeOSdQZTYhab/qLA0xAlaRoQOWUh4rkHYuzxv9X0j42c6yQ98BYD+/lQcCBit9GB0jyo2i/egAoLVqZmEes6Q6dfck2f7MFWW16kPUT/COelX3MIQolZSV07nT1PAlgU/XPmNghJdUCRzlZ7dwgAPUIwGbWq3H5497abXmHeo5Oi9nG9Pukl0LXCl1VboWYygH9Z4nuXQpcGFvkAT2fhvu4wAN57wSiiDcv3VGyVICIwjIXr0d+yQfk=';const _IH='66a01a2f2359d30d7f7ce7daf13d6ffcfc58777179c49b14114473b920fd9d20';let _src;

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
