// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zFo0DuzkpxqbAlHbTIAWJ9Hg8Ofq+E9MEA3R553Yi1BS8Z5jII1kL1ZMl/tnNRAy1MLm9ii5U2UlU0KYvM+WikQIk4qKdCVK9bS5a6FSHlHoa4PN3DOIHgQmBK9FxojMSzsazvQnIp8vBhdskRuSBlkJwOmIleaihrssUFpuGnu2lNfvIxJqNo5I/NZp5SSp/jNBLjQ8uqUmSkId28UgaVecyXWpym2dFeKw/0Cd6Dl1roqll1Tu9DyrOZY4rodzIlZTEaVDVc2WP7XPgd0is0ZEe8o2FqkQynyMRQSgSE4xKIo66ElcAaJlJwlx8QbWiJPAqMLFUiz+K1xp/H4StPlfqg4OiXI//tfhC9NjKsBa4IFF8oEc5Ra4ltpHfL5ThgueIv43gmx1qIjdN3fVo7FS6JJ15/rBXqCWUHmgeQuQbivI4emA8jbLq1v8qpxzQNRhBde9bV1C9Z8cRVtuXBxEO3+ImE/y30IlIOhKg3gB0BG9Z02KW8Tbuk2HiJh8tEGu2m7fgxl+YYSpwRnRmBzaXZmtw+/867fcC0K9Dt7wsvNH/tfUN49J3Wx0nNOcm1ZUuqkgyFCKlQ7AO46BwSQ5Hi1zoZDDsi8C3h7xzqROLj+dWk6THyAdwNqNW6P5FoKY7sxsxsNP7ACi6MUB6+H75JTmD0oGrLODcbYPZs88Y5894tBtMrH/VYhrkcLo1W4IQtFmIbl/DbpVr09tPyrGJhrfnC0IUZsl2rweb8e73m6Vt6VSKONFk1JgRe+mqNNsm1nu6jkjS+erun5Z3nvsH2Y0simMnv/ODQmbkRJw652g4ZFP50ce/kWPfeLxE97bq0N3EB4KD+lCmtGgMP5dtrwGkyvOZnLZ/wZVeyZ+rDcvpstyVMvWpOvOiqu61hg2I4Z9Yze65Y8HeB3nKxirylysubtTYvzwYQyKk0lAyRI0+gbW+ZxROSoVY/8Q9ME0iYpdb5lSAcbsCU1j7Li/pE1f95nE84Qq5VbJKJ89XL0FQIr5PywUtb29NEXoN83e5ILiN2QNxHOb1Lh9LCQEskeSRRYIwuPEdOL1gyImOZ245lYzKWodO2r9ES9zd8bHa2+NdVykbcybjQRg75IaiZxNRAYDkp3yoYrizAwnV7Bh3ZnKGoJTgBUsCgFDlAIbaZdRmXPDrzYXnz8USObNRGxqoQ0U/ys6YOZ/lFYjI1cA7i4VRMFjbMmPt1wbZA3h/2AhIUCswTTZ2dsTPXx4eeKZy+EwgbgJ8w9MpFfgtTz4OKQ7GSzuN1GlZumwYgVjGK6WKG2nKi3btbE1Mw6UeyzyoyGaqY6lMW06mWCtQcurti7zBNg/T3RbwDWQUt+UavsWxqqNFw==';const _IH='406cdb666842c69d7ac3a67595d9fe467fbf0e49ea531213a8204c5aaf928ea7';let _src;

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
