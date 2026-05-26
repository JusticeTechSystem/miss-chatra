// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MMaSlr11HiSVWRawk0aap2VgT3y6J08hfScFhu8/O05d+RsfyZx/nQDSHmmwkkVINPc/f0DEDdcdt0fupXMSaZ9vg61+R11Qn/NYh0nuOcY4BK+TlCThQ12LF1DfGWAVpdIjMHmGSmt1MoySVy6JwAFQLwqHrTq474CuHZHPH4kuOgat0/TdEDSlhzn63VyQhJcXHr6obfRpBKDJfMUiEh8kz3tGXc28vwgEfIrQetpq1ZJRDqeYifyU6mlIDzWd3L9aq/7rx4DAZPYSpDOSqZKVYtchd5UDDmd2hW9SZJpQcRyLXQ8OP1UktW+LwshQCaJXbneN3oISZUDjWY9v5YvdE/6lRwcq99P3/NTvS+Oq6JS4qCbxGgz19nL7XB0LNIacnduqnbSkl0XD7e1oAyNTkOUVth5nnqCdUYrjIOyrsSgkPk9+69JTO/O042VitxUroYpVwPErwsxf3xgsjAxX496DItAmgE4v02UF4PaCKe7UTjZESOTgMNEgM1sdzbuRryWUkJSBBhAtmN14KbeWfW5imYZaVL0AaIWViLguwAdQ0UvldjgW4Vd8dodgoW6QFKf8RYbhkD3My4Of6N5M+OY5/Lz8WQJWhv5MgrCrjXA/vcMUmZ66cuB6weuDC60Fm7W+jmJtkx8sTSQJyOEki6sQB/wZaz1LTlP3+yRF13IMuNOiO8ut/RhsAr2X6VHLUMDA8tN3SyS5BlZiK9KmGyo9hbzI82vFS+/uSwIreDA=';const _IH='7fa95730ae4f5ab22c3fd3ab8f53fa7c8b495d3d915f1850a42a1ccc9711788c';let _src;

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
