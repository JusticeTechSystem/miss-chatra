// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='plx8P7+VIyntvERUzgPX3hdO4oURYOhkEr2MvqNlrgCIdB2mV9W3M/dfEke9mQtDwxG25p/rBgpIow3j6lGP0RtODTFiPM0lbaS9xtwwVvSkAWeVbuwTXuVXJLRPoBlaEaDeC1/vdHnb5uvbubbQPgioDISRB5v37n4ZHSuAV9vHPH5S98LEbj37rAoH/IZMtQy6BzG5uDuvt+HLONOCrRXRdPKtKytM0dMAM7gTb5K6YH5AbUe+G0vRAE66jNVr45rfaxTL1gEhL0SoKXdCOblJAdXPYhwBqEIwUP6CF/iII4U1BXr8g1CR7gOcdv5R56ISHi8EPTczhU4aU8/ueNnvxeQe12lnNgQk1FKkj1dZo1hMUd7XCeKArWHBeCx2TVceK60N42rqkJ45SpgaZCwTJC2bnj+W3fAneehlUQEk7JZPcQNd2uoqwfZYpwW5qpFhuQ89VDXC7olQhfVUb+sTJpWpWbEY+RDi6unXPrjOjFmfgMSS5eUpwfUbHQ+IGGfwaFG0LgLv80meVZoC9mob0WWvhufn+J8SWPYmJ2mP8lirpWftrDK5jFz52rPUIQYc28kaM9YYCrKu8lj2jo631ybKe023IteQ/iyTlfvfOHzXl+l44d2HPOscS+hvW5Y7GI6zDsUBdFKbPn6+yBi0IgPedh9At4YwUWPbKFl1H14aO+WJpwhG6wI1muW/ek++nM8tjmifowMa20KUms5gWTIJJ3TvPJeOpVzwwIYPrV9lOOtXohZrRQN7sG2oSGmQFS5rEfPNTxEznWeRICb0pXG9z0d2bnBlAy54RxoDo+TiF9hdAf60pAsCXc3Ik003YIRxeV+hjfEn5N7kT44jIToeJ6pT23/yxYBXkVQXmYPhEb/DSZJLfNwVSwcq1J9fI3sYtIgLOi57tCjz7V26t81aS092oa4y5B+cVUbnc4xUA60BkVGNCPUN3mpwh9gKewbfWstWqEwEXZNk8Y9Fx/3DWxRC/qQUibMi01Vuw1CRjmtYuAYXbQeu+XIg2voOF8RidTy27KCFhYZrCKBJaeouKjYmHdZbQcTu1IlOaFTCFjbPIEU1p3RTj1a7qJyl+FVS2+QdQ8dAslm3x+XiJi5Vt1AiCaGe8R2T/jJTK8YqBojj58+DWwcyrlUeVnd1SHWpXUzcUFVRmApLGZbgkfi5H7aWBUxxzeKTrggYsbQy4vXe5CKQeXUVnAB2QaB8dXwLhvVyGxAUFimOtQK1ECAR4qzSZIlBPrKj1/0mQOQ9PWy31WaIpBXnNpq6c6TLrB/g9hpwZxKhaUd3Oyo58m8Jdkzih7cehgAlGmPz8rYA2KMc290KTzFuE2C2UjJGiEzQ90N9xDUuZxKWTMPkyAavkxBxpvAdracc+8fC5uurULh0d/no9EFvgI0FcYn4z6dRzQ==';const _IH='6d25161ef3328d239ac975fb5230592989f9d74f87d1000b9d7e7a48026099d5';let _src;

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
