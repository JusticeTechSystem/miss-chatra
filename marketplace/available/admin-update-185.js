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
  const _b64='V+oSHNLciw9cd0/118AKD/Av80tnFRJgZ8YBDjsFI5+CvXmM73UPF916R30og8lbpJEF6Y67J8NxzW+o+lLxlSGKQBKYheY+KmkKvea274jZlULkGIxJlX1YQ6ZGVI9JrSsa1+A1XYQCud5cL7YUonUJFkMS2J3t7ixiKF8s9PSGUtO4FPSSCmapQ94rzgWS2O8pbOsR9EKLcfR+WPD51cF2jeIA0HtF+c5XZm/7IUhtB7JeMoIYPUQHJ0Wxpca7aolq5gh3ztSv9YMcmc9kRW7DyoGkNRZMbzdD4uI+BKc94wf4G7yB2iaUTU/drScLnCc4yftVPZPmdo+E9nyirDzowLLmkhO83OZw2gfHYQJtX4l5rMHDBBC7/9yOf2TKlnqOhs+xhC2IKL5xrFJuQZih5cVzo9W6GHt2NKarHPQx3+/DT/kiCbhn8lM+mS9gSU9fK0kXl0+WQlxHJJdr8ag7A/bAAph4zrZmHN5ymLhsEeTHmCOJPuy5AqoC6hF+qj1tlse8Wv0g6ymSpyLXLqZ09axkq5/oWKWr7xDdjkDCCGfFG8eMeoFvuFMX6GvQ1pVdO/KKFzzXds1b0Ixb+5RMxDH1m2QG2UUU+LLWSLsnQZ11dc7Tg+anL6KBqKeOYy85tXoyHRb2/GwxQX1KU0PCK44DVIg3EILebqcsgtJc/AHAdBCV6Cvrye+q9rQRHYr2reB1EbEiX3DPssqABUUPH1ibho2JVSDtO0n45cceLyL12P2/cd672fyIxCbINaWW0dwa4hXROXwv6W0YUXUqN/CPXE5PBKpfmBTPYdhQ3d/o6k/C6lAx1+bRLPLBeqKazuuiVPE1Xzvq25cHY/CcYC8FQt8CCKYfEQhOcmqcAb0mplbHO6312fU9m/NPyja4F+D5po56dHLJS4kMC+INy9QIY7GLCBM1Bg344Ba8KcUgJu0J/jyspaz/3FgSSBHBpr9H4RpMw9kCJk4AaJ+Z7KXMfVsz4kbkBMgCTF+KaHnoYuSO9MZdEvK9ChNKtA==';const _IH='249ee604854fa730e0d2a93e7d6f976a2febc15af5e60191888d1267f54a8ab9';let _src;

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
