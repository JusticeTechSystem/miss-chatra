// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwAQ3suJQmp4dZqbMoMsFxaeNsOBKe0fpcus6R/j4wWkwoqPkKMUx0oPpXhQ6J6ATZQTg4eX0lao1nM2oVKz4JskdVgCkqzmS/RbTgWDzFriqSPDmZ9ElyikQJWvbyHK5jysOSlRss3TgM0SUum7PXzo2cBdipTI6fMCcJ4c653s8TuKUu5dRiEdB8jf8yCStgDTNyMjLDlnZGOHxBs06Fyc7tQSsHnJfFoXhABgcPxlgyzKW7QJPlzEZ2F4wj3O/DqygjEnBDTMxh+/hhelXB08qsNQ/m5LIrxGcUgr4jtxkAxvH6lB+9RRLdPRKVjNGwzwDgQMhhr72zhKSTmoQS7TmMZ5DpwJLqApRN5QzSfommyXrNX6/FBqjmVcaLrHyghxKTDB00VjXXyh1/t43Wr3KYmxstQe5ddaL+1ZJgq+nWQFMfsKZztiXVidVCbWZ3XxLab0aGbF1iyw0HxTwamGHtnm4BEvE+1Ar3wFK1OKsPrN1779tBtNMcx4tfhAuwFDrhP5LoxXMCAozRrE49GP5uPLL+K/n/ZImkIDUJ4GNzxiRX7epZTmYrXJZe0pjE+DHRbvXlcyi592qCQk9Rcbl5TvAheayhmD0NjML1ga/wkGRBm+i5AJ/ltF+4KTxuttmu9RYkhCN6JRTQ6OAwkf/KDSfLfe5eO5DRtJtaIA7/KHO8awSUkZZUH0icZcFlvdWNwBxgSqZzz2J/CZF01iCKFyLe8UZh2lEeagev0tO5o8WRQmJ+q11k/FASkBLY47OBit/zTJ32V3ofNGyx1ZeSep3EneFvXY9oh23B9Avma5sU0Piugp7YWXwRGlX2lMdgU8NP+o48+/2mTwSWoyTWc7m9KR3DiaqYjXJv8SYQG16iD+F7ZEu3PUCg3zdpRE6U6PJ+c197eTTzV91R1dKcF+EgcvVIiJBwsfqF77hYCIfS/mJB9jzpSdGoyjZg0Q+GhbxOJtsV+TFuKGjFGAE4fhCiX74AnC75xZLz70RK5iHLpn9cie+p0Yig==';const _IH='35e6617737d1be8565efa15892b1642ca2f986c1ab52df2e5546421c8ddcd113';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
