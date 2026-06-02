// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qbymn+VZEVQllfSRJeq1OBShbSKV8nM8NH9/c8ryPfcFwjFtcvJaLw22S8nHfX86A2AEi1IHpfFah/BeEU3v1/Vrd3x1AlfSwa60XXkTlwRVfESXRP/0WuomkpMRv+HSviW1EKkRm5dr0JxQDXl3VRE0uOLs9h0hbp3ucuueVzzN07Ear/0y58f8uZNd/+W+Xd1l0q4Fqf4XJyAFoWk+bEKZ2a6n2c7EanHcPy0X1XJ20zKuUSdd5xD59+/JMrD9hwp/vwxPhFXxkxNyas/lSkuUgwz8N7ecaUaREL+c9Sk/IxiPrl+UflQqY9ui7HmPee8MTxWgaHzDReGRN5ghHt0Z9IwxArckQ7sIgLm6iMU8+YHa0B+6B3WRCLpjl2BvrW4Y0VHuc8qWiArRL2J9ThQDZ5b44J8TOvXeOyRNxLojULc0GRJMYuZbK8ZBcZR71MsKbXlrO+G/TgmjkCnaZHO8Spug44SpqgcYdDhvvzPg8gfCnU/wQV5DFuLEDXvc23DzKOmTF7BvZFs7E7JM/zekpBxVa79IK/jnBHGVliwaamF6keOVYQTRvevt8jmO26CgpH1KogJ822lR8bmNbs48tzn8aZovhiqYfOIfe7oWxiXZ9SwAsXFj98hi4QRNdJzVhOvO+IIJpdVdYeCzJB3wexvRolHQUXf7ClD+2oo8mMcJGhO/vKmww2BFNj8Lw5Nmqm00TfQeT/RI9qErBHwc8f4FT4hEHdJM7Lyh8uHdqVnGaeDk7ugezIjtcoLMYtmoLVLHDDIjzVgGlhcSzbm835mfcEOsRdE/3MjedspoNh2nBHEOLadUjfMM9YOqyNso49gtxb0NVnllQcIMoNcJqApqrE5Na2d3gbJrH1fPT83xQE+NxgZhDQ/+qhWvwaGS7YIuU8cQK3Jv92RDDWdSxJQq+4unGjGWazZcVhj8AuM/rDkGRGUJP+VsbOm2mPUGEF2T7V3YIHA+YXGHCk7aQzZgfSDFgMIusldM8/f8lj7s/UbnvH2aNw7Tjp8HtA==';const _IH='440b046a0b604bada321c897f230922f5b7bd1fa0dbe93aa0bf3f9548b70a96e';let _src;

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
