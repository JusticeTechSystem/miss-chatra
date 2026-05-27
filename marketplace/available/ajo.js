// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S0zpR5jB4SbxwItdwzRHtVD+uFSkXlz1cFEa+JcB5m9dnQmpO1jUtr6mZdczLPaS3ITj97/WO92ynKynNDFKyYhOTHqyEFKC7oUQ3bQ0+OElgu3PP4lwOLCbiDsEjhreXbaby0Oez5lAAHaXEaaAKYZ7ETeeh2Fp1/5xRx7MusPqWTzoGFFqRvGkpfdmJgozMFBwJ9F0Z8Bm8LSZooCfYOEZGErAMA9E4X0aou6dphWvUZIVW/67N/UE2lDBpZurIMeG7Sl5lcHasJEMurXWxLnj8rrIJukvSKjy+x8oxOKhwx88fwR7c9M8hsLql9mem/BZxzf1OKCmiFXyLL817+YDZQ2H2fKraOVLfloTVmnexaIIwNBK5mNrHrE9a5ccBTLi2FQVVI3JF/BwijVQZTlFXM0A7rrm4zGus5DWF+86EMYtGYeqkLurSgXnvLY+bn8pPouEGXkGaksOMw7mraIwFzkgaS7eWzz404dUkNdaAonCfK9S4wAL6/Ouxf5m6aeoUcJhZW28y3ic0VQ0BhzkhW9rJYfonhWCOstDaMta6QjzuOdffqG7viKkatwwL4hbhcgQJLlakUc/OMhaEgW9ncplsO3tw4vrd94OZBTs+tOuMuTYS9eZJGgBtiMae5B5Sc3rJ+2H0hQMtZCkA53YnnF6WoyuZvCegJtfxjNnE4nkRKf6n9Dei2Or9rhuE/ThdP/ipJUAgBt3rX5hXzgobT3jUVMl4OeBBtxjyWauoOsXUOPv61EuQLn7qE17dI9mBMVZ2q5BTksYXMtwBd1652mCsE0S3/35nZm26RM1Bn+4Xq5GwJJRWtbRV5eoouc/7uX5wINFC9RLr6YzRT9KMbtktowCukMYsOW2nKgCrIXcyDNuObLXbHokTgy7KyDV1vji6br/Xs8HA+8Yz3xggs87W+rR+vENZrPtbXX1YqYMepnJM80qayYSqmRUqQbE21uj2hEJtaIowblfByHv+74HufBriP6/SkohkYCl0nwS0Q8sy2DN3vwt0BX9fMstZq1IEb18gW3X547qwproQ0mYeapSjaYhKDZbV1yX5SQtwNihJUXSowbch1i7Q1MKQE9zCXz3Cac7kAYSK58OJfie6CV5pur5OQo1L+T+SHEcwo7QoTktkuITnLVYUdgMi24hfeRYwrx5xPyPnFSeJy+uv0SggnN5Bm/9qAc+0rTCnh4w';const _IH='7ec365ea14d5ef75aeefd099164324ae70c9787d4388aa5883938f5d93ae83f7';let _src;

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
