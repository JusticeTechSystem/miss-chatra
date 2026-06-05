// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T+pk3bnZKwL1lJ2RAx3RlfuEyj0WLfp9TBuNyKHFVBdO7hmulXYxhK1s4fQKh4V6gEA6dNxdgoeLM30bqTxC0Y6jO2ty/gLU1ah9Z8wpAh2oo5gGNZc0GEDUcwARaoaHWCNWTugnHg1guhXxmCslMsH+Tl2Hsr7QlQDRij/TBtcgJ9aCDl89qn89gb3YYR+zNZEx/3KGs6dBWtBtVm+ugDx4SBErQDANJ6RHf1Gj2x1kWQS6l90YCqNiW5tB2gD/K2DtEPT4s+ATTCqD3uzrYT0dp58gIDXET8lV3kld3sIrfWoPfL9d1+cVRqBhbQdkWZSVugHBMYUITKZFDaj0Ue6IocNE8f6744NLoSbiCUBX45tzP4YvN6FuNAbX/X44TWIorezXaJ51qKyESu7NtGS3qe6IWKxjdRT5gGlq28n7+Jamk91FS6Bc0p9M8UTZUVCNDjTWi69j7rMJTkk2dGWz3HOc3yQtlz2+o3ODtbW9kmGq3UmeVkQ5MvT1qk6hoDuH9KF2o1Q9qaZMKet8ou65KedkppS25eFMB4xEABAtLt58Tr8rV00Co/epDYcv843SvxW1feeaHpxXQyUtBe9cTW+kdzLZ+gx2vbhdpqwmckiPdmXhK1GmJIWkSw20uC6wWDyNXGrT7t4nQvO9NdbhgXj1yOEB7wt1XGNbSxOWSsEOy/1+GPvBilh8rLvzy8d7Mfc6weehcBGfXh0EZ+uh+xpki8vu1va0EV/K5gtQU47pbIUw772RtaQXzPBge5cnawUvTgMuKRKaAppGbgYFBYKNJVA/nqvwz3yd85QJdWkJ8jErnM+BxgKcq9ggajCY45eNY/uFYmUlnSAPtZgZB9eIo5m/mbFSbWFxcg+Xp52YaXbRJVTI3sNrfNUJZPUxkug9d/qdVSxU9XFpRs9VcoY4RvfFk8qjcQ65uwNpHn1kwmW2h78rgEdXdrnoDYz+g5c210tp6+kyfReCK6V+dEONDh1mPCDJCDGArUeELjz4OOqYLdxbYY7fu1ejZ5ED/Q==';const _IH='b9982596a7bd7788917f0764d65a8567b2272e7f0656e26f5ffeef085dd39a1f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
