// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ60unMGfpWImZpY78qFRdUkaxXZR9H9wezW5n8NV8p7lln/R9Se/06NElbTwDyG0LEhsJG1DkCRiQBclfOOcTIo0rMKxVTElAcf4Q8GUOmOexJXeCUNhWxUddDrBlfvAOZo+ZE7qyz8kRIxGkzpnhN4IuoBUUmwTNfZXFplIgc6wdpkW1ld4CQRA6rMeSjQFxa2BmRA9ygeea7UmCdChzqUqTY/AhewsPVGM230972ygIdZ26I0Am02tACCwMdZY+Pbq5bwM1KQkFjyGtxm2/Qp4t/onej6rYkiALgnZqfPnUaxOu6FcdJOEf4M0JnH7b/f9tEb3cGwk5esmB6ItDOFvBqAMkw3INlsA1eA39/7ZG42w3ZYuy6+szsaPDwNVLu1yAn7BxcOL6BCAZ8aWdWH5/vqK1lba1lZAvI4Qut/wXaXwWz2WKEbLaFnCgIbHQrWuMpJDDuSp8lVx4TWCVHZmds9NtyM7pXXdmVWxEieaYkTwNexJ1w6/Te8AiLz9+pVinPch9m6obXhNyKIF9d55+YuENy6DYoiFB9bOH6fovw43m4GvG7MwO62jHG37ALRpjgVdWUsd1rpe4vB4DnLx7iU1hRfQor1tjVmwIl+rNqUasq1kmUjapTwWf3Ujc56WKzLS04rK4wF6gsuGaoaPnB85auyjqyw0MuvrDMIR4fntXKF7YdB+mtexYoOkuEVzVfwH1EjiRxclCdr5wchzujQguTxb9qda3bgW1CRpXeTPj02VqG563cV6O1ZNCOOMyikGl8zetO6fixgdKV13hpKIbFi9+Y18J2eYTGmlFIFsybmj7y3Dva7mm0WtFMlwW/bRBdDkSecVdMP3HRwGPLFsRDqP75KOsjzmOjZalR66IV2Fo9INXBgtQ1OUnAsBdZp36eFyhIA7I/m1gyqU5dYVkCw3UKqT1d3yqrR0IZv9Zt/sB490Mh8vr/WK43lXoU/RlPR5dNkPMnhi8BSDq/Y00rlAgRQz1IJX/DD+OWh7uF/JAkva2ZX/RgFUpr4LIjkPW2GEeWf+FdgVn+lG7qZn5vPSz7ChoD2qHJl6aYkyeOr6wyJs4XJmW78UocwnsHBh4vx3Eo8Ej9Q08aJ7b7tbjGvnXmEMmlnVDFc9fOKzJ10JUedCoiJ2URxRNT5ju3vTcxa+IzB8tvn4N++pZOqOwcgVxrqD7o6syb0W1pnsm7dakb7nSiF50sK1Aq/30W8iiA2VSo6kaWBHvENlDuGXTr4cFgke7MaVLKZsr2d2bYwYcgEIhmW4lOUgqOfstX/Nenrdi5AqceWMB7LvM4i5eK9cGy3nwORGge2LC4+0s/VABwYh0bucXAsxflNsLl5n6VBPoG8YL6nmaKxAuBA3kW+IM6wrjTJ8ACCpNX5bp/d/fBQ=';const _IH='69c5f16e412963746f6dde5d1e2d289791b30e5c478623ae8c140443d4264d39';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
