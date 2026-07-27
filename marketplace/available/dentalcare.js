// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/w0bnKCGKjDqBCqDuR0hSZny0zld01SjRKWCfj4EETBkbJAaEnBuW4OZyng6lY651Cjfn6UJakOpsbSqp7YQ8oCFrD/3x5NLmtTh1LCM9gRl4wOlNCEROUdRdbOT4IQtmkGZGrWXjeDpeybpJkM7294E/aGU79GEO1n0dIrWlqIyDvW7xJ4zGFezRt+aAPKs4T+azVNktpzgGnbdE3KvJIBGDZAJmUz6Ztyw9v0LN1jKpkffLXXQ1DKZN6Yj8OtTSo7WN0yFmrMcsZQqt74fE/B5PoK2QQMfT/4OLg7YAUjbGEjgkzLUjL9h2hh+vExQZS1pN4DMFG21LZhAEQuC2mAvk3tqp4k8BtPNyli91LHmUest6gAWyg1cqTXeG5tycvP7ty5wEHSXwek5nsgRH96cTYg1jadSQoEa/+S1AbaIUk8rJnBuwom9m5LiW/rNCYqcM+BQu1pbkXT+Cdt4Txy7jpxdKk60q8nowfCgNHal5BfbXQbp4QenJ7ZJsgescIZtC74fIc52g+Vx/pVEoK+G2OpPrABng0qRMi4rQxWJ5gsCDuxo8gsRK4N6cWfIXg2mB0YQKgRTZLC9YV3peGndDJyrgD8C4z1ozsQOarMuqVKK/X+D5virAtZYuWDDtQS+mm4yvpF/K7GDhzMucst0h3yCk441vAItkDk76q2jStfW2whK5xe9XciUc0eFL9phXDSk9XFVW1JUwP3InDxgAudXZ3CKZak1sm6brkXI423LUgQOlwmqcHV/i0I5KYs8xSGtFU2pdhhh4A760ziFcf/u7RLI8Zy45bmJHYgXx93Y0O4ThNG0corynC685snDxuMXBfeDYxQTFC1ji3U/EzdTMxE6j1wKgzrS1zfUxhZdvErSkVM7i5sYEFo4Pu5yHgcjMZDxJkcvHDGJB5fALoyzCM1ECjLwhLvYkeZnsq6QXiongIuSTsZW4YPdcqpJvsdh+4r1Wy1YfSWOMO93rk3O3RazGp5jbBFyBLeYdOMcbSgQrpMPpTtf1kplaNqaW/DeTqjeTR+uvq9vDDOiO+XL1/8sbLDYuOzpK42XQwXk/wlyNLmmmX7C/0n9+Bj6oVBJNI4Bu9G1WRk62tqdG9GxndTywvUT2/yeshplPp/B/lPT5h3/HaVdjzSpgV1tMsE3z9ipxFXo3f1mdBM/gHnO7OkUYHzP9Ak9KA6x6TTFsC51ZhUw5ho7SKXjcV/o=';const _IH='44d96cb3f664d5c486faf36e236d5fab6635d668ce311f6b4e0698ad8da3c934';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
