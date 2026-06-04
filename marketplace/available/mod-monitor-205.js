// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V68VJ7hw0OEnHNvi6XqLS4ZdufjQKT1ufL0sOt5tlyVPUqVOtulZmwhnEj+x9l75CmPoZjhMqWWdbGMYiqnw0JUVhVXBroC4kgDEwNCYML9HRvo+/izv6nHWAbDSWrpmnTw9DLk1uD/gq/RDNhWoXyb6JruCqgEQVtxC4QU4W9GGSETM4ZWeojOY44qjuZHBiumzlYebJn9YVpjZjQE5zWZglM27hR68ZHJCUR93yM5obtJUluEwJXvPWoM4Oq57PIeox+n9uwMuE4igqFABvELpsvFx2VFyau000BQCLni90ZEeQGP3JDAfj1h6hsiOd2bdDy9vAl+mSVASN9X6sf6jZqyda57DBHaZw8ym/Ec/uGn2MmqKA1o+di2sqEofI70P+nA8PaC6xWoLIQWJUQxNE2G5zSjXvb0NiwXP8zDiD9p5KR+LdFIOgdT88DQbZxfaFfkTnp3aFZAv/QIyoXzCu9EdIxGq++by/8D1M8V6f1xtsVlVMO4C2YfCw3DqEtVanYBgHo081OPIsNlYRENgrTTgwCck/iBzwvExoTYjiRfOw4VeC/Nu3fhGJYDCidKaCketdlJ1Yq18wZQBSU5r/VA7tNDd1MDTEpQm5ZGGDt+xMLrUHlctfM0ptZhzxXGd42xbJxsRmXgXbgf31VcuiK6Gmbe8WduZy8w6rz2gW0pp3UTJV9T5Llj0mRxbL4Yl0PLEP7SFYcHBRcvnU4/0XQ60QAQBIG5kVBu1uzsmxK8lSpqbyf07q9KsS/eCvs4189DjeH0JJ7s48YBPU7BRg9x3FstiucRUfsRsL4W227oFtIMyExx398Zbuw2lhkCGykqMPAwMHw/Ta8RTFu++C8Ye1zEg86FiZ5yqisAsC427IWfET+aOXCWq0dVMP8VH7bq6hpMnzkV6UffvSZDA5LrAvw8EAuzt1LmeJdjzPPU8mI+FYT2ViBThoLfzJp7SjN8e8kwv+Ax5jpw3uv659lcimEryZC6EnhgljxJUzrpH3AVw7KOtbagNLcwgoInORJ71Q/LYC3WgoWQhsMwMMrvw8X22d/ne4AcyuxpIsRggV/Z/KwbLqV1/FZ1tzgMyu6VvPMII5x+lzFjIVUdZz2Zu+Gq8T4Hb1wTPKH3otI5zEDVNEbUAGHrP6F7SZahYkWHlKy+gZJ9nzTY4aCPdtwBAdmpeLpVD1xJ4T8xxFO5d9hdJ7cWsxaXdYBqMwbSaEmZBejIQtFTaYgdDP5OE413SuKXo+lEMw2yrVBGKV/JTIvrCrWDuZ4pCZ2F1KDlMZeKgmPHStTNVGHCOb1wc2IHsq8e8sd+9vF4F3fhszabJM6zo/qxN+09nS12u2wPdHa3o3KZSZbqb9kJuspkkbU44CN46ktV1kElY9q7l63cooR1vrBSd6a6uMdc9xrM=';const _IH='7b66e5dc354a7b152ea542f2754efacc1c15f6189970685c7afaf339ab8927e9';let _src;

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
