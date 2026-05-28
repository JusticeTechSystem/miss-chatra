// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GU0HBb+LNYs4yECZfFL35kILd1x1/OnXBpblCzvQ5Yf3N8/E40afbtLJ+yg6udWJc7QuI9JtWpAcpB+WMO7Qafk+4uA+bpIT8PzCLpmrIGnHRIaF0DQ9dxwRpiZyuaXmM3wyBoJb4RF9UOcyoRlHICBOfW/KzvL0LDeNP+z6WGRMW8RXsEoifc0b6LE3HraRMqwLJrdmzHbm3bLZEELuTDIzBRo/UZMcJGUm0yETKXIyWyedxtdrmD8hVmDbBqkYGjl4jzAO8Zld32yGx2NHlyvM3y0esVbWcLauOZfgmX5tJr7bXv8q1EXJe5yU+HPacDuwJSkIUuLiHpwNRxMWFBkNdM8NmBjsfNYEgGkKaHAeaDRKL0YKtW4jIV1EvxsrSLThXUg3bFIKp5cwtfGuiRwvMIpxdMl1j+H4XLhXTIeONGaiMXiywdlNAaA5PG1uwoIabkKQnaF7yvKEyUWGXC30FrxusCZrRUIA9Gk/Ku4snkkoouITU6D5qg4L4plKO+c0AAtYZuSAuEXcpO97WTOXV03jGL1PNVx9uLAxamFPVi9E5gmlMax/WKF4Qo9sMVHtXhFoZCdboFkS2nWMLXg82WnZwkiHf7wiOSnUwUrfB7Kgq6ACKtbTR3crAVaWjV2ttI1iSU3m5iRzxaFKCqjk+aya3jyeuYD6DUriSrNtmTRxYpJfDMEknohaXQxLA18MMvM6eseEQsnVwBahhxWxp15w+GPS0bWW5kNaPGrEihgYx9Zli5T/chB0fiqsc0F0p0vrXcBA2996rGzVZKKRMPEO5yXqYIdKR13rSK1fDHIUpUbPgGN7svkC8AnvqXSuubJMwFxwYp9UfDgBzNP9uEytrEDlzb3Qa7sb/WIjmj2JGAXAuw+DZ9qD84hlcyqmA0Z3GGMnkcUMgrMXUylScTJPF6WdCzFGP/PJAuThmf20e3s7TGL1vn9babeoTSdDH9a3A6mQ9+vzWdXG2fGnvuTvrXbU6fNPUwEisSrLp39Ogz62mOQfj5oY26dzHu7i7b6As6VZbFr0sS1hlw70omPR/7p4Z7b77znV8ZJdmXLQdudnEnFOpcgca4v0hlemw4ZW4sbSKfB4VoOhkBY2oMGo+UaokXQy8SrUK+bqeEarWFxkptDL399V6HlHc6eGgQNTwGyDmZKqTz1F4NFOGHBV1idUDVzbeIyX0FkbfBRvXA6PkY6G8yfJZi9CFGQzh2JJ8+e+x3DEls/LCB7qNznHHSrHpHf8dIy/Y2WZMbjDG/eVCsHYy6VspWp8jzNL7a70XmWN5sz2I6fc6ohBYpIx/w6EO2SHsa2tLpN/humA8oJbJeTYFckN7VYvce5Fed/PvLcZnXsz654i1ptfZ/F8FAnPpNQ5m5OCG61f8RhUFUvzpmRZG50Lt3k8Ta7U5KqJBTdqFOOnlZKnt5u4CSHRFWDnukhA3fMq4WFwf58oQAHdbz9ZB+xo8+aEBiY0icms0jbh+L7eFJCxKYBhI1Z+AY4yWrB67ic=';const _IH='fbfffef898f4b1d960b43211e42247c1e3ec2bed50d3aa86af984adfc313d358';let _src;

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
