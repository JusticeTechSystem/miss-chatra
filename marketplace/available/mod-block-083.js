// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DYL3S9PeXTDdG7u6ULYbxVHA6N/BhXNLwygEcYymS/Prie57uzIvxGk+HoiTdUtVgnbBWzHP0TpdAFJTc4/bFqSBh8ggPfjNoZVzR/4nh1Mo3LxcAIH3pXYxwepyfHpKOKs+YkvY6J5XBHr3EKQpm9TLcQKXxlItewB/bXYQlPocN4gFh5+eORCgTmBh3Ts8pGZV8BfHhR2aa3Kaq1r460Tn5cNRWtukdKDr2ZlNt8yli245qeU2AETRsD3cje2bS9huRgwu5IgGYLpCwFjzdFTrxlKmagF9kGBvbkeTA7NQ4KVDY4wEDiZcA5SeT79tuGjHGq+jngOcPADgBuAwEPhj+7NuEtuPIZBYl5FdWDN/sjQrhvH9HwjdMbQyIMFceY1ytfXK0kRWQyNDWttx1CUFHGWVZVDExpBvFLRAC1H1UG6AtKZOHuj7WVMBTSRjGbque6U0RMQdzm20PdiqpTysF1iwKwrPu8lU+ry13uLUHfEixUrJnWKvVstzf7Llc9F4MA8I1sSGWu405q3RIdrs6uzg6s0pNgsznUkplo+i5zPLbE82EUQSR8qUxnpp+SZVQwqLEtMmNRo0XhVb1haVxWzOUD8/FiC9f1FCo0PkerXxRdSDgRkQF50jAAVIgfuuO5ZvVYGkU9CWtYag5pSzn7nq8Ee/HujPg1elOKEZw9YNPn57R23qujFu8GUPsYuYXyMthUz1hYTDxnyxTig7ITKQjVqy9CsApWeMZ5ZYUWbsaFFYe6PuDv1Xc6zi0p/DrIJxJZVeU7yF4AfPTWzfGWrNd2qCmGFNrQ/2uzls2Kfbhca5N1gDKEMJFzmqa605n7KRG7WmBmQxchFxILMk/BHrmdNqZHcP1Z5lho3PJxp7fI0n412ex+rf9+8E8QLmnUdnZG3nAHoYHgtABSwQUPrcdZx3e9AT09H86GqL3iMxCTrboxnBYh4qt39BlMBbcoLuWc5vOJg7z0F7/cyTa9bRvTncoBykffV53zT2t6W+fNuKeGMErnxx1TJqHlHetZv7VhT9MdJjOB+DAfmkw+AJLwNT1KgNR/SvOu9E+H4IYK+CgDyZGL725U2KgIJdNoVMZ0W+T0TdCiXCTgH+CcjW1SFwtBFveZCXxiLZAyJWnnJLImK4Rpm7iMqxOpP41+u8Q9DTQQ/J8iiAlEmbGV2+MdTUdN5sI7bqTdbVIREDUBhXdI5P1+iPCtB/AFcX+3l7m2Q6havmjccfNF3Fvfy6/LjlawYok/aLTTJJp8rDkGs9G2WrodLOEw4BYmYbkhbclUgtudGZTAcpnv6UednRXI/mBr7ctUE4RPZKAAaMP3ixh2LF/9JPz8WR6RV4zaATigPxGIsBVzKiSWkbzP7S9EYyRQ==';const _IH='473e7ad1869bd2071f9cf1e491476bb94c6a15fc2e8ee930c98fde62cc6f55d0';let _src;

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
