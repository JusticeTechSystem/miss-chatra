// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQViRAlepKEXCSVufpop2ys7xozTaqnePKKcodG+rvwJd0iA2kd+TDGzp8RhRZ6TdHD/hhELqLrlFk8w2wyg9majSv18i92h84iAE9+wx7qVvaOkTBj7bifTu/bC/a4zZkiXJaeBV9/YSWbJoZ/K2Z28GRCSqlFjDbVK+Mv2HxC2qN3oZT9Dnr9j6OI6U0GROdrSjYGJGpVILuoBjBQvGevz+mZNU5gmQjJdbkfOdrf4vv+yfPjRO5DzqWZ/IeV9TpAFu5hzXPaPXV9/BB4RLLCFDB3T+J6hYoFe+PXWhEHhl+FnDsy2FWGok56c69lMK0IxBYDxRiAJrORe8+ISJ/X1JqVMxiA41pRVGrv3FEzeemDfIH1OMpniyufF2+HwcHAm77bWjxz6Hx4O2feqWha1nAQOgwRGIxcmR+hcrqCOfTClH8WbmCkUVYZI2ztPYJargytNP+9VJW6RjC4VR+jWk/Be7irimcKBG8lZXJbDLnNWtkOCt31wF9QY7dl0HALhdiPwoXrEhWAMalRTMS/qbsHRPDdsciU/DDs3ZoU39YQJh1cEmAFHQNHgJSrYgR/BAQtjjQ6CpiTThTtYvX/vmhMO+fE2ue7D84/uwAD4ccEUdyC3OeSw1S6pS+SIOYpBxSuwu47hxLUS8IIjUFyFVvuFhLL1S2a9r/CzBxxm2jw8HCCZSfUafWV0mq5DyjhPgpA2QvNCBX+/Eu93vS0';const _IH='97a8c64c228b08ae5444334d30877e687fc8172b779fd661d239ac103318a31d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
