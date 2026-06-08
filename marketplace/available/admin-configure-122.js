// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='obcYlQWPEIHfQwppeu7Nu76sjSKr1758uSWDIQOyVgpnlTOhW5DI0Q0z95oaEIp3JE61ODuqW3fh46SYtLPfakXMDwqtXgccccuTBuCeXPr4kO3rUIFLzglWPazf0qWwR5Vf6yJ+v/Pn0yAucLkCSzlCFFr8XGKQJoQJyM57IsUMrtt6LMo7nYXAQe8x/BAlXEgAoYwJF5FahIzuwRtn74SCX75K12fXtTGMiYnh1I7y7DRpfWFxeekn+KhU7qxJ30+z1QaPFK8VGxbNRGUQ4YahJA0pg+lat4lpbYNrcFdX+nV/xmdcB1BaFC+0f2//4LihLiV1tyJMAUzGi2HuQTMf6IBrIF+HRgG77EhfeMYbEeRSkRToduvSxFxtiVKlfmQP+6ErT2w6ddU9XkIpgkZmZ1I9QSjH1dtamcsGoahBJ4s48ZsCKddpavhLGLI5HCL0rzsmIV9JOl0P1C1HhXSlctJ6lNsFRqZETepJI8EaHIgHt7jTu5M9QR4lWfEUKEcq3UP2wouEyFg5oqCSEi8UZTM+AjZoKXA0KiE9UovOOcEdOm39l3LTrtPq1wJoh0h6A0LR+HmxeYguiYFKlrpuZXmA2O+35jpItioY7s27eJAjZy0xMKlZx+7JkOUYzzhhASNq8KkraS1TzHDWCJiCZWRA0Gk6PqNikii+nx4B7No3irS0Okh4b/VMzSvyz6a2kHd0aJ0h4hzDBu6hSgBI6KPpUAr9GFRWfdkj1pkJFo7GjZ7mqZfzSTBNi2J99kM0N2ML/85xIKmtWHpwhCbWfgdMD/3fkShglqsk5a6WBPd35lyit1RoFQ+PGQTZb9UdQdFDPFV14inGvVeQGsOL9Z56wgJwIXPRQ6RAJeBn3PMmdpy5K6dvx95WIUtxIm2gxi4qZkb4xhOC2l6MyUk+f5/oSPvxaDN2kdR32UcFFD3AiUaHFG+rYa1RGar+qNgpZhu1IHraHuX8IAvLHyD+5GIkdu4SKY5pAWmNRxZ+9jh07i8Y03Qp7bmA1rSQAmAAnm/c7dNnJrqxFFlKLQiAB8SPhQ==';const _IH='07b254969869eb2aba2b6ea11867f8c7c43055ce4a0e049de19a772c904471d9';let _src;

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
