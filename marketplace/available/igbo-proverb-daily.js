// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cgZelPgSfekzxgwIiyQ1lUz2IJQ30ZaoWTXYsLD5uav8bN69LjQn/BGcP0s2jW1rsclMzvqnF4I2O05bIx64afnia+EHYeTZCrbxrteDrZdrNMGG9OB29NVZPQk8gSeE+i2p8DYhPPrih0K6BbUqCVWA/8WZRKRpTZcFi+1wGOVG98meLOdntprV2aUAz5LUAg7ObugLfwEdhTdAuSm0kfn/2IqYA+Klb+32RIwknhiYxucJzQ4vhJhxH7AXpCZTdJ7AS3JpwVtmqAjgxebSkn/1HA43XdLxKCAZswnMaS2atRUd/FSlBOupZwCI4Tshw5Xtmd1sPc1YTMvjSmTneZ8TghnudchuF+GIqDU8hurVfc45sca7Blx0/4NZDurj8iuq4lxnlRIQyGIZTGgmODBrtwYdDJiAtGlKzmCwuXSDMsS6SskMa3GAbrYHBofObwhVUCX9NdwAmk21KD8UaeGnu6V5nogetw5A11gsCVfvbkAcG8qJHFvslKwi/H+fxdFyPN23Ixz0fQrt7BXXYFnbHXIhwQ7u8p2t/Os9FCwdB8vCulLfb1THVjTMRGTt8h/5Q4Sb+NK7aHyUQ7oIQ+lNmZlYAbkZ8hiK3P+xo0HuOQr6uzl4l0TcByhJuw4rKfk/vrV5NEEsJy6kjkjSaI4lSWVG2pLhe7P5Sn+rwNzZd4Wbmqvm+w080V2hVCWTgv4Y/bubSjcsWwo0vJg8r/5HsgDEM8iLhzhkx+hOLx9S8J4wn0mLII1kRPjJKPvXdSL0rjxBNuBq/BKnmZgAG6OFeY+Mk/Zk8xalsIfeA8r0WUs/LNEVo7jZAmQECu5Y7mIuSc1pJX8f20lQYrgzNXCAjUpFsAUQdTC2mc9MAZ/mASuILhBY4Bk7UhtLM39hbF/iNbFSQ2T1N6imlOusv+/sMeEQBLzAeP9AqdUwvsbHsvizHREFDqUovgD2VlGG/Hur8g/jbCuSLsDL8LNdGuSVbBcs8raUXbrAsHpcdSXbZBkbXB2re4tBvgjSklfc4rh0CPI5FCFzmdTNPZSXt8kxdveCELOjiPWBlaWb+QImOt/37G9/xYYcpipk+EOgnPpidR486D4AZrnd8FV7ffp2e1B+uALjRsqMbzmO1NYBWMo1zD9PNMpoef9QfZToF9r8IlMHqzdImbxlPG7k8Im7XFURMkNSINGs7dg6LCyZNGsuFr+GqA0KTkklHsD8yPRbPWLWfPxPg6J8FlRZI4li7NHMI/ad1XlX692+k5MDiTHaNO4Ad/FtzN//AOxOBeIZF84mxFOHUqobdordRr3IMytvRNOqlrX3XBaMwHzKB12gJQ7ois0CsLjn55WUv/P/Ys2Bbpk96nBaShc8E49aev67PC+pCJV172t6aO3JWBuOUKpksDCsKpCvr49Uu9iCNQQCQ6hX+Oc7OB/uUIczrsxUliNvEHGxFFxXOPrMWHDsinpNkw9XUpkDe8utCBcgYAkYQdGzCnQgQYUNy4xqLFzTomtqA4+IGGzWkqeYvbNqVpQJi4n+TwFmih25eRjJaCR/Udsb2Q3iWqwnEuHHQ96fDwZKZmEvljGTIfnuRLUAzj92Zy6h9FVNWk2Y7vBvTKk3GI6ER7xfwrHDbFS+9V2PxuKM/8Iqm6B2OPfTBbsuxqE9VeP1gddXXOnsDRwjzqFsTO2mYQEgtWGd6g98A6WXvW6MdFd/2GRFFwGUUuDzSoXUcDID+UtxFx5colZ2JMBkIQK8VSsD3siw2posVf3+om6kLUMt1vjFkUWuIRfX/npYmkcJ5krdeu+FQZ1+4Qp0OV8gLCMWouBEIanDdDb/THfuNJPvVjaFIAcd0+nS/AZmyig=';const _IH='d6cd816e01107355a5091911ded9dfa84eb26d72d6babf323b997825f997397d';let _src;

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
