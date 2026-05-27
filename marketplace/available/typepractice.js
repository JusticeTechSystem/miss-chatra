// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Os7kyuyWx98+nVCGRH/P744nNe14JUCwx7Nu4IrQeqyEJfTdcW13PyDp9cyXsPTXa2xsfM5FgJsW6v8dOg6/BKrTfZhF4u8qL7B9auMK1p5xp9o4KjDcSoaERB0fkPlZcXhb7PqoToDmgrI8yn9Ij9z4/GzOEaxMPJ/Jogn21h3hwlgw0OO7xuf82PkzoXlmRE827Kec63fFdzJFE7BxY7zJKtnqxiJ8bg9kxyKdnlF3Sd5F6a4WJVFsg0sgolQlGSe1u5ySk3lzsFsIFPXgHLaZusmeAYDzW2nmSofcMRl4xwNMvBSB3imWVNUiAVHeY/crbUi6ux/dN87IGBG4an8hhMF1FGeCoOcNIXRorldMKAdnmz+cUq7dbafoWM/HLBnkpp6HMaioklTC0v42DTG4t3ahAv28DK7smhkrMjNi1NxBJwv9EM9oxgyFU4FTanOWKDk+sT2SX01+pOgVmAuak7g8Gy008PIXt4/jM/Df7tClec6aslQtT004TkNS6W0mzRWUhKE/3Zk2h/Y5hp8G21hIub922vKJX5lcqAffcABPwQwrfWWw3x3iEhzzxrhfJai19rRmwRDPUu4wZ2/DZ3Q3c/mobETc5N1KOK2qGxwF+15x6o35pfVRuOJeBY4xQu+32Dr8IUVIujnlzns1bL9d9+dN8okhyBtC5Mq410nbB4WLCJLlieIMeOi74wsVEeFVEPL++lE8dmLBudHUrEdXLkantYshosFccZ9qxY2MHgPB1qrHWHSate3gdEa43UOX0jXBPzKZ3tufITU6z1/9/dxvei7LNCqTqR41y0NtYigbEEtQV8hKmnJD9FBSpTIRK5cfgTF7wjpUA4YchunbcsodjRJCv26c1rt0B25CABZhNWTx0L9oEDXxm72UFpV9puuhZmsXSAS9a2FUL89qZbYPGrlo+xE/t+TcZ850WxUAbfEgBxJW7rB2ySH/Md3nRlshBZg9DViwTWVmhVwOnWeK+n4I9dE2PGo4XzOSH83NHBA8X30g1YhjpsbqUJeSDRAky7G7fc/xHIMtedhr86IxANZHjYXGNZ55sg2qLu/5e9MLklvfCcNJkfBZGJBdNmltY7X55QiKDvUYBGD7cGMoMwCRxXMGQI/I7t7RB3RLljH3tThTj4XXubWC0Ptb2ibKdbTFO+apjGyFOdWo3QiWGrdsYeDEcBKAvc7+8igRscsOiWT6lgoInRExseCw';const _IH='520e944bdf393b3f3570397a563afa53e56c6613465b7f4e3ed67d9fa2bbf8a7';let _src;

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
