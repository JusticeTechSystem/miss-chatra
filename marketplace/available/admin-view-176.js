// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ouyTlgwP6HKSHlBxtQwAd3+ri4IzrxJ9LmhGogHt3MMYAOMFB8D2OrjLuig/ajEfezflitmjiRa7bCRbUpU8dsDqT/8GhzfFFZByeRcNNkBhmJYouak1BVn3kra5Cot4Xcb1DXihaq0wklpJlanzR90z4v65hHz2eMb9cA/MIQnpQzn3K6YPro23ZofZqxQnhfIS2T9TmUtgR6p22AgK8xo0NDarQn+WeSyRRNWDKr2G8lENdus0nEHwvsgzE/xcz3BNqJKCuJbN7urcpHXHHRcaXCLuavGgvNtAkAklBsaxr+NUm1vCeZSZTD680kNAGNykWJ54mgOhu4Zpp2UkfyEe4rlv7mSzjbGIMFCqDR0UJxIyg2od5JmMPcdEXRq8fhP45ETSsUblSycwrDMoSEWDtFWqZcrklsPnM7WsiUDYrHSf4s1FwxCvQRWM77N643G35NYyJediYRvNu2Jf1BK/q40KDcSc/qwuUSG8kVq8XEA31m0J8bYzawT8wOD9EuvFS6EvL3X8t3uluMh/KOl7mjXc0OWrdokqG0568klqQEAgs46LPHjqe6zIMJ0OqtY+OVypbOmh1ZjmBaRZtqXS4kItZ4iGS5mzZHZ0rPiP591sPsGzaQzOUQYzJM7aPKBOHocfVDRxI9k1MHxpCevRbzujo+WY6bflomSuPSuCi/Sskmanl6EY+3mXFh7vsaoxTVhc3oW+6xpF7Fo8lTFvWyVeQnWbRxF3ZSSoCspJ1hvCyzpCmqPGYaXhmHPF9GlTNwz+sY5l0d6UkQsztNR6wPmQVAesw1DfEiTLMFba+K6rjJifVQK2NQZ2pOs72V2DtzSnMJKrY68GuNp6+ue8X1ni4GMEMDn5pvHM08KFITJBxjWjsMEP+JpT4Ucdvp6NzQ3wHVR5GlJQpczbVk1uhyHXqm8kDuseNE6SmHkP44oSARFOQMd/Tt/or4kgNGM6FyXlTMze2YKNO+dZIBkzIEKdM4FmW2yfsWcCZoeVdUw=';const _IH='f03d0a9a326b91777b319286ffb42d7a64714bb89fad8b1a70cf3319d7a93491';let _src;

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
