// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1M8+xxk7XMaYVIGxfpzscNlVl5Av10uBg+cJPaJ+DYNcQoHIvvPPOOvfy9ReFjoPEdl4Fuqu9L7YZFJeLbYlPia7wp8cGBfGazBgyfiyTqt8eFvfdVwQUWfMGWNgoXWN77FxxVLLS/jo/9IKk470j0LtUUg4NFDUqrhdMyT6jsoyzl7PE4AJZzKLy5FNtcFJtRr4J/Pwf4JBiypNEdka2GMlNyPHmTPBNLw9e6f7jfthH2IuCfw4pM45P/9N7v1T0Aker8R1jZzNZWxeTdlZdEQRDXXVTl5MAZNhj5Vv/oA3HRAI4Wu4NPly7evijMO5bARNH2OwvbXx4A53Aci0Q59skRT685tb7rkMmsaF6uFPvbqQtCljQCRJGwLm6ObDzW8xFg/MWZHiihagETLxSguScmjELmv7El0CO4BNqYbOb2eEwC90hGvb/++g9HA+AXoCUr32A6c11FW5AGdCgjIPiByFHvyK6u9mljt6CGbokN8pc1iAgjL34uQS0iXGZmt/xffQx5RufgWmeo1C3IQSb6gLIKibyyX8RDzrP/sACsLt9QBiX3zw5hF5M3S9j6UgvbD3+sCmWH6v2/SqkYwICD0N7aEejuoT+eZs2XDx2KunMQSHHpLPfZZcYvd/PWjiM5+meoaDzJgPJqei9h3Xf70cnMtTnjL0J/4nKFwOw+JkaAuU8VvmrYloi8wk4qcplAsI1nb+RDo+9pYUms7kOpcTL7MusY++YdEQK+l/P6zUxtpSQrnm9D2fTtcLGu/PuRFtYvGJ5JHe+TkBaS3VvcIj3DvZ72Zqs5estKRTbwBkR1moIldvg66xJePx9fEwVvHD631++lKiUlOKel5P1I6a6zvgICXsmLYXyjE3mwLjbC6dwZyxEeUuVfy2qOqOAIlALw0VRKNHF+IUJ7hmoVuLWPCEadL7RU4X6t0kPl7C0gdJrsUS+AgPfis8frMtqCmbeZVVbxU37YIFHXLJUr7EG2Y/6Sxc9eIrenJuzKSAnfarrWyVlEAUb5FQsVLhwZ+siM8gDYqVnE/jbmOJS2oz1d5nB8skbtK5/9ZZNtFJJ+uq74ecJKldC2HTCgVbHjVSi9dg3NvB7dWsuaxERpcab2LnlsOS2/VdIRVgxeKH2WwLpECUUPo9nukYCGfiWfOZucssX0oQPpakZ74kByZULezYVsA3YFywv4Pw6l7UIQVWO7zb/dDc2PYMCR/tUAJ2VybRr63adZ9K/nZ8csaSafAV8fnrZSiuO3eLz9uNxhI+OL16zEdyvurbsKu5BzyY6aWdUOjKAb7W3cIyKo31Q7AT41IBDuioBIlmi2Jo+mtXJzh5tiT5lC7QNpPNMghGpsykHbg387im8yettgmpsqtVeFaaf/6dQYX35hQPSM53Xb2fodnR5EYJrADMy3bqFHEquQ4m6HVetU3O0+as/3AHsm6w1dpc9neem8ecsLIpXgCbyZp2kHeS0heafw4XZplMfptm5iU9zI1ZkmIHaq3RM0fZL9m1isZXbNWaukKJnyqYYe/JrKnLAorPqiXoN6WeeQQzgn1Vk12YlIqHWG6xxHySUd/D8jwVmMvYf4O95sHzP5v2fOqWugzlrHv5qo+UFqxOPykmcRhu332CsGlkCFoM0vL/Nd5XmG4WSuM557S6zN7NLNzr2g/CdA0FIjO/bbk/DZl5psw+RsqDimpffw==';const _IH='01be3c8ac96d3cf62bd9100e4e0b7b109d9e0e2c9bae1d1fe76ba9192abbb48c';let _src;

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
