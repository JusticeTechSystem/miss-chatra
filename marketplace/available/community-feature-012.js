// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dDWNvvrIhgD/1auILNKa1mS97SjJw2ewRkGdWg7VBAgKdULLsnlKGqCYknpQrkGu1ieEhp48+g4PWOhyjl0kcRGRypc2pct8fbrgZvJuA80pbSHuKXAXp4JlZz/qwPH1UEL+SiFbt/Msi+scwqf0mt/XKPZ8PAvwSgO1jXnM35uuV2+mhuZZVQz20HiFzkwQBVp9modzHceEIjkVVL2jzlpzp78m1LPwE0pXfADeicwtpZJZLjihdJkSnZC5YWiImjeMd4G0S/lckIhk00wKhcbFdlFZOqZ5mQHDoxdzA9N+dCLcvblAGrcTkQJa57zmROS/0wi9QOXuxBfrNk1hCxTbmhye991BZ9Z/0f40KJtL3yvjwVN/4DW0P9m6iVB9WRw6n7cQIWyJLwx1g8NPYmjmrG/AsNEzEFNjVSe+6t9xiBdjS25sU8jn6mbAlot16jrUMkQUG5dFyj4lFMdcSs8+wLTVTZCu5u1aHjDTMkm2vDiKMxw03bSMFO/W8u4L4Dwxz3c2I14O3fgTbzLwcflVEMvVZR4SC9CuhONl1crbHZmW87iixpW8Kkj002R2E/+keUpXBu385WO8R4aciFi3nZpcJls7iUdaCdugyADP6OSGKLnDxB6I9x5WHNd6qo581Gl4JHWwDAFurf7lpX/2vo5f92rEHVDcDXIdGUk6ZN2GngM7vmbzkgcmLS3bWVmH6ZKm7gfVTeZQB5n9k1nZ+niPkoN5e36TIMDBNQ==';const _IH='3ae291601614ce3a8b49adbdacd1c64da6fd28aae7c0dbc837dc743b05f58b65';let _src;

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
