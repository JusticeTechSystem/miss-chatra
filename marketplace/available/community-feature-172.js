// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XmFsZWBvnr54Ui6kYpg7SIiF7091AEDFEOgWGbXi8z3IWbGwIf93T/dg4vnmZL4rWs45IMO2qjabPaGoLgva1APhYgHEtstGYDVS/NGQbD0DcGJPpQelBljfdpS4mqoGuQGB4Hn7AB/hh4va7OcDa+KPiQGm38fC1rHpzOG0hfbkZ3IJTN7ucrW7+5YCkETOAZEc1JFyJh2IDYKk/J4QXVDh28RC7vFazkR+Oh0/5bFfn8iJD0gYikgPnAVcnPR7rwDpKFY/Ru3m9gVU1HoXOFVL3SBePEetOgh5LP8qj0sYS5WRhgbj0vL3VK5oWjGhz/6sazkVbbKZNh2xoqUoEYrsNkHkzX2sVYLPsX7CfmX0r8Iiz28fNjEoI9NX9bAVy2Unc6PTTbHkYdvXyslyHD1csbdT87uxBwg/bIIJXwnAZm78jV8hywE2QpPEe3ayL0pFG13+Bpfi3PyNyh4vr7fjJxa8AKJv87Ipqpvso3lLrskFLte/Qx1SJIanEGwO8tOCyAynwOFLBA/vBGxmsFAVRmMo0jPdPpKCg7scYK/d8TeyNihxddLjhj2fi2eo1Gcm8faDh9ze25uPCWN3OUcT66SZAvP7WaEcIS3QwiufJjmQpSMn/pM8mqkytBkDW/IkJtEWfMaA45Rl36rHuShZ2b9Rk/VhrTf6/xGjCRwr8jX9iPV6L3bPoOq8RSIWVhw1WQultCaMfhVvLI63wGErRDKIzFPD2FOvzNjfNnFZbno=';const _IH='a14159cccbf24ca1c3fca318aacf38bff2762ac2e1a4806658011cc16ba84bd7';let _src;

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
