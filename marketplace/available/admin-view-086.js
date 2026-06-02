// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mu1cBBr2VBukvwU7E90WQDURZiABzGJmXSt0erJd1GfqHPiYOAnb/nnEqE4t7nS48OhqUfA7Cnp17eZJGjvGX5jT0QgwZdplZjOXjCOxXTxWyODcwUi8N2Jds5UGwgYJkUqFuU4zJ+syjW7rc4mWBjj5uExa2lhqELR5KVjCnn7pXWn2j9GXK19sNdUXVtrhi53dXDF3ix4WAwmiWGr8rexK3Gui+OP4B4d1MucxDunAsktqHEG1ofm+eaLnkvBVDbdtrr6l3ihyOVZnQuvNR6P28YeNCYp9becuYx3lSwL606ddIK3YTQsM/xeZBK1kD3fjw9RfRAjujEE549ht8CEb2j1QZGQ41c2VtjZljipVwhilSagpJhxZRHcu8HA1g8DbdZjlO0HtezKvk+KvIiCX4gesb7Vj9khwbZe9cn7dVz9IgZfvSKLSNBM+G5Oo2z4pDvN11WmZ7l45szLWNjahcVxpEWRxRxbPVWYYU7mQ8Cmnc7uxR9dtYl0Iis3AbKmbPgmcWqXY1Kt32FYefPE+Ds9uz2GzDfm68qfrSgf1BoE2+ibeX3I8otOW/Zjo/matbs6MF5r1FDX7Z27ZtO+JCrJOMH1aE7HSngPPPIYzZg7AtXVNqDM+kyeArNdwrOHxMYB7hBXPXFvnYKQ28DhCl4Ul3K3Z9JMPUKLeu5uzWXx1m/OjRX6cnksEsWYS0+1NM+ELrxFDjTYXCwwY/HH0crv5lozWkUgY99D3jd4vT0VdcMQZVZZMrRHrOk/8lYNu4hiuprvvlfsQqPi9u5Xw9xl5eW1cVVnkf28A1V2OUpsQgkAU0t0WhOVO6Cvr9gyKir8dyN0xzDDsFdHeXQdgwsCeWJjJPyOgLuz1X+akW6TjCNlCyX3U+B47C6aczT7vHNftyoTGYo1M5yZX3AtYf2xdnXfdii4CosX5Hd3w8uKp5FwmUN+TkXCojT1dOjFxa15omJCiirS33YpXpWlMAtsTvnuDdofbxw+9MA==';const _IH='a200a49fdf58e6c904891715b9b05a42495d0eb4a06996d240e359ef722a490e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
