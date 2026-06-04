// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9E5b5446hOeg0mCk4PHKTumttFKEMiGsnrjV9WxEVNzyf0zn9//3IK+k1PO6pMUKgizPbeGyUN0ZxAn6fkBv2dZYCrYe8kNq1mKeU5mVkNbnn+donEre1DSm2cgAfrT7b3fkJ56Qh/vstSs+vK+Hvetd7HHBsxhNAXgpKJ9RWCuPNprciDYhuZhm6erBk5XPPe3ko3jep9fh5niLbFZDstvZJzEkeLzNXA1apIC4+ifJFvPpACR1kbKkEnLXWT2CGBP0MtfxItEwlKaAtIIcSFCatbao5lV50tNOjUfQp75QK+3fI7ps/hhcYtbS2TmLzxqIrJrE8yCuOz4eo9ktFCjapuuaPkycj34n6BfylW+JS1KT71jHGpR5FuLv8CaQVe7VpwxELK/q/u2xr4DAMd/SpUORI9cs0TgRJyceIaAXkhP6v/i/biE1L+pM3225NtVEyBuryX5fV3JOSsb5QjV5h5gKlf27O7B+s9aD1pOfMyT9ZHH9atjCp4Oh2eAs2iZ1r7FrQ6QwR5tR6uxEmksj97Cd3xlG1l+y6asd6cv3uLkXcYdqUUacKNhKODeULBZXSkP+cDzwNmWxgRYl2VIY3vueTV14wbXry6EcVhs874xc8QbNZpArw7l9nXk5YND0ZRcAqxKKuIGYuz18H3VRWFEEYMJhzlOB1kmc0d0oEzJXjq0qdohktY14vgvUcouTbBkY+kpiBnzUtgoJ0X4bEHW4ATG4pN3TM1FJSKCL7I0aCQ1PvLrad05E+k3S9u359RRi80lmvNWvf6fubahHNyd4ffZp/z9UplbzoxCiMNKfMaqvcwztSLqUfJnecerl9mFlAwgkvofola0rED2CMbzDyd7PT2J9AH9v4RGy4Zr5zQ7Y2357fYLkZtVLI0EdOIHUR7VhXU+HavVTMKWRQMGMg1DXXD305mmJFA91HocdfZYLiIOISu0ZAdo/syixrvcIDmcKKDeT47OXzYumqHfvMqncpznuDSdl2BS5S0xweTbQzkIsm8GDGkSB+18D0J8dHX8nnHb3isjyGCBv+6VF+X74CxjI7QN5AesUVRPfpQpKiLTTSx6wNS2V8IhAOCspbY/YvgS3gRvpjJiaj+KdL/FKeRJYnfutxfxoNH5+Psr6fkILd/W2gPGM9AZ9CMQN9ERBPCK1prCumw+7f4LA3hx/fkSrEmDZ7MLSGwc53rJc4mBndhMHIw3ZE7BK0W5Ul7fv3dRDNVcjWLOcbSHITxnjNlRCCKkwthV/1aOZmABl0alOWoBN7YQPHpdQTcXPwaVG6869INIPt69YRGWpklymJcdF8UJ89lZNLk0e5zGf0mOEdnsuA88hMpp6kMeZh72Cv8yhXXxLhJkh8BvOPvYfggrlOnjM';const _IH='dce50e2a4371b00d30bfa2e10b4dbec3a2600e4f35b4049785f84a1e9ff0d0ba';let _src;

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
