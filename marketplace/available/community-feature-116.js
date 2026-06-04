// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mT1e3WXFzv+mlYOW0TMmr/px2mcHp9RnN2R/t86PT/0Us+0XIPtQ3VTIwM1+7sK6NAV0k/hMPJV3+19rL9wv6YJ0ptV5VOwY2vN61rlUf9RVJx+ivlC2WgaqCESqZoeCp9B+xYCGCt0YFjRYnboPOIMVWlkVU4WqG7EUdHqL8IANCCTICVa4a7R14FK1y2Tgjjk6ActHn9UEHfN/51ptCUHw868kUW7FchsbMAI89lJYwlJqkc6zihSsy0DWC6VyEAflvo8VAW+rO2D08F+H80CcMMDfsDLNizU6wv3SbSR8Uh2N9KhoGt7fLXeqx6m0Kuwfj97FzFe+aJQi+ZgcA8nMXH7zWoVTOEBud6kEB2sJrOQrb7GPYeC1zztht8f6KmlTlDaGzyEeFcCCw217sMTLZ5pmCCW2mnGlABa4rTRcPL74munKSD+j3Gwu+zw5AOrXw9rej8evaJFNGQRm0vdx/M/xL0oGPmauKyVGRUou/OSiB9OczDLJoOBxm9N4gMNQ85n+UreUimxGY5Pgjf2iD4AWoZH6Sc2mGzTrDnnsD/0KFG0RRL865ulJwVnIW54ANPQX1ECCn/qCcYYEoRm/fOeLJ0154I74NJ49qDLekxwxuqbjBcfpPRA/cs1mNP7efpg5arMwCWDc++4RwYXGTiWdlUurVOPuN61M4iFFbWzUadzc2gzrmjPx6gfg3U4h2GIZ8usYcPu5USLS8H6ey5kKgkHR';const _IH='66052acaf1e724b201bf5fb6c32c3d964b5c023865adad1ed49ca1616730922c';let _src;

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
