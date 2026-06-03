// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K+O4BaDfCnKr3E1lURXng7dBSuSrYBm6KvS8e20qrTXN8bonPkgdOGBSHZSh7s0BDByrQCdc64LM3Qq3KyRkQev2G7TNzfgJ3B39F7O0+SwCfJZA7jFIJgEvtXk/MeQPUywrVdArsUxM+2FE3pDSnxaAHjVRfJaGgz3MreCjZtlE+pb4Smmg1szUQblMzRpy20wTmY+OEv+UCy6RVm3a/eDq7ajubKsPwJGMu+vZ9FKjfaNmVKQ1jU+poat+NPPCYIsbN25knFGuorjIgE21ER9EI/fhyHtdFTs4meb3Px6tplMk4MCFnhBThoBKu0Lgf+9Gl4IXqhKHftv9umGUvdP51AqLJHBhae7BkCud9HKZB/Edm6Y/7qtD/vk5OE8V97Na+0zVWghiPO4hBvU18J3U54r9SYBUK7L8YMP0JZINeRdlAFHqoNefezq12zScXwo5v3ooBNkV2tbHWDkIDABRY5nAJ3BTdDLnq5//WruS92OCxvzN/9God6c8F/Hv+pWXhEqCYJGexqOKqs0vFILxfSZHbetlk+sWYlAeTREG4E5vJsinDcLpFQ+huQViRQbYCOAE6lYDanm3IXY5nq5V5j0teI6RXQT/9XloG6r65a1ixBJo8nM3KoIDovqg8X4nn77rWIUZOeCJmsaEMW/IOtFk8FaJBHsnkjgwEdhISJdf0MSQmFcvu5+TFkUZTWnAWpOZm0YfGxRVPEU0vVWcx7b7tnp62ocXJJc/51WYscQqvDw1seQYoD7KnUo1fxCARhGCOUbkaYCFX4n3VyV2ORt3C+ijUgaMv/e+YKoslPGxyZp7FxHN8zfnB1ajpjGZoQpar17A33tU/qhQ1wmh4l/ezK5+D3NBmliEtZWm8i1kmXeEK7J17u8y3g77bBRbqu0BdxtAMDnBU5jG6xmCMN0couHCAbbcydJt6seZww1y4b3QuQA0zZtFG77FuBjUScKujBId4MB4HZEcosY5oLR1O020HgflJVWUhoESfSGgIflpARRVnPjk254dfHTLegTaWqfXvKxi6s0OZSVncas4ZJ7kmMMjJMrz38B5n0iEUGruz23rxYo2xmFEzFPM2BG3t9jJrY2BXqjdjy43Xwl4RoG2lVnOPtmlkxz/wagoML56pdLIfIjDMcpPN9hZVIBroB2RTyWQMkyLgWBdNyyGEoyf4QCtpVOeLvwKOWgn6dJQuTdPOkMqNQz8p3YFyxVc51nI/CCkuK7BCGD7WaF+/Ym4JGs+qxsPT6scFxPrzUZ77hhnVj0V409SxblCHXH18PCLYe43UsOyfGlkdh6nvo2obn6QNCS/1X7b7pzMWNF2UpS4+nFJHvPZLyg/tSfdXzwKFDy4VnlbsS4nwtThMQg6abVMKRpY';const _IH='fac55885c2b7117cac54c67b11508b0239cf078702673cf855def37d107649df';let _src;

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
