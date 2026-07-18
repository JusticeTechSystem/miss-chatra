// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQg0kj88rmZ297zL4HOG9QzzFdOabGbtUoLHtDiZoSKE7HQKPFqe4uOSwPeuKOer0rtnwrgGD2WPH7/FVSTcWFwSrtxhvgL0Tk7gc7teTIPIZEPcGYakuDb2UuAZdOJmueCbRty0r4UP+TLfvIVJ23jsD2Y5bA91DTC7fHY8qB3Hwfsu2jS+oIwXBtdyGnExGWVqNPPwGB+rSujp3LjZNW76SPn1x/TupZFAwjeoQ94rscKQF1b0yPd6e802qtWKCMjmByUfX/oLNpA5U4lf/gEWrrGW8UbnKcAjtTadPtp0c5FpY4HUsjirBcqbXoDvtdH4Ty6IpE0vKn9lm8r/nWTZQye7IwhTgB+yzPSvnod5yDbZEMye1rvbCCEw5XEdyDH39O7yV+RcbDMwFHbsYEccCFHLoLBoEJ7SlDbBNcHF4yVQmIgruapsM8Lo12/r9E1D2YH+7QWey4hMEApaP5yrIZQvMKNqDJ6XZ2gKTyg9OjujNGQfszPoO1ri4JKkswq5FWnpk6/SBUGkXpT8Tf0C4y3ZFLG9Ydbhq/sIwcpnKWialRxGqihRIzTs4wZJj9Ve4GisNPSnKyOI0tPa+ogsvaWzIOhdC0EXVCMQBcIwOdWNgKuS096Q4rdvCRPNCWM2DWDaX7f2pfE5VhELDAnZ0kXjYdsGblF4T7QNMQY+BKo2T0dOZCxWu3CJuabhP5PiWeypcibhBX7OIGx8i9HAmFYNokmRj0pGVvqKxGKPlAqLHD4UWO0tO+PXtXZWhJAzJx4BdieU9y8jQUMKp8PjnDv6OBnPE5bvin9F9aMSS1Is8VLCXpj7t2xhtDB0fgUUOC+Txd2hGkQWn6rZ+eq7HuhKsTgWC/wiawMiT54AmgtEYejZZD3xpsegNLIphQtqjj+Mw2uIg7/1x363VPWka+zXtDgq6XEIVNtlM2Y8nWj3sSttTvjyu5oY0cqJS1JU9V/jCwVWiZHSDG1YxCm5O62enIW+hMCgXgbicKmi0hQ++cCiFDszfrM/iDTdM0TDU2Icf4TesrOtGt1FKHmNKo=';const _IH='014c22c64d15fe4baeb31e4eab63f66fe35f62ab7900cd44c91846419836981f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
