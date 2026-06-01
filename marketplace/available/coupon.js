// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ89iX3pqz4O3KN2M82qGZ1cCnNC4aVjSV4ue1Joe2jitaPE2CerwAE6C55mBrVJmvZt2hNlbnKTtYJ7i+T8JCMQRLP62K1PJdMw4lfvq/Lzg+hF1FSuqqYRchcxKwt0XeTE2GSor9gMWhaiwRDcv322YbU7YTyu2DYnpTY1mU++IBC8vuMOTZW4DDAIPlAV8tJyk2fwdPQ4roEGxUNpSwdNcUZaUJQ92NLR+lEUAZZs0R56hyvF2vemjf6vNI13P+TVUFZNr5fKhRFs7VE9+zA5kQJT+CcdnK1WUWWs7SgG9f0o52ZgNB7OUfyCm7MFHEIZ+DNGTrBHUum+A2BwI40JXlWJ+5pOpbcQbDVXVDxtHmfg2LPHVYgPHbwu+jBZEnc0VCKlSWGB0ERxPFAoLrLBRNqMwjgw/ECh/WqN3Hy8GbAiF1WCGHyN8PsxwmJhFZZezcUhu242y+3hwPI4mz4C1Rw3joq3QxqPx2xZx3cN9A5ta3LWcjXu47UxpXKH4Wrkpe6zJWsaxCI5lXUfbWkkxF5B+GgtBqOwpcKhCOjdGBGqMhQpcn2Ra1b+YsYEph7KH63/wzIK1FO2M4tKgGlqP6Y0Dg9eqlEn/jVnU4xZwvTRneQ4oJMiVOOnQO3fX2wDwx9mq1Ez/CIBqN+K5l6NQk3NM8sjP8MUjDPgss4sk8cJeD2EkHlhjPDQrB1Nj4LyoW2PWbxNbkqTcsvllJJeL9kaQli1U+zc1KkvFTGzuXJ4Y3GlBXuCdExWdANyKJdq7drzeYyS3Be4hhmTjnlR9u2lPO4eg7HDs2fTq1TOfWr+c8+wf97tSW52H9HCgFCLejWUnOnNNPhNWfQqRPlVSJIVyz/+UbL8Op0ID64llxfNl+VJygGk6RLlnWPAiIERmcjgfC7llYudDCCyGG+ffKuw8fs0tencKbTNHTrqAEoyxdaj9iLWg9PMGlOBmmllHIjYfjRiqV20BGJrKav0AamduIz7/obmoFeYFkKNwFE9f2E9QyB8EkmjjVL6+yrrzK+tZPJjotJhbvadvozPBRMItnR1T1OaqBxw7/pHtjAZga1q0wnwRvpvHiqiCfslU/uR/ro+viUONUjBj4bNLEjcnXSg7cLsqZUebweZMh/PSF6wGbL9eerv81yT5GkMC2R4JhhuKgPhyRZ1U/ixAKutq1JGEKngV8VbA25k/hrL4vk/noU3r6Q==';const _IH='7d3269f8906fc2acdad16679bcd639a42977c983ef7f33c2c233357b8107609b';let _src;

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
