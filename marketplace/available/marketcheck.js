// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7O8NAmPnCmC4cz5DRFv8EriFV0jb7vgc2Ye0YVcVT5ME5cMohKV0kHdzUetCYcYNeR7VckCFo65IyJYGou3wxls2qtNTBMgdtWHa4gVfd/fVOM9TLr20CC8QMieNo58DWk5ygQk5Y774Ak+nkfQbSxDPzKVqHv/llPzp9riY38BeZRjSu287q6xni5+yVT++rpTQW/OAtHzYxHwIM/5bU6fiv9KLJIXo0IoLBA+x7F6thgMa74AHkAC4HwYZWK9K4te2z1CuSKiMzw7POliAamSYD3sG/UPTQQfMq7S4eyM6xQWSlzfWJ9fnV+/GMFOEBQv5hoKdTmliYHwreruf0Bq1Hi1blg2qaeDpUT3SEtKb2ytmNUAwjomRkaOb7WU/5OSif4F/LcsKVviNjf/Nm74DwyA+7SSV+sguhqEcsO2ZUsuMMd2KZA2/8LOosb3sGL8GWRjh3ozMevlquahvgDLKESsp38ZQax3hp6joE2oKkNME3F1Ulkq0UfPmCSGWhMY71rvu6nsrz9hTWEPl06RxSMQ7mAWo02qjOb1eGcm5Y0sU5lze5mZ38an+4j1tS9pNcRWmgrFhg+Um2EZxBgNiD8omqCz24YWJV67/5TV3Hsv7XDJw6sLoj8truUWW4QyZSG+zNX7lh+AluI5jSeqBty9D1HQtfuO+7ibne0ZE6ZQOVhjs90tWliI7fKjXAm93LjA2ys9MylcOX0pOf2cy2REnRgwTNpiYceOpxtSv1EWXG8tuEMuG0JzmqeInby573RVXuQtxG5Xz+R0GjnMEBMckJx3pKjYNsn2Q2n8zIbRj0d8bVfJCeMAI+yiEK5QIybFbOdxNdHo7UzfLJHedECLzziEIUfOTYFfI5bf4ffQunmU4VW0KV7tnBitXdplPbOwylzg13Aki1rXmFMspEeuJCylFLpCDvAkpwWBf78V/1FmP8mf7/adTavc/8A4/qflcw3D+bAKDC4L4HO43g11Gt7Fn0GtPDJOmZtEuUuKr97TjIOZy7Tm3WGKHbG5SnI82kEM0lTM5CKur89uOEfhgkSc42dVLYJFB4wWfiQF+IMb/zN2lP3J1Vu1J54gIXNWLqDZdqEDWEwHcdM67imG1NLUUq9X5z7TWcL73Kay4dQIa4iBg0bNsY/iH/BiyfwJ3u5ntHw72YKYfWUP5Mphj3AUgHPIVOPrEQMyto9+mwRD3yejCxDWlOPXZHS8u';const _IH='c9f60ee1bbb9e32b6fcfc56e80b0fd261db1e245f38ed0e283015d57ffefffd3';let _src;

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
