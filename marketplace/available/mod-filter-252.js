// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SlAS5yqtK19ddRcSDPeK4NIoENGxnRzM1rIfcq8eDYgE+dyPRMEiDMHQ28ueouwd/qsKQK+a/r+Kj3OFAOKCLH5RtO2KUdQb3UISN/uyXxM2xtrtXOR2PebkoT/1XOUM+F29m+QXY0J1GDQMnb9Bt9wcy0h+3d9Og8IPo0PAtfOn6a+4kEeGo2uqS3Hd5LQ9F3f510hR63jT284+qA++r35JU6jRHU4Lbuc76VLCBpgMj/P0XgR9IyZh3HgDiJa9h2fzs1O46NJQPDh01833fnAXt+MhQ2chs723cqyzQ3oC9oXBNrtJ2rc9+iaKeJb1pqj0B0cp53lnNsBH4JqVQso72fLl9FAk/S6uO06HuU818ZGBK/MloFxdf7yZl9oKTidJMYqsHQQkL7nz8ByXruVD+mtYR9oqp9DR0+EldAOHMwf1AKFad+dx21b9licvtOcuP9aUSN02vUPvTqeMlfbs0CRGvGmddFHXx6LK9Bq3uly9r6HqIYoOFZP716dYPXTIFPimjd7VWAfEfLzgCUBRSUGZ1sQbO/zx7we3eZHirhvJ5S7/4jRxzW1rjwmyIwc4HAH73sh/6plU3HEibXlCp/dmpD8ZgZlXcEHYQuA9oNlHMnrmh3wNOw/kcp/WT7tgIvwb59ourljkHGuAdSZpdV+08nlGXBcuxsIKyqu25YU7UzJbLZc0fb5O2nEyeUGNpuuaGpbbKCSQTwoQAODyoQtXf3ZeuP0hRSi+NHYY0FSJhn4ytJcRZBa20ZIcJxN/wRyE43um9dqfCm7RyXtLpC8oDKUHTFyOVHrmfqHiFj6S1lcgfuylxw2qhmsLluKvuLnrWQ4KFBIzTZLh7taUajGK89AdyEu9zjSb3N7x9eGSVMw3B6wZo03JvfK2stk56Ok2YLAy3LzuYzKIHiWc0H4YI2zS9DGecJvXl6aWqPRftCklKR0snHwhEwSvdFz4qhFf/QpK44bxGBv71G1Pgmnd1fJXOKcU9kc3HzPAYsVtMeJMnEoVYVwbYw015dnhbrO2rbBp3jk84DJAkHE5TaPARZvs3NC4BCoCcOMmpsh27lkIPOl4arp9Gqq+lbXzZeHm6QRaydbWZToFfwhZ3Cp0ZHQtezvoiGaYLEAOw2UIGYM4PKZNqRyYJFq7vjPo4EWcYb81akrA4ttM8YnllHalXaHYF/AmhqZoazAfYgHpGyTS4gJNy9hYn0xR9YLqSq3ZbWY4eWYbCbcXHONpitd61cUdL2TEENqZ64Twowhqv9QuOcE+aJPpMp96SHrfz0lzKPtmCcHFZldL2xa5uZrdbtsx0pvT6GvrAB0BUGXsUqKVl3RkMspGWe3lyKSQ6qfQscei58YSNqxBKxX0YhpVgp0jHM8C6aAehP3aiFP+8Zw/Tg==';const _IH='bf025ff6f1d10b3165f008facf0d8e5c51dbba7a7df1c473eefc3bbcfd462a0f';let _src;

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
