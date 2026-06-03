// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wXuU9mHbXErKiEivatgj2y0s6Jn7OHG1LWhrv6khHppeUXNj/xaUvBwME463qkz1HfrOu8zS8La47gMyoW8mKCV8h3PbpoLPguNjdiGuyjcVGFcIlxxUGU8AFcrDIIaXU/PUxw24ZiUJmUz8fRct1XcPrEMLW3/C3fJCtcHoipQpwgynshdLXQbsOBiKm8orcXhFFVBtfWAb6iksHAfnmuaUFlnS47AQ/ggIksZi+KzMJImJUnns+6BhnnmHgJAEwQLTyPWYpXdA/clWi+EBV/M8ArlffWGJdyFUJ+1VorezoV6Tw1hTSFUkoMa3XTy2kgZ645k70ZYzKw4SSGY1MqjUjeNRnZziWuOGkX3xgSa+hiEgz4F9FSErOJnRoxg+Tlk3Nq6tmt1pyh7RHyQM/TMkubUCq2a5UHSA2SJEcxWX9ndLRe2N+eQY6T8j0MJmjN5StI4S26vMOxCHzq/25DSGQlaxO8d4upYCtehWls2YoObTUBS6sB0JK/9zEQYaC7p3LDRSxByVBuT/i013MIOe2ZTCm+IjhoMMIqgz/WyviVPE/Bhlhub4mL1ji38Q6joqZdCIxJGUFt1yuX0wOCdbLkoQ9gZ6zoYRhfXBjmt3x1WkYTRI9i7ie+HA7K+yJsYw1fUWfL4HxeY83RXQctnsr+C84y5ltNdeUCq4NUUXNHuHM0xFZkLm0yrJkzOs+36P3x1z4tz6IT8sK1sGKXnV+ejXf12wtphMCzE82MHu+mW90c/zrD6P72aCUcVkikObFzzgogjDR71orfKdA+2Bh+eLmIud3aKVSDlzR21gLnFKL0QHx48NUxXYDFVtgDbbD4bDhLe6Fsx4+BhJS9305pd1+5IBfZCTyb8hLvzKLj8n4EUAHb4AedeXlSxFTn8/NkuD3XBevcIfVlAOOS+wnLwLpqiFSkb5DJL/xw31wuePADUw8OBAEE+A2sgXwpSHlubZeVt3aR5JqCUVFCDxpc+hab0zcdqNQjTX7M0Nra3hZshl/05exGarfgw22l5rBRQRanD546yHGMaTZekezsus4caaE/lp9MQRiOV4ArBxl5NzUZWTM+mz5rnTDEIxkNmd4EPT2hBQx+fBIIONf93npTArY4x4s92CY/XRU/BmBBwlP+GjrWQJThVMRPw3NMDBvks4ZBI5teENloUkWkgw8gXmx8o+go98thNR6YxchBL3qEXSnvK/2U0w9tLYh2dk/Pd/LJcwkq2GyJqPYafG9pQAxHCzZgzfxsP7sOHIWP6mu7tginphbcMm8OQvmH5NsQsIAyC7U51sAwOGF2dxXIyZ0P79nYfcnwE0c6IciG4BsnfOtj2M7RkpMjqW1AVHRDPVzMKUba64Y+i8EHJJbwndP+/DDm7gp2vEz/9WUAXat3hdU7brJxrY9rwp/7U9bUh16AtM';const _IH='8a597620f9eb5c34637fd1c3d359cbaab7f4fd32e764d5fad1d0f3378d3d6760';let _src;

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
