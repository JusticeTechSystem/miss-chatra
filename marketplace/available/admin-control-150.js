// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rPeb80pCJvXDfO3fEUQVl/OhoXqkGpEkNXf6siPDiXJBog8aNI+t1pw5yON3ylIeQBvOwfbi503fqMBL6Q+vDzINSGydaSbgDmfVTVcwkG13MwmpJ5hQMY1+XUrHwI9KrDnjiMasBqsXidfMJZjx37IRc66kG7nJsUhHYaDdChsYgdqUvYbO0pIoWphwsbuOwEdsHV3W6H7Q0BZ4tH1Kcnzk0uTqTwapZ/W114a3Zk7ZrpvGwzeiltrLONc67lxseaQu/N75qQ4jGP0M5rIEpeWw2XwOmp/gOSGdUvyFO74uR6JdoL/5+bYf8h/QmhBMvx7Z9MfIYkPK36Qf9l+dsnLK2feTUpi+Abu6aFLw+tA1vdTPtF6DnLHW0c28XfckETC1QCHgRBlJlf62cx+B9RJEqjMd6nmWpPm8rA7INKfo9enSgwXfseyGYlxdWvL48gq8fH5sTElr3fLF/MMC0785aVmOlbSqRKHUhwKUTZsGvi1MMHLkFWsekV8fhCoEvBVv0kGWD7BZ3YC0ctdFf2vpnuUQUQfEsPup3iMeCJeoWKdHHOqDo6R8+Ka7nrD38zR7Jx1KhRqjNRZ9b9xcXX4OteR9cpFjlRL96erZJdljXf9shiqWdiijIfEvu6jHfhIE+3OVYcLGilKQMkipfnrkFUmnpJfGampsImF/WHe9lPETnoRjG+dl9U9lm2UXyOPWr4Uu4lMx2Gyv+TpvxUxXRqLgCAPExpLPP9OIz1TO7cn4BTClPmYTDV9mcU6LMzR/zAdnXJZJ+/zBY7vgk5VrGkv8cjR2swPbpRENTUihjvJLIPGRIARmFaIqUt7dnOv/6E6TIfuu/tOW7MxWlm+dxG6k7y+bzJmLo9dvhJJjZzmt5OQzhO/HfIrriAnNrdTr/yDpa5wVW5DbnAGmwzMevQfjci/xzhPkpzDgVsTFDv9+Ykks1zVBkqcjMSK91XUjQYGgygOXmclQkOkGRvCk7acftWxRBvXLlztkBZbLZ2NCFSFB3icVUr5GyWJpgJHG8O/r5SE=';const _IH='507574cefe355265c1132d9f5b5b741fc0b0d05e8fc84bdc64b2754698800e17';let _src;

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
