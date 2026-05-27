// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2j76/9I7hEA0zp3f2soO1QAri23MfPudovlDTOZQt6I5yUpZ26C+MmrRcg+VESM0Y/p/Be3wFyc8HOFmy+IWbqTGePTiYThxVBuuFv+3j3ZVT+qsgPlQyBH49B7GpwFKAWot8QClNIr7S3xt9QmbHqXPT/mzVrGQfcJ2FWOUCd7LU7Daa+qH3fU08axR5y0UqF8Tiiht13KcjRkB6BNrIxqLsH7C0RFXRr3m4OWqf2HBVX2K0iUOwESjT1TzhWJYJNky8TjMOtaOWM6Fo3wreO3/PhKc39WgGq1EAK6+6T4bCHOXAI95L3Z0ET8DpCt1dk8FSjnXNcGFwlm6emPBTPcJWmi2wqmSvuMuY2T7Y6X8JerwUdju/A/ozLny5vqT3MmJO2pV64Jg8TcK7k84+S+QQg+lZkfDsmUs/Ooz5ZUCiv4wCrtscJZucDhAnxgT6Kt4KE+PuuUNIKZD7ZESCzupNxWu5DIj0nnXpzK1kuxSpn+JUuoW5jsjIP6eO3EgGuXKWQ4ujMO+IwhMQEoNhJ/gsmRozc/xjnE32LFxRzVkDnVEa5VLyQ1WDFcVSNyQo7CMYaB/izylhdkQRjG+9HQ0MLDl/DYxIlb3olCGhUrGEoAxrXkpubBs988x7qOESUty4LtCdcrmc7vbqH1UaTD8i4kDxawPKeSwoSWb+ObqsPF5Yp5uJEpUq8gDYznfoecqOzbUUAOXxWI0meW5vP7JhPdp/jzBWWWJ+qmcnBBvdnsUn16YV+M61bwWYA30Jl0465/JacDK7Ppkzo3GzIm05apEXQRBJq7rZqDvEiTj/yPynwiYFIePSGQF5PQ3N38WkXHAJvsCFcwIuar9pfqbddAHlf0kem/+S/vBm+FjAUNOE8Rm6ttnfdDVV9TDJry0VXreM7RVVD0U8+ooqJj7oN91iv61nQHd0s//Y9EXhoSiKZXxd+bRZiYAwjC7+d0fATUNT8+Q/tp6CwO8sibj/wBGsQSyxWo/AV16PFBp9dXQnY97FIwn6lIFfXWh6GQDMwnadCY=';const _IH='9e2e6b1e86cac2d176bfb943d9a7b70b49aa64eff8fdef012562488c0b98d004';let _src;

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
