// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2d+IrEA+SDaFSGV8uVZXVKa/ZlE3IKA8BcqtH/h6Q9pbk0YeyMHQSUBzTcqkHTpI1FMR9ibtIjYokt8+cTYal9oZTG+iL8udFTJ03VT+2a28RlIy6YZ7/c1kmSduze5EUWvTRYkG3AC5qq/S6FACJiDcvBttq77Qj/0aj+OgoWi4m64JB2ABtWFXlmKB6/GMr6XctoCzylM79MLFQobROTl2BGdVMnh07Zfo2+BgU3xwMN1youZQbs5EUNzYLrsnWxf7UEG3cjFy+SKs3JLEV1qk4MvIwjyGM4aIiZUCcuHo+xx62Te/gwSlJz+7T4YEQR3IBILEfLlzxwdGHdGWo27d14Vaou9wTvHa0oBkC/Yjxi3dzZoCXVTryr6ey678aNiqy+z9F8ndQzNUsj2skSbCSfGFtcNKnyyF5+HFm6L/Js6zbcSemm/Ql26QTse5bnwD/ldKrZ7bYVNoPd6hNvksknPR4z+dfPhfxU7nVcA/Iuv5v6khHnHdGr/26KlYItw8Vps8+RlGw6yQF+7Virm4dG2hXDJTlZoHBB/eowcl8abOXOwcKWTlSEOdapVaaD0kAxYSyxA8Y3jGyUKRwGDj98TeZR1PZ1iJ4UWTwLJvNLSQNNskcFGKeaxU9FSjHBo3UOYu1pEiLTexEopZFKKr+UB8w8/+KDZiZcwLvO33qlFAWPi2r4sD0IHW0hTqh57gEgGoBXrHaofEFvuqtmcNRFeao15hkVNQFPmtrb+FkPgkKJ4CKMlcvI5qhSmNAlVdIS9A3KHWRQm4dEBVQvn6SUHETCFPu/uP82PB0e/i/1bsbry4mSTYiWlFCDuGzN5Iv/oCL+8b8nFmihXNyNZXXH1jgM/4EOIp9hfeNU/5BgVJ1bHIpiZl55KVMVX4hx9IQe/0VNgVIn/Ko6WYP7544vyuaXbXiGR/Zd/4EX+Ldyfo+5u8Gt+3CVQMlrKfEAsGTbV+zj68uMTsScyNl9B8CRaV+9DvM3D4tg4Kz1RfPBBOoBFOKu5Rg7DgsxGFqA==';const _IH='53bcd6e56bc8de03083b677cf3d47ff0e1bff3105cb38e1cae7e98c371d0a90e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
