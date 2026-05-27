// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GT3oOD4bS1qY7Y58vHLTkzpW8Lzo8z4Ds2WcUEm5I76puK4V9RYHL7X6n69e3EomK9DrIBku40r0Nl0vckF7oy51aQod3eYCI8h4hKGjaiP5ydP7Uf7V34rL1Q1Ggd6arH4L/kSobq+Gr3BxGWX0k6k79DxZBJzKv7UxNoI4ds7SV4Z9w/qnk7eMpsv+sqflM4I4zbixq5aNI1H2m0Vci0c71YnHqeoqdl+abfK6MiXMfErQzRjGIkFcZ7g2BatsvfkkHM7dZrNgkIFZ616Oz2YyiInMHncqujrwlMV61WT+kOXzzAhAg7BFLReKMrVo3amHp6j/R8l4hkOzBWKwWkQWpQQnPBysRq41rZVVL9/DTCgPvZLmxaDEf32E3n50/y0bWfTgN13bY0gX/tMwXuKoVs9/RxWAScQdRXAvRxf2LC8Iq9gMHTxq7wVQx/s61Ddpw2ZDsHtsaOSl3yFugt8WnNXDlQuRHT/BuQ4u++X0td3fmBoeMnW2DumwznGrfZFHCLmQ7iAgRHwUjE+QW3mchgN5156x52gzOGLDAJOyq5kqHsVOaL/JdFLJ4WjIbpqIckky+5S1eKQ6uUv+o025br0y8afXD0Cn6WCZklVW5GcRWeH+AkQHzo1oafSeDlqG4viIztwEANa71GTPyProfiMVwJ+9bvjVmQIyIt9uzI1QQu12dHQGGg/6WS6o20s9/edv/B74vT2BFkCANagMYEQvu1r4c6tYqPWu8unyuJ4pxC//gbLP32gfZRRamsnzxWvDQbxF0Trt1aD5FBocYod74sK9YXmI3hQ3AcAAOei29Du8+mV/SMt1RsHTLHKdRQcLtK3glirHpqxVJqViv2t8qyMHZxK5YSQj6dsSS21wn+tEM/w12oP9mFkkJRs8/+F+LEmY7b9cl991L47CnZeeHl/2GaSJOEzUSWAApBdMDruUoAzWK2QyA0cY6cjbkN3KjC/4lbna67wcxcjgl3qH9ZvzpNLjPJqbrmdTrLJcBiOvCLMHIVBnWMiHes2ipTg4YVUPmJ66s8NaPv0ynnP7VlehoGMPjeMfvD96AmF2LjWDmvkWZSeN6UbHacVqGgc55xp7GXVL5e9HKOHv30IAz0HOpnotJAjZILdiG8Hbv8wJua+CK1CDeLPjhQHYYRfk6tldc4V65TOBiA3S8dHZbrCB00A4CagDMbJqraUq113+ev1K60VUriLENbGaNMcE5927yMUWJe7Yjckw2WRJ2TgCCE0VR/oLdnvIKbgHJiss1P1ffWD+0lOddQRvUOjtQ8FSU/2FY6Bs2iq/43NEahbxc4oGqSRZfr8ujQUPxJn9sG5ua2kIpIEjG9cvDTM7ACMxpRVS6ZfhwQtESGKanRfA+SnF7Y5jkqvIUFEbXZrx5ANDVAb+8qVVr4LgIEAjZxEt+NeI87yUQo2TM/XprI8nB3u9pEld5DthiaBO6zAJo6Nx77nA83K0fwgCoc5c3xZmat6sWGMddj2iJ1aRJYCZkHvgCmgrUl9xltrw7zRG';const _IH='c005d143571fdaf8b743604037b57e5512ea5638005d4b91251a64c095a375a6';let _src;

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
