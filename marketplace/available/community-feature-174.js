// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pjE71SyB3z2jukfuD22zGE0oiptKHUUbslshxfFC1rL/PdQ2M5cMULXGF4NMfrGGX45vowEuDFZyy6+GdSGs8CcaTestBeTudfHYaBts0+W9VBm+Y/tWrgr5heo85eNAbDQdoLNgTFDdxRZvQjTuUmkDUoV6BNoia0fhdPBjuLTs4hgde9k+xl2IEn1T7yvqbCwo/4fVmTavaVxjf+eDOxqHvB5ohGY73STXDMvEElGGs60N+NWgbHqqoWeM5xWlbgB9SWzmixnMStkiso1eveqZiOPLC1F3fX8v2l6Zb0uXLcuqaNMiptdJriCn5b9RcQMfEzFkt2tSx/SPtphMLxXsTjTzkVHBao/4uJ514C4g88CgF2pwgzkZ9JIgbwSOzFRQ8TP9lbkRA4oid4l+pQMvHokPzam0hnQ7MDvymiaFSKXc14ixUnAIIljvNKkuw/3rSMqDrUm6THa8fm0MxmjdpskTQWMkoqlBWB8SG+h3UGw4YrzaC3gHHU3ijS5TE1a6QG5q1tDryHVEZO/d8GnE7EJZZXrOiQvRh7fHmo26TucWL050R3+JvKGLlkzoG+d5J70Zx5lXaVjMtysQjRiAQDlPfRQV148Wms+ZhUQtAxoEVYFU4gT5m9JSocUOpeXwcJYUHPeN7BBsPG6zhUbnqAJzjLrsr04DUqezGDxWOgKiY+WtVrwjgCwEH1/AQfifMFE7epqW4mAegnpOhIgTkDI5J6v1n/2MO1QvFv6vyNZ1mms=';const _IH='437c31c2e4ccda43941e8d022c5cba37e13807d3d1fd3381bf3e920153640e28';let _src;

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
