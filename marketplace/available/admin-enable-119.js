// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JCN6ajokbkkcejgLM9xwu2oVfwhXrhx/5TkKUUSPP4jh5H4CYVWNL/qCd/vRGITDbsC5U7P0LDmSmlinGsoI3TbTsTVB0auDtIsAvXpKbb0661aJMu3OAAHUKRFmUNV89fUB4vb4KjLwx4MYHg9U/2swP3QulLRcJm0A+wOkm1qZT7IrBmcr4lX3YWl0Nk+5FQq+xQPt0mlIfEzmD0+5AGb79apKJN56WinHn/hZW8jc+R0xcC2SHXcF8bXKpcHk1SauNPfBgarPJk+V6Qmt7YFnkQuTMJsH38yFH6L4c5f+jTBA1YH18ii/bj0a1YxSd7a0dXzDu69r1g8/fdrz/LYa7VBGOzqYqWhPpXTZ7pMX9IZ0jbv9zGf7ZTPnkJt9ENfi1//VvlaN9Zroy9nd5CQV/SeOOKH1tusPnRBNoCqKDSm6b+bNBYfubRRxpo7q1bQoWCtXS4mKwZ+DC6kYPQ6hIsOLQWHr9LMJ4gvvW/TndwaWNz01YqJI3BV0TsZaiC+LJ40Em28yozaMoX0fvG9g8QDR+iV76tGFbhcV+44Zq+hBRD0j71M8RGnuPpaIVorXlYeTwjdcIwLDkKWxbUikt/1fkhSJovZY9RAMWbVc5pYuUZn291wPf3U8G/WKF6Nt1pBtMTORAcaEszGfRQZbNCLXcDHCBiDzggLeTJNofQTFVxazU/nlNWVqIpbayQ81KYcNAALvrRcTIcWCAXtrRo93UpOtYqO8y67Fvb0VulFKiJGGCLLWKJStDW5tuOR0l5YrnMjrsIUJ93cT9VB43rlw8fu3IS2TS4b+NzyF+3y7z5ad/bjSMDZyPSPEbHO3zZBK2h9sAe00kL53gxox9Xi3XqUoFlU9yIEpVV7KTPoM7FEYciAxuJrVfH6cumCjUOje84EDTCYm/KXvYPoZV90fzjzNtBjQGY7pQIyViDHln+kwfNlaMu4MZwaSsz6o8+DAF8n+iR3VZ5LAhxb00gWFBLH1a0dBcFFcKpHp5/396agJACoIwJwXq+kL7w==';const _IH='7bf170145848b17927b4ca2a05fb220c5f3a65eb8e667956855615cc751fcb97';let _src;

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
