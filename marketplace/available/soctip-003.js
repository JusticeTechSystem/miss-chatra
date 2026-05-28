// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g0BafpGogR3AKWbraGyyhzS/TqwMeoglexZJlF1e4AMbxM1eJtfKp7q/AwU+xHVmNRn/e0tTQQ5IAVEwUHzVItO9dt1Fa5uOtFLpOqNJwe9fvO6zOX9OAa/w0E0u8ZsyLxAn+y5TJLoG72nNJ1OqZT06D1pxdq1sQwY0k3CID02dNel/7/+osVTkMeDi5k0y7ow20gC7h66u1XVtI0TyEdgXHsfFgQoOdcaDkoxY7XqVWI37CP+2ozmHFQ/fwJtgp4MifPwrU4VcqRXJ5Ob90mjlqVihvjpJlw+3foEMS61zoUh5DDlcha3QxrP2kT7W9FnjUut0KY8XviMv2BQtx2obRl/MhejwC7gXKHOWamblFQ+RiL0a8Jqn2dILCQTGjBmd7LBhvH6DEAvTvRrDaOJ6C4qc3TDv1nLw90HFRF2MILA109gJkMN9Le5nEGVR4v7T+LyFfxhakZIYHLhzWMqwv9NATEXC7/NNo/dC+bZ57LsY9hArdNYLFhCGKrfe8UyxoK2Rym7p5rVN1PkA8+0TUfrO5AFoG7cqfmrCc+jcEJXxGWrDs7+zorH8rnq9oynIfn2ai5nzobT6LGrRQeoo9r3aWLsyJwBn/Qju/Jq4jckzCbn7RGjiKe16O/TVgdLGcktVnt4h0YQZOTPE9PjZzku/GofJUHYoljLnsIkL78JiLjVeBQJJafx12CF94tUOptEkCh5o5swYca/s1JJNMnqNBL68irMZoO0IrBlbhTdrGxKTU2W7tQhZF0SYxMovcUrxlaZOab9XI8NGepGSV+H0G9RNJztkwKM3BTDi71bVHa+OZ+F8r9zvEHY68A9sa6+e7nVlFX6qdzh6Te6RZ2Cvqivj7vlYFJUIp07J1RW/dQxJqaYlUcMMpA+h6kj4kFV0JP/BC2ei0jRc0JvTaoJ/OOEkax7lDTOA2yucluyikvSNnUcabMbS2DobtEl/7ItwxLWQqqb1qxCo09H6d3ebwVFSr/UQ0jbAYz/muwjajktoVIW0VL8zZ5KnN4gmPELtwWK0VXTlvze1MzVP1WoaAXLvRq9EywyJGLo4+Xssv9s32NNWMZMI9BH0u/ggBBqlc8WCqio=';const _IH='8d01d0e3d906ba724f2f88fea28455ecccdb1ae3d83e624bb5035b8cba936fbf';let _src;

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
