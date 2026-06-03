// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NuFvJvJ41reZ7aK62U3499VUkU/IhTK3vd5ub2b0wZXek2zUgr7ogLuvIqymZbqaJ6yfyTNLYjpMFPL1opWR0zZ0Wwi518t/IWe84FBFSwBkpTbVGxGS81UECnI4lGya1uwUK1cpxq/Vnofq2RJO8efF+1A0gJoAW4xeM3HQMDs51PFkoPWr7mk8vrTi+N9h1kY2jRDE50UTKJ8GVl4LqAMY/4ox6LvmzUJdB3SD0DFzd8qtXjlKE3oFgkZhEiCq8XLbq71SouiZJq3QG0UJHkypmkOBYl8VejcXDCYlcO8sWqI0Qs4COLBsqM6INaFz9KOAsVlsQJysyHimbbTLvZYlhy3gSKwibpXe7zs+XgCs1kJKzYyTUhzjPCZKmSza9r39EilaiK1lX4tAtTYmBMix71CC8a3PjFwsYxw+9SJ5QiFfC4/LG/yX0jLvPZrPvZVkFV6S/nFIX9eq6jTahk7+Er3WExqrfiG8uEmpqk68PznnKetXcFJRDn24M0hYs7gFHLK1oqm9dL/ZBUf458xjroA3D465in4dbTEQa6V2CEShN7LxcgmFTfAWa4KmkMg0ybchTplj5OMWiF+u1KYMSw8Xxk4gjFmnlnzuyl+hfhbmfvZgs6pfNG94NZ5KQYoN8D9/ACAaAC/whX0JKUC6liwLTCf83BoBm+TL44KA7H7SGXBRRpdZOOY/Kc+W4TS0q9oNOVTuzAhaRnSX8B6P059XIyk9rg/I33BdWp6FpKM9LVzfQXuLgZPjERIiNjN7UNhR9VEh52WZ1U3/1rCFv6cfj3Y2zDvZTT8K2eqgKZbirrwDhbuhwzQS+o3wdS5EkKnSsY7PsIh8JGF0LDTIHcAAFsL2O5OdqJ9yfbSIi3lfJ12H+DRp3cK+rUJ0I0cGV3v7m/8SpHrpduw90PiDh0IKa2Yix6UJV3EgWUH/lmK8woX5ROAEOfXV08Wt0xj/VEUttArEZMa7caUAjuMS1nAO5nu9BmiTwcCDPEb1rlrBsXLmBuKKsfkLPNy43EnB0J/ooaW5qlr1e2yKcxrK06s//Vd2OfnGJV2Zav60ZOXJjQmc5BC4wbBcNVa9D/BfwC8MkxmooNxyLOImdx91LkBUbae6Xh1cRTh/aCbCfFTdmeUJxkQAeKF8cRw1wYvcQ23mZ3XjBbme7pMdSq1igEB2HfXVeYLTGMDtkR1u5fQy4Hl6lfd1cG4lVXNBFUL75PNznJ40dcQ7wp79w13BPQQTrbxD+4IlS8N8jlrxEnYribk0qtwQLPS6IDcC/7DRvQeMGUEBlPtXAOdDHJIl+2unykoxWjfoOQBinIKcmx1kAuyGgEMuYTxGw8Dfk9MZcaB5d2Q6ykfgCMh8J9oe1YlhCwjaPF3JE02sIlJVQKSTvoXcUw==';const _IH='11ecf7beff18b980d8dea8af9d3a1e0b095a6dbb4450d434759baaad44903012';let _src;

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
