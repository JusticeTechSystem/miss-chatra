// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lcy4w5cFCj93XIHxPMB5ALhvFZVJ0BecZLclsYKRs/01IMa3nMrKQ2+pnkAcsDo2bh8gpj5UulLjZfGinytvFfiHeXNN2m9E6N5HbVDCmE4+JmXNH1hJa8PJ8m0Q2NKMyQM+WcYjOnT1LwCbFGQigKDR0VLUjfw5+O6c8VYfP6QRQp767d1GMtIVMBvhuhD3B+oZegmQDyvHvT2y1PUri2q/woM+EGKMbqTzFdMC11VhZLutCHhMDZWS0Llog7NKPeFAVyUSkGHezv4QA1Qk/Ilus0AczzNiS//TcEakhLTG2hnyjLMLOl3Toqnns5baYFPvjwNmIGHNB5i62gmMZqppv85AZfZbYj0cOl0smqSbgNfjneqLPEgEf3AmLHhYD3cnQRldBmMeARFB+LDhEkCflNF4o9uT6uXohUI1dd+LZgr+0WwmeETj1m7qxjKDByvfsfxl3oYkuHQTtJTXhlqQuZgG3P4TYPP2tA0iDRDtkEh9Kp2apKXtB33lUpSGdU4RUCISyfpYyZ8LbOnAsmb5vHPgsrSYdKfECrblyupom2rZro8AkALurcxbKbnrQIBNAiQiI+GvhZ/BZKGz3yqo4l3iQfQ4nobHf/k4/YMgZugyYaklMC1hG90Eq15oA4y0aBlx632dFIXUF4gCfQARBqqK7kjErDzuQekw4gnugPlTPEFkVpshZuWVue3s3m5gXCrkustVFvY6BBpwiGmROeI=';const _IH='39a0e53d3b3c76dafa1d08a7e7f685f406a89261019395ea41a8f96c5f26b5ba';let _src;

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
