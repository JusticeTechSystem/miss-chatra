// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u/Uxp8zJ1o6GIMJcxSnesJAB+Kdxv1V5lCJjeeW7RtwQ8a9C5pfMQLnmDMruaRNiXclnEudHoocHqfWq6r22pyz0whO3YUtPibY/uJ3ydB9py666EHFufMOpwbdv9ThAFcyFFAu+XyRdtptnJppy1XcH16NqxRkLg8fPpsyz9s2QrkIW15CXcGsTzWIXyS1QLwEd9myDRhONZbNHggCMpT+n5hp/GWZ7A3gFHqVs4xhP3s6+4xHQXrwmYvxF7r77Ya5P6NsFa//Kn4bQTyXHeqDvwP56gP89L7Bg+CrdbB+/2TPWUUaCMvYV6E9W3nVlP8BcrW3j7IaIJZ57dxqeqCIaC0g8Q9DWmdYK9o/IJwDqeXaGlLatTeotE/3PSW5iPTXILpjTxUJruXMoG7P/caEw1AlE1H9xmk2GYm1R6oqvhOooPpuOg3sNVSlmRuGFw5dmva21pB1FZ+ZJnWQL4ogTdiPZRWA0Mfl/pAbA+CDhp25pdqka9qHZ7iWtSiXGkWO3nxLjQxZ3N6/tbYU3BrR+MFdSA+NwXRJyUp0pmpJ+ylvyyyDXhvpM9F4prvwktJZ8/2+byU+QJ/MwqmNE55FKLNdq1aArVpIG2phfm3CFPhte/J1nowTHMJwcsFBnAcgz44QBEut5eAEy6opAX+CfJyusNdqFeSh+RSZUKEb+RdHMH2fD7B5thXuUIsPE6+wuk4U8Pet+KvUPVOD91Y9X+KHOcndPULzwjffkdDVLyC8Lm342T5BrOaqjCdZ1ZdGiYh5KYIiahuSQxoEh2C6fNnjRrdWWDgACBHMY42821ZU9uolTkf3eSye5S42eqwst5ZTZf9cB50c00knwD558/zS9/HKRFElWdhPcIN3B70Ij7CFNjmxPjXLyHj5KdY9xq/DjIj5AyfIVkHqhUPscbFXBy3aJcHoPwAuYGMXIpTuGAAp40wZjOofbgM1zG+Tq8j7TpDIwaNkN3gmHCXIgEhyY3GJV2UeVrcaDAhhBgNXtIoYh1isxEg9SLfS/pRJvVkM0heZy3PkjlmHfXo5LJQBc/fU7tJ5oWByI1LhXgX267TuptGfzwesJfCM9a42SjRSv72JCOf3T/DOK128g4VBo2xcIa5iIHAQhhQCiKafKm8rC02EwSFtSXlRwwvpI6INiaHSW9ey+XZZADWBKCUM9gNVb5JKZqL0NxANe4Hkzbouf2/IgwURs6b7bGRjib/N/APSzgwdyt7wNDGt/9Pw23CH8vf9+MeDh7xd/C49Bq/UrHb4Fwq82+A+At5gJdGrqm9qjSWATTtnUmeZVnUKEfJASLOTG/wuHp4gd0cA=';const _IH='6f281eea5a25623bcd61a71c0b62e1e65b3205b0286609eb30290a73a81aba8a';let _src;

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
