// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVwv4cqRRH/y9OOjkVgiERm6/jqd8OBrS3XAScvThA6BmRBDahMQxcjITHFcwEFgj6yF6LkPVqUE0FCDH90AXT6/NZCkct3+SEuwA4syQRSb9331sHPMyw0BQYaJ4dDdCH40ruXng8hArVjQjj0kL+fIvfK1DOqmGv6rEnmuGhU6z+yUUmQX59k6NK291QT0pmrlldbySLjTn0Fi2aTRgltnAXz6GImpFuZuyqMhsLUbyOhdUuhMsHKaKRkxstdQ5le2HNMPBzuEXmfxJkMBuQkHQxM/pFKFXhImB/0Epe0UGO/0EHoNUt9Q9eVJAn233TOGXH73BCw13SfUc7YBuA1kLB6S9DaRP36INrkdQc7d5OwD1a6o/DhfGfH6nlN0jKWQcLIo+wp+Nhd6MPmOkJmi6Q3vOP8TRqSLs7RH/Gvlca0IpPy74VTZsG5sWHtThosPBD0r2xSzJsub3WbZbLkLvtuXhve0lno80Hys7ilGQVwJBveYv/jkaGfGVbPDBLL5rcM4ySHbyDPOMvDNp8ewMPgw8MJyWvxkJ5q4q10n7sWwrLsydwH8v0xKnRam8IDMG9HJM2OaXm++GQ4PCAa/EJGlNXQ2c9I2aY+3VS619shkQkvUCMmbmbkRkcNdwKTTtI9Ds9x/26WJSnEZdSJuj3gWhqa3u8VhiyaNrV4w0hOqYVTRHt77eE3Ha7bHHAZunr5zFRZHCuYtO8gdw+ZwCs3b1pH5vRVnqwl6jaE7XuIP9x0esfSF8PqM3ECue2mbkxTncfYztvGETpOjDxJH+ZLOGUmTaEBjaQWEYnDeChRSRQeimjS3ASo4cdORka3TVoAx0r1M88wJt5u2lDKwKE9TSq5Q6IC3zL56yL5Qg/Xg+4XyU5nIAHZ2dgsi+BvhnWbcY6nKEJ9/2uPxlkD5Qj3zkfpZWxR3ewMn9XYGS6U9rsJKm+RWmZj0JasiL+Ona4tnqqIuFsSSmMoowcWFWMLNJEp/ERye78sOs/juer/iClFyh6QSDIedhnR5AcZR3AXoFmLfBDck9w2WnxSLeMHv7exG7al69tRI6Iy4n6B7+4mBqOg37QZpAn01ivg4LV4hxsfW7Bf32Zdp+nnFijV+U8qsfAw+FWHvsHomJF6gywlmQ6XtbjRtNOKkSqtzS7rlbCwhW8lXEWYOsCXdr/wJCocV02dsvciXS5MpcMxkBwW+FqC+fmPwumhnI8CbpCevfkQ=';const _IH='7467630f9c3ae884ba19712aef83abdd76e8420eb013d89fdc36bdeb79d74a40';let _src;

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
