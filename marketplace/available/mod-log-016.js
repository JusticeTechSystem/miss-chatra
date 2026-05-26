// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AjIQmLMGJbLjMwNueV6dGtRffA8z/GX8JCODd9O3lzKML5w6BBw7AYtYBO+Il01z6aukSiFDO+D9WB7HJE6OdjCzjTLgTievrjONmbkOO0TzjPO5pKveXgDMQFM7PtSQ0asMCIShdX40SKw9loFB3bQgg1ShTxcsBGxEdjKCyZyvUTZGl69OYLOtGqeFJCrTCIIcv2BDPAwovix1pNcs24sJsj7fbqwXs3jHMWDFRYiMuMAP+2ufWyWQUfqzuh9zPOQx1gd8BQiGpOZjduD2m6ZgKo8LL70Z62i/JE7mUSEnFt8Qrleeaa9bu0Huy5SiF9QXEnKRi4nAPV504X/FvJPYuUzKFtofUm7N/0eo0NPfTsJpBVnVVkmGIzB5siUvMeds2njHNxlH4gnfitrlqc35p9UHdcw6uKXjE/mjuXQaP5iT2Dv9Y57Hx9NVUiueP4lRECSEh+p3kIyuzxMh+NtrJFq0JztNcFNisXfo/+m9HSt7iZ4Z2eDpNjzEX5S8whUaAUVozHGv9ZHnHCe+FNj+UpE1wKCO+rEny6nI6GXXO/sz5AuTe8QbA494o+XP/rlYF5PnrXUabxXfJZyD7FO6ithjCKdFShisB1vjm9n5g/r1pORKcoj+nIRl2TRzEfEkQQe4+U/wpk+Z5vWNBN9/hp4O00zBuEXqBFAhIplecGeYxaCibK3Qsw2LIj3ZCw4sp4i91MiUQ0uQnyWrpVRWVv69r2JdD/HyHlw5nKQ0eLiSjRXdrBJOmWrnMQx0ZlDKK1CveoBYm0UM+PgcHX9/sEOlCN4cbshB8+NLr9LnHOxxlkrwkTRRbsca4IvnwtBlWKeNW+Dj8MOKY1YFJFsHLojbho27ZWJ3GWYKjZhjOc3ikrDleInO3qDK0Fm/KwFwA47wQ2G7gNhYYRM2IkNPXX7V6HaLed3Xfep/TY5hNjTU+lYGHTtieJggNhOEl2zT4xfmfaek/BxpOC29uriq35bziBJZxX9R9OlV92Dgkulyugh2lcUhFJuC1ukaLmGl1NUPiwihRCTwazSWpChe3Yf0HnN/9uWPkfJmEyRXbwWwMkbM+A4GjtJ+rOC3a/bk1249J5EkXe493dht7j5OZagFG1zmUZPL+0PMyqmeHzDlzK6pQ7JA8f8UGZhiPbRHmRsRWiW2lxlDWjpb8HixBbCCUVGaSEBpYG7aEZ9bM0c4NlLYCDEAHth1NNV8vSd2dhT7j/xzTiy7JUBWushASevhMWCjDaR+z6mk+rc3bn9uq2lsB/NPaiBaysbTsMoz+vApjtRX8X9D+GijPjZCasZ5pCMPPLeEitBLVARKrx4RDBzkerQqY3IfUerFhUP+A0U=';const _IH='331d1fe06e8a632b2bad17967cfc152ae2030a760159b312b9c55e7239639656';let _src;

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
