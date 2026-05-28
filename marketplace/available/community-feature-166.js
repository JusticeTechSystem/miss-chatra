// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kJ+V4LoAP3Um6YCx2Dfo9NpxKEJNXVf01eibvKSKC6vgYTPnuRTtOOROh8jA/9GDZt6qIZyuEW2eP5Lym14MeyC+Cy+7dKLIHh3vdHG7uVK5FOc9HdAYyXIG4lkeCPZE5b4MujcvzjY+GDCqezxHDCyUVABNXLes4tqOFVoBflpfHIC7qiKG4UhRjsy17Ggg2y16Vw6hBQaCcRzgrET8yY2bEmAWTZAaW9DbvxI2lvMJfEvt2PxbsO2c/1+5Zt/Z1ntbSQwSJTRU9G2tySilRUDoegeVRwPY87CMK8dXwgnLoT0kgeWpuQEP8mIxY6O7ktc1zpptjQtXYz/R7rETSoqFizzD3Q+dZ9EpHjw9MfO7sFHJNz6B/kuMF54Hq1+hvoyVuB9wAW9axAU6GLK7metrDkzIAXq521AzBbWpKBkmjTpnqjh/3YJZO8MCAOWzmuSotS58froo0hG3ZHuBOK091VWnF/oCax9HXyKUrcEYH34iHZzf29l9SaQtD8VyYZU25J3V8DhzBN+NtboUICrWm+TPnh1Ol3h7nvQzhQME/yNXvA92MvWOlogBiYYuAPixASXnpvO1oRB+a4Ia4gcrQEyYI7JLi04c9RM/nPmVgOshUael/PUu0jV6y+Nd5L07KyZYNhpHTm6scQo2x74VkFR7ef/cN63NbPvkdggZ2qJgohReJNZ/bZZ4IQVviisAjk6x8eK7byv9puZKfs1417Vss8yb';const _IH='2d6b1ac8e695da860c669b7b8910f862c160f3337eba92719e130664799f93bd';let _src;

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
