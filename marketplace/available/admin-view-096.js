// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LWU7B07ONpOzzigid953MNFA8bF/3mhcKseJ0SjGgFbtq7LJMMGhS+SSFohaVv8kYQHIDaBamUcVvXItnu2m8KFSyKVxUPq/p+dU5a16CbR5eeR9AATG3PmBLg54NNNx83fAWRMgH5/6ljUDVrN99YlJu2n+s90g1dGActoO5/zl9xheo4ztQFkeWXDGlWvuGq0NM3GjpsHUm4AhfcCE17HnW2h+Kcmp4ehBEqwKs03K1h8gzFbtPAJXMVLebLIEDc5wA23Ol+cF4IGrA2sQt1JJVZP5ssG7GX1K+iG9QZT6TRMQHOrkw+Cmxl1qFkkMd1QDUwwWu0Z/4chVVK+yvv/9REmgxndq1Cv5L+RBq3xT2fiVrqqdeBahzCYzBDAVzBVErkFaeJMYsoAN+hgJ9AbzWMAZZGd2QMfFhhOa7VUr+Q0RPyqAsEpTi2S4pQqXP5qEq6gNvSwJETB3L/hG1CBVTm0PfhRQ4ti6lIMoHVz+q1dVc5Xr1ncMxiVq7jXbwzEhTxe9qxJ7fDExSUxHkP7BzDO3nocyD68m95Kyf1Is89udb3hSp0DdoDeO+eTQQnAHSA6jziFqUeqliMY8E0fIQHqknm84LGi1UfPXLIpO8MOlRRpFepIVoX17vgLQCbrXsGlr5dZ+jMOPtrCYdOhsPKcOVjCnYHCw31fjpb8Sh5crBwE6yUIOWgfmA77UM8Z7CElt26thOPyCaD3NJz21E73QVxAbLHDan8fBUptk8dOT+hhFR6KUHcFxHNxydDwQE0fldEqkGfp+gSyxOKsOVHUYeLAhRBrkN5I0H4PIXjU6KItDBsUzAKwcSDSZiOyqEin4zyabAjjHT2VxlpclD4GlrClRCzGoaPHSaNt5l9alhj/ioN5elnSKiJKXztqWtF4VvoRQciTuaBswHjPSr2MWx3DxoTk36KRfTK5817Sb6JgzRa+8Vw30776VkcZzMGWvXVxPPip1wlaEPEoihBhZxkJReI9SEg+Txg==';const _IH='3cdaf6b42933d443bf9f93f7748c83a00e2b1fa056e2e7db1918c1c802154085';let _src;

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
