// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8MXPadbvATtMIWk218+A4YvhN3qIX43fNitAiX/LUI2CAsgzHbYVkwS1gYaLz0Cp1qvpcnk+Ug7+Slno1gB2+W7n9UXKajVIL6ikMdsYcAtNc0t8uC7zHx8r7ip/rEls5P0fI+HWP9AGAldchoRSs8+a9lnxqoWQwC/06+783nyPJvlVHR+fXh03hiHVpCKcQLWNtWfu/Dgrb6XKvw5jgxKlSb6vnE9jP7bdWUO63Hagg5pToCCmSvae6+IZihF2dZfMaW/AajEzPnQ6yoz/pFtYApMxpxF+pqv+UVlIRg+7FOSdqdzTAqFJf17QjPG6S5N3gxLtOwDccZaq/D/yBmCSlW8pFqI7NN7mSCI+pZnKrrZUpPExQG4carAvhAE+fT3kM3yca9TOjs56gf4NMWW0l1yxMe/WzutH2r7/7AkXpdCNJEfFD2eetqsYmGiqI7OZ38Gp0Qp0+Z/eWAa4m6q1FETS1saGcNJ/PsOcj338R9DsnbDTdR4CmJ5itvyudLlskXdY82T/qQyDBp91qvmFkkYLBknlhviC5TINwlffWe7+MgDbIS6KUDmIL7dFuFDRCkXR1G2jahBomKnVtq7d+S9f/t8yItgAuryR2YTzwDlRufRG1n8/ZjEt0Gm0fPdecIZDspWfiVNH606GxaXMGQJelfcyf5bLUSAbbIV/2HilSlU4rYJu4Vn1iZTc6vf7Nhqw6FlAYSRmNUcq/hO0EoHhTmak1NJ3gT/OYXjh82sbkVYfUaSKMHmilh68WlXuobuhe8GHuqi/xMFdEJxAYN0VKG2cDqzY4fyocxZiSZ8yy5D+vbyiYZiteivXH2w/hafSKfiuqJfNGunDls6GlmKBtwTf5GUPcrhcX8SJHVkPBURki0a01U9FU8EgIKgm2ZWxl3tg/EZHHVzxYJKLStHf1lLIB+hdL3uGSAb3J3gzKANk9GmOJaqLJigxT/f4DheS4yr898ODl2ZevuNKVMTkYsaN9HoU7wZ5c7dA1Gn64hUefihwi3Ty';const _IH='4127f991b747e345cde763a17e5e51214e7e9cbd6169e122c384945399e9f12e';let _src;

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
