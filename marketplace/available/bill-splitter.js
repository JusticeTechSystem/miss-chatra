// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/npg9rJL97D2jsDJSpRy5YLcuGVooQLyUNDMZgOX4w4OFzfGtMZF9+Srr60qDPdLaJ0zcMhJBkJBl+Q1/xmslxNlFheLsz7jzbK8JuZc09Y33JQzdXnt5U/hI6iWNGu0EdPzs7HfcmxZGFzviTq4y8S+6S3WQBYj+h+ztvmwc4mZIwgE6zyJ8OsAFAD67o3GNUmT89+rl/VSlxn2vvwalAPhlDoUsq1CzR+YcPiuMFr346LAnnP+TaVLCw5hnoaDvnkfLSDgjHhoYWfeeijIUpi+s2Ll2AYfVmcIYhV/GDquV8mScJI85NaJhXduH0gdoxh8vYzOuQliyfIBn86Dc/HxV1mBgyypD+YseKZdEihJXnRpc7lGWXEbnhFyd8ko3M32qnMeTVod2BZMo6CQ8+Snw8qYGZJqGFicm7+4Gjq19Kes6pCxpKH4+YkY8z5d7qJ9IDY5HXsOIJr0oYHoJVXvu+R9tyMHo/hHdU3AlRrE7U8+EKyMWZMZcfa2kj4uYEDJPcnLXYF0tPMtEQ5H73/gB8bLCn6rk5mKuRluV1v0yZURn2ctwmG9BSjGB5WDOZ+1SWVLD4MIL36nPwmHEvZg3F3dfY0aCDDYYJ3f5unhHIQg2vdCeZgOFqG0foITW46MrZrKVaRNYCNmN8x/3zwQfMXpe1LoaJ0XtL8DTMmISnYduibVPNr+1jW40Vv2JZMozmRtMIb/ayODfPY5zwCe0wHkeJveFOd81c8pz6R82wPjPM3+fC5ROliyuHrX7G9aOY6TvXBRyizp9qiEJP89BBAeYF3vSWS3+HzyBs/vantt1ghZkEGzHUiP1aBeaXRJ4JzoqE9fcIdltTPfNjNppNfkpsGaIxp1rM28FN8ImDRp/8yuYUgk5HwZSPsq1gOPvzff7/7Fpv79VOB3Gf/9+YZlbyWZKO7qgWZ5jeJ1M5h2hq1fMcsGXaZs6F7PbMnYtXyrSsuB17bbrOOZPfUeC4fsc4CjE7bT0Idr9DutVOP/4ByBTYUNM0TrMHkAEFV06LXhhXiZrG/SfmrUc60awTr4G6tTH8pF5HUBigFiK08COMuMASOqW3FJj+PYlSVxOyJ3ZPHW+2nUZmw4el7BRsEo6MCQndPHEZQ3Am9v7eK8TkTZJTvbrBYCPMi3tpNFzRaoUT7d1ru+kCYaioDMZi+dyUApQSqzMrPL6ENZJWtW2QaG2I3m45ccpgfloZqLsdQyCBBXuAHEFY7QnoJPwOznPoGRIGvWSO1Ehx2miQ2fF/4r0kTbEwkcq5d3VBiVohBwRlvhbEo3WWpVqcLN/w7Yi9u+rrHkTDwcKywRhyOTtLfMup9stbDjg4tR1rDk8CxVhoc7mvZ5N0VhoUqi/GJQc1mtaDBGaXlXKxCCEIa7m1A4g1Ckt0XiISGHShmXzteAQzqEHE91TADYIsqQsP0UYNVVje52lnPLazQPqHap2zzdPpWxxwA+eXHthZ4IEMmV59F48ztVEsuPUUuIHseitpXSe5q8INVEUVXkvq+HXLwm/sPHTHzG3lTZD9SthKa86jfgmcD0f9yDsOBIAkDJhXcRcwwq7DwWBnfubFj4CEiwwb7X1VBp9MRiQYzUY8WMbQtEVSFyKRk5iaqD8u8wT5E594/fN5OKZuWzMKM/LHcq5Q/Q5yhA8/qVDVWRTwnLX0rXMIBk4Lg5yivsT0V/pvQA2oKT8irHSq23rFYD1E7ZhRm0824SEDneMOw5kg==';const _IH='87bb71b36639b247eb4c177a82e985fe8bf7790eb112592c8bf2d447e056b718';let _src;

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
