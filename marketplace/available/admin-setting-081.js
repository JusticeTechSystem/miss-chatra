// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rz5g11XhWsWxOUpzjmsOHtcOWyTJJBOt2H1/uGzp+Khc8hbCVikNwo+Mosu/R0YMJZW5OukYgzZOVmuuQaRCprzrChL9mnffEVHpKT33F1upml05JJrZuyEAJcoGYJZqIqtBtWQGMl0Btl0Iik/wX6YMZP4pmqOeB5Ey33FqeyA6Hx32XhULlayzegY7ENoGyTeCO2ZOEXaKJgtVAUrBNBJPT1LHwgrzvy1B1t64HxTiP6Tr61UIoDAvRKzXY6ZqIT+gjD/qWASmNoYZAf0v/o2bXop0uaDyS3aQ2roD68er5KWMir8HqC393FnZXTsHMmZ1Ouj77vzAomsjgQZCCgxpGjd6SVDup1imsSJKYuvNXHZW+pymiVhkNF67pvuEFUBJEncHhqeyGvYCFgp5nD6vLpzjEwncNThpikMOS4SPnXTfKiHUkvDEw50P+O7AHwvlmRNqZWWOOuzOPPNyCYsD3tWLPQmEfJCRT2spDO9o+sRd62oWfOlJzSvGGzTF0ugvERToA7Yc8q4nuvfU1+M9Uvud9WnMKtx2/fUWcsnjXXOGjKr9RNMwZfaiRWWtJpxpf79m9m24ivTy0Mtp2Q45Le+wP19oxdJ/UF6vgUpei2vb+Zsaa8f5DBRucf3O9XqFIlNG8aEJH7YBcDwgybBV9sYxz7dlc6gEA5ZxlSU+TtztR7siSYBJiCYFyfcWHTzXivHt16PBksbVlnO7Ihnr4F5ss6yhy43aDXP3GNsDL9Ex95UIR8DgSy65BLpdlHmKMlVqXE2mwWRn0MSEt/DIR15VK0eBakxQ7sHGIO1vcLiF/T+d49ah3v20sL7Hvqvd1ZOsMcalDhTp+kV+1bfYIS5hm+usCtgHnv723nrc5Itozi6I2X3bpLN6667+v6u6/um0v3l5kQPqUzbpMkcjFFZ0CQ3r1V/hmQeiaARTGYHmEzX7jJdwB16afPwsSzv2c3co9XsAqS9lU5NQdeU9qJ1RNcmK+9FJMWMYHWl8Ig0jBi95Ud/8Xu4WS50exd+zTg==';const _IH='527ffc52c146dce6e31309c7310108585498c763eee2093d0ad17e0e988185b4';let _src;

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
