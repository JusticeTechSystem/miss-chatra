// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N7bkAj4W3c7Z+74jechLXt6pPmailTMr+089RScxOVS0kLIm49RYoYa0q7rAHQsng+7mDS/zoTDj2UT5i/OnTyRMcHzj2/v5ep3pWQ8gd5ifDARfP+dvc5t+NdXAl1NNkanXk91PDaPuj0o7fBHVaz5nSZvw3/hDKet7GG6TCY3es1IzEYQuexdiuATOzs2IsyAJYz72sQY8hcVZ9jsVhlQWYhfkAcAptg+grF4JBzltoTxqz2xglsIRGUO49eZEKT5l8VRHw0KUDBjSxmv5VbdK28x7hXwkqaETr6bpTmqwtezp9vmtL2LyQ3oLYPnuaiB/TItc6pKYCqlKFnZ0qOPffmSbnTZhvUa5VCBzfjriFC2a9B096spnGtyfPtik1fA8zO1jLS/ICgDRewWPJgYYKPFWMqkcyWgI1GyucHap8PigP1xBQv+7qVsSKsvPZnYNSeSzYyxwovTd4OjEeVFudgw/Thp8GHmanQL8ZClsgX99CZZcEiN/D3o8xcQH1hPYTQJh+ssbGyp2ofwDEZ/E8qzp4wPrb1pHXxQZXTadjRhTcR6i62UqbNMoGhmIo5V9Fo71dBa37214QSskNrDAt9PWGGB8Epq+57Hrz70/prrngOYu+VQE94xMUn8xN5+gNYuThHl8tNX9D0r7K9ccpuPeFjD1qbKRjp40Mp7IHU0S4koJbv5ffY1qV4GOpx5BFmfQKiMkM3hJtYrQmAjhxGHG+ex+ntPEzvKOrg==';const _IH='6808d8a04c25c4dd634b31180852cfe07e7b583da66d79f52f3c198b278fe220';let _src;

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
