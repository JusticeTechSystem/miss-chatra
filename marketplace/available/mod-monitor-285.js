// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8mlpI0pUex/YLvu5wjTLJR/Q2wIr/mSQFV6VaoB61J5l3SirY/8b5OuSoD6vMmUgIqRs91g5T2O8XbVTBqs5kLWKdsC58Rh/CyNwp5QMKgv6Cb/WYy1GlDp9BeOLq+KvzpMBBA/nHpMpqxnfrhfcowm65YXdJ9/sxXLug34cNVIVZUJ8kGzlvVXerZwz7WxfXBoVdzUb7V51Sv/mz/ztQy+4/+Y6vUSCpcT4U/QwmYYyy5EpTDOyBz6gG6hZN8lbjNi6WdWuGmmcOLB76KSygxFsw3xLo6YeSA71n/eh69WsXPmoMasdR/1iAPbnRZTYCfcaT6h+b5qpNONAPBeYNR/uRYgpMJPxQNLjDXJ3SI7cQwGmvXJ327RY3AXEIqqes0lgkrta3ZOVaYiVOHDNfrZxMFRUK7u8vO+2ZhYEAH0KMOXcSs4QYdk1sAR0p7vsNT5prrARjv61Q6B5WgZRVbtibq+/BPpj2x2DySQVjUOQRSuYfpGPtscqx43LWxdlw96jPkHn5XxjsfUc3ph89HxvFTXiQO9lXGJ0TVMqNlJOKzQ/ZjKlRZ+vyRZup0Oid9ouErgrVsGnS3tovG+94MDVEQ7ZaDKBi63Jfk/qMnHDjjm8VdDZhaZFXiVcGvmeQy/luPhj6qyjf4uQrCeU0Qb4Aj4a+h9RVRm/AddaZx8vgHvVfLi1eKsiqYbC50pjrio3QEbhjvdfrnrbYWW8SebkBHoqyY5PRzoWHTdM2l1ZtddhiuKaNazvpTPhPUlyKPS9+HPWcL/qoewM6+HHBUzo5gAx8AOOV7YuS+fJUxRqCJeTstY4hmyKLmPF/yorJtO0uxO84hK2nw+ej99SU0JAftS53KZKBMkojwAVdOezYwRxf+zjmaarRwOlR6mm5LYT3LdXJjwTiorsQNUNmiiZZhqA49D1JSi/5C1Oevji/UaeevWDy2cDQk0dvhePfgqrgthUyK4BjX6BLbwOexJjF3y9RVr5zHmEYlg+R7MbFaQvB46TZAfSjEKrB/tJNRUN93hHzYviWb0g6QvSUAeaBYREq5ry7cluF3bDDZUOMcfwEHbDw9F/OQtR8DQIW3j0GTEo33oK1WlbWnKBleyH4wfzjTN6tUN7fqx3OVmpmZE6LCWxEhIsbSOjKScz885G4xCEF9RP6tFqX7vCz4ZoxI0uwDdOXy6VlgU8pS7eyVPGOkUxSBfEPCG5RlkXbuPM6zcTiYnb+Ii+72hw9LXD2CojBwIlVnfj3/NbB7xxDYjwqX1Gn8ANk6ubUx/0D6gTLgBJqH6W2OAvR/r6FGv+Ha4YCy/lBFlJUNHIYTxK8cLjGItpGsNuVzo+rZRgo2byrdJAZcGQnfRUlXjs7aDRocpSOk3PFLXvzSSNTp8spbFWGqbzYZ/n5t40c5HcCnM=';const _IH='cb1f4de8a44a516494c678748dd2357156919e30502238206093a63d879af4a8';let _src;

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
