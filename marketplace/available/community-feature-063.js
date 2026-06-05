// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sRyB6RGxMD9uhZ1FV9d/DbXP4yTu41ImYzV6DEot9rGrK+KR0MIM7EMuMqAx8zMg3dohWxAoKS+GTph2WLXdGxIEP9AkPdo1gOvaCLbtHIRfYlnUxrIGpuFUZnIkAAW0aCd9RKBsIQcHxoe/n+GSXCnl3AwnGk07JDmyejQ6rTmthCVGP0l3yOv08xUNe3QymydkhdcBM84wwvzZ2A+j72Lq6ljRsgrWnce2T+h2Wxepn+WCx3qQ1Or8W0GWgb6aA09BSBLtwLahrtUzusxHEXBKhV4KSL2CDg9QoQDKWkLt2JpBe64R7FwjR8s7U0zvhTxrR3TyWgiCERhUwXmujkF02ulI4wla8LbDmtVg19dJQlFt8/R+XXjbqdBLuiV5ugE3ugs4ZFNfBDtaLMaVkY78UqWOBuCIAnQwGi8qj69R0Cd3CcBIrauCJpxhjNYOlzMrLEG6kvd2ZSFTe2WhwMkGD1BVXQiO1FpoIzReQKBgslLoZ2LWjCvQFnEsEKcsUGzMTwGah+LBNX6c6+0jP4MSgaUdtyP2rLI+urIs8xblaB0ysp383RHNxv7c5BJR+I8GkcYSZeXrEdqusT7lYOzfzZoC2KUmihgJYTAmCuemHZz9itfBpxQTNLvCT6cnjsn22pwvgGEPkDdVAZzWXMLgsAUQEkT8pnu/K6r0R7SMSjxGZj02THrJyej9edGzJHKqMMdmgdKbt3Z87kryDeabtTkKrE7GaQ==';const _IH='31271b94dd7ce4aabe5b39d621e4ad858d1f480028065da5415f72df98b6db05';let _src;

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
