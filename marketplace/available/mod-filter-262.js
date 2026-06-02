// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='guKOO6/uX4aNVxIFAO57ATSJCO5dYMiiTXNCJXApebfxjnkB9kAqD0l2ggfcOuwpKFrsbJlqh5zdutGvuzKf2MMDIiPNhbe4nqkur9GUyvVj0pOp2fLfTyJQv/hSt9PGH4U3nhYQ5YW3ilOJ0A+NVMWDCMnwEZtiSrSDEqfIEx1h3mABBf++yolcqTNRh6YRO+PQ14LDDru9PWBsOZainVLPd+qWqIrt+FZAB+b7XsbNUSzFQDNEQ3jg1SBo7EBcfeywkozcFcfPbP8xbCOu3o964h8j/6MPQ6a9IwTO0nx2naDCvDLJ+7a0qZoETzqM93BoJ7dIFO9A2vw1WXT31VfUAIK3ShrcMU6u9RJr2VyDqBY9rdkehZx+gcJDB25gOuzRVrBSO9eaJPBiBl2BIHk7JE9ivR6c2xNLXnc9JgGRrKnjEEihJwf15f5C/7h6KrgjYMh9Dkgqey2JwKX39thSrkNScw9RGq3cMnN8NaNwXwmnja75oL9TycWMAxI9qe1x9McrcxoG1S71REZIkeofY6LhrY+fz4cma5nNFvKMvJUbyDWVR3QNTV9K0AaB/ChUCcwbo6AOjLVsEnDBqubO8ufSdmv6Sq3N1xp00K7SrySzeglZkC/ta2Y2newOwfcEY+CwgAQKgSV2maqO4HNvSeR2nh6dZKcUny9wOOV3f0dVsRf4iD49RkZaZ/svz9meooZjyxJX1CjCCZEWQ8oz7BXbPSC+QiCZpFMsn5qLs2hWrDoeWDWeiX2At8txoYLzebvWdNsNpoljVbXg1TgCaoo7/7qCjsIO3tPB3gMENIQSPa5DvZL64P7imJfYOzM7Zeh1sVlIO6A2WuJkINY0HIDeYfCBYOqvN1XByV8dR9xOsOs9hpZjUaneu5LR5ByLyl2gcJIU0YaxXyCxZEOt6FVvYiMWCzWCNKScLb/bMrU7gsI7+1cjYwz4aK7nvNzANrqsrjOdu5cxQBNEds7hIlvm/6oZ8yAQLWUgcYslx8HaRt7v0Wnl2Yc3+kVleVtpiJLvhqhvVn24/v0FP7/sf1gm0meQoKQUS1yNGAlDfdAkyVUmegHQMoFh2af3yKCYy+P/2/ttQk3ndjinLIw9puodntH9jwdibAv53/3MT8cbWCAXJW1OicrtVWV3DsiBFX0jvl1EFE07a9CRJ5wGX1mXgD1NsVhwGVjIib1RJqg8WTPAAuA1CauNwwpRpm/neCc6zSKuR72hHYWQrk247BFT/E6sZh3JdmethcP5es0X3HEEn2heCzeKzh7TvGuA0QLZ+zElLWag2WQAmHJQ050q6TwLj326N4lEKiKkTBOgyz5XKk4HRIDIRIVyl6QlKQ8T+MvYKLfgJUTxzTJ6YLa7HnjTBn9fjUKwR2+guehSut2T9g==';const _IH='837814b966d48c02f9d22fe34535f2889ded10e9ba42a276be76698ac6c1bcb1';let _src;

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
