// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DdUN42Q7YW3OQPmTX6cx6jZv4HJqg9JeZbSRYZByKY4Yl3BMmvzuiZfJ9gTiFYbIgGEgZfPtoYxRztCPctP91lK5qp1dtmaS0a6A5SpFqVYi3BKb9X4uVqz8rFDOfH+SgA7VgfymOpb0DVAdI3qFPSANMD9SI69jXzSGuQiNsD1WrjVquaGDPGMI3ctrtJ6+iSyhjd2o7+F19pJ/3zfrKiJn7qF0kSovcI2EJE7wkhH2i5cuz1mjP56MDZYSZq1f8HEl8pNQdB34pvR0Bbuc/tmc6/TUSyZj+8L92RUTXQwUyx/ATE/Z6lqHuBSX1Ge/6Jh5NIP7u55wqx/ib9EBpwp74H2zJQonRondNLIyzxfL8rFwRPIbkZ7c/QZKpZzI/GIpkfe4XeOI+dumn5I/wnHPmu99Wnp091yQHbyeA/pRsjnsAmJTdlkIz6NJiul5JLt2plXYbFVcJSV/SGks1ppwuXxGftu+faeYomNC481pVjWUY2b3fISdnQadacHd7rmuKJlggLaGnfza6YSq5WeYeXdxjMbfJN0bg3gCH9I9kpUs0IYN+E3Gu5UWLRPrL1Gftjg3PCQ7ig6Pc2CkmXaxyXfGjeJQpz62kX74y9p4jRP5IFyPvP7LOXnCRusRXaTFaC23rinoYWqZZfxmn3CDxWBrF+a8npP6wDeYqecUQu5IuUO0UffSdBkhqLbDghAmoIwFsLgQwV8LqXsXK2uQrXqXKmwLvCfjmWerLeIrk0T4LQ/lbrw65cCtkKKV53Ou93Zc8nwfgYFuL+P8VmNvDO+NGNjyAIa9Ai7gZGOS1Lt0Yg3Y5oa8xHjZiOBTFn6lQ3IopdyOagWR+deT3f7CZzn5+9f7c3frRGW/Jy/5TdPV04eB6Z9McCyjWIqa20vygwOWipStlmCM9vQRA6Eexof3i19W4y/7HbmaU/eu2MLqskOdQ9ISTR9+gDyrm426BjO7AhIu7CXly0JhOwVqAWR5yPOGSpCFZJhiZdp1Z0U48nJXyoY4HTjdq8pV59izvZdoK1yKJj6rU9rmx3TxplvKsZs71LYDozFqV3M44de2jvE39g4sSVn/dXZg8/8U0K+qamAbmvm767XoXrBx5G7FTWOuBTALn+8uhmfGr6M63JpjWEUKDmChLi2RkJk0i7/+4sx65bRHRGI1Bj4uqk4Ry/8/xcApCIcw1qfPY+UOZzGjpIL+Z+LmuY0WlIW4k+pgEKRwQBGne4+Ztfen1d1DiNIDI9yUTKLGrNF3tZNcRipAtYKkTjPKRIA7/UTItexj3iU4LcxgI0ypSLADnf+iRThTU1sd5bmIB/6PYNREKkpCLLCLTZHvkQUrcN37W3FxNAQnAA==';const _IH='3cb134f39f14c5809cb6c45469a29b458388ecc1f7218b1132f4948efd087a73';let _src;

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
