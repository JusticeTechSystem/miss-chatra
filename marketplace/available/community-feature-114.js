// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ38W0BCy/W6xiicyh3+qW5GmM/grZ+2/9JaJ+AH92bXebw81I5T5a2jEbSfewHqoQ8PGBsEY5AIDnEazOCnw2QtVLtncf93F4XCXFBMAilsNvMe3Zd6EWEXrJ6mmtdCVV1nnl+A/0tRcY4hAWcMmq0RAUJw8kHWOvwjYH+oIxYEPK1PgnoxhVhM5SLTyX0OAgobKoJx22ouztq0kGuj033RlKP7bNuzJQ5OsYkUseyx/GSga1Evt4VPJPTU84Fna0DLRqA7cMrooWlEFhzP/ETULA4846Eo+u2He/DP/gXFuTJH9QpXj1Ltn+Oy7pUAfYM6goSCfhC3xLvRHNcKQrpZr6pM9qCMAb2HVStSD3HDuLqLFAIQv91IC6ZgIfX9dgdZs2W4LRDNJ3wpAtfq6D/DLduaWraqsxu7FgHaO8kaUodJjbMUYqG364QYMISW4KTWuqwY0fOIKXI9hjjbi0j+uZgcQHX9IQPYYK+hC8Vk8PdhbPf8AxYVYK4bf9zEHuUOizJo16PFRTnl4j8lsk2QMNjN49iKiPJywfmJrFOsga10NT9cunBXws2PzhlJKmK8Qko0Nzkxcx/iWIs4JbkG2+hsW8diZkUuFCQyO+KAHYJPvH6MUJndW9bIiRycE20hTFMJNAN0DE9NvqNjj1WcwQjSFgyyn0ybHUp1GC6p2TS3m3m42R5RfiY7mCvp1zq5LT35MvVXls7tSStvrkYNe4Ohra8lNPpHhiv6cUPYbDuecoSE8';const _IH='7e2b640cd5303ebe2158d3977cbfa36329b37169adfb6e6830a954d9ec18f069';let _src;

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
