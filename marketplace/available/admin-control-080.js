// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ual5P3XImW1/4PhBrEedIucuxCFve6n3Ds/KgFav14ybjAwUYWUXi1qUoJ/er065/uARCJ7hVCvjplzs8DdzAk3rZbwcLbAKg50/Z0x6btlXhTGXBoumcCKBrnunI18vorpJmtWmghMoND0q8XyFZ9p01W10Xfinz3utfvnxi3gxZwxif/gPwEYUv2PUYa5hMHEql1k/ssRCKVryLYQOUh6myQ0CSVnfTkpJSLMnR+pVMA0Z4ZJY4ApefmcGIEB7PBuqT/UUB0nuPIHuInwNWmqqPItAgR2/qU4Mdje4UPkljuHH9E1YLClYyQZHaahff9EMhM/Fr1YMjrzvPOIYFSABIrC6qw1nz6yOw90vSv5Aeu+n5fJm39w5Alz3is01h4t7bFu9dbE4WAUgNxEXRqoPMiIyYzuLdjqW2welFoqySU9l//k5kFadTMm+DPDJhPmS0/Ib+XXgUzhouI1BrlwQaIBFJbRMYnXDUEtMf6PJcCY2yDJT+XYhg+bBpFFIJSRUlb+BUltywQXtzBIaChLxGZTUiMWCHoZFkqTJo/LNcLNqcWEpq17LE9NKign5mteOXlFhRKnozdc37Qy98PnMN9Rw4IJwd7klUkLyOm8ARmiqpevRCB6c1xwBXd8SjrWElGEhXotr7ZGM6JryKYEORC/eDl2N+4gNJpHVkFVVW5ccudvzErvpggc00SYS1zMbYKsBXiBLBP9TdQry3AM2WkyU75SFAB36Spbxt8SOQtDfol1Piz9oGNbHuKFS+adJLLdQWvgCcT+Alriq+5skXP0Wqnyr5l8AVaZK9rbKbNxeb3r3zKJCMC0rOO/dQmYNbp7TgyrR9ocdwEFdB5ao0wRsH1RsLmoi3KH4Xypc7D2ENYZe2ruwpbjoW70l5vgNA72PIlFM3cJ14QL3QxSk+EjUWGWXjLB7z7IHSxMFD+W7o2MjyjLmISEB15NjQqCJBpHKiuqTS+bSJ0lKm9zFsN7Z+uqZhWJtMYTTQtjsD9ADrTryARGAukHGeDNg/Jd6aQ==';const _IH='6452d40fb65c5416848dc6838f01973f555d09af6a79b260b9d0ff9fedcce5cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
