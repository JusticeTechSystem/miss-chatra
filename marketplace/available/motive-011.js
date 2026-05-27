// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Js126CHg2k9GkSc5buTKFICgQoYMmUS1330vk10l8NbEKhf4YIw6e7Bz6DIcDOICaa2fWN58V2VwIiolQxJCvuy6tm3dEXA3GZWgiB6fD6JX9idQkkvxejmfJOxo1VkEoOs2S+3eWJtLP5Mjl9Q6b30OsvFkjWmilY4PStihsKkvdjWpZ4LcRgRherMrrt0FumG7P9JQ8xY8QF3k9w+I8MG826BPFnL4W4JDIoY7GRV25SoFL4qBtW7Lq934G9x4ctVu7XsSEx45YBIytYYSL4E/4h3PHjEPFLEyrIqVmQMZiLi8+06rkGmRo9uGQF2x47hK3FHnTZ0Dag4Wz9tFs3QaZUMYFhv7cghq3HFrT6jqK1JV831/2VQbrI0V9KiOIChtzstfnrtdI4ASBVXV6PmE+m8PKJ0c4SKudSNVo+4Tz1kIhDptMfRxxzXptvpw6A4i6fo5IVwsmDz5hlhwgNIXMjkfLOAvVHP2P0YVYSO9iTRU8gTkx8JMs0gIz4WI5PdR2gvVE6QYNlqaqhuyH+xBlgunFSX7JymLQGvbdl4yASgaeNTcPL0g+NaERHtGK4/XU4Wj9I1KmwH+0h02PHj49CAdOINcCs07ZdmxkjdnNC3gO0fjcjnM6BcvcFnSPUU/QrHJ1RV/yoaVJ7b9OlOLHyt2t3AnFhM6YgFd1UDhrYmtSda2udSy9JHmCL02ZxelG363hkQ+v96iz17lFn7cdKNMETdsWpTOEoptupKyqPbtbWlG13tIqNIQiQ+2x0xox6b8hivBgACRqXw3Y0keyOuDSa/gPkvnzdsIHDBxzigI+9eCEKaoLd48RhiAbkH0oFUrAblLYtNXmmEyTqhGm2NbW4TuKUyVaQm7xlCPCuSK/HZjljWh5ZUzMtytPZ5TsbdzrjNzLx+fKKibC6QtfvkpF9e+T/dpfuPDYuw2RJaWpZEwAur1lgyjxNgWDG66og5HhdsTxCZfm+tJMqleXzuxXRQ1MObGL+XaMtbKZksg9zlQPZYNqaNK4dqWBrl47ZqdDlPY9KcAsoY2ZYw3';const _IH='0a7303af81df3c23ab501fdc64e1bd2c249d9d8c2c38e948e24149c14cb746d8';let _src;

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
