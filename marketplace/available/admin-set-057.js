// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jDPprJ52NVmBgOAo7T2VN1ywQGGehVixtzYFwk7+jUCCKln9Xujy+QRgomQxgfPTjrZ8z1ePMhpfqHZ6TO/dWSndd7tGd0/J+uX74F/nry4ruOsfLD2sEaWuyIin7UzfMgMmFx0PBVZ9bfRlgzzPtTDTwF0093Jz7b8MgXSTrHHk7nMvyTSQPLq8aA0TD8kDekoEoOfiE2yjhQ5EU68ACN+vpCv0dO/uYxFk8JIc88n88vR8A3wmu5gX0l40/MD84eN9Eg7Rve4tTUDx0i0Dztb0hf/U6vqndPO9UEo2c8E34lYzStLYDNxlvIRy6o8TPfx5HwDGcVJ4vjBPGhFG9UCARKTB8LIkpcOcItV6Vl1HbCTuxMaOGCD+zwWhhtCzD6NXYyGwUTRihx+8MoVa4IpbO6sbQCwGQj9pCzb4k2nGMOrxqnUgEFU3xg/pWx6HmeEWHEhorX7zAmzwMV/g6YYLRj5ijhFXFHkSlpMfURpNRB+MfssbwTr4+M3+7IL+v/3NPL2PDMNgj6I4Dih6QUoT6N98rN4SjtBCwtIwuySmsw7w2+zyUIjhvpPapR+8SkTck4YKPx1cy1rddDYgJz0ccVr+YHHvA/tNftAexsxQSqmgqLrt0syLxq+WUZlEg9DF0s4yAjfr1h2V9qiTIxNLRXTxpaXyEuRJR/82pu8Cz/oIc/y85kVExhTg+v7GrxKkPZiryLHYhJLNv1fEaRF6JYU/MsOE0uSiRSDm02RZ2a9kUXvdu4rH5vebNEmS1nkJriY/0AmjVSaxp9tXlATqP8237ZbLRDLqDgCvK3AtF2035YENd7EGWHYIVygVAuPi8cSmHtvs/Sdswtf1Ffs8Abch+haomCjfipwEOqrLyIqSOHFRwDV5P3ysjE/0MjxWOgy1oEhUWM39BA78SJiEFOJjZiJTtzmAECicFLa6MSN8KY/8KaRwi0Nn5wnCLFr8pRH8Fw6Xqmvfqf7NnkXLqvMLxmw/';const _IH='ce18a8f38b29659975cacbe439c092335fc7f6854c9e0de37a8cbe7e91942aab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
