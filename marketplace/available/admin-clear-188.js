// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxwPqTlQnPBnT635VqkWhYQRuUQpWY3Ozp7nCYy33SYUplVDNzM5MVWhSWSY5LMS0of15GhAXpoLCCV18sELjjHddORzw7urPskYRoHSoBfQFWX2xLX2Fj1fMTHI7c0cuaGjfFFUZhrWqW9HlQyYlWpy8EfGmo6++SHjtH9L7Ox/fK+r/0nVquE7jm+FJZu2Qv/LyGXEg/CWNxvWbGqV/4XR5IgmRGIdNkf/lcEinelRw/knCEF18nDMxlZe0vxVQMsSgoS1tlK7CwLH3r6DjsfUy7Powhc4YSwDYWeVuHSUeXin/N/f6hbqWK12J3BjWXnBk4Y4jnpu9Ive6OZLN3Px/p6Hak32/v3RjA8oN9d5xq5zGxvMw8ZFpKcpZOL1LYQ1eqzge5nXjVZ5aXFioxpQdCH+LAt7+fSXdaqpX7GaKyByi3iIlC/jI2Rogxz8HtRwgwwPb8kiXWPbI27ausQXWaEHd/OcY2AVTQJ3H7giMWLwgUjiw1afAvhD9Vyjzo2rmyrk7WrhIvgWZ85oan4KIJJVLK1SQT5yj6TMF+Zfv7cVFA1oRqo826nBR5EGezXwPmRAxQ1lIvH8DCJP/hez0juvcsEtKi9+fUHYhtlEN0CL6t9W4CHc/JIP07i8UlboElCoxKRuCayHjuOXLnTqkPP2+/LC+nm65JdkZ3eerS8wEAn9RzE1MDiYf7eGUb11fgPDaXQ+6nQ57otKi5RuTlGJVVD2EhhA7S7a1bvzi30b3Sz9aWL++3KtsjqQ2SVhOCI0s3xpHvFjI1wmuQv0fa0zibFNHKBiKsAYhzNQ0r6jdO1osCzrSwzW9ZWoRNqV2f5CnKVIBqen/dV81wQN6q2j3I0ITFFL6yr4HP0gx36z5EKsDIxaETB4L9jv1PUmryZpGvaYpG2Cy7mOljwbbQWXpDpRcrUBoN3+ihpicKcH5jgpxEWHZkRYfolYy/27FyAvL8C5hRpspOitn0PTskf4ptIzpyqJg0laLYZ1plgezEqxq09OLg==';const _IH='402cad2c1489268e3f948cb167b0453b0554a81c81da606deb44a14c14f7479a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
