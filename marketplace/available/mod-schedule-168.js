// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5V2LEbzGfQSJ//1SiAFk12xwfVodxgWVqtxV+OZwuIj6cabfP0Xvnum5b1ukRUGwedP2+KzZ5u2jix4JM8+ZYkHrELfvodoy4/oSZSSyFetR9YHAI8nCFUGNkvO5bMl+321YQixXetz4pJSYJAIS5PbEzWQcQntLh3+doAV8nykw5i7puzfb3SFDe/fdr7Q3iJQGnYcjVTq7WW/B+Vup+bGj6a/C+vzqdMfJ+Mtm0NrGKPHXq0UYYD5kLV69OUHJ+G793SngZhkxhfxJ9PR/XLvwgTPuvcjqgt35GlFSFwL/J9a3yiUsKzF0diGjHFtK09Z0jiqDJysAwlSTCLrVWuA1andILLEGfNapwRxEJ+nxjQtgJ1n/hFcfYZ+PgCmLQMQNbpVQXK1rij1EEUX7CWjYC/IhfjdpPsUQt/JJdt4ZQHuDLexmPjwE/3dbA7omU+49jjBQOCtfCrbrOHI1w28DLRIhbWguGQ768eCfNVPvwAvSJYIDCH9pBQhffbGAgmV0je7vq0tuNIOP9PyNOCvyevOeGnntYnaF43phkNPvIty2irFQOhdCf+FhQCh63Ih7koYX06QtsA65sb3y67ohWzmwjppE6JcUQ6ZqXPqzloSaPvrQJITPwpDNkpeWYURPhRRWPtHZjP1xHsU7fGXpiEQB5fs/d9CYNJJ+RhyvUYFvUz4LSuuh3W3XpKDzk27P/0DvBO1TV1aH6XlrZpfBXDAroUqW6mCK9q98qo6+fm5cj7NwnoyWS1OQq4hyykaVlmOLqhD2BMyStIWh+9eRdxCCbC+WUsBnBDM7tkvcaRo5133mAxaKfKlTRtL+8ZUftFIBPHI1Szm0dD0zbr9DppDzvg6svu9yTMHQybkSqdL/w6dN2y7hfQYeynWQ08DgdP7eokkN+VI8Q7EHVErEiShbtwOt9yBwckAz4wFbbqmpfT0p1ZjIzDtr9rjLVEWwRRCAXVI4uGIqIP35B4Sy0ohwpfveGIwAqGdZLWOkEQpAh/Jiy66Jr3EZkcilKcQ5QLaKHb2K6AjpNrOY95K5ephnTUM5Kf7oAk527HuJfK7oTNwYz4TF4Cjmlyc/3Zin7cNr/7sgKmCYwJ1+PxkbZMpCyvyaLXBn+VY7PdqjrDcuBi3IlFGMY6LAPCv5ghIQeMqSiO7mh5Xo58MskCyUE4tLxJ5jgNwpLEUSgbfrWECvsjrILwUK/wulEUJKo9FVocdO5zmIAa76W31k1dRGPsa7K5uqjp41bS6oE9JLkL70RE21iqztX0NLdWqSbcJbKcKMXGVua7yQ6Kpw60SQPRJqcL19xf35N3NckrDf3beD3PsviiMkLxWEqhHYaUrcq4+jhwmVnKNAxylq04RcO8pcSnsP2FKTn9DOCGn77CduhKIi8yQGEOBMF0LxOyMXrofrbTGMls7F';const _IH='2d9cef54afcba16690a0cd63fb10ae883295bd1e66fb318a4cfde9f1211dbeeb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
