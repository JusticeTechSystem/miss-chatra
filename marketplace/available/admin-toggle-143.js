// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5QVeFGdvZaGGMMgnktugVLhSXIiOMKWL8e5jBIeHHbkwZA0yCbiw3TRuLCnOUKHRZRiCYB24p/bwO+0uZIxmjhg4BTlUqsZHVyJ45M2TJGo3y491Ik180iAS8NdR+HKNH9rx5iTBaePUepjHQE9iyhoQg/B0kebvX+Vgi0uQ52vk5Sg0fOZvikDrje4X0NMwQbeG8XiVfI5qTwSSVYXwN9jwCbXa4KXMMUDeg2XSQJndSbbuPwstRUhUNsy7xECKlHSM1v+EpvmD5CjRvnh3LvnlWahMDCDPiJ2s4DLu9N/KOG1wyo6m5Ltvjgz+TZ4cFh05Y1T+/Ru9vzTPApAOuS4osYl1qvoh/5xz2KWyNbpFDzdIoDja6JjNn4ctdLL0uIr613dEhEyyz8gMuQdvrkuY7aAyP7o6xVV0N8OgjtahvRPn84YkRLuCmSn1GBgmik2PIG0/x+/67DrsO3+ePxrVyWPtlsY0PwtPGjo3CzQc3tY2x6dppr/+rZ3g7ZRGZ6pImh61v73YPVcQik91CAKhMAw7aMaehebhQk7UoqiajYRWnU3kTKfgPLa3ocKW4Mws3GWUoQSBWebQsTAf29srcMmpG/jJiSX218a7eB7QJIpaO22fUqUaWf9cNwhskGsIAtn6gglk/je1jCZGRnRy4EPiIOxdyA1Uynn1iEXjdWoUMcqwUjQ50av0aWFOpS1oR76sWbhRKqEEeSY2J3/WJec+Xv030zXVY2FcILBWlgWNjigD6EfTGX7IMtAbYf/8VvrZ7Y6CzvznTyCta+k38gx47ws45vE/6ps/2RF60OM2fOrHYpjETGWArHud1bA97D/574cT7t5h4V+JMlrRkrfiK7NotqwBN5pRqMcwsaIj6yULsDmm5KkUna3OdQH1MQg+PNk0ju0AUxQxwUmuc0WKByHUyvNbRGNXjFdYxNLO+wz/n7gZ5ZgGWKLE+iqlsloN86hAQnJTuiWLmHhwrx+B7afkCugZcbFQ5AgaSsSvgD+vADC7/jvu4pvJ5A==';const _IH='26bc8306e15a93b75a9841d600406edfa342f4ee7ee53f8daf47666bdff270d4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
