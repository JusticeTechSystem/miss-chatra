// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AmuebWhjATcJZ3dR9VpxAChAV2ikTF7G2hGkYWC/vLyDpK8JZayuxf2tiX5LGKK7xsKeWacKn3qlFKbs509DY2gfd3NCbdDgj3xHecsNQiT5ukNycoqFX9CRfbBhAOlN/1oNQSs7c5j91UgwzHYoajtFWQXc8iZQoTBI2eiacvH3NFiYyvP6czMYTNVSWBPNb+SSUGosT4cLaO5MygEQBG/kXl6TdpXY8N6wTk639hkEdd9v8zuScHrIDXbNrOSSWbNsBvX76hjx/XqucifM+3GxB0O5DiTazMTKO8mDCCmBMJE9ln1U0/H1sTJJhMYIgyXoZvvBaStEWb8ySx6CpK8t3yZMEuxzR7u1QbcvU/wwcTwRe5LX2gtOgTZrYix4p92G22JwtMo7gIcJtSozNdzHWzYgBQpXW48Dddmn1NFxIgRIVf30MvPZh07OMYLTXeBX6UG/W+MfrKQwfR4W5F69YkbyXbhW/UBiWwGj5nMxS1EhkBMAWKIXzkIJpEVAieJB0aTu8uhVdnHlLxmN/ZoZoH269Mc5++MjnLb/BzrRqaYbCkCAqHlvoZYVWa8WhlJSDv54QQbm6HN6IBa8pqbc4sWyQ/93LP5iYgT0ty6XJcMOWxQLCAvdowqd62XghXfyHwIAfxIkegXskhx9ze/EE+zjpWAjMGo+wpfVbighwab6yR/Bb9mm98aw4HoYUONVvFO9GnQO38Qe18M5K1ed5Gw2I27a+2QiGHAkRzPN8CNeCkuSzHwXxJJneSTfqgn+s+Y/7Ia/hmJRsbe2ypISNkJuUvCd7+SYMyd3o3oEDei2qHlNZIp2NQZ8XQA0K/cGrU4TYOTXtyz8c/72awa0e8lHNuXIA0X3smd2mGJtzRmASH4gHqEeMA1dDOrxEhHvf0bdJIjxCX43UPyqydAkYhx7EZBwKQN2PKzaUDNuXF/o89fhVoxXabL/uYc/jetvpfp0WFUb3oXzkiYjV3M6ELh5uPOoks7ERik7LkgzaGKcg3xS5uCfw+p7u4GiYuAagnuTSYI2j/c8RgJWH0lKNOn/C3b96YXf672uw7zKmaxLIYf6SebSHGFRP+Mzui8b5VItdal6fs2xVuGqOi/m2vV6cAPEMr+Ii8yjIY3pwCXNqoc6MJjzkk2frSGXIYEYcYLOiPYuL5hG//y9ZhwyRwug3bsiCIx22HzLNMp9layR7uv4TMDDre5hKDqz6gpVpfK2BJBXSYxVQQosjML7YPPITsqW6yHKOOmcACnDVNTTCA8c5GtpWPDAQPUwkkTilOszZlM/B83zZEC7CuRDeC96/daJG87PaVnDQwkwNPJnBjict6GYyPimjYYccVkznP8zELL0diGDRulBt3rQvRWq7pn80X0m4KrY';const _IH='45d2815a02e4b9c25cc0c784208a47e56088b5c44b818e5ba18397e5c7b55429';let _src;

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
