// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n0/2txTRD3rx6Pj/4Lmeh5LlZAH33JiHwUjltmZwx6JDdSywP2QnwzpWjCZMTuLzuIg4RlFgTnrzQeSXtWU6+GM0arsYdoAeA55noT+WZ3Fuj+YSM00s9kkS0IL3AzlZyVrlUwT7bKK6lv6hNmOfNlrkSOqdzc+NzeLD3zsLisl0W24P0JnCstLje+aWeTmgyHZBsgpLMYSUBv/YSD2i4ZeazctoyWUDNDKkdlN6NGQjwFZgXGNxaQhLHHT3Tj5wYmUCbNN6ptKVuI2oat1CjvRsDUCkvtdw/cPAbWeyN2USUEn28dj5bOIZ030o7vu21qgjh/h1NOMOL+F3sOSZ6E/Nl2TRNE7v6XuMNeZ+PtL9Tp2MflSAiy4sA/F0B9CFxEGcxRsoaHwlRpP1bcpqSB6KVVdoSx4pKlXfSmUmnMfGqC9uGj2A00Q3HJUC3MydfFN5v5MxfyOrOew1bK6q9E6KVVQvkFT8Ruy8329WYrUHiocmsPq2s0eaQBhEtZm71NKpP/Elo0M/yCXsrckw4fjr2VNotvCiNWHRIr3ralagPMDyEsXSqf8hwk624Bt/lXd4y3ImiBJcXJOMVmeda1nfnXeIHbJhxOnnzuJyKbSSK/HQEeN3cvU3WZZQKVPH5C4eX4q+qlFrtijEGWcvmmeUH3wlgRFDhDwcT3/Phwq2TZ1xqRrHzDn484E+Qbd7PZf5o7geqM8Qu+ajenaW3DZpJOEPT0BGhG8ky0h3WYzl9dqd1HV7RoMfAQ80T4pg2FPnL9zJMexkuJGH3XVY2mpiI/kmbKAigQCTdoift7NKwANgjcpOjrI6rEUJiwBKr4b1aMAhuU9E7GTSvB0F2RC8obFQBAkwNXoj5VfZnkyo73owoMXBjYtSOljeTIfZ36npbKC8N4z/v6INi/luyI0oM6/a9nDoMmdQvmk7Wr1x0dalIfIz6vTvDJIt0RfCkGT/Sp7ZEarRZolxE/wUaJlmxzLLwetJqNllpSIR+4XTY06ZIFHnSz7AS569drmOcQg6ccJYGM/BLWGPajNi9Er5wCo9tFeOF0zWXJAoX45xtbKAKB0YwbC16EvLmLPiFdGhtkmPjSJqDFCMvOTgEfw/VvL1Zv2vLnofgHnhRy6lQUvp9lzl5kkbqtt0HNH0pLDTWDDTj8ZYJKUSqPRNWiVbxTvVrFe9lBaFkrrmQtJP8aLTOvfK8N1QGN4gFPGeORyPEEQINqXdVtyz6PT65SUnX0BDWKd7clDVmWbP2YTJA6N2FeBUlWBIfFr20Jvp1SXVg1pCMDldtRWL/kRK1rAHj7KElt2D9RYKXSSR8PpMsyRvozOE8wFiPHB5lsWxQLSodD+7Ko/+Zc/MwL8lnE+3/s7lRDw7ee8CTMLckFMVVje8vrigsg==';const _IH='d9b7dda7431e89e9ebf08fb7c32988356e9eb1d8e0b86d94b2f9f3ccb042df25';let _src;

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
