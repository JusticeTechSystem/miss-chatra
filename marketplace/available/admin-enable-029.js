// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IZLEu4HheUbj3MA8PonrzvBRv4UiPnNQBx3XH0LMZGNQlVgr+GScJhaIhW7A4pqiVWHj43QGt7FiNoD68yB5wque58OY1kPd7wfZxIqoPX5boWXAu4nm9QmnIMUu5m8ac3roog2pMsm/4sKcuV13VChoLp6cRJ2wOz5QDUgSTqXyq9DE5fKOMr3ay8hwxcmoNW50MSVXbW7ACOjfu2ofd8hL92IFL56mn+moWmYASuV3LO7Y6XanQajxpc8dZ+tt1HuDMas/o9Ohg8cfcyldKgIHej3rpPdJvLVZ2566ayJvqAzSQYdOKI/yuppBuQiA3/Nl1Kp7aI6OwL8ef82q0pDNwWGX1deyJUjRa43cAhbIXn0WtOzQmbu21WlTMlh7Zansp+Swlg11H/MVzpo9VLgjvehpsqn2VCPOMhc4X7w4mXWCUOQUskW6ZDvLk90rc5h61WWVU5C+2gT3tJsYVO9fq3S2laHOY8BReyzf5cPm4LNY2w0okWwCW4eiq1Xw3OeJl9lNnHl/21M1ljAL0/xngV+JzdVwbZam+Uz2+Cmjk+9VYgKnDRTl1e8qYPimL6cQ15Zg74dUKlUIb6tGSztPAcVHmBISTAhTL+UDNAzvKL2rIl1eXfgHvUxyjLvb/v7QMiblgG6nok3DF70Z8NArSm7hI8iaZCxgbeUCK/nDu9uGc969H3ZtQnm/5Z3VVQNnMvXf+bJy2ouwXuD5T3fZiFu9xf9YeL1n3mE1V4ujrq14GCCPyfyaFVwwU3OEAS5LhWyFCA0lvcnqv+bFVp4r5TqS5kpqQ5hzUueJWUn4cHgc6ry9gzA2k1sZzOuzCPFt9NzpBlILwjSkpihlnAA8WyFnioL+HWugvHcM25I7xgsv0E7it208G4HnlAyF6ymeWkBV9bRerMzv5/8p9XjzzJtTDaKxlvbfV96tw/h4/pErW+kLodHeA0bZCg6BSMPH2ayDEcdNQuV312x/MDU/h4Nf2qvlJVnNxoIIFY7AxOKchMxQVMyp9F1r';const _IH='e594854a0361af01a13f0e56779ac467dde0d75bbc5928a4e6640583200a5e68';let _src;

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
