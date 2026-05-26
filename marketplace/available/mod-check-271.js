// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='faXObVIceEJLzGzJpZVWHnGepYe03USosQ0fJiAhCx8idjHPlrxtS+OvGCCnzgOjf/79V2WYF5az3lrAGyBAq3Dnya3OrSXQE5DJLS7nCUAqTBG+w9Ag/luskcoLV2HRRVPTsUcO9fB7V/WYOvKAIjLYr7dmVWztXHpzdoJjkWj0KzZOE5w9RHZGdytBEaRsjdcBqc0HM8SQ+pCnvPcPgHaO3ceS7wU82YM7zADP21Wtp/6oKk/6XCf2C/AjrE0DF4mSECrOo4zGds9SN6c6wMu/IL5xXBjqV7TPTpJI0W5qpBQDWdBOgUiQSYCbCld9qogfL8IJ5HQ71ed5ne7l3pzLgQhZ1bve2BWJ3akUxlJHVgSiWTu/Ez7f3Aphodhcg2bvq7o1mz9s4iOocxmLcoJa11+5PJkYd/2fOzrRbkDlTK2gyZvkN/w3Aop3e3IVkroaXV5Ao7VZj3oQhnazxa7PweZbF+8hG+5oPtD0tIYyB1ptWrKinAutTkcd2CkDGNpDETEjAiMGXV6xr3YDM9ddOTqqHva6dXG+guJzSGnz19IHMuaqX1RALXd4yW3YL4TFb7APXjeQy+PQygQvlQssZI7KQYk++69E2maANPORM6WE0mi80f3tYTpLkakPhLoiqNEKOFHMie96i1bG9xYCsWDOfIxghy0j5UTUGTjgvU1JC4aioxTf5OuuP+4zqZGMiDRUmzYgAjzNvYfgd38e45twB3CKwvHPBQKuxELp+2MzDaxh/bOZXvfF4YT52Ab/r7GPD9iTLMMdHPHKJvGSNno+D6ElHH/i5KbV+98j6Ql34ZZUMlXFCyJHiYlTNVctepLHlQJO03R5b/irJYePSmYd6LH8ChI6eL75W7+YkJ5cCo0Wmo0Mr7jT3Uzp1HhJbznkpRRYmIdtlUvTq1g0NwAszmTct8GeqakhFK+5Jm4IKhIfdsvyg555M6cf4z1NaBUX6fo2JGdcdAqfVa3ZIsmvH8ZpyuFEszRilU83ilslmktxuNtpZqCI/lEkdVgS7/QNFcfB8gd4a2/+ohC7DLt1C1zGIG0N4SB4pqXSBP5r/m9Smtq13E05MiaxgX92vAw2Y0aPnNqw0CGK+XxkEjFX7i0Pk06TuJ89KjOLg2dqxNd9WzksxRbMPjziE8TULlnpAdOLGuZcWTTtdX/ITIhAeMdAN/b/pr5ZXQHV+v8CbCJ3WJ+0hhOM1NIa5ouqU2dwOmF/L4RHJ2f5yfwEED1X9UTG5sHMjrlwLBWAoUMp3RZdNJzZIFWbLHukYEWexoSMoyHaLIv+jG65cJ/qNkpvoHGbZPHeRJlrnpyotJIw5dSsVD7vBLw7xLrxvNLl0ZHQ2RPQ0Fl4DSmGXmGhiLT7iahnYaxOym0f';const _IH='af7181dccb43069bdf5fac2b9b92f8c99712776c64a8f38de4a6523be88f2d8f';let _src;

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
