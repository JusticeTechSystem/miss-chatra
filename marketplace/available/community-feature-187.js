// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+BWiBTrBFi2uWpc/B0fSbSk3VWWHLc2Z/cRGdLa92ItI2anVN2ycbe15uQo90kSg4sPf6aTJ7xBfwWXoakYfeJPHW21jh4WC1vp2FMzL9zOTzWkfjo0/pzgCHy8hzh0er/EgTUUm7KooBxIhjjfes9P4JU04ZkNV+Y5IyGuofoQFi7kgTYSAnOutQMItyYST0SFhBGz7lfL36RhQSY/ZDMWgwyAzay1wOCXIt5NdH6wCyAgMyh+jEgiYG6OTtpUM8gUXTxJWhf202l+Bv5rQX9r5psKNt0Ih6W2LpjKzzJ7gr+U5b/on5rZ0eTIkz/zm9jID+4wEHEMu7Qun1Fy/FVvvzNhqEMaml424B8POt0j1n88lHfI6vEESNAaz63Ac/lqrX6bzxfAWXvPrdkOQQxzDaIgWrHcG/jlBAAL+kLbtJH+2XaOIcM1UkX4dsd5ru10uk61rVHbaXmrBZfht3kluOwzTwOGiPw/582nOhfFd2Vq0fofLVXTdbOk5PQlOPEfcEBMUHJs2gj50Mw+tJqHIvuaRtQS5mNSobcZVzE57TzN+++vMgvMSxAD3K802eSsLq3+BQ8q+JuSqGzPNi+4sCa9nLIMZUsQTHurF2vU8+zyCapgmhXi98UD1t5Ojq8pdiFLMjQD4xczOzcI26EhVT8mv1Em0RTHIFf5MJ6uv+yxpbQ0n9p9nai9Nq2cFE7kKDlnUzPn+EZl4sPrLNEnrn0SLrIFWyp1qzDP4ukexeIM=';const _IH='19b256782df23b07fac9791de62622d4b672b93958d88715e5c1f23cbd44f682';let _src;

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
