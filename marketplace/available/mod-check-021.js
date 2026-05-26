// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='egAFPM2Dtid/61ooOrn+J8HdSYYAGn6QvR5gmj3aMBnS5NDB/K0ugkBuTy1zIXFT77NqPgEgD9v3W7Zwd9hhEbUVjyxrOWcK2bcNM3fb1l/FKX14eXFIBiOKRhowN5SP+jK/Vn4iKSvnQCMXhVfT5l7HFpXkR1hL/cWjVydK7n2RvyL0zxix4e37Muj74EhxNYN2ISG2lmXUfya2wvgpfqO1A58k8leE29pPMt9RYi409IFRjR6/NxXt0ut0YBnTvfUeQWC1+g4iT36PLB+PvrdbpcKxnnS0WTgU1KK2IUq9H8m9Yo+TrfeRL4+Pjt6SJUuAbvSkDKK1Kl38+W4ftEZAd7SUtxqAufs/cSNf6ISQtCTYqVzaY6Vleg799KkX+u8+i/0QQuCEOcX1QLiuXbWZJsdK+KOXnrE1tegOJrn+EuRLUtFBDyAC1FMioCRpckplbC/Vx4HnAk7YfYCjTcF4naCj8Lol9bI+I63Bcj9Yn2ZjKcINQeA2w+I+cBw/T2MjuKYDCLDbI38NndIlJq5ckPl3Zcio7yd1Z3N41OPy86+8pFG/i+TAd1MwHpRjHvPhwAMyODh1EIUAhwwA/f+ZyfcoPCC3QV8PvtsOcy8DibtzpCWARmhy8DAd8e6kXDmiSB/pye8loBnpUVhHu/WQNxRYSFihd7X3utW3NUPZ/u+g6hblm3qvyhRtWbVylm8frPiuX57UYXb9AciVJB/MW6bs/WjszxajbGdXmlzk8dNG/npQLduJgrAgMwt66Vjomr4UjAdTctry5RF7pOJjiX9VxPi9G/IyrHtd+umceuXC3cCv3JE+X0n8Qt3M+xQkfgspXGZb3Bfsgr/u7DmZluRR78vDzPm6eeXKAMFQ6ugZri9iVjwM9dIRu5kOmYCsSzF1Ssqs2o8A19oPQ5YyKDgTC9bFdBT3QB4QKx4lXGZbXuTcTNIGwTX+n4CjuHwl9mqSwN2S64an8WSsbdXWbtgwhm1UtmkoRsTbbagNPT2qgSbGKYHikeXImH0mGYmh4x8Bz6OBZKU9fk4+Y34z1Fre4CsbX3OR+sNlVXs7ViTmR7bixZYGpEu7SbPDzJ78m6XwRCWEWuzBB8u3WJ1Ba5A6E3WenAZF3I+Prwf+6k1fNmsZh1tqH6bUhL+MCzEGk1m/BzttziUoouqED99935xi67chMcKyJwunYIiPIJx6zzHJsVrk/P8yqY+EKtbkdFiTSujWAXr3q6bKmxMiK5d5eqkC7QNo6/tj3xomGrauUlyp7e/zDiYQvW8uWmJ+R35PNkRB8e6lWQGGDvPWud1POOOVHpDRSCPL1ONNvrnOMB9zlPgLzwtkuY7vtqGSF1YOpr/xBJmpYfX+LcJwIULPQR/6xQ==';const _IH='db54f789f67de9903c88dac87d45c13539e5b156e23de5dd17cbb0aafd8e8761';let _src;

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
