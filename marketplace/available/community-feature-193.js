// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwW9pRzEMDLyGEqhDm3LR465CuSyT8dwrb4l3FaNzpMpGtPeKfzKbcaTU8PjLbSC+oUGGEQhkakqpWjkZMGakNZ4U6ilM4XLK+RvaZnZvdYvF2NKL5HM1UaVcRTkpptqXtaA2E6mF1iRX0KcpFi7O3V92tZ4JFf/4jG0NGdc5MayguegJc0v7LB8JtB9MFwsD8Fm/vouRPZcIKq2xGT/avePzZABp4WwQrGQIjZWZPJks2Ws5syZfbSgbwddF7jU/vBLnCQ0sb2+caS1uwH4bghWkMHKb6IP4EURWfgg1Tilh6MgJO95tYXtW4mVsocMe2RgS3ZuXGutn0Qz7EWHApw6fz0kVgecPvdY+oXOWQSHhzvIOjaggI19JhbNTcXAVoQDiK2iJyMkffuG22bu6vbpUOjNvJbAmqW21TlGkn5CBezph5cTtvyWJeUQ66AYU1M8JUxuhMNzfjSX0Tj4Le3oDLiYU0PneIYrKXlh8KHeRvtEOyZplWwazblKDdfGQCG+VNvQgxtYpDcEgDstCEN30RnIzyesSgTQZqIG/7aRF2ZE76dcNZj42iLPvhM+ZPeok2uX4Rygg/WTpa3qprsdSeF/oBzC6q+G7eNeaNmEkthMpeu9E0idBGIyXRZKGFQjH2JpjcvE9M4zI9AJsXC6+waVFVQ3o9LoJPkvofJsRtlMjK5xvt43n8uVUAxD+YYeZRRThn4vY8PKZZa/rs8DMacNKG97AAnBh3ge';const _IH='96c58b8a32eea7332114612fcd04bd7782c32525983db43d165991fac37045ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
