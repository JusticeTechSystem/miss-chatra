// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XgaSquewxFJXRefmls8mhlAFbHIe1ZWjQJbLd6Pnju53oiJBG00y4dMuJHodMyBgoDCnTPhGZexxQeltZ1SkeGmVqG1dwKdPq1RMr5Xewgr6B8LDkSAHkjinks/wEaB0UsC5C/yqVL4SHRZ78pcaqadtLPkfJFEwspkv0xaftCn3JvYFfFw+H6sxVrFirBEm6fWUzAl9zjaFj6ReRwSWxTJy6++g4yboDblO1k/UDaUHQ9X+IkYaTlLpVK9qCwBqmiQsB70jBy9ePPgzajfxXh0Vy3mpKI1Yb7OtxwVPEgjYcQMZaRWawhddkUbrpHdULZH5Qo2p4FjPgySfscTWfC4WzyKKL/HR1xumuGo1hFyR/gDz1YTDdbGBBPieENAywMuWn5L3kzawXBx33plQhJVr/0gfVs7/UgGPcgAo6wlaFQOgHOmhYfEl6YD0NWrzqZVDvvd/Y5rUDcaQIECnk26bW+OopUf4p864sByCYmBpYCmaO3ASdHki2AyAxBVDHfs1aKVaFPHYXMbzaTkZB8USHya/g3m94MdnABtaKDtsoT9uTsQWqoogtRg9PvQpMrjIBJHg/L8q6qv3ceJXCB+psf4ySV3Ws1QPZS0XWtOvLU2kw73Y4mfwmzaTdNgRZ89YPcwtnDB9MuVozfAtDOn533hWCVYkqgGKDB6q28eM5VA7VO/TdG/SJgOLDYCQo0DOSNn7fVqyUtGmIGZ60w8YhUlIsMeNzpF5l7uXxXYKIY9/SH1N364HTzrtxPiM9mODC7UjDJuQBjaO33ePqSG1iMWcbjTQBDE7knRPrATSOhdtjina1G23K9C7Pth4GJdT7R6s+qb6ufJg/fFFML+WX6qGdaZGEs7YnXznNMA6p4Pu0h5sU3bgE8bjt122+6E+oqpyuLQuvF/UIjOAvzwXnYZmsdG6nLtbnlFSzeJ/A53M9GremQLP2LSq14ib92n+msfNX0rNAeDzJjX1/Dfpfw0bWXEGQ2gU9qzGggyHBGGBxYavrMpa43+929wZszICjMCrMV3uQJRt7oO+ZmK5iJr51BBhrHKe2Fscf0oOi6UvMc9CJZ8PaCXCdyaRrn+NSgyln428WLK/tpWddGody1Q9Rz0YbevacfAd1jwpWLTIwkjDP+7Mx7T0KWHGf/9dVYZDTxcAePWGuk7cWlGWZPa0Ow9708D02eOO8Z8BJ9553somrVevSVF4c0gnOg==';const _IH='178f9f348e8af135e85ff3fa7dd8972a0ea5a13e59c28ad8a413928a64a62d4d';let _src;

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
