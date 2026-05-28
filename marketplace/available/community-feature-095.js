// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FoKCyerc81X0+Ay1gF0v8CNQh9jJkvhjd9JU26ZTR39nHSYAS4xpxnRBY/1QtlruAydloJujWd7WG4TxBVd9a0CtpJHp6RSg5xUdAeiVu2wHjwjUfEogz2i/ePfHFC0MK+3Mdzl3D4y+rzQpm0hW216h6iCQMb2vwBc4ZPGOdc7ADUMgXWJLlPcCh1pDSaa/DOMqe0XHSZIIhDhbbfEC1ZHop1c5cQrGh868Wap36SB/xc6DnxcUeAK6gXr+0U+h82Q8++OK/1QYnLg8+A2a9T/r+gvX6MWYC7PQaxz5fHlT+mvGAqJ6zyFk7wp00xF2wITWDO4LMfcga1NXnmMNWijUSMz6nPuZuzkTfnLfi6ovOuCFaSmUQ3AID9C6/hqXWm6Z20kjzSgphE3ry7iLZHSS4HkmqPEmdabh/bpgHyZOXwEs55fYZUQIJQu73yjtRDAEi0wBhrZSpeeOW1CwApsipANcAR62SgXTKKvchpeYdZNtVUwSJWp71071iIHucUuYyGJTXFkRU+z0Emz6EFsrR/JXiOeajoFWzFUC32AgAVZ/LKz/SSvJfuzs7kp95epSlb6dxN7yhvIThStM0DnxVOupkivKqJqTTTKdStrq7v3P5d9sdERodj+gu1D5h5xLP/0zW4L4yKfR58WBQQIffqZL9j9D45IiYm67BRMV12jp+l4WKfh4786tLYJqkYe2LLBX6JAfMe1zXyfKnsrgEJ/k6tXRO1O29ioLzWrkIMY4MB4=';const _IH='d47c417b2b2ecdc525d6ac0c6ef1b918a8147701c63f61e7b13b21e806aa9414';let _src;

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
