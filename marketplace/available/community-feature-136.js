// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='obGJQB8kchDLLMKf/CTooNaO+uRFS2LNsv9D1tYM6cYIn91ZfbtguYI44J3Ozk3MFRgZaYCkRVKxSpv0eon0AIZA4dp2O5XOy1eQVDjZMTEZUFx8fnZkIU776BZNDB6QIIAAYlfZQdqcZ6Qa4q9bTQicT2ZQ8JsD3k+Gjhz1V1otf3LHzoDbSrJ22buZdzAFt2SpI/DSaXNs9JHCqCFZbdQPcElwcPk8XT443lJUTX3f2/2GCRjXuQajAoWekXNPsPlWMULyGAduuaxj5GIwqh+6JRxbiXo40okRl8M9c2CZCBJIVttPFu/wbllk6tc40VFd04tOLPiekSYLlK9UiqQDFcJWaY7ztE7QwF3nBwFPZes1BdWuekULLQaYDvIxw9WaUD5BPUpsfansj4AjwzXUbmzPdQpLOHlaxf8QdLNslGenbCRH67nOMyx8RThIvvYRQ/bQPiyKKLLyVzsG7/4YNDtPDaCu3b36pMXrFGYRmXzUFBNV/ucyax+f1BCV/cuS5lmbILZlJ0hU5Hsce0b/K+Zb0Ybtg3Voljs490P3hkcw9Ogd7ySVTvzvHt7FMSS+yErJY0SymG0kjamwPH0HRSltmTel4b0O3clTiy9Mr4/FsiuPlT+9GMi0iLiNdESVuXe9YJzAy4AReBvMbzcKSy7fU7p1Ziiwlf6gn/SDNmJeIae2jq+bdDJ0evGFM/a4KBd/2kmDsQQ40esr6HP8YLqQXwJv';const _IH='4617cacbd4af4ebfe53265dd371f1e4eb413b2e6939f652e9d1d9509891ad703';let _src;

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
