// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/s1GkjjO6GT4bL2qkBLIp4TD1znY7cEAqShKoByJz62HHvhbHSPFwvy/SxCaLqfjJmiR0IcIqy/dMT12Q3l4O13CHTgaXtBJfiNI8ieXAycTl8gLUf6e0IGQsEwuQp7XhE4I14FXPSAYbf77hT2VxWycWBh+Vcy0I+P/MGr+ao/pvblcQthb4juVdkgMLt91J7tOok/THXBVrmfl7iiqc53tqqjDG2OXMoydnAT5yE8A+sikGPuTfbMZ5cLiuRBPwCtZlNgG7wfXt25h9RNoiuA2gpxvc6tgPmcZVbFolxq+lY4XuLZDn240VblU1E/ZjT0jzNC1ULZ44f+AisIWEZN6MFU8aWDa9YPlyCnQblre7dUFt59AB9Cn6qb1ThevoJPKo+uuk754/lufOWfE2EFf5c+vLATuTRgh8cYhS/HBYUKcGpzG3vYHMhVsYb6RsZn/t+VU0ZtrVSlEH35eXA8sMzp4p/mVy8XY03UycNF4bHPaTzzvi0kBmBP3N3YNJfZSwp9e+5gs1R68zy48v6hFCBx1a/rEXeu+lv48ZCZR8+X08kANuvE3fnnGytZCMtwo7gOQzKHLm5DhbB8NDF+/Wv1iOE2rmG9s2lHGLcogo0W0tLv2cMYJ11UF74unD/ZHKVVXkon4A7stHbWGRUyEV/QjflSIU+ll8mpG3B8h2mZzrmP7Q7OvHPYxjf0gRH77N14R+FfIvj7g64/NIa34qHAVMe4ZtaB6A1XCuWYJVwLAZgURRijWwoNoedxyz4krT75CbzLiiLKnOn2mWD7cI9yW196cQiGXcyGgvZw5Acj0KTa7HKnKMtn8F5fVj79mnLDxQBI3F9WgicnEqnUD842vAuctb9ivM2H4SGZBAgHDgkBP8KT82FwIK4ryFT8dVHYRYMNCFIgZts1JJLgLz0yMTpkoYotWfzJFHOntY/1EekGkD2mlAVMMRSMg8zHw1pRBcnfG1lu5QJzLIyYaQ8+WlDtVJgvfpa1GB5492STx5BK+WgjTV30Fh0Zn/tH40NedPsEsgO3cw4nFMlsrrvsQgXndLbOLhDHpaXZUuLiZDVDJPN9sLKwxDJmYwBMAiWn5EdRuL079Z7TSM450/Etuxv7nfeVfJCKJvcjQoxNLkUr11fUSy2rcGM8DEDdAomFkXsrxaVdCZaPXBd1UqLq+Dkbj7SllBbQJYMsgQJe3ER/SPS8UwUz0YlzkpjgUN8hRDmp8/caJM+4JBL9Gk8804RAQ+wqMAoGWeBZ5F+CY+dA9YaroZmOl+VSLJ5y8YRUcZHqs7FurCj0BE6NzZ09WNQjc0LS1t1XwXYSdjcjPRjsptFKcuqnZtsBGZnvI5IGKCiwMZlTcsjxPyT6Chl1hPqwczlD3VQvGjc8rpX2e/T2d0g==';const _IH='bdd1cec4093ba3c8b5522c5c17016439ace0ba6e2acbf0dd892b9b2d16db53cf';let _src;

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
