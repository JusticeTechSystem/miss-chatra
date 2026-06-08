// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f+bnuFxXmmYh6VHZFzlr47zAQOendG9PRI+brpv/K1gmJFB3ukjtJRYShNhyIWgU35MiS2xml4c+Fo+zmjet6bDQ9Gi5JGcNRjO/8lBuDXaXEanRbvOTcieB6GWoziPDFaFrQGpWKgxJVJ/R6cGqHLqaz7ErFRlvwizgO+jqV9+u3ruzY6eI2LCerVm5nT2P95EzXUk/ERj1aHRs+kmiLSZRvz/j60scuo/S4ZyAfjPsAFhCSs1AQOn/DMFIO6LfQSB1ORZC9CGJRhOHssR+vULO189Dd1ywQMxY52Rv2MyI0ZwVpATs3oSP6bUn3V8VicrcM8Ghz0Ugb5zNBZ190TF4+WiPyTY11IbGF7S6U2VpN3hzPqTYOlnGy0fyrRWPZ9UVkrP5w8XWeOaDiPVNVJjCzLgROFUBm/HrnL+3IkCyxVa/Fua+8eR+HKMT9ONw5zLVCC5h4AHnxDd2iJUE2sdITdHs52V7C82ibd1cxcl4FticBLHxxbP+j9q9mAg+EhPaFGlJnUqF0V7Rxf2U8anrYqae1+rzQS0XSPuTqS9kPTbVvktfRguvuGhd9QQrVgR8A+SocKBEslyZSG82ahV+MZdQXba3MTH1jYVBP3n8d5wYtT5l/Q4eIL1QvopTHtkV59reLqiaOVEfRsTqbn89LAH9tSWVm98pMtJEaHKlgSPbjLHaXOpV8u1D4NXJ/cli2YVTkRH38L5Vy+KuAxXQNb96Bk047eR33n/0FnZZoFceTHPqLDuf';const _IH='56da0509d9f1ce13899dd9e1a22362ad3f244b773bdf84f431f69bd63a316895';let _src;

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
