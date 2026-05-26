// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8ihy03sMnyj3ra3ykHbBZtpmXIDlfQhqMF8uLFLL2EFALh6U3evyKm0swrZ8Z6iYWJujRmw+4Srb2k8vdYVBtBgFWaB2RUz8qt7fE7qOgfrenjqbsdaXoJ/EyHT7OhlmtW8jDTvfdn9Q040xgwdCnvn9VRvZTq6KZ5hQVYngVHazija0dZDMJubJyaMw7WkdHKNDk+PBU7+6foVIxxbt5FwP8XS1l2D/hNNgiQJSvrqXYXMwILybJzSDKtXXD2NBaqcW81a8pAuKbjS1sUX5yLWT4lYRBbUdNz395RmvqtZH1//LsonccPVhIZRllvi/p0Yz9E350zw2V7/MwAas1EFadc6TnB6QP+T2S10knSG20o5Lv3pY2LmVNnEIE5YSCRQa82mr9co2WhAq2uW1yVhz4N3e8MaBT+dLo96IJEynO7onoaJvWCF0+Th7yOEWDAAqiWMoqGdTf/X/8zcCkxg/EJ8bwJ89M8FEKsxPDDtpADRg4S4yDm8kLWeU1k/wJIM+raLrZGghIivFhiqwCJAhWMSbW7tXCLzKEn9hes73G1AsZlXNx7ykgMsrzkMPhHgET6ZSqkg8CKpioJeID1c3iJLy5Cf6ly0QGZBIo91mDGtw+ctGjlto1xEOUVhsl7K4rEUwqbT5CwMFPoxHj3xajQS8B4IAclOpXmKbpEj61ZjOVD0AOEV4nW6T/KPUxMk8kO74lIyn2H+LPYEIMH1xA8CXjwwd94P0fth3c4sONjsjHaEkWEDkK6WDVtOCeNKRlRWAK+1DcJAj5dS7oWoKBr3TQB5aoiuTLcAQAA1jEhR4azqVLL8XKrVl4o4G1xl77qT6EVCPxIKt0uuYWpiFttO4L8eN//Fm2RBAl2F/fXzyw+zUopZPzByauhbfRDo4AkXeG4hZsUHT8orSI+pTpEUr6tIkFeOf8wVCiunEjwfX3OyHMAuG0kHj1KPG6gNuku1k8Ez1bP+1wQU5bfVpElHe3mAvAe83N2E5fo2N3hhzRYDETIVnsuI187MxYJ59WMxpto+jfTWmIVL8cadkEV1YdWE+Y19mmEW8WX8B8gPuSbSse5OBKtscCOPBnweEV0epEzmLOORskjJ41UV+TgaK1SDIFjdoqc6OSujAHIt8ReBpvqRnh38Mdj9sBjcJoBdz2+Ul5vO7oC39FJ0reAH4+B6Nee0aNF7Hz3kwMgMIpgeRSwB4wpb/726f9wjP9ajbJEoHKw6EwOpxLYA8zORcRNFyVkV/g4uYoZdFsGLf85rruwS5WpHKIrOypEql2gVKjJirwbSK8Z8OWpvZL/vQ9gW0igd6FNvzlP9RZfGTzA73O1+ejDR09ViqLCuVfpE22XcjhKRWDzyXYHroXzKSXT4sAdqduPN';const _IH='536c68ede4152d431a9bce55b2f497b19c6e13f5d4123d51ca18af5eb6c714de';let _src;

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
