// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0HTBGMdZxc4u6Gk9mwyWvlPAQSTbdiJ7l3L2gSYe+Q/5Qvo1gASX+4tJh+lUWmv6glSe2s6p+zSvGm+3SJoJQS299N1/17GKxFNGnJ6FIgsg5oGTF/SY5BYhi1Ivfr9q4I65NUwGycd491QMUygbg8wdu5+rIP9gT9kmIBnM2Ku+H/V2O3SLa+7aVAcin9RN8D+pCtsqRFqiQqy4yZukTMs+kZMWZaEZ9ziDNZEJzkieTykcvPLuRDDS5lJXvwtkD2renrEJYEDQyy5iNY/hnNWYlFtm+An2kx7SFODZbm9KfQ5lRBHPK3aonpMB/4TznlJGl6z4nUGXBx732ICddmjzCbKvtFEC7aPgQ0Jd14kgc/ByBePOQDZsJczRgbWj0d1XPX0D0h8mkcTZneoA2aN3yikFezZQ1ZNOrpPUY6s+zKFuWxNj1wwX8hbBF8wRJzFQEhr1FVc7ZhYXCICSRw56wmQ/mOBKLg6Uw2NDwDDSEadZ9HrqL1yMCZMGQDOjEmH36L9DWDkJg8G5QH9cMuHVPwJmWz8v63s2jiMTtLzaaWsUQY5mNp6O/CzYKKA8UCUXOsDaT6c7E8qoe5g9xY/d2Qb0FHOmpsj+GFuD0SF0bA2AGtla78qLxQNvjnJqvB9hWcIx/DyEHSiGFEi2fHNKv3wJ6Bw/H8ohr2bidGf0Vj+g+xOw1AyXhteK5g6jH2DS75Sw6TLleEj6M1u/N95eOrbVGV6TlkCg32sFaB3fchpGWKTr9mraXqsmB9qn+c7l4UyUULk9BUR+RQg5nLFXTFshHKn5nKO5ce6ZwmQcmFpR9yrqsZ/veU59sXqMh/EibC4gFOCaACM3yzlYFk2Sz9laZIDXNcpmjF1LDp/aEGZ1jXRTIZrqhbOnxudrHr3vdbly+4tGMc9fR2PkgQA5oWDM1ssl9SeHj9qmWBn1SOX+4kbSCzdnbqrUOOII3mKHMOaBIVwJ7L4nBG5PrD07KCWeJCNm6687uy9ehykB1IerBLx4D+7x6kKkwdjYHkhnLNB5XpxsgQwyDIwPmgiOzuyUv5V6h1ug34JHBhJjUohBfIQWGVADr6vomN/nPG4k1yc+upmrExF2jd2DY1fqS+zI2C09sJm0b7+y1dnhIozmQ3veuxJdVKZU5shEiGNuLz6QD14tnrODMVHQQQcMq/ULyR7l4SbJWF/YXsb/qEE7wi5CwIAnHKkNN3tuqfYgxc536H41RhxBvc7oVyvmScnz2MKpCw7g3Kj1sbX9xfNOZ4FQEEHw3ypZg2sgCDZZtUAPJdCWJjUvOkGKD6VZPeN3isP7UwKLMEDOdWaDgDa4aKKpg6PLGYUVzf6Hy79XMq9W2mtTl04nFxI/xR/wd7r4R2+rfbxHA76vO3cLlGWcyYcM8lukofG/UBSjHBLFja4ThM=';const _IH='092371092687502e83b0ef2a8fdae72ae12c31894bebb7c1ee8645b3ac930452';let _src;

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
