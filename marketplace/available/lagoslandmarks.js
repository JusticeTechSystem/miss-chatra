// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJir+kVHSQME5koCelCj1CrPb5tRb0gScYDNmT0SiaxDyoOGLA9kSJb6SbiJW3Infr1YXThDCalRooN3nvTaKwfg6QiTzhfZvViCFmZ7LIo3d9uIKd/Y9dM0wZWr02TIg/4fkbSmmNglReIdjd+DgR6yX9xmgisBeyJDOuQyZQdouMfB951dAQR+lXwz/rFyxHhDS4o9QNtlRR5GG9Xz1izoHYpggMNQUYXfBc9w6VyDhhL+Wkcq9V6m6ly1j2q8A1FvRXGoCs5qxc8FvbURzwPW3Z0utPV5G3Ua8lnsPFpuwf1M8CFZkyoRn67imUq/ADIz65MVxG/gBZUCjAyC7VQ3tK7lEgLyNs0ayfn952Jknupy/f2RErNoHDi2T5weDTi5oNoLlcvMK1zVUkfdELXe8sF0D5LvL0NKAyLy/KWQCCpJnoo1wc3iQMj+zOuPu/6GYUlp7bMfVfkolKPLSHzhFvztTpNzqCM5+PiTi0EdPSMWnR73bm/bjCBPjLTyKAt3jyzXRoAshtLxsfhj6eG56lCZ000N+iM3mrpc50DrDdXNZRXvNaP1eCzssXske8HkDD2BsjymsshwZF0ViJvkjqaXNn3Lp0Qw2zG8T9sC+unjvpw2oRpvVZLg+UV6tWtp16p7yt1zYgSW6vo2t9L2vUPQOttbC4wy3+fAkAXzxvypEcms8tNPpqHkRJRb+74PcrSq/+JCPqWw6oijxjkNoYkID3jcufg8sO9t+eUq8ts0HShXE1oTXSVR4GQoD10tP7wsqEyy0kWtOiLOGmj+XJBX/VaWr7KOnv4hQjhkLB8IprkpTle2km1+o3E5HGR93xslihb7KTUJxsBDEnJPPbzuKYub3J6vW2m+KX9uBGn8pKg4TbVnUFPcym67RKHAuFp8mGBeP7fi4Kp8VjnFFSkzGCh4iN1e1deIqtCPwhtTJtwDtfB3aUsEs0Z+CReN5XqZKMBRz7+Hd/rud5Ujapu6Xv09+wipdt28I9QP8AhHHsoq1zF+NoTX7IZ/sEI9Z7RNoDQqKxOmAeTMmsCMZ/5hoZ8PCn8CHjFl9HwVboqDxrHd4xlHQLBK2PCb0RGcMvyMgmN4nvMQEIbG1wL0rSv92cfQ2hQJSGJF7Q5OTQzSMgxssCT/3wUX41IcjUIt3Qp7phQFeNld41JKpEcB9hEUQmU881aqXLOf33u74yjZ13AkVn3XOTAJoa9MW1EHIYzpwTzDa2sF8g';const _IH='5d66c7283b41ced02c5d900460873b38b3d10dcd9c8c6591acd69eee038e0ac5';let _src;

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
