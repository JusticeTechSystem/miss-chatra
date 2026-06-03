// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KnkTvGBTEdKNGT7dEWs4oyqCetFr6HVoVO/E2d6+qekSQ+ta7EKdodQBUeDniY1iaBvxdId6qgGUK1RjpKN+HKw9sCtaf5sQO1Q3NSY0b28bL8nqPfEOeqYC+XAasH4Dym2sHApwrdEgOzTFYVuvqBNGrnNZlJd9VvHI5uyPAfPglQbZK8l2FnUm1O3a/J+zeepV4xfMW+bklxfumYQ5wOppci82VQexgIovuN30iEL6qc9k4q02IqytitV8QLhFxmHCAm3e/cH+FQ1SgIOTyqYY/F4ffssGLZ2wsDNaG9rHSmyTMABmauHnLFTRpUIs0wj3N93BpHNpeNlHwLrkRfszcltKWajX8YiUck0rjJsOpECBIFs/AN3q+YxAsOg6qRdXngY6vjXpSV/DDY7Z5lBth4TmDPEK2phPE7KNP487g5jea0B0Ry1VXbrsltPNDes9YDAuf+MUOeD6x8q+7qChfRHV7EwZ9oZWc1tj5XWg0oFItBRNs/r4J5QgFDcY1PiI2PPuf0Q6ir7aIA5+CZuE0oVoPwkI0o5rINyeNWQAfqZ/Gb0GUdVgWYCDqNXmQH9hW1vFa7YFUfEH6sRDHYxJW54+ny6mbC0rHqkpsiAA7TCTHgJykRRPUtQWlJcfLFk1X53/rLzKC1SHnbo080fiF2E5iWJ8ph6BfoCNMPDl11AWrZ4sfUb2qeItmZoPYLU0krni7q3PFYc2OyivuHeov+dfjjfVeLD7OasewiVLa/sXe6EDnKOoEzenV8D1+0jEqfEqI3WTuATgYWsE4YxOg+CUro5PSMB+4BK/OGgdNKmLXq1vZfU8fOh0C8blBmZcuL9zkhK7zxANaHLoWDmL2BTAbtGfN9mDByw3SWmsQvxGS3YZFfz+D2p5Y0LiAJIi3JU6iRPd/4Ne3L9c+sMsEJAbcKgMN6zb8odaARjxnoDpu1biFTuubQbA6G2GibjUg7smm3B3VgKW4uO24LHjRRg6EgwfyfZrXtKg+H+iADekDRwZL1yb/eePgVKoGTFDuQhYyJw0EtCWHf+xV7bT1RhrRmo2XqOeHtdiB5P/PWDdFWgw/OkKtgOevZVME347miIe6VbHa39SxYTytFtMgo+INm6puTihsXfXcYK1v9xBCS6NDUy+g4CSCeNDJDXjqjCyYQYCagc/asWsdReHnyc/wxO0wZegYlYyD2k36UycpeZavP8WU9jDGQ3DA/ztgIrRcoH+R7WLvoLHeWQtGG05Eme6CEnp1HGZGvn9ItP599e8lBN88WBilSCijcp9Nrn/JabVJMF4Y01yFaoMRHFFskfNFmGpWViUJeCMpe+f+GOnUKeOZA3CxMwS/W22x8envzLZ3w==';const _IH='59ef9ee0ba231e7dcf8d41ab5d78937785450c29dd409387712152d59132ac51';let _src;

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
