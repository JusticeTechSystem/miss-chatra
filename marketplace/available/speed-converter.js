// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cXa8r8Hl3LeAxijH/4/5rdu00kFduHOs/vuhFZCkjXWtdDKNBzMR0zI2PQzNuXPhHe5tCayITzG3uyXTPQ6XHsK3uDVZyxq3P/i2Arq/LXI3UtAUxOyJEyAMvocBiVCQ05wpad9/xawMxaSmys3HCL8oQO81UNrrWiQ5fFxixuXxG4dJXYj1Z/TeOoPeZ/UhUgJuPPfsiqr9W/iipjAfD8EPn0u4Ec/5GXCj9XQ4ISACESmqSxU2HYDaqPj5+ZQO6bGOm0igcX3uiCHRSqehrQOGfLilMNnr5uLxkyP9ZDYpBJuCAQM7KyNM8EkqVSrXWH6np+elinHkTtKk/Q4mj5Djo4g2yUvG95I5X0/VTonN/fu0q2mISvnhLZbsPTTk69OcfC7nv+ZSJAbILvJzx9qxXP82i6kq4n7Hi2kEuMfQizU7zZ+0vCISP005fXlGNOV4116qHcCVnfT/0wi2fUixIQVPS0wLklIYl68fk4+FNlT9Ub8oLSjKvEhgRTiDDYjBxid7TS9vFC0n9c9zzmfaoTJ8diFilKfdcoPjk19RIGZc4Yw+0xSsQQlLO+7NnQJVRiIjKSZFuW3W7+Ge9o56DAOOCqmD+v++A2C4JIoV7bbze9sAMnBMKUGYF0gBgf8+7Gmj5xKwthUlUyaRByOkhkh6PRQaLcAS3IDxP+FzOHfnRT2dWJ3srWFd13u2JjRD/ISPATEBEapmA9SHDIWvyAK99khYJLblYDPR6mCCZvps+oMsssws94R2jlheK2LdpDCjFr3r6L8/9s9I8qloJsbOYkUNzo1WVzB1tjqFcBkLk66lVbTKk5WqhHRlkCnFOiubdISyvoGP9qcBxx6hGzhXe5HmRT7IC+Qbndbia1rbJqlyUpn3m/VgSERYB+8PER8ehpOHRhq78EF51bXcpcksF3G35cYkifNosZP/hwaPxbBUkMq2Y8JCYz+AIl3zy2c0bgxWsvmRyMtnoDCDpmf1IV9pukwBQ+xj4gGv28OMLMOGub2fFQCNvsFfld9uKwzRIkvQgbszjd9Rm/4UmvRZuly4qN2X8QRvRMHkHbJqGgdcgMibeHcs+g+GUdLlRlPVvmnvIbJg7JvQBAYAlGLna87VAi00RQPT6P2w0Bevzt7dAL0PoqItOUMIPGR9a8N3iOH67K3EN1ZOLMLX+swlNdecrXr2mPckE7DPgi+J3KN8BhGAAUaWnLOFRGWBoqT45UcT0ODRdf+K7ksulEjMKiF09xDR4yd7sBxn3dn8aDcyslVmytXhHFACQwsmCfjG4pv9ONQl4KrXGYfRIMFwpMbrH67jXx785+G0DidNkKPS4wphzR/wmKZFQInm/LQQ1n7f7AICmpTJVVfX8g0zuHpbov1+5Q6iG5cn9BwGyqLBtlqG9JjYht2aoukJkNOgFhbpA7ALiporNna9o8AdsD8BsVgsT5mh2rGfveYSJnGWaj6VXVDqhGCXsPXKkGdgm/KwnkeuMFYpBbUW/w3HM+Miwabml7kxTdw89rCFrzKUpL202pHZJG6WQqLgBWAqCm1vfSy3ctFbTaLI3LJHapu3ykUjXiAr3CFAXdb+6ffSMenifqQEl9b/g2Yu+xU27L66VuvjRYPWmICH38Ilb/LxxUJ51Q/DlTecKnbWXAL/G4PDR0E8IBy89j/zxTHLc6asNfBZOMwiArCt5jr1TWBC0k9eBnxvxYp5T3NWp6+nBjYeTQ==';const _IH='35221af8af5b34f48420f749dd7df1c73020f3ae0a40cd0af68dbcaf441497e3';let _src;

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
