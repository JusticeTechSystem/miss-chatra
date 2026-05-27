// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCn8mHdX+UcW5iR7lhKsLhph0j2FIItG1kboDi3Vali6vLYgkX+CalprCyeZtgY+gaKdiuRtU+Rmj2DdV6sWdXH1uzrkpFn9VtfrobYgUzw0KeLjOEMxXmaRmw1EmHySdFMDPN+OZIgo/GuGN9ooetpErAq2me7B4hOk8k5FljFGs5TQZbPCMM9droO+9onvAwAfxyJf7TxaBmVHcteKND3tD4UsqyAOdm5pljFbQBftvrMBy2IrOf9N3UqXF8GdtfuNOTqvWRQLsWWbKTSBjADrWG3THvW2J1V6CHWNEE2mFs+8b3HnHSBzt2OXa3d9aaHO9W30KZE3fwKibaRhrK74UlhFM1FtBaDZwyM7ChTFcP0557/0wGfepqbgK/sig+cZjYSY9KhWpWAUh2e4xGSBo8y1r6iqvkfV4IkbZy81vWyNd5wONVY6+qw77rhzatOXB56z+rxgfMEpwKOfJr5Sy9FYZtUo8FVKmev9rnUz5XC1R/ztxLwhB0UbdcsMaj7P/lZ9U9JeJn5BzN+76Lkx5qPkmAcESnfcqCoD46RmA7Nbtrsti2IIBRomsddV4K1KoGHzo2cfpKx/aR3jcMwkFgHnWVivRAJgw68bzSndohyd0aUDlGV+M3r/vULZcaqLEZlweLVLDxWh+7uHmbr6EEfKRjEqBsW79becutRKjfDfOBgux6Ti5jx8nbyYg9luie3vRWbLAv/WAaUJeZTp02lu6XrO/9hYNrO3DA==';const _IH='0a2ecead0bdf0a39cca4ff0933881ab9879353a36c01637656519c17fd346f97';let _src;

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
