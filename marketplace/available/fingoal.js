// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QnuSDbiPaoyvG+mH+CNZYaDxqLnKADOSRRxo4+uPcV7XHUPKOK/D38la7gVvbiWAkdbtp2WCWDwDAH4XtP3x8Enw4r5eoUl4D+CAGw8yNNAocJNLsnt3CatLiGh5H2fs7OE1Nv9wwfYci8EDjVz834gaU77h1APeOhJv3YtLfm1Cx/nO/DjHNLgHGUatHRNl0m8pNz8H2GAGBib9yfqDIayLd/Qy1/Ch5X+ap3zhrxa+V4al0CgbRvLBCSG2OMpREv0fkc2PjJw1c4ersCnOT8g9wMpMzou3rowNjYlhUNaMwh/lkUPsMkpttxY7ZfYWFSq1UySkT8v2k9iFfQW0AJ7aNVNvXFwr7rNK+/xq8T1RdP4SWSZTAKcs91dCBdWVVfQJlkq8oMww1Xy5qreEOXdNo9DBFhZf8XsXfjilPdozp3VV11t1SEoVHkuTdb2n2PRO+PmBnOaoNZgiXdLgGT6lZ+7dSDIkdOmjecpxhSJwrZHbt5uITn/gokm7Z5RgQaQKgN/nn5OhXaCLRqwrkFpc8Xsjw74B8DeobFZtJzMOxeRtalMaZPxba4qWFBWjU3tymopRdgnd9KyxW/rSdR6c4PsufR3MEQncfmhCTWngxXBBK2zH+WDc1DfINYenBwPbTDWiKPRdR5c4FO+8w2eYmJNOtT9YYocJ6pFhc5H7hub0T850VlBLWYOyEUy6tMLNGxNfhttDNeORB1J+VD7S9ARZdFKfiHNz5mJXW+b+FpuV8q6utsa/JbQPTwmpPUdhU0L6f11VOqx9mdoT086TCUl+IDvY/iTvYaUOagokfM26/Tt2/iNi5AwFUbA/OLhcGezlYQ0Upb2B67sYKSJTsv7xHVxmTveGcTAHcdW3YTlh72GbE4Pb+St6aFprTy7H1t0aDer2tr8FWyv00R7Ybt3sKnfJsrRyGzoPINhsEgYdVFC531wjm3HfzJKmu9HDEiI73ljTqj5ScKHAA/+9GInaQUQsI1iYuvXistv4cqX1Ouviv74EguETlRNJzyH94YkeZGCCuyCQBGzFd50mD9mAUUIxWeb1/2BlPMiZAxMQdSqaNbZCxnSdggmyKCsmdyVZoGeEwfXIR3JH00hvWFXpdGCyuhDCydsaXkl1hP1x60FIK88qiTFW4VGmPjt2JaHcBYWynhV+Ijs8yx3+LDSMuZjtgVfgzvq0lOExyJo8p/fTbSGtdLuA79WGeSE=';const _IH='af9572d3463148cfe4ae91ffe7a00ddb5d914394f24252fb00022940aadf6636';let _src;

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
