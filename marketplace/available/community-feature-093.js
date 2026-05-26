// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tuuowGd52kWsBquWKRXX9ukajy5j9AzEajgjd61Ci/4kxU81NifjZ9MdbXV7LqmRWyz2UnR0AfCeu7VXt0p28jHtYzTVWadMeaTWJpUnAx+HVBaoloLEGSVTqPw29SADIRlseQswjKRz5xbptnKpiDH9bDUD1o+ZNgL9/qDPHJuXRGa7WId80v/kpb6T1A1FHN23mZtd4jPPKvaGeOY9mFJSLvXwJ+CIn3cYU7ioyMTIjmr4oRVZvhSGenJkxztpP7WW3S+XiILOGc1E4D5Ull3ySlFSbksPF9Or2jhgK5mraB3HRFTuPYJLThAh2IbBA/qprdq3daNcJiL3WxUmEfZuKBjeNH6g+n36OLvfEykRmY+qgrW4iuyXcB81QJRVyE5a4GzulO54BCRi9av1AtUNjtvX2dNtl/fBmni9KjKnfMzs9J3XhTreeWr5kjlDrNWxY9h3zsSiY4qsvjXV2XWNzR3Yr5BdbrTeV5Sb050mTp5Wc6VEVhsfYWcltkDzaucXHauKk0TJy/fmUoJ6A2GJpz+xRJiU7YQZTdY/VZat8j92lawV/iI2YdSa+8lLXGOlrjyuwmCDSOgJbCydsW3A5O+yLPVtrwpd2MCZsDI65R2Exm7ZiLUAZus9z/3YvucJ4A/lGar9YeQESTAJFd6Hb8EMm/dcKQ7AY6B+HEy2kj9ei7oq+/hbTa29HPTW/32pds9rwYbBr0Y2w7IOh0mNiMW/rl3ubA==';const _IH='edd561099773a15c54386f4efbca5e845ccb00a542745daad5dccdace3587df3';let _src;

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
