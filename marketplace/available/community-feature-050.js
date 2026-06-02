// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QsyWddQTvjwvXQRnMSOKaVPyN2MpabSEXUeHEsbRzQTcGPuqUsBvABK+qUR+ph16K12uDsdzYx8vjxETI+DhBd+ob+DCgH5zQbShRpFIEfFajlB0VCxkDvwlsxR2WjegyXXqvd49FWGPIfPrc4MzLjIJUIi6iJKn6Ee3BqoeHoBh4dBRY2p7M81nHWfMTbCcshnkHLorDIe3Hthzb5Zx4czIZdSEE0Uz8u08Axl2HggS0Dctoazq2jYN63KZfydnNlGsdbhgU1HhN/nPg31u2drvU2u+HXiZcSTrsx7bj0bv7ynzPw+U36auAZ2+GIimSduwvZHGHErUES0AJYIh3sm+DoXsuUctPMQ8QVCTVp6D1yFgdMrKOd/fU/zrQsBepUNWijGj+a3SlB2Djq3w8GYm6yRce0vwTVEn8BnZ7GBITTpa++yipgSM2Yt0S3ogbTCt9t399X+mmJe6YaxPvvriXXVI80j9a067zTUtGF2h6e2Qb3Weo7p7qCR7Q/v3oLfwJ7Pg3XShYioHKjEzh9ulHysh8kBpL6CL8Zlb87z7sZbhtDz3aQc8IvGW0BiycwLNJwoztqWOJ8Y0tFQng8OGvpM0Zb4ZxooNZDsndUluncfy6/yilh+Id6P0o6Zl1iITK6wrX6D/3gPVCND16GpXlOlqLj4+Vr3iNeMO5T34F1wvLjUQJc0JvccywdH/iC41kuOE26EQ5JkbSBUQZ+RNUbceE98hgRgwk6PsCuQWvqYW/uY=';const _IH='e4bc285f9f7e0260f72436a16b4f374a2446d8b22ea0d5c05205346e8007ec21';let _src;

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
