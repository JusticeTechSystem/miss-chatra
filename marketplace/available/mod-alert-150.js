// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sA2iQz5/H7CqRa+arW3zF5dXy39yA5Q0x4LgEEdkE6eL2hRW+dPDo39bSY//k8dL2jSes4OD9aSL8h6HbZy5mS9azMAJ7ksReucJkYro3wT5us5U2Ys/AnJAq9p7WWyCmQSQqQKh42DqGkADaggWvMQdxw7VTbPFbydENN2/rnopXoG7Iv1geDVOB5ODV/n7tcTUXcwsodgkU0EcdJWaz8Po+ehRfi/JjB0KsVtOj6RwtjE/0yay0Yk9oVwcCacOfFY3Vb8gTfhzpgs5ROSgf8BNNCG2JlbTcLQLwAeFXfBGWi2gq50bZpua1BdNxGS0y2/plL9H6B4zlXP1E6S1VU9JxDGXLht4nDcsBQq1WPBLjCzyjZzLza5ReCrrSuDKEhiW10DAyufSXEN6O8EHnhnMv/+wkOmLEAKWkPLl8QPQqBswYvgVQwPvGIljR+jCNI2vzczWejAAFDxgAudeuUayXyaq9jJiogRUZGmG8AxdPt3BS9k+Zy3qqUnNSNSxSkXC0xgb5fInSK66QB209FIeTiZkCk1mub5DCYXfLBU8ePDQ75/YTkVZVNYZOS9wjkBv642nKUWHL1QBX8HnMlmDFrwt275mgcU4bVJOG3PJCGKiFJT34WquHvDngBkx6ulZTGIzMx//hnsbYuk8e3FXneUfaRacIl1cegR2DA9/4PeSUdMS1OnmGdIa1j+r2TsxsfD8fTiNx1Wvjcmhe2a06bXxQyrNihwAbjEisAocNH7dkqq0DgtC6R2hC5Us/Fy40+ulkmRyi5+DJaeixNBbw2fwH4I7R6x3IyU1BpW5dwHYIn7OICHc1NdLuLDtUKLg6TnL/7f7I4rbCs++uyw7Li7DOvO26W0BE0TZnqMZ121a8q2IGBJnS9FVLeWtcmOttJQpxbHacI2dowke+/miICQu6ZJHdJ/w5gRsXLWeHJ6pAk64VGXXbA2OKq0jo8rEBPD3c8kBfW1lUqOd2xMWZ99EYrvEjxN8o9To+cOKRyVGp4CeEwLNQml7ifhXYtZ5TuVAeWAJ2CsyrR0MNK2jw6Xh9OHjjDZIXgSQnD1QM/GCB/lKBp01qu26TmlpVhFahSyNekS0TJYv+DYTkC99DZiCc7jwnF2Xwm9oPcy9ycTgQ22/46ne6IXDLP68QN7uHaAEPbmG39QTFQTqplG5QWGHqDkyRI/zHcAfFnsNC/P7btruKkbyJPhSYqNzKfa/T2YJvOtwe3iFLl+E3BzTbd731klYiQy3QSMw8vXGinFLhRbW6pjjyEJh2bN77B7JWRPrqSNj+f0YtZCYrOEpf/PETJTs0bcZZ8ahgwOemzDeCGWXOVtoNoMIyBIr806yxKYquLiRPxxvo6vSaL+eRYEvlmMXvSVOzdMf';const _IH='d99d3a058a21f335fe72fc05aa7057681bbcd1d96095a2c60595f20c35a336c4';let _src;

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
