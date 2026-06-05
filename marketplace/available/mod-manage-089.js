// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NV+/kAgmvQSIweIuC6815oRp14SKWWOBBrcfW/h9Fj2RnOHu5HG4gzYKZq2wCfNELFrlQqFSBf39YjK49wtO0+picWbhYA6IhZ83t1OuZKqbPTnkYZdSM4lGjzamh2ugnxA4NPeOgIAeAGKtJk+VlAq0TzOsel5HXTKzg9+8AieSqROHL3umBQZcBmtgJ7/6xcqfMWfWGiPb9sOjDwN6OFmAwuyH5wB0Fut8TEgW5z9Azl3accX5xvPzjD8Qiirce4ZyO3DUvAJFnJPvCltKssreyPy14x4orsOAs+L/uxLmUaDCBbfAc3E9VVHQ0/zmaAa4soR5z0V1vy/TsWhy9wBrD4d6sok/9iSJCIkv0WlFLFHJXd5GJHbYIAByP8/ulcssYaRFcXCgRB+5qxU1z5cWflkUk75JYHu6f4vCU73iqE0Ss0fOCnPhlNdzUlHjOy6jVDsgpe7LU3/ttdhngOUcuMmhMFFLP7mbfstpWPeWqjI+50WifSY6Qhri/7wAGr2jjcqdhZEmDjdNWjMugtNTiUkDcBJHhN8AwCPBJHunht1TK+EekAKjXku/XtKUpLShresWAFqWmYvDGQn8SPGKvjfmGrTUyQgE/ErCShzViOxBimJPp/gCYJ0lw/XryzEW2S8VIFkG6fEbdu8cm99DS/G5GWpjY0nyg7BjNLQrACqOunU+5LWLuAOxDvK/hvKcKt9w+WaipYVwZ/NOmXM0UCQwnz/KxObmXAHALmS4M/ibQiUvKcb8JpXGLSksNg4H6gI2NbntEAjPFfJ8+IPvSBSnVByrf/fF/Gu+53FaONrqTieSNgHizyLF39WRmLNrT8UZu98pX8clmQ4XwLvsqNJX5Lk58Npy5kaVfs1LGHtIrCxGmfBOkc0LbxQVmk3kpMAP8vry5EAVDuQ+GPHkpodQ9uldKv4jeeT0FMP9kq10D30Rzsb3gIyyWTFC6/sscfz+wVnx9yjl7qaZa1lr+SfK/rXaEgY1zNy0FfpMyXWSuFMkOOwkuGrmEZr57fhemoXgkVelJ1ONWMaNnyvHVaCDHD/pdYeJgmU5IJbA2pgNeunCB9qdzVxL6N1Gh1UWy5XqY28w2jNoLuYECg5UudYzJ6ctZ9adEJladg5vlKUonqIXXW6QVTeszwLGpHaoyWPRZYD5Xq6/9E5G1ziZ9MFn9dwfdRwaeuRkdfLoC4IeW+RLdxv4Hdw86RryWIGLEyZHiueWR6P2XKY9NWXhgZTVUKMjPMUsbIP5gUXSj7KhW/YWhksRGFHBQYdu/jEc18ohFJiQO49G2HGik5pqdMnBZhwpyhKl0R291GKzZo1ORmthXouMl6carJYAmRvhnJZFSXQxAdHT6yDLePWiaL9eEdG9Lcv0XjOd73TcZo=';const _IH='bcc787c90340ea718a91dbce375380eb9a7b7db0f08ab5f2b16bda9c58d8e386';let _src;

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
