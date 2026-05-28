// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GFsepkxBwavN3BDqLwWybCwugtO7OJtYfPOuhrmR28ycoA2yuM6rfTQJYmOAFUWzhR/8UmncuJZEEoCypg+tHSxlCsBgV+3rlZLcYh/RR9osU0pxGstNVPoWQGm93XTY9OE9zmn8/49CiaEZJiylC46YqD+uXonHdKxwmv+8PmKw9dfgCp9zul/N5nIuwBTmqWoBj2beOXvf9blWiESPnrGVWePb8jbkb6Z8B1MFABBwbu5yS2zaZM/604DOXhOXLRhKrCC1cyqICMbla65E+pksQ/y+fKp3mNvCOTmoUg6Irl5XgPB0PhuNzvfQNCoxnh4NT7JKRft8OwpoOP3q1DD4gzHMHwxEtg/np71UK2K7zrA00B8/PKISUb1ms2XPJGbguJqdKdIIGAAiYKsYSjKNjrXh68X0zsYFRof9tLtUy5RVZjutxKnDJqhngh02siSpd3bbhkVva2k7Njq7+slQbNlhDD52Ob05ef3VSezuQ25YwgZCjWao4DgvR3SDkF6lQE8iyoXLvSaJCb06+K8hTYNzIqVDt8/Loj/pQM5C8Ozq6LW+ZzpMhMDmrTu2nJhGo/fvdMtwLEYhkN+8+CEHKxCF2vpjWAs8XUGJVomUCrA+xv3wFlNnCkghFTocc6PnjbcClkMmL5D6kmZp3WJUJnJpNeI9Xs7cs2Dsr1YHBVLL5QLN7r86NxUD5CR1UKq7JSMYbdTuzGjNKoKKbg/nI4QWvX7wpdkHhcJPVkuxU3WRYK9SXGrEXAlU3/mWou156WddenN+p7TaFSbZwqHGDI83BVfgsti75EnO4U9tHhBdXylooSHjBZ4ZrdP8q4KfaOIuSiBgYEfPbxQNY0EeNCWDDJ1zz+WJPzYKmHMT5dDPV0XOBs//9EPX2XZsTr5EwvIyXBU0/JX8h/BcyRIND4XkoSKE7cR3QcLSvougyUP4lIT6rI1CXgQvCGK/kBv1VI34EOKUzZ3rodSsIGi7+gc73B8lvl8W3iDlaCoqtDoxX6a1TmdxIhIuND4A2gIQ1dZ2CD4cVCTM17t4A7Ov+SPZvIOISZe2n5Jbj3ec1h1ggqp/Vc/7hOvkTaFdga2AkGj5dJmClrF/r8M4bp1WS3nh4zlyn8p5ONFM0NUyXzuDFcNGCl8+OpoD7nUkpmWL36F9Bcmi2SFeT643BrQJzNgj4JAXGOaBeSWxrFy6BHBKuSzkk7LTKqz1qkhaAro25Ehd';const _IH='3164878c60a5054d4357815be911ff5a4ea418bfd01bbccefd2e147e18acb291';let _src;

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
