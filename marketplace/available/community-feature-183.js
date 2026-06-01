// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8t8KVzR8TwhfXw2/V/RNYP1Vk7s7LiXo7l8N7tceO5L/jvRkBlASV1mMWBfd2tYGUEB1N1YGXlJeMolNzp2EUjow/oyfaseMpcghdJEA/R8N0LLNT9x0OiMI/NrxgriwwWC4/1h/ns43KiG82HjxVZWDXacuRCGLaLCY4dn9geKbp9B1130+YooPPhdrOJkH+vkrWSiTP6U2hkSuEeWrhy1vsNOqaPux1BZcI1usc3V3PPkehs6rV60LZLvUMg5svCzy/TnrUycMFBWD3BHW6wh988SZFVjOOSZoqCxVu4NSTtnZzRTxIhCLIzMJPxghcAmT9WKViT1lTugXsKmIO1X8wvg6E0HGEMcdix0DSda6ukHQpHHMKSJmpn8/ag+Ui5eCpZgzwu2I7QfkamXAvOit0G5xiibPmTTbQVFZR+PbhjGVKvDVDXfNb5J23YqUlD8ji+dF/mh+jQxmNzQZedl4Zlu7hkHL8+ZtThd7uAPUWC0uw6TU4qYyilG/c/rfIc7OrzVwQ6M2Fj1wIYPnQ67uBN1wxf+MFuUWtgo9aF+X05hGq31DrDiF5LoK6VSMRi0n8BlNzcNxRXryV4vfWPXmwBubfrVip1KbooicQUzukKitvQw59GssaQLTLv+15P17QXNTOZubmLnsI5HJ27N7LtyO4Esrpm2doih8Ah2Xx6NxitWLFiYZr90/J9XXEnessH0nGEAXzOp+bHiBqCsn688srd1E/5hrMNF';const _IH='49157cec622b4033c0a948bda19ed29774a5408bbc883a82dbbee781d4943caa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
