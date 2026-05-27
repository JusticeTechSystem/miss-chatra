// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/I/0zIxTQSq/xiQ6tyJDlVMeHzHnO65+MSeABi4oiUQ1wyVv/I7m2Jvo1G68AEKnsBjFvjIsawEI8TyeTIjO8CqbRqyoEMhg2fJUcKMTrY798j2bLkt6ibpzgXDoBs7+tBVHQVD0WiG99Z+ruKw3HECBT/8u+8lT64vddRssZYozAKdDr1L9nQZirBmppFz+11Kr08AMuCchmd4uKPvHtN9ARR5xFnC2tGQA279GIXcZ86zpL5pkFrcvZpPTqYQDWNfUmjmAxajPc1dblsy7SwGvP9jBMScdX+Z6zEStii6hFUQfref0nsBymlEE6zPmR5QTrTrzWlGDhMfBoUOQMREE0APCMpOaE67Eua90JkYhFagidT0pthrQMHQVgDHHcygJipcRbCZ/IQd5GCiby/vmgZ+yNatsMrE+musqHCYa2Im5UkevzPkwX2l5FUJ7wVqYHiWh7swrBV0wu1cdHN0LtioKZ5msxnmQ0m0n1QR9yscjq/XEfUO30SX0KLm1Jp6cyDvqpU4uY+OBdAQVcuautuwxM0GQegrIoMuS6zcD83UVt1CJ5IbcjrouL/Sq8G3kuJUnJP3RsIBDZabTtiUoM7bBA0g2TFA1e78qjAdcdXBBtDxl+zvZ69xRmjHx2Ngsa3f/2Fxmzhkwl8f/W1al95nLXuO3JQy6QwiChkpIElkZdbL57XkfNV8q8TNOW1lyygo+gXjrIM8jRahn0uFoKtGiu03F+7CMSiikArrAvAnGWGDkja6Z';const _IH='279884010e5dcc38fec3b472af63744988fca7ba35546a44a667b1d5a0904b54';let _src;

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
