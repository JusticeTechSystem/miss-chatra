// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eSwTUe4RfqVMsjWeV3qEUuG2Wv8Hmt+Bb68X3DUy5OYUGO2ZyGtdFLMpAz7GoK5N1cqgRTXM27h92/tnfixmdsYFzwaG7QI+9JABbSwSwuOdeDV0xXTJKYbGere2NOg8Oq4QDD1ERd/yyg0pZPE6nuu16fIby17dmTsjs2cZEFdbxQlaaEE1h1hcbOOoEh6z8umQV//6qPac+3onkR+fIpu7YCrtf01pK/831K/tK9wkK+hcrNTMa2e7096WDGYVrz81guQup3r1+GfwYYHOVkHAA3wu2QK5Qwio4hW6oCZV/ZY6JTXzAWW8wUDJyjgc5S/Vn7j2vVmKmAXiu1EEh6gDyFjhOTqgUY6vmuIvABtDEcu8ylmJt5FHtSoIghndpkkGF8246ig/cRnaWt8/xoTzefAqC7gKtcyLkMNgew4O1eSr7C2Ung+G33yU5JEmdeWV95BfDpvHp0iyqYdg2YSy3fggSHQkq3mLQblvlIX7dqmi4Er0d7WnQdSg38P8S+i1VDyqZPPGiJ8tMyUqVFVz6Or/uEh/TboNVq7/QRgxCb9zEigcC/dgy0/0uVnHLbwI8S471akOtWNndgjPCeQNoLQD5No+701TQxcRpXVMc/2I4MGz+drRvALlrueEKONFvGAeK1dHKiVaQ8YZvue5/To3Y8B74LcxcPs2bTEFXvjSW+vDBE7F5Lvi3MyWpe0qEp8rBb+U26itlgGqn4UaR8btVOtTlUvbaUnZuCKd43bSV8RVDtcACZQjk5WhLGmrVLn/PcE5QeeLIaXW74yxQjsWozqUq6jqCzgKs5jjYdoUgNKXnQo7J6bxofyT/6eY2saldjKvKKDlxnto7kthdn/IlTVQP0ywDN6q133fPr1qBNe5+MPGsZVAR3R7umGb7mmdzEkJhCS2q0+dOv0EndfZyCYb6xAMTbMX8JLnFTzJQP3fXemSJgR8UhfNGNO6XYV5EjDer3qSM7YIjeu0H5FNp6pMwt4m0SU3MmyyJ9QpshIu9zZw';const _IH='04d03bea2e33fc7075270ed987984e0342160032e043f40d677a69eb94200c75';let _src;

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
