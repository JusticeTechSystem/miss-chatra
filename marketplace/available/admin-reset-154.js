// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NOLB00glCwTBpmC/bFNEvXV73yWcKeb2OvVJo+17jD3mXv8ZQveLVvvmnbAu1Cn8OepLr8XmC7Fb3YskfWFxprFo3kU1Sgwhdd3lkMP+tBx0o/KH8EQdOVoBUbC6yqW/Sj+H9Owkj/AUquuHkEPCAioHT6MLLEZNaJddGhazUfZD3iTbTHNfgu5mw4O+8oHYNXmInEQxHM3P5QJzVOz543X+Jt1qmYnhZfxtkyvQBBvWSWmubEP3KWcWaJtBXDnUzBwg6Pehvmlk6wvBhj2myuHdMVSsf2pqw+A8yVhjlanbs5N7gTvvx28sRLnHdTUFOrU2WFqXv3iKJcEM9oL2+zXHHAqmiu/w7HlF8diri4nOeZjhAFsjd891g7SEiiRljWcdl8YMmikSIBjXiS8YZu1uSySqDhPvC5nbP3ShZCfoDjzP+ceyxzbXi//oqautGdeYdgxTk/aHmlp1otru0I0NiUmoZHanTJvMh80+2Qr6kqusE/SesnfcCTfyswluRu6W5Cky/2yQr2emXYR9Pnp7bY/Si5SIxJObEmZYHlaJVGfLfpJYdiQwlbjYjOHr1GDWncdcd35aOTi/wrkj9hxVBi8StzLoxtnhOYNKE7ffVBXA/49QG3s7BN/rCwPQK/ax/d0mjPT5CIAE1unTJMlD/GbHrJwAx0RfpdSk2E/j7bN1qW7WvJx9sk4XM3dHysp9axazsjmFuUkyWO8mw7lIBG7Nkq5I0L1D/LoNsNLPee7oXVyaS4O3UQh+BBXzvbBixrhx95tHsiwlLX/7AQOMnKX00JJcWKDXmc7ujs1M1qkSmNhoMUbJ+JZjciaHHc+z7BRNrFmQk/aDnxKmdibYV4p78SBBofZzTHIDtTyd5rdf8OKy6GW9m/6qq22cBnR3TWplPlrphWEFyNjQ/g3gHjlGx8e1nh2H2yPpEB53V6EGq80pjOn8a3oprOKgw+vhFgHLnS84oWwJPzdsF0qtJmf2mTj8pw1MC5p+Ca70n/cB4vGrDEHQ';const _IH='c6d7768cc154d78c2bc3a0b47f0fcce5a2f709e3cbbc565fe4c65b8352cc2d7a';let _src;

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
