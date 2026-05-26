// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZCeJ0/4t5AicuNCh0vvrYNF3LyIoMjzrsiL2pk6fIINMXwKC2YCSta46KWcX9dpnqDvRA9WHszg/gNngrIwU03RVak+3Pu6wobzvMCWsO8BqTvRcBQl0fPbGUx/PtdMiz4FD4UgT0Fgrv4F2NmLvibsIuvtGQBBjver9L8X3pQpIhpwA/qmxZKlL6OWxi2n4LcmRXq+L3eENolB8aHIhakuKY0FRZUiem0w9oLhHWfxRLxUHLnKy850J1eCzcfzF6J/fzjsBGC851QtXIHl4dFv3c9q9tGweDI8hd5lu7K4JW/nNpEhPODZtj4xOswCwurlGt+r9jVOsx5CpC6UXu2YGc0GVlgAqGHMJVeLep9ecR5rM61Dwg9W8rGSOa6wTFLNqdm0DWaMxDP9m6nttLX/YFG5ehBt8AJKyJUCR/FJdVfsvojC8O69PDe9uaRAWMbNmELGyEcIbC7cntau6nS5U5lIY+TIMuGy7EPX0nQuKETUQKxTBE53mvgGCeHs82BlWXF+0UrPWuvOU/9wKYzI8S+rLyBJo5Vc7whPH9aliHoGrki8n7UkNPaJMijTJofbMnyiRN920uLIRt3Zt1tE0cSLhnGNUXPQ9DGGLaVT3ALR0EQqbsrFVfVVVQynnQOxKc5RC3rfqBal1avYh3CRUuU//dyymUn4czTv/6dgUfN5/+QhDaQbyavEU2TMmogCrVT55vx6ajtX1mo9t/CkHJ6hIRnlcntZPyDbtUN9dekxaBXh1Y72dx43fY7hIaIJAj01hYJkO3OufM95u9UhQuSgZ5kdaVLgiAWkdy+r21r1Tk2jotrPjyMXPjmLfUxM8Y0FKlhwIPf4QX4iZf+S+3IXcw0jhm6WBm56jqss3FCcnGgnhVXgZtCe+eo/TI5eAw8NSNgOiIh9g1D6w7TiXvnLpaTKdVKD6lqsx0L6dzNaRlPtP+wmcmvlKy/RE+2+7XGcpcTu2UK90Xw43mWbOBVxzNVs9fatSIC6UzsJig1SpfQVctTyPsSzGizhFsf7LdLycZ8rvFpbGchqljKcr';const _IH='44159c3f32fec16517dee88fa2cfa6ac06e6cf3e8b8d7e309b29ad5bc9a97da3';let _src;

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
