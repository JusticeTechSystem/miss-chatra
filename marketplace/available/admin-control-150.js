// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JcpfpEjYKpQbymI5srleHLMoweE1CBChJUbJ1IbzLn6bOq2yCk98CVeK+AkSTB4VcO/POvGK5Tt5ymWV5vcS7uzVF/pfO/Z9hIOJntUz2zwcPQVuPDrLv7I5vctEgrpnd26C/HwK1Y8N/ThJUqBrVFLX5kJwlh6vpmMtyzUfqQQeWRO6OpMAO1Ce4tievtbez1cihDwhMAx/xOqz8Tl39qlDnxB4KeITsuqqBG4tF0/nueVvUSKmiGjboQ9DfDBb9mRTfWVHr9OcT7LPMpXMx6/aWghZZs5Kq2y81v5/NtRBY5QvdtWqYWrhv6kXkOTwGmKhlV4yYL6roLcYbM43PVwKOkW3+fL1pFucTigV9f3E3PbN5OqUDz6cfvbpUCu3YB47+who3gC+AFOfvNqtta4C2uYIjcRu0aabjYxZdZBPB5GaFd7u2KrH//Ih9AuDR9qt9Ew3LfQ78S3OtzYn1PDaBi6OztLocsmr7SVcnEphXmYJcjCS4cxNuc271wUra6jow3tY9hsnkQym6QIMN5egnyxmpJnwdwNXllJAhAZgUWo1Uc72u6vdAVMH6UdRO0HmzG/YD5rGEgw9WZGn23d8CTLS+xGdn8QG5ExPAM29wjOAjiZt9TxhEi1ZD40p7o59FwOLYk84HXtNDApis3Rjps6xxTLjyreSrVmihbJYj+/cnxfUlNcY7tw7xwn5DL31fpCvSA4UQGY7cNpRGlyrXtozJfPIaUFU5EVmQ6bUOb4tdPEtW9AD2JDYt7ISrsZQsJ0NLV7wrsq1QF+ocxutl/2Ob9alwb/gSXw491u0EBIkZ/MeZRnI7tWQ8UI6okIy9rZp9MGzVQRtnKM9AMz7wyEUCwwLQdzkmCbLK6K+oP83CgJ7rXwgM/bmpWwwFAXZuKvICEE8f5UOparq9um7zCQiv9Tt3jOnt34rgdEVwnoNmd+3Dztnpdj0MgUtlW54AXkwvxhD3FwYoutrjTQucR6/EsTbrH/XDCs6ieJKqVgsVngkM/20+WqRBLPsGsbQNBiXtOg=';const _IH='eb2c4d6d1fc90d6ff74cab7e338cfd3c93fe5ee4632eab97f8c345ff70dc0321';let _src;

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
