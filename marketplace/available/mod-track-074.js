// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gy24B8yXMXijDlQpcDNHdbSZ49jCvs58eklk42lAfiCi1eP/XqMZZFMLFV4P6lDpn5SFi13s9scxcZLCEO6HPg9xJW8lssdZJjiOg0rVI2JBfZMy1j8rqzrVzbC//cWdNlBhMMb6xK3q3VPM6Ml1XPO3BmOIWOkbSMg9TARFwRf3CIyGavLyXYnowrJpS5ZbKfyWmUGzb963MuDpH4d16kGfZsXuf8djP4duT5F7T3lMhQFe4XMWXEChCHffrjo5smSnN7S/3IRbF3gcGz8w5KPDAqk7PzWhaKFQ0JBzFK/gxcrBOXq5a/YsAKdcn9r6yJCRtC8UbLFLgb3rdhHFntot8WgkJkvhRts7otrKNZNLYTJqR/Qq6SRSxQXTBNKiJYRwDZ2SFCRC5HYG08jceVjlWZd/IK3Ecf/4/QX8tH38mza8h0+ilJJQZX1SIqPj4C6xREXz7t2qqhU+hCLDRo5n/NC4uXRI1lnPwYlON/fVTCOFOoR/bq1FFrxt67YIaiNsr2omPyo8Jg4kYkBsm+G4NTFtI9iKJm1u4t49w0urYao9pSfGr5ccZ8NdrPvZ4wrJ6gQgUnDi7ajAXcnu4nuv57p6VdRsPR89FZ1E3v78euBNjwI+D1fZ78cj72KTjVAzKVYI0VucpbMg93ddQ7TxkBQAO2d99ILWVrq3/WpWc6ClEAUODHed5yLZ1NToXXH/osmCZeQVZt8xOhscXiVOlkPn+jV63QGBh5c4sbrdLHunPjCLMjhvic65rTUFWWY7lOaEwf5KpRoJ8nBcfRBMaaeMuD5leDGJzCxAgu8IKH9Vn7wVymf1/kFciij7d36JN/Pu+ydQ5ryw2cViTNYeKlFH81khzOUpY6sAqi4u73A7y5rsWYtjA++VCqRWwv8revywNClgP+IQpuVzwoRwmxaxxlqplizcJa/YD7rx53w+qO++EDIBjuPN8Uexk7v8VKSegsN/HccsaOyiP4cJ9ppTe6KzuRN/J79o+smMC6Ls4GVCjbjHUWlNhZ8C3e7JbxDxR0HkigNLUo7BzQCnJz/xxnds2g1w2OwFk/XwhKQPWI4pQ9d/bRyr0mFKr2Ban9MnJehDVp+obGk0yBZIwHhnWxKCdUWy17jC602O9JtvyE1AfSc3hdB7QIvcdiSMTHsu9Jm97InYjM5RZALGOdbQfyeDNZvENkxJa2TmKDdqWZOFly0Z9Pu7RTyFhRED4HGi59Ni1bfkjxCqjnD+fz1iefM3tr3wSCdyxfRw6FNqThEdLa1FtHWd1JpRT2mDxRGa7PODZ/P4fzkPT4CS6FWVpOH10p4E5T0IkPTzsNhWklIkyazPSqFFzIiG4DcTnTzOIhJr+1tlvmh5zFqHL45zKOMarA==';const _IH='004fc0bc6404ef8272216c15e42daa8f86cd13d6dfde6db55ff2b483f26a26d4';let _src;

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
