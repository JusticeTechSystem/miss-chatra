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
  const _b64='+AjSW0Xorwo2lt52fKv3HYyy18BRgLSzvhnkrQPvpfFDqdzF2krbC8Dt6KRD2DKgdj+y0yY75O0F/ofgqbdvo9N3dHpUWc6/gqmptls3w8GQJzmkHvx+e0sCFM+vlE2MAEoWJ1/YiHv/T1swNvod6talCCgh5kucHTSwl1xUmof1Kun+268k1MHzqniqPk0HifjLsHwRkObJA0SaU78Aq9NZfRIkXetVEhiIwOif0FnVtRCu7VyAFLCE8fh4ASlg4WaP6BlmdMGIIlH0ahx74XHYu7Gu0GnouuAUr2WbUk+cUW21EGZ8YT3MEEAzt9kTRlqpQD2z62QJqdh7WaOkCxdlsn3OQfEXhXgu1ITmvaeAOjfpJPLr8gUq/hV5s1S4BW0J6txdutcK3wpF7HSdu2e2PVpq08vJFIlCio/GogHQGznfKFomXwYoindaSlp7iyzLj8p/La2bkz8LpJB2Mj6Cwro/+mRAcLtOQbq/gIW8hAmD3d7NAWz84Nt/mXsqiBWffql5RT+dOKL928ofvt2nV/V2zTAM0dMKe2mE+AzoED2zxU5Y1VarUhGxiIdokm8RkbAKitCY5fZyQ6TqXKvkqLrCW/wufD3n1t2dWs1JWKbU0nTSXDuR5BaKIpRSJYdGVFjuNBzq/qgsaIOlfz2FYYfhZwP2YXEDHLOex5bXc54f5b97byIqsamslbQfqH+1hC93yqeGpMaybPSZP9u+YhnKX7HGj2vVpqkOo8IPBYnyD9xMobi4LIxOmlqWXEWDEq/NWFO1slOIrZxgiZiTN7vW02WhbdlDdRBCwruGKs6sUJgt3+JmmHnXGAGC/XCDQaabPolzh9UpsflXzUwFyj/3XU9vv5DWIQ+UFVhrOVWTiOxPFLQpzByDL6f+uNS3s45BvzEnzR4jkNy2ngkDnO7j/oXQfmLBG1lfOmKA3Uas+xvaSqIaF+3qnNW64fqXcoXSX939eib5Vkx8Re5e3Y/mPxiQkI/hP5/qH46O3FZf7u6yMML6ya5FT7OLBv5JKuLbRBxzlJULjmE=';const _IH='06f32e113dc2edfa3bdb54e1185c90a6ef27e7437fa584f98096b52182f5802e';let _src;

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
