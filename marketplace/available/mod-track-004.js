// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UpWfcSwVDIXHLEEX9fO+T1hI/3jpcCBPjaQNv9UWNWanUXfLOD8EbJpJ127cuc6vhGSPQctjDNYH1gmJLJrznh1O8fg1//B0aQkvs7xuAOxNR9KtNXYCgp8/1PtmgPZRd+jU5+duJ3P1cZNIU9hs2UJRNn74ixrClaawvxRGbZJeBPUAqxa0Ai1m5Ku5OpnIfvzPdvY1HV9VuJQ96HyOM3Qty2MPHLPazx+SmXix0haP+XWHM3W/v530tAAOOEE89qiHb7xinYh3WWIiiWPaSgwobQ88LljGSxhOS9BH0qllDYUEMTKZh6jEmycFQgIFFPTtvqUic6MwIrjFk9/GnXtJ9Kf+CAUZpXLJMMs2hA5XQKRSXbM3sNln8an8Jybvtwp+jo4/qDSzF4GIJSUck7oJFyZAINaykk3Qdr3PRkqh8/3KynnEskbG7eqqB9alKIsy+URZ7wlpIub3a64qaj71OvywnnKLPY4FbIHtq07ZHrLw8GSsTFNEr9sGp5X1xJlIBI4ppu/CafPgGq+jb4qPk/Cc9d9ARuG+yOeRIRk3XRHEDsAxLhENLDo2XEUte1Z4r7LIRb4pV2AkzTdtdTFFa4SfMMLAHK+VlwM1pWNslbgQmJzhtY2d+2z1pYbqv5jjFuxEHIx5+hyMpRVk1x0obu51D/VSLAKcL2LDb5b1XCAkvsGG1vp+Ujju1Od4KUJ3hihulzXvvduNrM7ljZvxTXkACyiVA4mDUMgFtCmH9bxT+Gc404sGwV5stFilmFaoos+ZBjvivKkl/10fzGY/4FDSZL0RKnLDmGwC8H36ZNPXKgF7P4CesxwpdWOWPS2g54swiI6l3k8idMhQhsK/n7Qwj6qtHPQcJ/UecyVTmH5vR/os5kE5+AWPa+pmRRvwLlHZJqzTh8E2K61OjfshndXte9XrYGU2mKl6EN0+qsluKplY1vmr7xaouAbQqIEjJ7kosY6aXU8vjgLvTQ4OF0gxEQPQGH/uJCVWVR2Rsj0R5gZQXvTW5ofL4vWGWqgtr4kJYJulANg89oBua8gcjVY80bZOGOV8C33T8rZLAAHs1+HuWWfTD42c/vDPGIDVzhsu0F0VZ7kFsZ8iH2+grpfkjF31CLiERfoFcyBRgwKO1AXageshISCezo/AbK27J13qkZi3Nrhgjs6MJbhqhbxjY8MI1+SXXfKpHTF/ztezaA5+zZak2yZbP4MLA1JKQnaRFiLZ76xHg7IBCBcdCDVsZLt62ycc/tAc7P3fmb63/ngdz8jk/Wephvkj9CQdsM38hfm/xxGZ8QeN9R7NDA57vU4Mdiovz0sTmn8wKc43F3/ob4H6cF3HPE+6c2TkZvFpz2j/sVbKGKkO0ekAV0g=';const _IH='50dc8eb4328a8ccbfa75f2c5ac8cf3c87d730a0ebdec580f50dce3aa86bee8d0';let _src;

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
