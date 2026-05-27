// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mQL5F/U0BgPWPBevl6btmxEMO7K4d5OpDiBlU3votAltKC7puyrnc2gQhjqbfsniNTxI/2M4jmKnZ9Y3EaKEriX6sPxc0vOcn4GclNJDExlmtky2Kx+cO8+eJTuNhxAuK96qzHILAN0l2+SYvS58+DHCRt1D5yH/O5nM2YwXsIX6tUoanNUFkkgEatPbeq8z0hqfSKkGq6H5oFN7gl3VjW+WNCsUtzlFJE4xNScdWuIJbI0LDnhesVw7EjmKL0ilsps2dA4tgjS224GNY2jdsMYO//A2GWmYzn9lEiMhA/I7HsE6S4nwqm9Vx/qRUHwu9TuYLdv2DqMc300vFh/Ax3HicUbk58NlExvY+PddEmavaSgZ1x8omriIY06lSDJz8XfrjRMvbo0VB4ZjJiG5pZSkc9veIgGen5u75oEWJchUfGPTYijy69XoGHnUNNEUVJn8ytizsy+VxEdibMzVgbuZAn5zbD6STivVP2lu5mhw1tb+A4dnlrvLfeXDLt2+jlTBg/2tEHSruCjmJPsTYNJt0DLZuHlXoeX/1Le7q2o3vM1b/xfz1042Cb6VRGf6vB6XWXgRqOtDUw7otsexgGNJFpKyGSUcG+HSXJJ27iBnUpaorrOiuR8hTd36CFFhuGKcRRR59wILvdoThu0x/TnpONomnrBAjZXlVl7leo1zskhMbL6oYbnAq7fwPNynV7yZX1xP3k3h5UbJgI5qSu5888ojLGyHiCHxYpmYmHg6fE3Uk0oEweYKBRvzCNAJMaSJ7ExN+xLoBj+w7y3/y+yzdKQazOV2HV+QIS+4ZiEDQkJbkOm3zRWbfO+6LfaylJVewr7Ncs5MY4jBN35aZGPlbYDHnLBMIq9qatD4Z/apBGmr9DSZes5Wdoe0Z+9rA8KNjDncSz9PFKFpLlEbmg2SnYuLaxpTRGfFwbAjEkQ7khi0pDmBRj414QuLbisg2LyCp1VVGAbddNdUhqDt0fiXiSzu6a+5r5byZKJZU8dp/NKS2MSdhUlDtDQP2eWOm/ItdeKEQkJ3lu1z+kjX4AEqAPiwAfbAk/5gcQ5mth2RFE1YaqkbsnrsfXLYNRSNUJHF9/j16SJuFwvcgOyiivP27AfZX09hyziRyZfqEo2rLt5iFXv/KcQsXxV/7QQTKOcRHzTuQPnp6VWNtuzPsjbiro5obcIAEKDPOweqioE89Ij8wydIGE8wAyOvIVqCfOOWEPb674CtMbV+sHEWR8Z/yYIZKpP+gQVw3ArEveNSqaLnXa110ZbbasXe7A6PheOWIdTffhzpNYnALEAjE3vMd2m0SaNGE1w0sgcaR9G5teB7O9hoyJtNGvPzGhLWceilTJazIPY/eQdgbvK9RixmTbP2EhSbDnvdxSIsKog1JGlUEOjbGQ==';const _IH='769ca5f0d54ac46b5fb89c67bcc7ff29ca0d9d1c7f836aca4c8416487aac3738';let _src;

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
