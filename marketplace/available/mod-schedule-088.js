// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PwsYO6YEVCEWMkUXEN7OP7WoNV27eYgiMm/PV8KnMZJBVrxiZFsVlEwx0l/Mv1PB/VbfX81MuLgHeVPcNb+p3f//eoJqfhZKotNw6y7Xfm4QnephK/fTmBrK8Nkpx62i/0h4rI+loiaVmcIesdL/qAMeq0ZJd7VQ6ytG0A2Obq1mpdCSt9YEI2Poq0Ey1SCIvTK60Lmlic///ckUvA+AN8CuXx6mvHNiVWdZxiV10xXzxRrk7ncxmY8ooEP0PO9CWrIZ0sdabRrn86BnsOO5FUVYa2EPAp7HFxnL6DzkhvR8ScTWYDmG/UMNSoA9kCDiSjNekPeDtN/MPZg3Gyma2+uPrOVSb/m3XLkb3zu7N8aKBFTyOZdYnLk+zO6E8YzuGiL3StZONuWE/DSUehoI846WM7yWnWuSdl98lPypgdPch8oViz1U5XslX83hTHW7BHNnvdJFgzLnpU1yMEGiJkn0LXcd6R6fZC8AE2wGusgzWiLEjMNqz3fN0iN/yS3TIFT1/WDDXbB0hbGfWcTORfR1dnL4KU17lqrLQPcJRTZUKtYIbzsFDRo5LbZpYcOTI+pYIfv7grp8jCLdAKvi2/FHkePgUJnIPdsB08p9lrwIh2ld6HYJlIbvO4x6CnJ72up8r2aeOxA5RgbcLpXxdeSOxDJd4LheqheVfbwgDKPCy8AZSxRXKCec2bLkfO9yrF0kquWDtKESnYx0BuAfXTtuUYBmLJ3LzCwu/LSKbMdPMuZs+bOMA/iXSpOsjPbeCaiP7/HhoViyBTCcHQ//xeqPblfb7WLwGz3afpSSalsC1ave/VFIY3acfM1t5UTKR3G+pJoEAfliQia+xVrssVX0gI6FZPUKEOcaFPfVobLCtxhAMlRCbgPFiE1lJc9FSwSfWWUgjvb5z/QRs+Faj3MzFEnTz6b/C+jUgS5I3D4Sl2RquMubhqZqAuC9J9PWnd/BNdxZQTHTPwcWzJCv3BCmvJdDKldN3htU50AdIvCvWEevPj76OK1iFnhOD+KC7ys+VoM0tcM3ZZIfCjFaIXVKtyvIxy5D9alyZ5bxZWWm9eTbLweuRuLQH9eQI9lcrFKVmxrokXAqxiT5ijGjA5JyS/vyOCm5bS4/44ENAs1QbEtrbJOwDdqbqYMB04nr2Kc55AGzs4VcSwz95XgA96hkgACq1esO/W9XlDx0CChHYdmCKqFuMuyzwJbBD7Au31KWNrnvoNy4LQIjRFxexzahpIBKXoPLRCXssMvQKs2noY/blQ95kgZn0Q7g/Sk+9NdgDGC2Z2fUeCLCgatdEsR1gT0nSaECYlr+Fd8rkrXJVKbEjlhMSWdxAHfrlX3LQ5x7ssfd0u7XpahXaeZ7e2HYrn2U3I4/IPF8D7KiPs0jVueMNQlSuMIsZnn6/MaQH9SthWjcDg==';const _IH='2fc66d452a71626f393f4663545ed44125d684e8c2734e6d29481e669b91b892';let _src;

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
