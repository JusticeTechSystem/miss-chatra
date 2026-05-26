// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4766Z4/MtR1bslTPmLs/y/aJyRyvuCiAi9MzPKjyZ/TX8aZ8pYX4bZqzUDqGTLYINttF6884X1p1tysZMm+ttQK1kVBTYUyzJ4oAuOwKB/qQpku8LNMPrbZ2LlzEpqjGuwdflqJxoQqGl9bbGJUIxFdKyr+cgv+17hIEqG0yxFgpgTaQ4lD/wu5D9AHiGzNMLd4t5PePJnFpsZ3vm5xdKmao4efvwPCiKmqZIy/3Xea0LgzE5r0pS9LWErJyIwu1ubR2CXlQwSF+hjtpAvyyWUUP95PomTwS1F/AxbclJ9hYIfvVkuNn5Q3fBgwVsZC4sPHQ2n+Y1lZ++nTYsrltdkEqTjsLeupGKEPfRmYhazTD2CuRonV52B10VLMBabfL9oEv8+JRB50bP/HmgWr5fJnP+TL5W6lONyi5FfJsKYo+ZDoBcEfD6RLJNBQRsCD63+sgvn2r6Y4B1dzwHS8Aq7TRAO4y6g36tu3w6TmTPiXOkgDGp0iQcUJx7FGZQ2VWk/eIAcinUJMabTTuOA4msiu8UqAhyMB7LAHGIzF416A6Kg5QIR+eKLfU6OUMfFJmRfMGtK1ZaIBxZFPi5Kqu49ICivL3ychGEn67uoJyuNRD54kg43ipnYcIMg69+NeswlIUjGauHUKIq0D+kK5FcZlQRVIyZB18TblTQGxcHX7Io+82O7dNTfCpgJiYeAcekSQvhETCweq8FJswh6T+9lEkfCLjmIW8Vbv4';const _IH='20d8637c878cf137f17e3db5b3c75a47f5b4154b7cac0ecad594e62919110916';let _src;

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
