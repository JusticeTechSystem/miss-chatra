// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ESHQrjWolkdgI4DWGViql9misR6sne/U3opwoi3C2ZDkX8QoLfcsImI7yY3oQKYrBwBd6dfoa5F/LnIW/hSSG7DHcFQL2kc3skh6tDNR5U5xmr1NgU9qt6Em0N7I8Clggeq7tbL3QDAudFiqbQaAV5XWm0AfvYP0+TyYXTBe1mq8PZaHwOfpZCVqASekXISz75zWdEtQ8H4KLqISQFXUzx4P9WOsjmAysW2mhac7ODjMREHP7y8jRO86ThwX+W2CfPy74rQq9xKso2gtQV7PE5n9FtR9LWmpdswjVs24+6fcEYmDrq48iRKWysf5FT9VITNFWfk8FmeuGxhB8ca4cTBb0pVF08Be5Il80R4GZ7BuuS0QCdkzXl/JnKAc3bWM54/Nghl/ztSYaUAcPRf0dnewtm7iyWhhG9Lhs6oODIA+wj3K9E71vBeak/H4XZfrDcdSOi3h7mHOhnStKeDWortOKoapsx6pvbpI9cZpYrLLaPrthuw+WNIo9wWl3zFwXZ/dGqj07tgja1/UHff1h6hTaNvdvl/hy2Qh1MtftpQ6W2y0oYyCza0WGJFP1GpPhVqVZ6Qlb9OufByFoC/PvDiX3bKakC5r1SLuLlg3FgkhVvAZHk9JP3f97C9QJS0JQB3kgXbhDfv+MjYQ0R5hjH2OJpkLNGLLRx62m/kIbubftfxYGjk768Qu+fwbbspj4usMd9UfH4AbkEhVjp/0rKda6Oau3TnV/fhTZvDtKNviseRzqxRP/ViJ3+VQcsu1P8gfXlVJ72wjhYiAd98tY4wGz9ZdEbeuMn0TfLanATb4/30fUuHocVchSnwavfLADzMIu9ST4lGqS4vhpbbxpEmbr8uXk60A6iRCUDQrtAekDpF0gC0/ho7hneT+lgJ89i0HT4eb4ueOuvK8mRA4Yare70wuAWNapU6E2IIqkv0i5IVz+Qm0W2xJ0i0XMw8VYQqZbayiapnUlDAdteA716+eYfDJOa75zhY7Pkmq9PmM+Bc1dHx9SH4IQvXHQLnPFX8MqfXh6HCZ6cQ7iV8XjoqaXVV1ja8rZ5l2Z+x65wgChw1lTSpt2715mH17KdtWKM3r2JDjq5Ka62GpvEt3stokzQAtjvbwV/IVfsJDjKc5rrjeJMuiQr1eHjOhwSoq3MyUr/JxmPFENASHQ5FUrJeFNEG9ruqWK9pOWtrt1gtXCkDLNJH3odAAS34mX5vqm7kC7GJbhY0ublhuP7N2VY48uK0BzB2xjQSphJHQ4GuLll8TfZwfcKrL2o1EWHdPhzCiZ+kDNhCzO6rU8Zi1oFERwt6YTy+89ULOQiUu/gLze/XYspfLawNev0Gf3q1KgjN1l+VCuZ5SN2ppVu9lMZP5YWs6oV3D/XBJSxAR3BPCsw35AbVmBA==';const _IH='49a47156bc0b61c7562137d25cf43dd00a736437089077a20c12d3643e424b3e';let _src;

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
