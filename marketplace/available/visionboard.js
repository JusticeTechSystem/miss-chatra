// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2vQRTb/FT9ugQKDpTtsq66lM0aPNQ1Om3xs/VAN0xCb8FRhHYQbovBRJDiV02qoGT5wrQ/RviZ0nC9qn6+3SG7f7LE+XbpxxtoJWt/IzTME8pt1kMXV4d6OEsB8FYS7shpeToiGXewZgplXQgwN+dsNNmdKLSyJUxaUCKiQOvNXCxlpzrBKYHNxhs3iqr3dp0lPmYH/yRtTUt/1y4Kxu04OLwFYMGouZlejj5sY/Hi6gzDRlcmzNZvvNyJO/CtAsPaduW47Ia39K2lex2KYWJXUqrOVTm4SG/nhD5jUPfCE2ilwaFJXhqwtpK0/FbyCbNH2lvj6g21U8Vmn6yuPi5z4FIumKcOriifvIIcoNLAiQah7Rjy3Dtfs8ftcncLkKRZ6S4wqdd+ttWSWj1RaaptZbeEYAz2MdNtGt6ggsG4oE/B61TP+LdQm2l8FTTCy2foIoTJBEabOHQgPIXPVKw5DB48LRntBZL77Swxt7RVoUb7Iq/E40WkWMSFd8z3Ww2LwJkaMgmk2TvjZqugRSeHqNRm1B33NR9BwfKAKiYnmUjhyyIXUbp8UJQcX/xN5R9oSkOdH6C2m3Ky2shkN1NK3FU+hrIx6JLnUSdxm5OFjiBJovgtAJVNZSw39e776AZt87YoJPgRyUvbHQO9pM5oqJbU+AkrZEiWT+OkAaTj8va320XtROoAFxKHUlRweV/EECdin0TdZjpajL+IiBYNg0l2WzbcNQK5fzmSxTvg1Ii9t61l4Ubj1fJh2aomZi4Y/aUqN+lrTBMQ8Mk932vidki5AkPR02joQ8g76YI44iVdN5Du8q4W4xGhCzWGC7xIyszM2WvsYx3p4iAIupi87bBbVMQ/gK3UPU/TW1GYP0OZ/qj8fZZtY7w3cYdIQhNGAcjdhjX+YIUrNKgQyBEBrMIBVIbts+35ybE1lWdTn4f1e3FwYkSmCmMSjaAy/tLVN+zGdu6nD31ND1xLoV0hKTbuqtIIEMiavmALicSeXZonjBRaBF5nS/R98EJcYmQhy64e6wFv+ljZF1bMOZaKC60bq/cEfaeo8NDun4RNrLWJ2uNSnm0dEeUB6u7KDTanXmMFSTALBgF/MRCI+tsAgDCFMgj+h4beBRAcEhC3MlZavZ9DTb/PakN+txh3jucN6/BUus9ukkTHSlo2cRFD1MKBv8Y5+9wdVn+fOmDYCFWsUqwrc1eMNQhpPPjSxG/1VD';const _IH='7ffc7f943056b2aaa3f0b68c648353713d4a6844eced90d92cf9abfbede72e4c';let _src;

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
